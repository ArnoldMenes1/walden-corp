import { Command } from 'commander';
import ora from 'ora';
import path from 'node:path';
import { generateComponent } from '../generators/component.js';
import { generatePattern } from '../generators/pattern.js';
import { logger } from '../utils/logger.js';

export const generateCommand = new Command('generate')
  .alias('g')
  .description('Génère un fichier ou un ensemble de fichiers');

generateCommand
  .command('component <name>')
  .description('Génère un composant React conforme au Design System')
  .option('-d, --dir <directory>', 'Répertoire de destination', 'src/components')
  .action(async (name: string, options) => {
    const spinner = ora(`Génération du composant ${name}…`).start();
    try {
      const target = path.resolve(process.cwd(), options.dir);
      await generateComponent(name, target);
      spinner.succeed(`Composant ${name} généré dans ${options.dir}/${name}.`);
      logger.info('\nFichiers créés :');
      logger.info(`  - ${name}.tsx`);
      logger.info(`  - ${name}.css`);
      logger.info(`  - ${name}.test.tsx`);
      logger.info(`  - ${name}.stories.tsx`);
      logger.info(`  - ${name}.md`);
    } catch (err) {
      spinner.fail('Erreur lors de la génération.');
      logger.error(String(err));
      process.exit(1);
    }
  });

generateCommand
  .command('pattern <name>')
  .description('Génère un pattern conforme au Design System')
  .option('-d, --dir <directory>', 'Répertoire de destination', 'src/patterns')
  .action(async (name: string, options) => {
    const spinner = ora(`Génération du pattern ${name}…`).start();
    try {
      const target = path.resolve(process.cwd(), options.dir);
      await generatePattern(name, target);
      spinner.succeed(`Pattern ${name} généré.`);
    } catch (err) {
      spinner.fail('Erreur lors de la génération.');
      logger.error(String(err));
      process.exit(1);
    }
  });
