import { Command } from 'commander';
import path from 'node:path';
import { collectFiles } from '../utils/fs.js';
import { runRules } from '../rules/index.js';
import { logger } from '../utils/logger.js';

export const auditCommand = new Command('audit')
  .description('Audite la conformité du projet au Design System')
  .option('--json', 'Sortie JSON')
  .option('--fix', 'Corrige automatiquement (si possible)')
  .action(async (options) => {
    const files = await collectFiles(process.cwd());
    const violations = await runRules(files);

    if (options.json) {
      console.log(JSON.stringify(violations, null, 2));
      return;
    }

    if (violations.length === 0) {
      logger.success('Aucune violation détectée.');
      return;
    }

    logger.warn(`${violations.length} violation(s) détectée(s) :`);
    violations.forEach((v) => {
      logger.error(`  ${path.relative(process.cwd(), v.file)}:${v.line}`);
      logger.error(`    ${v.message}`);
      if (v.suggestion) logger.info(`    → ${v.suggestion}`);
    });

    if (violations.length > 0) process.exit(1);
  });
