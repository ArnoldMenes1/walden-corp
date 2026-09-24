import { execa } from 'execa';
import path from 'node:path';

export async function installDependencies(target: string): Promise<void> {
  await execa('npm', ['install'], { cwd: target, stdio: 'inherit' });
}

export async function installComponent(components: string[]): Promise<void> {
  const pkgs = components.map((c) =>
    c === 'all' ? '@waldencorp/ds-react' : `@waldencorp/ds-react`
  );
  const unique = [...new Set(pkgs)];
  await execa('npm', ['install', ...unique], { stdio: 'inherit' });
}
