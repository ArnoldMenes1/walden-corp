import { noHardcodedColor } from './no-hardcoded-color.js';
import { noHardcodedSpacing } from './no-hardcoded-spacing.js';
import { noArbitraryFontSize } from './no-arbitrary-font-size.js';
import { noUnknownComponent } from './no-unknown-component.js';
import { noUnknownToken } from './no-unknown-token.js';
import fs from 'fs-extra';

export interface Violation {
  file: string;
  line: number;
  column: number;
  rule: string;
  message: string;
  suggestion?: string;
  match?: string;
}

export interface Rule {
  id: string;
  description: string;
  check(filePath: string, content: string): Violation[];
}

export const rules: Rule[] = [
  noHardcodedColor,
  noHardcodedSpacing,
  noArbitraryFontSize,
  noUnknownComponent,
  noUnknownToken,
];

export async function runRules(files: string[]): Promise<Violation[]> {
  const violations: Violation[] = [];

  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');
    for (const rule of rules) {
      violations.push(...rule.check(file, content));
    }
  }

  return violations;
}
