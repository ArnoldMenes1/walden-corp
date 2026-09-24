import { Command } from 'commander';
import ora from 'ora';
import { migrateTokens } from '../services/tokenService.js';
import { logger } from '../utils/logger.js';

export const migrateCommand = new Command('migrate')
  .description('Migre les tokens ou les fichiers d\'un projet');

migrateCommand
  .command('tokens')
  .requiredOption('--from <version>', 'Version source')
  .requiredOption('--to <version>', 'Version cible')
  .option('--dry-run', 'Simulation sans modification')
  .action(async (options) => {
    const spinner = ora(`Migration ${options.from} → ${options.to}…`).start();
    try {
      const result = await migrateTokens(options.from, options.to, options.dryRun);
      spinner.succeed(
        `${result.modified} fichier(s) modifié(s), ${result.skipped} ignoré(s).`
      );
      if (options.dryRun) logger.info('(Mode dry-run : aucune modification appliquée.)');
    } catch (err) {
      spinner.fail('Erreur lors de la migration.');
      logger.error(String(err));
      process.exit(1);
    }
  });
