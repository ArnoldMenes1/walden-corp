import { Command } from 'commander';
import ora from 'ora';
import { syncFigmaVariables } from '../services/figmaService.js';
import { logger } from '../utils/logger.js';

export const figmaCommand = new Command('figma')
  .description('Commandes d\'intégration Figma');

figmaCommand
  .command('sync')
  .description('Génère figma/variables.json à partir de tokens.json')
  .option(
    '--tokens <path>',
    'Chemin vers tokens.json',
    'packages/ds-tokens/tokens.json'
  )
  .option('--out <path>', 'Chemin de sortie', 'packages/ds-tokens/figma/variables.json')
  .action(async (options) => {
    const spinner = ora('Synchronisation avec Figma…').start();

    try {
      const outPath = await syncFigmaVariables(options.tokens, options.out);
      spinner.succeed('Synchronisation terminée.');
      logger.info(`Fichier généré : ${outPath}`);
      logger.info('');
      logger.info('Étapes suivantes :');
      logger.info('  1. Ouvrir Figma');
      logger.info('  2. Lancer le plugin Tokens Studio');
      logger.info('  3. Importer le fichier généré');
    } catch (err) {
      spinner.fail('Erreur lors de la synchronisation.');
      logger.error(String(err));
      process.exit(1);
    }
  });
