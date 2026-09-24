# Scripts d'automatisation

**Rôle :** Outils exécutables pour maintenir, valider et publier le dépôt `walden-corp`.

---

## Liste des scripts

| Script | Commande | Rôle |
|--------|----------|------|
| `generate-ai-index.ts` | `npm run ai:index` | Génère `meta/ai-index.md` et `meta/search-index.json` |
| `validate-docs.ts` | `npm run docs:validate` | Valide les frontmatters et la structure des documents |
| `export-pdf.ts` | `npm run docs:pdf` | Exporte la documentation en PDF |
| `build-search-index.ts` | `npm run search:build` | Construit l'index de recherche |
| `sync-docs.ts` | `npm run docs:sync` | Synchronise `foundation/` vers `apps/docs-site/content/` |

---

## Dépendances

Tous les scripts sont exécutés via `tsx` :

```bash
npx tsx scripts/<script>.ts
```
---

# Convention
-Langage : TypeScript.
-Encodage : UTF-8.
-Sortie : couleur + logs structurés.
-Code de sortie : 0 = succès, 1 = erreur.

Fin du document.
