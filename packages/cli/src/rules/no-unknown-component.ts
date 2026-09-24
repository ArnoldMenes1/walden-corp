import type { Rule, Violation } from './index.js';
import knownComponents from '../data/known-components.json' assert { type: 'json' };

export const noUnknownComponent: Rule = {
  id: 'no-unknown-component',
  description: 'Interdit l\'usage de composants hors catalogue',
  check(filePath, content): Violation[] {
    const violations: Violation[] = [];
    const regex = /<([A-Z][A-Za-z0-9]*)\b/g;
    const allowed = new Set([...Object.keys(knownComponents), 'Fragment']);

    let match: RegExpExecArray | null;
    const seen = new Set<string>();

    while ((match = regex.exec(content)) !== null) {
      const name = match[1];
      if (allowed.has(name) || seen.has(name)) continue;
      seen.add(name);

      const before = content.slice(0, match.index);
      const line = before.split('\n').length;

      violations.push({
        file: filePath,
        line,
        column: 0,
        rule: this.id,
        message: `Composant inconnu : <${name}>`,
        suggestion: 'Vérifiez le catalogue ou ouvrez une RFC pour un nouveau composant',
        match: name,
      });
    }

    return violations;
  },
};
