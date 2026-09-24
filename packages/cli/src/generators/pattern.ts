import fs from 'fs-extra';
import path from 'node:path';

export async function generatePattern(name: string, target: string) {
  const dir = path.join(target, 'patterns', name);
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

…

## Composition

…

## Références

- Document 15 — Pattern Library
`
  );
}
