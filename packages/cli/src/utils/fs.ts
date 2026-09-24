import fs from 'fs-extra';
import path from 'node:path';
import fg from 'fast-glob';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function downloadTemplate(
  template: string,
  target: string
): Promise<void> {
  const templateDir = path.resolve(__dirname, '../../templates', template);
  if (!(await fs.pathExists(templateDir))) {
    throw new Error(`Template introuvable : ${template}`);
  }
  await fs.ensureDir(target);
  await fs.copy(templateDir, target);
}

export async function collectFiles(dir: string): Promise<string[]> {
  return fg(['**/*.{ts,tsx,css,scss,js,jsx}'], {
    cwd: dir,
    absolute: true,
    ignore: ['**/node_modules/**', '**/dist/**', '**/.git/**'],
  });
}
