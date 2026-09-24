import fs from 'fs-extra';
import path from 'node:path';

interface TokenTree {
  [key: string]: any;
}

export async function syncFigmaVariables(
  tokensPath: string
): Promise<string> {
  const tokens: TokenTree = await fs.readJson(tokensPath);
  const figma = transformToFigmaFormat(tokens);

  const outPath = path.resolve(
    process.cwd(),
    'packages/ds-tokens/figma/variables.json'
  );

  await fs.ensureDir(path.dirname(outPath));
  await fs.writeJson(outPath, figma, { spaces: 2 });

  return outPath;
}

function transformToFigmaFormat(tokens: TokenTree): any {
  // Transformation vers le format Figma Variables / Tokens Studio
  return {
    version: '1.0.1',
    collections: [
      {
        name: 'Primitives / Color',
        modes: ['Light'],
        variables: flattenTokens(tokens.color?.primitive ?? {}, 'color'),
      },
      {
        name: 'Semantic / Color',
        modes: ['Light', 'Dark'],
        variables: flattenTokens(tokens.color?.semantic ?? {}, 'color'),
      },
      {
        name: 'Spacing',
        modes: ['Default'],
        variables: flattenTokens(tokens.spacing ?? {}, 'spacing'),
      },
      {
        name: 'Radius',
        modes: ['Default'],
        variables: flattenTokens(tokens.radius ?? {}, 'radius'),
      },
    ],
  };
}

function flattenTokens(tree: TokenTree, prefix: string): any[] {
  const result: any[] = [];
  const walk = (node: TokenTree, current: string) => {
    for (const [key, value] of Object.entries(node)) {
      const tokenName = current ? `${current}/${key}` : key;
      if (value && typeof value === 'object' && '$value' in value) {
        result.push({
          name: tokenName,
          type: 'COLOR',
          value: value.$value,
        });
      } else if (value && typeof value === 'object') {
        walk(value, tokenName);
      }
    }
  };
  walk(tree, '');
  return result;
}
