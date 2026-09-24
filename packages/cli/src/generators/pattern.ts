import fs from 'fs-extra';
import path from 'node:path';

export async function generatePattern(name: string, target: string): Promise<void> {
  const dir = path.join(target, name);
  await fs.ensureDir(dir);

  await fs.writeFile(
    path.join(dir, `${name}.tsx`),
    `import { Container, Stack, Card } from '@waldencorp/ds-react';

export function ${name}Pattern() {
  return (
    <Container>
      <Stack gap={6}>
        <Card header="${name}">Pattern ${name}</Card>
      </Stack>
    </Container>
  );
}
`
  );

  await fs.writeFile(
    path.join(dir, `${name}.md`),
    `# ${name}

Pattern conforme au Design System Walden Corp.

## Usage

[Décrire l'usage.]

## Composition

[Lister les composants utilisés.]

## Références

- Document 15 — Pattern Library
`
  );
}
