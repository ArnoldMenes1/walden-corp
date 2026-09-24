#!/usr/bin/env tsx
/**
 * build-search-index.ts
 *
 * Construit un index de recherche JSON à partir des documents.
 * Format compatible avec Orama, Meilisearch, ou Lunr.
 *
 * Usage :
 *   npx tsx scripts/build-search-index.ts
 *   npx tsx scripts/build-search-index.ts --out=apps/docs-site/public/search-index.json
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import matter from 'gray-matter';
import chalk from 'chalk';

interface SearchDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
  content: string;
  tags: string[];
  owner: string;
  version: string;
  last_updated: string;
}

const ROOT = process.cwd();
const DEFAULT_OUT = path.join(ROOT, 'meta', 'search-index.json');

const GLOBS = [
  'foundation/**/*.md',
  'knowledge/**/*.md',
  'policies/**/*.md',
  'decisions/**/*.md',
];

const IGNORE = ['**/README.md', '**/template.md', '**/.gitkeep'];

function parseArgs(): { out: string } {
  const outArg = process.argv.find((a) => a.startsWith('--out='));
  return { out: outArg ? path.resolve(outArg.slice(6)) : DEFAULT_OUT };
}

async function main() {
  const { out } = parseArgs();

  console.log(chalk.blue('ℹ'), 'Construction de l\'index de recherche…\n');

  const files = await fg(GLOBS, { cwd: ROOT, ignore: IGNORE, absolute: false });
  console.log(chalk.blue('ℹ'), `${files.length} document(s) à indexer.\n`);

  const documents: SearchDocument[] = [];

  for (const file of files) {
    const absolute = path.join(ROOT, file);
    const raw = await fs.readFile(absolute, 'utf-8');
    const parsed = matter(raw);

    const category = inferCategory(file);
    const href = buildHref(file);

    documents.push({
      id: slugify(file),
      title: String(parsed.data.title ?? path.basename(file, '.md')),
      description: String(parsed.data.description ?? ''),
      category,
      href,
      content: cleanContent(parsed.content),
      tags: Array.isArray(parsed.data.tags) ? parsed.data.tags.map(String) : [],
      owner: String(parsed.data.owner ?? ''),
      version: String(parsed.data.version ?? '1.0'),
      last_updated: String(parsed.data.last_updated ?? ''),
    });
  }

  const index = {
    generatedAt: new Date().toISOString(),
    total: documents.length,
    version: '1.0.1',
    documents,
  };

  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, JSON.stringify(index, null, 2), 'utf-8');

  console.log(chalk.green('✓'), `Index généré : ${path.relative(ROOT, out)}`);
  console.log(chalk.gray(`  ${documents.length} documents · ${(await fs.stat(out)).size} octets`));
}

function inferCategory(file: string): string {
  if (file.startsWith('foundation/constitution')) return 'Constitution';
  if (file.startsWith('foundation/standards')) return 'Standards';
  if (file.startsWith('foundation/specifications')) return 'Specifications';
  if (file.startsWith('foundation/governance')) return 'Governance';
  if (file.startsWith('foundation/operations')) return 'Operations';
  if (file.startsWith('foundation/ai')) return 'AI';
  if (file.startsWith('foundation/references')) return 'References';
  if (file.startsWith('knowledge')) return 'Knowledge';
  if (file.startsWith('policies')) return 'Policies';
  if (file.startsWith('decisions/adr')) return 'ADR';
  if (file.startsWith('decisions/rfc')) return 'RFC';
  return 'Other';
}

function buildHref(file: string): string {
  // Conversion chemin fichier → URL du site de documentation
  const withoutExt = file.replace(/\.md$/, '');
  const parts = withoutExt.split('/');
  // foundation/constitution/design-principles.md → /principles
  // foundation/standards/accessibility.md → /foundations/accessibility
  // foundation/specifications/design-system/color.md → /foundations/color
  // etc.
  if (parts[0] === 'foundation' && parts[1] === 'constitution') {
    return '/principles';
  }
  if (parts[0] === 'foundation' && parts[1] === 'standards') {
    return `/foundations/${parts[2]}`;
  }
  if (parts[0] === 'foundation' && parts[1] === 'specifications') {
    return `/foundations/${parts.slice(2).join('/')}`;
  }
  if (parts[0] === 'foundation' && parts[1] === 'ai') {
    return `/ai/${parts.slice(2).join('/')}`;
  }
  if (parts[0] === 'policies') {
    return `/resources/policies/${parts.slice(1).join('/')}`;
  }
  if (parts[0] === 'decisions') {
    return `/resources/decisions/${parts.slice(1).join('/')}`;
  }
  return `/${parts.join('/')}`;
}

function cleanContent(content: string): string {
  return content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*_>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 2000);
}

function slugify(input: string): string {
  return input.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
}

main().catch((err) => {
  console.error(chalk.red('✗'), 'Erreur :', err);
  process.exit(1);
});
