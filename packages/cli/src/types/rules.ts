export interface Rule {
  id: string;
  description: string;
  check(filePath: string, content: string): Violation[];
}

export interface Violation {
  file: string;
  line: number;
  column: number;
  rule: string;
  message: string;
  suggestion?: string;
  match?: string;
}
