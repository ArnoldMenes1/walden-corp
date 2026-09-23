#!/usr/bin/env tsx
/**
 * generate-ai-index.ts
 *
 * Génère automatiquement meta/ai-index.md et meta/search-index.json
 * à partir des frontmatters YAML des documents du dépôt.
 *
 * Usage :
 *   npx tsx scripts/generate-ai-index.ts
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import fg from 'fast-glob';

interface DocMetadata {
  filePath: string;
  relativePath: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  owner: string;
  status: string;
  version: string;
  lastUpdated: string;
}

const ROOT = process.cwd();
const OUTPUT_MD = path.join(ROOT, 'meta', 'ai-index.md');
const OUTPUT_JSON = path.join(ROOT, 'meta', 'search-index.json');

const CATEGORY_LABELS: Record<string, string> = {
  'foundation/constitution': 'Constitution',
  'foundation/standards': 'Standards',
  'foundation/specifications': 'Specifications',
  'foundation/governance': 'Governance',
  'foundation/operations': 'Operations',
  'foundation/ai': 'AI',
  'foundation/references': 'References',
  'knowledge': 'Knowledge',
  'policies': 'Policies',
  'decisions/adr': 'Decisions — ADR',
  'decisions/rfc': 'Decisions — RFC',
};

function inferCategory(relativePath: string): string {
  for (const prefix of Object.keys(CATEGORY_LABELS)) {
    if (relativePath.startsWith(prefix)) return prefix;
  }
  return 'Other';
}

async function collectDocuments(): Promise<DocMetadata[]> {
  const files = await fg(
    [
      'foundation/**/*.md',
      'knowledge/**/*.md',
      'policies/**/*.md',
      'decisions/**/*.md',
    ],
    {
      cwd: ROOT,
      ignore: ['**/README.md', '**/template.md', '**/.gitkeep'],
      absolute: false,
    }
  );

  const docs: DocMetadata[] = [];

  for (const file of files) {
    const absolute = path.join(ROOT, file);
    const raw = await fs.readFile(absolute, 'utf-8');
    const { data } = matter(raw);

    docs.push({
      filePath: absolute,
      relativePath: file,
      title: data.title ?? path.basename(file, '.md'),
      description: data.description ?? '',
      category: inferCategory(file),
      tags: Array.isArray(data.tags) ? data.tags : [],
      owner: data.owner ?? '',
      status: data.status ?? 'draft',
      version: data.version ?? '1.0',
      lastUpdated: data.last_updated ?? '',
    });
  }

  return docs;
}

function groupByCategory(docs: DocMetadata[]): Record<string, DocMetadata[]> {
  return docs.reduce<Record<string, DocMetadata[]>>((acc, doc) => {
    const cat = doc.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(doc);
    return acc;
  }, {});
}

function renderMarkdown(docs: DocMetadata[]): string {
  const grouped = groupByCategory(docs);
  const categories = Object.keys(CATEGORY_LABELS);
  const now = new Date().toISOString();

  const lines: string[] = [];

  lines.push('# AI Index — Walden Corp');
  lines.push('');
  lines.push('> **⚠️ Ce fichier est généré automatiquement.**');
  lines.push('> Ne pas éditer manuellement. Voir `scripts/generate-ai-index.ts`.');
  lines.push('');
  lines.push(`**Dernière génération :** ${now}`);
  lines.push(`**Nombre de documents indexés :** ${docs.length}`);
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Objectif');
  lines.push('');
  lines.push(
    'Ce fichier permet aux agents IA de naviguer rapidement dans le dépôt sans devoir parcourir l\'intégralité des fichiers.'
  );
  lines.push('');
  lines.push('Pour chaque type de question, l\'agent doit :');
  lines.push('');
  lines.push('1. Identifier la catégorie pertinente.');
  lines.push('2. Consulter directement les documents listés.');
  lines.push('3. Ne jamais inventer une information absente.');
  lines.push('');
  lines.push('---');
  lines.push('');

  for (const cat of categories) {
    const catDocs = grouped[cat] ?? [];
    if (catDocs.length === 0) continue;

    lines.push(`## ${CATEGORY_LABELS[cat]}`);
    lines.push('');
    lines.push('| Document | Description | Owner | Statut |');
    lines.push('|----------|-------------|-------|--------|');

    catDocs
      .sort((a, b) => a.relativePath.localeCompare(b.relativePath))
      .forEach((doc) => {
        const link = `[\`${doc.relativePath}\`](../${doc.relativePath})`;
        const desc = doc.description.replace(/\|/g, '\\|');
        lines.push(`| ${link} | ${desc} | ${doc.owner} | ${doc.status} |`);
      });

    lines.push('');
  }

  const otherDocs = grouped['Other'] ?? [];
  if (otherDocs.length > 0) {
    lines.push('## Autres');
    lines.push('');
    lines.push('| Document | Description |');
    lines.push('|----------|-------------|');
    otherDocs.forEach((doc) => {
      lines.push(`| \`${doc.relativePath}\` | ${doc.description} |`);
    });
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push('## Règles pour les agents IA');
  lines.push('');
  lines.push('1. Toujours consulter ce fichier avant toute réponse.');
  lines.push('2. Ne jamais inventer de contenu absent des documents référencés.');
  lines.push('3. Citer les documents utilisés.');
  lines.push('4. Respecter la Constitution (`foundation/constitution/`).');
  lines.push('5. En cas de doute, demander une validation humaine.');

  return lines.join('\n');
}

function renderSearchIndex(docs: DocMetadata[]): string {
  const index = docs.map((doc) => ({
    path: doc.relativePath,
    title: doc.title,
    description: doc.description,
    category: doc.category,
    tags: doc.tags,
  }));

  return JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      totalDocuments: index.length,
      documents: index,
    },
    null,
    2
  );
}

async function main() {
  console.log('🔍 Collecte des documents…');
  const docs = await collectDocuments();
  console.log(`📄 ${docs.length} documents collectés.`);

  console.log('📝 Génération de meta/ai-index.md…');
  const markdown = renderMarkdown(docs);
  await fs.writeFile(OUTPUT_MD, markdown, 'utf-8');

  console.log('📝 Génération de meta/search-index.json…');
  const json = renderSearchIndex(docs);
  await fs.writeFile(OUTPUT_JSON, json, 'utf-8');

  console.log('✅ Index IA généré avec succès.');
  console.log(`   → ${path.relative(ROOT, OUTPUT_MD)}`);
  console.log(`   → ${path.relative(ROOT, OUTPUT_JSON)}`);
}

main().catch((err) => {
  console.error('❌ Erreur :', err);
  process.exit(1);
});
