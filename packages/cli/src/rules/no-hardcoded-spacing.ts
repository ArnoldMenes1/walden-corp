import type { Rule, Violation } from './index.js';

export const noHardcodedSpacing: Rule = {
  id: 'no-hardcoded-spacing',
  description: 'Interdit les espacements en dur',
  check(filePath, content): Violation[] {
    const violations: Violation[] = [];
    const regex = /(?:margin|padding|gap)(?:-(?:top|right|bottom|left|inline|block))?:\s*\d+px/g;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(content)) !== null) {
      const before = content.slice(0, match.index);
      const line = before.split('\n').length;
      violations.push({
        file: filePath,
        line,
        column: 0,
        rule: this.id,
        message: `Espacement en dur : ${match[0]}`,
        suggestion: 'Utilisez un token (var(--spacing-…))',
        match: match[0],
      });
    }

    return violations;
  },
};
