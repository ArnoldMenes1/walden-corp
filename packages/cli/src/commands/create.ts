import { Command } from 'commander';
import path from 'node:path';
import ora from 'ora';
import { downloadTemplate } from '../utils/fs.js';
import { logger } from '../utils/logger.js';
import { installDependencies } from '../services/npmService.js';
import { initGit } from '../services/gitService.js';
import { WaldenError } from '../utils/errors.js';

const VALID_TEMPLATES = ['react', 'vue', 'flutter'] as const;

export const createCommand = new Command('create')
  .argument('<name>', 'Nom du projet')
  .option(
    '-t, --template <template>',
    `Template (${VALID_TEMPLATES.join(', ')})`,
    'react'
  )
  .option('--no-git', 'Ne pas initialiser git')
  .option('--no-install', 'Ne pas installer les dépendances')
  .description('Crée un nouveau projet conforme au Design System Walden Corp')
  .action(async (name: string, options) => {
    if (!VALID_TEMPLATES.includes(options.template)) {
      logger.error(`Template invalide : ${options.template}`);
      logger.info(`Templates disponibles : ${VALID_TEMPLATES.join(', ')}`);
      process.exit(1);
    }

    const spinner = ora(`Création du projet ${name}…`).start();

    try {
      const target = path.resolve(process.cwd(), name);
      await downloadTemplate(options.template, target);
      spinner.succeed(`Projet ${name} créé dans ${path.relative(process.cwd(), target)}.`);

      if (options.install !== false) {
        const installSpinner = ora('Installation des dépendances…').start();
        await installDependencies(target);
        installSpinner.succeed('Dépendances installées.');
      }

      if (options.git !== false) {
        await initGit(target);
        logger.success('Dépôt Git initialisé.');
      }

      logger.info('\nProchaines étapes :');
      logger.info(`  cd ${name}`);
      if (options.template === 'flutter') {
        logger.info('  flutter run');
      } else {
        logger.info('  npm run dev');
      }
    } catch (err) {
      spinner.fail('Erreur lors de la création du projet.');
      if (err instanceof WaldenError) {
        logger.error(err.message);
        if (err.suggestion) logger.info(`Suggestion : ${err.suggestion}`);
      } else {
        logger.error(String(err));
      }
      process.exit(1);
    }
  });
