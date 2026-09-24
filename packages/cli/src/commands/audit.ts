import { Command } from 'commander';
import path from 'node:path';
import { collectFiles } from '../utils/fs.js';
import { runRules } from '../rules/index.js';
import { logger } from '../utils/logger.js';

export const auditCommand = new Command('audit')
  .description('Audite la conformité du projet au Design System')
  .option('--json', 'Sortie JSON (pour CI)')
  .option('--quiet', 'N\'affiche que le résumé')
  .action(async (options) => {
    const cwd = process.cwd();
    const files = await collectFiles(cwd);

    if (!options.quiet && !options.json) {
      logger.info(`${files.length} fichiers analysés.`);
    }

    const violations = await runRules(files);

    if (options.json) {
      console.log(JSON.stringify({ violations, total: violations.length }, null, 2));
      process.exit(violations.length > 0 ? 1 : 0);
    }

    if (violations.length === 0) {
      logger.success('Aucune violation détectée.');
      process.exit(0);
    }

    logger.warn(`${violations.length} violation(s) détectée(s) :\n`);

    if (!options.quiet) {
      violations.forEach((v) => {
        const rel = path.relative(cwd, v.file);
        logger.error(`${rel}:${v.line}`);
        logger.error(`   ${v.message}`);
        if (v.suggestion) logger.info(`   → ${v.suggestion}`);
      });
    }

    process.exit(1);
  });
