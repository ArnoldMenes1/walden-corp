import type { Rule, Violation } from './index.js';
import knownTokens from '../data/known-tokens.json' assert { type: 'json' };

export const noUnknownToken: Rule = {
  id: 'no-unknown-token',
  description: 'Interdit l\'usage de tokens inexistants',
  check(filePath, content): Violation[] {
    const violations: Violation[] = [];
    const regex = /var\(--([a-z0-9-]+)\)/g;
    const allowed = new Set(Object.keys(knownTokens));

    let match: RegExpExecArray | null;

    while ((match = regex.exec(content)) !== null) {
      const name = match[1];
      if (allowed.has(name)) continue;

      const before = content.slice(0, match.index);
      const line = before.split('\n').length;

      violations.push({
        file: filePath,
        line,
        column: 0,
        rule: this.id,
        message: `Token inconnu : --${name}`,
        suggestion: 'Vérifiez le catalogue de tokens (Foundation Specification v1.0)',
        match: name,
      });
    }

    return violations;
  },
};
