import { Command } from 'commander';
import ora from 'ora';
import { installComponent } from '../services/npmService.js';
import { logger } from '../utils/logger.js';

export const addCommand = new Command('add')
  .argument('[components...]', 'Nom(s) du/des composant(s)')
  .option('--all', 'Ajouter tous les composants')
  .description('Ajoute un ou plusieurs composants du Design System')
  .action(async (components: string[], options) => {
    const list = options.all ? ['all'] : components;
    if (list.length === 0) {
      logger.error('Précisez au moins un composant ou utilisez --all.');
      process.exit(1);
    }

    const spinner = ora(`Ajout de ${list.join(', ')}…`).start();
    try {
      await installComponent(list);
      spinner.succeed('Composants ajoutés.');
    } catch (err) {
      spinner.fail('Erreur.');
      logger.error(String(err));
      process.exit(1);
    }
  });
