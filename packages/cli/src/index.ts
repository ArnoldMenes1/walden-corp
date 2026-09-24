import { Command } from 'commander';
import { createCommand } from './commands/create.js';
import { addCommand } from './commands/add.js';
import { generateCommand } from './commands/generate.js';
import { auditCommand } from './commands/audit.js';
import { migrateCommand } from './commands/migrate.js';
import { figmaCommand } from './commands/figma.js';

const program = new Command();

program
  .name('walden')
  .description('CLI officielle du Design System Walden Corp')
  .version('1.0.1');

program.addCommand(createCommand);
program.addCommand(addCommand);
program.addCommand(generateCommand);
program.addCommand(auditCommand);
program.addCommand(migrateCommand);
program.addCommand(figmaCommand);

program.parse();
