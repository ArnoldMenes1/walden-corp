#!/usr/bin/env tsx
/**
 * export-pdf.ts
 *
 * Exporte la documentation Walden Corp en PDF.
 * Utilise md-to-pdf via puppeteer.
 *
 * Usage :
 *   npx tsx scripts/export-pdf.ts
 *   npx tsx scripts/export-pdf.ts --only=foundation/constitution
 *   npx tsx scripts/export-pdf.ts --out=dist/pdf
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import matter from 'gray-matter';
import { execa } from 'execa';
import chalk from 'chalk';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'dist', 'pdf');
const TEMP_DIR = path.join(ROOT, '.pdf-temp');

interface CliArgs {
  only?: string;
  out: string;
}

function parseArgs(): CliArgs {
  const args: CliArgs = { out: OUT_DIR };
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith('--only=')) args.only = arg.slice(7);
    if (arg.startsWith('--out=')) args.out = path.resolve(arg.slice(6));
  }
  return args;
}

async function main() {
  const args = parseArgs();

  console.log(chalk.blue('ℹ'), 'Export PDF de la documentation Walden Corp\n');

  await fs.mkdir(args.out, { recursive: true });
  await fs.mkdir(TEMP_DIR, { recursive: true });

  const globs = args.only
    ? [`${args.only}/**/*.md`]
    : [
        'foundation/**/*.md',
        'knowledge/**/*.md',
        'policies/**/*.md',
        'decisions/**/*.md',
      ];

  const files = await fg(globs, {
    cwd: ROOT,
    ignore: ['**/README.md', '**/template.md', '**/.gitkeep'],
    absolute: true,
  });

  console.log(chalk.blue('ℹ'), `${files.length} fichier(s) à exporter.\n`);

  const combinedMarkdown = await buildCombinedMarkdown(files);

  const mdPath = path.join(TEMP_DIR, 'walden-docs.md');
  await fs.writeFile(mdPath, combinedMarkdown, 'utf-8');

  const cssPath = path.join(TEMP_DIR, 'style.css');
  await fs.writeFile(cssPath, PDF_STYLE, 'utf-8');

  const outPdf = path.join(args.out, 'walden-docs.pdf');

  console.log(chalk.blue('ℹ'), 'Génération du PDF…');

  try {
    await execa('npx', [
      'md-to-pdf',
      mdPath,
      '--stylesheet',
      cssPath,
      '--pdf-options',
      JSON.stringify({
        format: 'A4',
        margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
        printBackground: true,
      }),
    ]);
  } catch (err) {
    console.log(chalk.yellow('⚠'), 'md-to-pdf indisponible, tentative puppeteer directe.');
    await execa('npx', ['puppeteer', 'print-to-pdf', outPdf, mdPath]);
  }

  console.log(chalk.green('✓'), `PDF généré : ${outPdf}`);
  console.log(chalk.gray(`  Taille : ${(await fs.stat(outPdf)).size} octets`));
}

async function buildCombinedMarkdown(files: string[]): Promise<string> {
  const sorted = files.sort();

  const parts: string[] = [];
  parts.push('# Walden Corp — Documentation officielle');
  parts.push('');
  parts.push(`**Généré le :** ${new Date().toISOString()}`);
  parts.push('');
  parts.push('---');
  parts.push('');

  for (const file of sorted) {
    const raw = await fs.readFile(file, 'utf-8');
    const parsed = matter(raw);
    const relative = path.relative(ROOT, file);

    parts.push(`<!-- file: ${relative} -->`);
    parts.push('');
    parts.push(parsed.content.trim());
    parts.push('');
    parts.push('\\newpage');
    parts.push('');
  }

  return parts.join('\n');
}

const PDF_STYLE = `
  body { font-family: 'Inter', -apple-system, sans-serif; line-height: 1.6; color: #1C1C1E; max-width: 900px; margin: 0 auto; }
  h1 { font-size: 2em; color: #0F2052; border-bottom: 2px solid #0F2052; padding-bottom: 8px; margin-top: 2em; }
  h2 { font-size: 1.5em; color: #0F2052; margin-top: 1.5em; }
  h3 { font-size: 1.2em; color: #1C1C1E; margin-top: 1.2em; }
  code { background: #F4F4F5; padding: 2px 6px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.9em; }
  pre { background: #1C1C1E; color: #FAFAFA; padding: 16px; border-radius: 8px; overflow-x: auto; }
  pre code { background: transparent; color: inherit; }
  table { border-collapse: collapse; width: 100%; margin: 1em 0; }
  th, td { border: 1px solid #E4E4E7; padding: 8px 12px; text-align: left; }
  th { background: #F4F4F5; font-weight: 600; }
  blockquote { border-left: 3px solid #0F2052; padding-left: 1em; color: #52525B; }
  a { color: #0F2052; }
`;

main().catch((err) => {
  console.error(chalk.red('✗'), 'Erreur :', err);
  process.exit(1);
});
