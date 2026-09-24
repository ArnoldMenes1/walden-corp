import fs from 'fs-extra';
import fg from 'fast-glob';
import path from 'node:path';

export interface MigrationResult {
  modified: number;
  skipped: number;
}

export async function migrateTokens(
  from: string,
  to: string,
  dryRun = false
): Promise<MigrationResult> {
  const files = await fg(['src/**/*.{ts,tsx,css,scss}'], {
    cwd: process.cwd(),
    absolute: true,
  });

  // Table de correspondance à charger depuis un fichier de migration
  const mapping = await loadMigrationMapping(from, to);

  let modified = 0;
  let skipped = 0;

  for (const file of files) {
    let content = await fs.readFile(file, 'utf-8');
    let fileModified = false;

    for (const [oldToken, newToken] of Object.entries(mapping)) {
      if (content.includes(oldToken)) {
        content = content.split(oldToken).join(newToken);
        fileModified = true;
      }
    }

    if (fileModified) {
      if (!dryRun) await fs.writeFile(file, content, 'utf-8');
      modified++;
    } else {
      skipped++;
    }
  }

  return { modified, skipped };
}

async function loadMigrationMapping(
  from: string,
  to: string
): Promise<Record<string, string>> {
  const mappingPath = path.resolve(
    process.cwd(),
    `migrations/${from}-to-${to}.json`
  );
  if (!(await fs.pathExists(mappingPath))) return {};
  return fs.readJson(mappingPath);
}
