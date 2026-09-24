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
    <div
      ref={ref}
      className={['wc-${name.toLowerCase()}', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
);

${name}.displayName = '${name}';
`,

  css: (name: string) => `/* =========================================================
   ${name} — conforme au Design System Walden Corp
   Source : Foundation Specification v1.0
   ========================================================= */

.wc-${name.toLowerCase()} {
  /* Utiliser exclusivement les tokens :
     var(--color-…)
     var(--spacing-…)
     var(--radius-…)
     var(--elevation-…)
     var(--font-…)
  */
}
`,

  test: (name: string) => `import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ${name} } from './${name}';

describe('${name}', () => {
  it('rend sans erreur', () => {
    render(<${name} />);
  });

  it('rend son contenu', () => {
    const { getByText } = render(<${name}>Hello</${name}>);
    expect(getByText('Hello')).toBeInTheDocument();
  });
});
`,

  story: (name: string) => `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta: Meta<typeof ${name}> = {
  title: 'Components/${name}',
  component: ${name},
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof ${name}>;

export const Default: Story = {
  args: {
    children: '${name}',
  },
};
`,

  doc: (name: string) => `# ${name}

**Version :** 1.0.0
**Statut :** Brouillon

## Description

[Décrire brièvement le rôle du composant.]

## Anatomie

- Container
- [Éléments internes]

## Variantes

[Lister les variantes et leurs usages.]

## États

- Repos
- Hover
- Focus
- Active
- Disabled

## Accessibilité

- Rôle ARIA : [à préciser]
- Focus visible : oui
- Navigation clavier : [à préciser]
- Contraste : WCAG AA conforme

## Tokens utilisés

- \`color/…\`
- \`spacing/…\`
- \`radius/…\`

## Cas d'usage

- [Cas 1]
- [Cas 2]

## Anti-patterns

- [À éviter]

## Références

- Foundation Specification v1.0
- Document 14 — Component Specification
`,
};

export async function generateComponent(name: string, target: string): Promise<void> {
  const dir = path.join(target, name);
  await fs.ensureDir(dir);

  await fs.writeFile(path.join(dir, `${name}.tsx`), TEMPLATES.component(name));
  await fs.writeFile(path.join(dir, `${name}.css`), TEMPLATES.css(name));
  await fs.writeFile(path.join(dir, `${name}.test.tsx`), TEMPLATES.test(name));
  await fs.writeFile(path.join(dir, `${name}.stories.tsx`), TEMPLATES.story(name));
  await fs.writeFile(path.join(dir, `${name}.md`), TEMPLATES.doc(name));
}
