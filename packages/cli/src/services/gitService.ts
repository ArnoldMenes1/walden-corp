import { execa } from 'execa';

export async function initGit(target: string): Promise<void> {
  try {
    await execa('git', ['init'], { cwd: target });
    await execa('git', ['add', '.'], { cwd: target });
    await execa('git', ['commit', '-m', 'chore: initial commit'], { cwd: target });
  } catch {
    // Silencieux si git n'est pas disponible
  }
}
