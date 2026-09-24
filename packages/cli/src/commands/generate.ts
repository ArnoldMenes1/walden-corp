import { Command } from 'commander';
import ora from 'ora';
import { generateComponent } from '../generators/component.js';
import { generatePattern } from '../generators/pattern.js';

export const generateCommand = new Command('generate')
  .alias('g')
  .description('Génère un fichier ou un ensemble de fichiers');

generateCommand
  .command('component <name>')
  .description('Génère un composant React conforme')
  .action(async (name) => {
    const spinner = ora(`Génération du composant ${name}…`).start();
    await generateComponent(name, process.cwd());
    spinner.succeed(`Composant ${name} généré.`);
  });

generateCommand
  .command('pattern <name>')
  .description('Génère un pattern')
  .action(async (name) => {
    const spinner = ora(`Génération du pattern ${name}…`).start();
    await generatePattern(name, process.cwd());
    spinner.succeed(`Pattern ${name} généré.`);
  });
