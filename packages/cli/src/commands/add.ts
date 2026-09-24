import { Command } from 'commander';
import ora from 'ora';
import { installComponents } from '../services/npmService.js';
import { logger } from '../utils/logger.js';

export const addCommand = new Command('add')
  .argument('[components...]', 'Nom(s) du/des composant(s) à ajouter')
  .option('--all', 'Ajouter tous les composants du Design System')
  .description('Ajoute un ou plusieurs composants du Design System')
  .action(async (components: string[], options) => {
    const list = options.all ? ['all'] : components;

    if (list.length === 0) {
      logger.error('Précisez au moins un composant ou utilisez --all.');
      logger.info('Exemple : walden add button input modal');
      process.exit(1);
    }

    const spinner = ora(`Ajout de ${list.join(', ')}…`).start();
    try {
      await installComponents(list);
      spinner.succeed('Composants ajoutés.');
    } catch (err) {
      spinner.fail('Erreur lors de l\'ajout.');
      logger.error(String(err));
      process.exit(1);
    }
  });
