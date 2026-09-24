import { Command } from 'commander';
import path from 'node:path';
import inquirer from 'inquirer';
import ora from 'ora';
import { downloadTemplate } from '../utils/fs.js';
import { logger } from '../utils/logger.js';
import { installDependencies } from '../services/npmService.js';
import { initGit } from '../services/gitService.js';

export const createCommand = new Command('create')
  .argument('<name>', 'Nom du projet')
  .option('-t, --template <template>', 'Template (react, vue, flutter)', 'react')
  .option('--no-git', 'Ne pas initialiser git')
  .option('--no-install', 'Ne pas installer les dépendances')
  .description('Crée un nouveau projet conforme au Design System')
  .action(async (name, options) => {
    const spinner = ora(`Création du projet ${name}…`).start();

    try {
      const target = path.resolve(process.cwd(), name);
      await downloadTemplate(options.template, target);
      spinner.succeed(`Projet ${name} créé.`);

      if (options.install !== false) {
        const installSpinner = ora('Installation des dépendances…').start();
        await installDependencies(target);
        installSpinner.succeed('Dépendances installées.');
      }

      if (options.git !== false) {
        await initGit(target);
      }

      logger.info('\nProchaines étapes :');
      logger.info(`  cd ${name}`);
      logger.info('  npm run dev');
    } catch (err) {
      spinner.fail('Erreur lors de la création.');
      logger.error(String(err));
      process.exit(1);
    }
  });
