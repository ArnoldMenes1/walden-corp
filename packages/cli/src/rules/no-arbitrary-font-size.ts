import type { Rule, Violation } from './index.js';

export const noArbitraryFontSize: Rule = {
  id: 'no-arbitrary-font-size',
  description: 'Interdit les tailles de police arbitraires',
  check(filePath, content): Violation[] {
    const violations: Violation[] = [];
    const regex = /font-size:\s*\d+px/g;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(content)) !== null) {
      const before = content.slice(0, match.index);
      const line = before.split('\n').length;
      violations.push({
        file: filePath,
        line,
        column: 0,
        rule: this.id,
        message: `Taille de police en dur : ${match[0]}`,
        suggestion: 'Utilisez un token typographique du Design System',
        match: match[0],
      });
    }

    return violations;
  },
};
