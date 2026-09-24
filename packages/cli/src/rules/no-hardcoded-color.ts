import type { Rule, Violation } from './index.js';

export const noHardcodedColor: Rule = {
  id: 'no-hardcoded-color',
  description: 'Interdit les couleurs en dur dans le code',
  check(filePath, content): Violation[] {
    const violations: Violation[] = [];
    const regex = /#[0-9a-fA-F]{3,8}\b|rgb\([^)]+\)|hsl\([^)]+\)/g;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(content)) !== null) {
      const before = content.slice(0, match.index);
      const line = before.split('\n').length;
      violations.push({
        file: filePath,
        line,
        column: 0,
        rule: this.id,
        message: `Couleur en dur détectée : ${match[0]}`,
        suggestion: 'Utilisez un token (var(--color-…))',
        match: match[0],
      });
    }

    return violations;
  },
};
