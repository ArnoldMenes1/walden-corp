#!/usr/bin/env tsx
/**
 * validate-docs.ts
 *
 * Valide les documents du dépôt walden-corp :
 *   - frontmatter YAML obligatoire
 *   - champs requis (title, description, version, status, owner, last_updated)
 *   - conformité au naming (kebab-case)
 *   - liens internes valides
 *   - absence de TODO bloquants
 *
 * Usage :
 *   npx tsx scripts/validate-docs.ts
 *   npx tsx scripts/validate-docs.ts --strict
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import matter from 'gray-matter';
import chalk from 'chalk';

interface ValidationError {
  file: string;
  rule: string;
  message: string;
  severity: 'error' | 'warning';
}

const ROOT = process.cwd();
const REQUIRED_FIELDS = [
  'title',
  'description',
  'version',
  'status',
  'owner',
  'last_updated',
];
const VALID_STATUS = ['draft', 'review', 'approved', 'deprecated'];
const SEARCH_GLOBS = [
  'foundation/**/*.md',
  'knowledge/**/*.md',
  'policies/**/*.md',
  'decisions/**/*.md',
];
const IGNORE_PATTERNS = [
  '**/README.md',
  '**/template.md',
  '**/.gitkeep',
  '**/archive/**',
];

const STRICT = process.argv.includes('--strict');

async function main() {
  console.log(chalk.blue('ℹ'), 'Validation des documents…\n');

  const files = await fg(SEARCH_GLOBS, {
    cwd: ROOT,
    ignore: IGNORE_PATTERNS,
    absolute: false,
  });

  console.log(chalk.blue('ℹ'), `${files.length} fichier(s) à valider.\n`);

  const errors: ValidationError[] = [];

  for (const file of files) {
    const absolute = path.join(ROOT, file);
    const raw = await fs.readFile(absolute, 'utf-8');
    const parsed = matter(raw);

    errors.push(...validateFrontmatter(file, parsed.data));
    errors.push(...validateNaming(file));
    errors.push(...validateContent(file, parsed.content));
    errors.push(...await validateInternalLinks(file, parsed.content));
  }

  const hardErrors = errors.filter((e) => e.severity === 'error');
  const warnings = errors.filter((e) => e.severity === 'warning');

  if (errors.length === 0) {
    console.log(chalk.green('✓'), 'Aucune erreur détectée.\n');
    process.exit(0);
  }

  for (const err of errors) {
    const prefix =
      err.severity === 'error'
        ? chalk.red('✗')
        : chalk.yellow('⚠');
    console.log(`${prefix} ${chalk.gray(err.file)}`);
    console.log(`   ${chalk.gray(`[${err.rule}]`)} ${err.message}\n`);
  }

  console.log('');
  console.log(
    `${chalk.red(`${hardErrors.length} erreur(s)`)} · ${chalk.yellow(`${warnings.length} avertissement(s)`)}`
  );

  if (hardErrors.length > 0 || (STRICT && warnings.length > 0)) {
    process.exit(1);
  }
}

function validateFrontmatter(
  file: string,
  data: Record<string, unknown>
): ValidationError[] {
  const errors: ValidationError[] = [];

  if (Object.keys(data).length === 0) {
    errors.push({
      file,
      rule: 'frontmatter-missing',
      message: 'Aucun frontmatter YAML détecté.',
      severity: 'error',
    });
    return errors;
  }

  for (const field of REQUIRED_FIELDS) {
    if (!(field in data) || data[field] === undefined || data[field] === null) {
      errors.push({
        file,
        rule: 'frontmatter-field-missing',
        message: `Champ obligatoire manquant : "${field}".`,
        severity: 'error',
      });
    }
  }

  if (data.status && !VALID_STATUS.includes(String(data.status))) {
    errors.push({
      file,
      rule: 'frontmatter-invalid-status',
      message: `Statut invalide : "${data.status}". Valeurs autorisées : ${VALID_STATUS.join(', ')}.`,
      severity: 'error',
    });
  }

  if (
    data.last_updated &&
    !/^\d{4}-\d{2}-\d{2}$/.test(String(data.last_updated))
  ) {
    errors.push({
      file,
      rule: 'frontmatter-invalid-date',
      message: `Format de date invalide : "${data.last_updated}". Format attendu : YYYY-MM-DD.`,
      severity: 'error',
    });
  }

  return errors;
}

function validateNaming(file: string): ValidationError[] {
  const errors: ValidationError[] = [];
  const basename = path.basename(file, '.md');

  if (!/^[a-z0-9-]+$/.test(basename)) {
    errors.push({
      file,
      rule: 'naming-non-kebab',
      message: `Le nom de fichier doit être en kebab-case : "${basename}".`,
      severity: 'error',
    });
  }

  return errors;
}

function validateContent(file: string, content: string): ValidationError[] {
  const errors: ValidationError[] = [];

  if (/\[TODO\]/i.test(content) || /\[À compléter\]/i.test(content)) {
    errors.push({
      file,
      rule: 'content-placeholder',
      message: 'Contenu marqué [TODO] ou [À compléter] détecté.',
      severity: 'warning',
    });
  }

  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.length > 240) {
      errors.push({
        file,
        rule: 'content-long-line',
        message: `Ligne trop longue (${line.length} caractères) à la ligne ${idx + 1}.`,
        severity: 'warning',
      });
    }
  });

  if (content.trim().split(/\s+/).length < 50) {
    errors.push({
      file,
      rule: 'content-too-short',
      message: 'Contenu trop court (< 50 mots).',
      severity: 'warning',
    });
  }

  return errors;
}

async function validateInternalLinks(
  file: string,
  content: string
): Promise<ValidationError[]> {
  const errors: ValidationError[] = [];
  const regex = /\]\((\.\.?\/[^)]+\.md[^)]*)\)/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    const linkPath = match[1].split('#')[0];
    const resolved = path.resolve(path.dirname(file), linkPath);
    const absolute = path.resolve(ROOT, resolved);

    try {
      await fs.access(absolute);
    } catch {
      errors.push({
        file,
        rule: 'link-broken',
        message: `Lien interne cassé : ${linkPath}`,
        severity: 'error',
      });
    }
  }

  return errors;
}

main().catch((err) => {
  console.error(chalk.red('✗'), 'Erreur :', err);
  process.exit(1);
});
