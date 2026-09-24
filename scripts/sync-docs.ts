#!/usr/bin/env tsx
/**
 * sync-docs.ts
 *
 * Synchronise les documents du dépôt `walden-corp` vers le site de documentation.
 * Copie les fichiers `.md` de `foundation/`, `knowledge/`, `policies/`, `decisions/`
 * vers `apps/docs-site/content/` en transformant les chemins.
 *
 * Usage :
 *   npx tsx scripts/sync-docs.ts
 *   npx tsx scripts/sync-docs.ts --dry-run
 *   npx tsx scripts/sync-docs.ts --clean
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import chalk from 'chalk';

const ROOT = process.cwd();
const SOURCE_GLOBS = [
  'foundation/**/*.md',
  'knowledge/**/*.md',
  'policies/**/*.md',
  'decisions/**/*.md',
];
const IGNORE = ['**/README.md', '**/template.md', '**/.gitkeep', '**/archive/**'];
const TARGET_ROOT = path.join(ROOT, 'apps', 'docs-site', 'content');

interface CliArgs {
  dryRun: boolean;
  clean: boolean;
}

function parseArgs(): CliArgs {
  return {
    dryRun: process.argv.includes('--dry-run'),
    clean: process.argv.includes('--clean'),
  };
}

async function main() {
  const args = parseArgs();

  console.log(chalk.blue('ℹ'), 'Synchronisation des documents vers le site…');
  if (args.dryRun) console.log(chalk.yellow('⚠'), 'Mode dry-run activé.\n');

  if (args.clean && !args.dryRun) {
    console.log(chalk.yellow('⚠'), `Nettoyage de ${path.relative(ROOT, TARGET_ROOT)}…`);
    await fs.rm(TARGET_ROOT, { recursive: true, force: true });
  }

  await fs.mkdir(TARGET_ROOT, { recursive: true });

  const files = await fg(SOURCE_GLOBS, { cwd: ROOT, ignore: IGNORE, absolute: false });
  console.log(chalk.blue('ℹ'), `${files.length} fichier(s) à synchroniser.\n`);

  let copied = 0;
  let skipped = 0;

  for (const file of files) {
    const source = path.join(ROOT, file);
    const targetRel = transformPath(file);
    const target = path.join(TARGET_ROOT, targetRel);

    const targetExists = await fileExists(target);
    if (targetExists) {
      const sourceStat = await fs.stat(source);
      const targetStat = await fs.stat(target);
      if (sourceStat.mtimeMs <= targetStat.mtimeMs) {
        skipped++;
        continue;
      }
    }

    if (args.dryRun) {
      console.log(`  ${chalk.gray('→')} ${file} → ${path.relative(ROOT, target)}`);
      copied++;
      continue;
    }

    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.copyFile(source, target);
    copied++;
  }

  console.log('');
  console.log(chalk.green('✓'), `${copied} fichier(s) copié(s), ${skipped} ignoré(s).`);
}

function transformPath(file: string): string {
  // foundation/constitution/design-principles.md → principles/design-principles.mdx
  // foundation/standards/accessibility.md → foundations/accessibility.mdx
  // foundation/specifications/design-system/color.md → foundations/color.mdx
  // policies/security.md → resources/policies/security.mdx
  // decisions/adr/0001-example.md → resources/decisions/adr/0001-example.mdx

  const parts = file.replace(/\.md$/, '').split('/');

  if (parts[0] === 'foundation' && parts[1] === 'constitution') {
    return `principles/${parts.slice(2).join('/')}.mdx`;
  }
  if (parts[0] === 'foundation' && parts[1] === 'standards') {
    return `foundations/${parts.slice(2).join('/')}.mdx`;
  }
  if (parts[0] === 'foundation' && parts[1] === 'specifications') {
    const sub = parts.slice(3).join('/') || 'index';
    return `foundations/${sub}.mdx`;
  }
  if (parts[0] === 'foundation' && parts[1] === 'governance') {
    return `resources/governance/${parts.slice(2).join('/')}.mdx`;
  }
  if (parts[0] === 'foundation' && parts[1] === 'operations') {
    return `resources/operations/${parts.slice(2).join('/')}.mdx`;
  }
  if (parts[0] === 'foundation' && parts[1] === 'ai') {
    return `ai/${parts.slice(2).join('/')}.mdx`;
  }
  if (parts[0] === 'policies') {
    return `resources/policies/${parts.slice(1).join('/')}.mdx`;
  }
  if (parts[0] === 'decisions') {
    return `resources/decisions/${parts.slice(1).join('/')}.mdx`;
  }
  if (parts[0] === 'knowledge') {
    return `resources/knowledge/${parts.slice(1).join('/')}.mdx`;
  }

  return parts.join('/') + '.mdx';
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

main().catch((err) => {
  console.error(chalk.red('✗'), 'Erreur :', err);
  process.exit(1);
});
