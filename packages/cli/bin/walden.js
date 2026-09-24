#!/usr/bin/env node
import('../dist/index.js').catch((err) => {
  console.error('Erreur au lancement du CLI Walden :', err);
  process.exit(1);
});
