# Conventions de nommage

**Version :** 1.0
**Portée :** Dépôt `walden-corp`

---

## 1. Règles générales

- **Langue des noms de fichiers** : anglais (kebab-case).
- **Langue du contenu** : français (documentation interne).
- **Encodage** : UTF-8 sans BOM.
- **Fin de ligne** : LF (Unix).
- **Indentation** : 2 espaces (markdown, JSON, YAML, TS).

---

## 2. Noms de fichiers

### Règle générale
mot1-mot2-mot3.ext


- **kebab-case** exclusivement (sauf exceptions ci-dessous).
- **Minuscules uniquement**.
- **Pas d'espaces**, pas d'accents, pas de caractères spéciaux.
- **Longueur** : entre 3 et 60 caractères.

### Exemples conformes
design-principles.md
foundation-spec.md
ai-governance.md
third-party-licenses.md


### Exemples non conformes
Design_Principles.md ✗ (PascalCase + underscore)
foundation spec.md ✗ (espace)
fondation-spécification.md ✗ (accents)
principles v2.md ✗ (espace + version dans le nom)


### Exceptions

| Cas | Convention | Exemple |
|-----|-----------|---------|
| Fichiers ADR | `NNNN-slug.md` | `0001-choix-react.md` |
| Fichiers RFC | `NNNN-slug.md` | `0042-versioning-tokens.md` |
| Composants React | PascalCase (dossier) | `Button/` |
| Fichiers TypeScript composants | PascalCase | `Button.tsx` |
| Fichiers CSS composants | PascalCase | `Button.css` |
| Fichiers de test | `.test.tsx` suffixe | `Button.test.tsx` |
| Fichiers Storybook | `.stories.tsx` suffixe | `Button.stories.tsx` |

---

## 3. Noms de dossiers

- **kebab-case**.
- **Minuscules**.
- Pas d'abréviation non documentée.

### Exemples conformes
design-system/
architecture/
ai/


### Exceptions

- `ISSUE_TEMPLATE/` (convention GitHub, majuscules).
- `DISCUSSION_TEMPLATE/` (convention GitHub, majuscules).
- `docs-site/` (kebab-case conservé).
- Dossiers de composants React : `Button/`, `Card/`, `Modal/`.

---

## 4. Noms de tokens

### Règle générale
<niveau>.<domaine>.<élément>[.<variante>][.<état>]


- Séparateur : `.` (point).
- Minuscules.

### Exemples
primitive.blue.950
color.text.primary
color.action.primary.hover
spacing.4
radius.md
elevation.2
motion.duration.base
motion.easing.standard
typography.heading.1


---

## 5. Noms de composants

### Fichiers

- **PascalCase** pour les composants : `Button`, `Card`, `Modal`.
- **PascalCase** pour les fichiers associés : `Button.tsx`, `Button.css`, `Button.test.tsx`.

### Classes CSS

- **Préfixe `wc-`** (Walden Corp).
- **kebab-case** après le préfixe.
wc-button
wc-button__label
wc-button--primary
wc-button--loading


**Convention BEM :**
- Bloc : `wc-<composant>`
- Élément : `wc-<composant>__<élément>`
- Modificateur : `wc-<composant>--<modificateur>`

### Tokens CSS

- **Préfixe `--`**.
- **kebab-case**.
--color-action-primary
--spacing-4
--radius-md
--elevation-2


---

## 6. Noms de branches Git

### Convention
<type>/<scope>/<description>


**Types autorisés :**

| Type | Usage |
|------|-------|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction |
| `docs` | Documentation |
| `chore` | Maintenance |
| `refactor` | Refactoring |
| `test` | Tests |
| `rfc` | Proposition RFC |
| `adr` | Décision ADR |
| `policy` | Politique |
| `standard` | Standard |

**Exemples :**
feat/ds-react/button-loading-state
fix/ds-tokens/color-primary-typo
docs/foundation/design-principles-typo
rfc/0050-new-typography
adr/0012-monorepo-vs-multi-repo


---

## 7. Messages de commit

**Convention :** [Conventional Commits](https://www.conventionalcommits.org/).

### Format
<type>(<scope>): <description>

[corps optionnel]

[footer optionnel]


### Types autorisés

- `feat` — nouvelle fonctionnalité
- `fix` — correction
- `docs` — documentation
- `chore` — maintenance
- `refactor` — refactoring
- `test` — tests
- `style` — style (sans changement de logique)
- `perf` — performance
- `build` — build
- `ci` — CI/CD

### Exemples
feat(ds-react): add loading state to Button
fix(ds-tokens): correct primary color hex value
docs(foundation): clarify accessibility standard
chore(repo): update gitignore


### Breaking changes

Ajouter `!` après le type et `BREAKING CHANGE:` dans le footer.
feat(ds-react)!: rename Button variant "secondary" to "outline"

BREAKING CHANGE: la variante "secondary" est renommée "outline".

text

---

## 8. Noms de versions

**Convention :** Semantic Versioning (SemVer).
MAJOR.MINOR.PATCH


Exemple : `1.0.1`

Voir `policies/versioning.md`.

---

## 9. Noms de fichiers d'assets

- **kebab-case**.
- **Pas d'espaces**.
- **Dimensions** dans le nom si pertinent.
logo-walden-primary.svg
logo-walden-monochrome.svg
icon-search-24.svg
illustration-empty-state.svg


---

## 10. Règles de renommage

Tout renommage de fichier ou dossier majeur suit le processus **RFC** (`decisions/rfc/`).

---

*Fin du document.*
