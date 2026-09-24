import { Command } from 'commander';
import ora from 'ora';
import { migrateTokens } from '../services/tokenService.js';
import { logger } from '../utils/logger.js';

export const migrateCommand = new Command('migrate')
  .description('Migre les tokens ou les fichiers d\'un projet Walden Corp');

migrateCommand
  .command('tokens')
  .description('Migre les tokens obsolètes vers la version cible')
  .requiredOption('--from <version>', 'Version source (ex: 1.0.0)')
  .requiredOption('--to <version>', 'Version cible (ex: 1.0.1)')
  .option('--dry-run', 'Simulation sans modification')
  .action(async (options) => {
    const spinner = ora(
      `Migration ${options.from} → ${options.to}…`
    ).start();

    try {
      const result = await migrateTokens(
        options.from,
        options.to,
        options.dryRun
      );

      spinner.succeed(
        `${result.modified} fichier(s) modifié(s), ${result.skipped} ignoré(s).`
      );

      if (options.dryRun) {
        logger.info('(Mode dry-run : aucune modification appliquée.)');
      }
    } catch (err) {
      spinner.fail('Erreur lors de la migration.');
      logger.error(String(err));
      process.exit(1);
    }
  });
