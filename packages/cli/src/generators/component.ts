import fs from 'fs-extra';
import path from 'node:path';

const TEMPLATES = {
  component: (name: string) => `import { forwardRef, HTMLAttributes } from 'react';
import './${name}.css';

export interface ${name}Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/**
 * ${name} — composant Walden Corp.
 * Conforme au Design System (Foundation Specification v1.0).
 */
export const ${name} = forwardRef<HTMLDivElement, ${name}Props>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={['wc-${name.toLowerCase()}', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
);

${name}.displayName = '${name}';
`,
  css: (name: string) => `/* ${name} — conforme au Design System Walden Corp */
.wc-${name.toLowerCase()} {
  /* Utiliser exclusivement les tokens :
     var(--color-…), var(--spacing-…), var(--radius-…), var(--elevation-…) */
}
`,
  test: (name: string) => `import { render } from '@testing-library/react';
import { ${name} } from './${name}';

describe('${name}', () => {
  it('rend sans erreur', () => {
    render(<${name} />);
  });
});
`,
  story: (name: string) => `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta: Meta<typeof ${name}> = {
  title: 'Components/${name}',
  component: ${name},
};
export default meta;

type Story = StoryObj<typeof ${name}>;

export const Default: Story = {};
`,
  doc: (name: string) => `# ${name}

**Version :** 1.0.0
**Statut :** Brouillon

## Description

…

## Anatomie

…

## Variantes

…

## Accessibilité

…

## Références

- Foundation Specification v1.0
- Document 14 — Component Specification
`,
};

export async function generateComponent(name: string, target: string) {
  const dir = path.join(target, 'components', name);
  await fs.ensureDir(dir);

  await fs.writeFile(path.join(dir, `${name}.tsx`), TEMPLATES.component(name));
  await fs.writeFile(path.join(dir, `${name}.css`), TEMPLATES.css(name));
  await fs.writeFile(path.join(dir, `${name}.test.tsx`), TEMPLATES.test(name));
  await fs.writeFile(path.join(dir, `${name}.stories.tsx`), TEMPLATES.story(name));
  await fs.writeFile(path.join(dir, `${name}.md`), TEMPLATES.doc(name));
}
