export interface WaldenConfig {
  dsVersion: string;
  tokensPath: string;
  figmaSyncPath?: string;
}

export interface WaldenProject {
  name: string;
  template: 'react' | 'vue' | 'flutter';
  git: boolean;
  install: boolean;
}
