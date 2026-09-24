import { Command } from 'commander';
import ora from 'ora';
import { syncFigmaVariables } from '../services/figmaService.js';
import { logger } from '../utils/logger.js';

export const figmaCommand = new Command('figma')
  .description('Commandes Figma');

figmaCommand
  .command('sync')
  .description('Synchronise les tokens avec Figma')
  .option('--tokens <path>', 'Chemin vers tokens.json', 'packages/ds-tokens/tokens.json')
  .action(async (options) => {
    const spinner = ora('Synchronisation avec Figma…').start();
    try {
      const outPath = await syncFigmaVariables(options.tokens);
      spinner.succeed('Synchronisation terminée.');
      logger.info(`Fichier généré : ${outPath}`);
      logger.info('Importez-le dans Figma via le plugin Tokens Studio.');
    } catch (err) {
      spinner.fail('Erreur lors de la synchronisation.');
      logger.error(String(err));
      process.exit(1);
    }
  });
