import fs from 'fs-extra';
import path from 'node:path';

export async function generateDoc(
  componentName: string,
  target: string
): Promise<void> {
  const content = `# ${componentName}

**Version :** 1.0.0
**Statut :** Brouillon

## Description

[À compléter.]

## Anatomie

[À compléter.]

## Accessibilité

[À compléter.]
`;

  const dir = path.join(target, componentName);
  await fs.ensureDir(dir);
  await fs.writeFile(path.join(dir, `${componentName}.md`), content);
}
