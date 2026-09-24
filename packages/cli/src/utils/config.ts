import fs from 'fs-extra';
import path from 'node:path';

export interface WaldenConfig {
  dsVersion: string;
  tokensPath: string;
  figmaSyncPath?: string;
}

export async function loadConfig(cwd = process.cwd()): Promise<WaldenConfig | null> {
  const configPath = path.join(cwd, 'walden.config.json');
  if (!(await fs.pathExists(configPath))) return null;
  return fs.readJson(configPath);
}
