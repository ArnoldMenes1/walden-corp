# Spécification — Bibliothèque Figma Walden Corp

**Version :** 1.0.1
**Statut :** Spécification officielle
**Source de vérité :** Foundation Specification v1.0
**Format cible :** Fichier Figma unique « Walden Corp Design System »

---

## 1. Objectif

Ce document spécifie **l'intégralité** de la bibliothèque Figma du Design System Walden Corp : architecture du fichier, variables, styles, composants, variants, auto-layout, documentation intégrée, publication et versioning.

Il constitue la **référence unique** pour les designers chargés de construire, maintenir et publier la bibliothèque Figma.

---

## 2. Portée

Le fichier Figma couvre :

- les **fondations** : couleur, typographie, grille, élévation, iconographie, motion ;
- les **composants** : 27 composants alignés sur la bibliothèque React ;
- les **patterns** : dashboard, formulaire, liste ;
- la **documentation intégrée** : descriptions, annotations, prototypes.

Il ne contient **aucune maquette produit** : il est exclusivement dédié au Design System.

---

## 3. Principes directeurs

1. **Alignement strict avec le code** : chaque composant Figma correspond à un composant React (`@waldencorp/ds-react`).
2. **Tokens uniques** : les variables Figma proviennent exclusivement de `tokens.json`.
3. **Documentation intégrée** : chaque composant est documenté dans Figma (description, annotations, prototype).
4. **Publication cadencée** : la bibliothèque est publiée aux mêmes versions que les packages npm.
5. **Préparation à l'IA** : les noms de composants et de tokens sont stables, permettant aux agents IA de cibler Figma.

---

## 4. Architecture du fichier

Le fichier Figma est nommé **« Walden Corp Design System »** et contient les pages suivantes :

| Page | Rôle |
|------|------|
| `📄 Cover` | Couverture, changelog, version, propriétaire |
| `📄 Getting Started` | Guide d'utilisation de la bibliothèque |
| `📄 Foundations — Color` | Palette, tokens, contrastes WCAG |
| `📄 Foundations — Typography` | Échelle, poids, interlignes |
| `📄 Foundations — Grid` | Grilles, breakpoints, densités |
| `📄 Foundations — Elevation` | Ombres, z-index, scrims |
| `📄 Foundations — Iconography` | Tailles, grilles, style |
| `📄 Foundations — Motion` | Durées, courbes, prototypes |
| `📄 Components — Primitives` | Button, Input, Textarea, Checkbox, Radio, Switch, Select, Icon |
| `📄 Components — Surfaces` | Card, Panel, Divider |
| `📄 Components — Feedback` | Spinner, ProgressBar, Alert, Toast |
| `📄 Components — Overlays` | Modal, Drawer, Popover, Tooltip |
| `📄 Components — Navigation` | Tabs, Sidebar, Breadcrumbs, Pagination |
| `📄 Components — Data` | Table, List, Tag |
| `📄 Components — Layout` | Container, Stack, Grid |
| `📄 Patterns` | Dashboard, Formulaire, Liste |
| `📄 Playground` | Zone d'assemblage libre |
| `📄 Archive` | Versions précédentes |

Chaque page utilise une **grille 12 colonnes / gouttière 24 / marge 24**.

---

## 5. Variables Figma

Le fichier expose **10 collections** de variables, décrites en détail dans `packages/ds-tokens/figma/variables.json`.

| # | Collection | Modes | Nombre de variables |
|---|-----------|-------|---------------------|
| 1 | Primitives / Color | Light | 40 |
| 2 | Semantic / Color | Light, Dark | 40 |
| 3 | Spacing | Default | 13 |
| 4 | Radius | Default | 8 |
| 5 | Typography | Default | ~25 |
| 6 | Elevation | Default | 5 |
| 7 | Motion | Default | 10 |
| 8 | Breakpoints | Default | 6 |
| 9 | Opacity | Default | 10 |
| 10 | Z-Index | Default | 8 |

**Règles d'utilisation :**
- Les composants Figma **ne référencent jamais** une valeur en dur.
- Toute valeur provient d'une variable.
- Les variables `Primitives` ne sont utilisées que par les `Semantic`.
- Les composants consomment exclusivement les `Semantic`.

---

## 6. Styles Figma

### 6.1 Styles de couleur

Organisation en arborescence :
Color / Text / Primary
Color / Text / Secondary
Color / Text / Tertiary
Color / Text / Disabled
Color / Text / Inverse
Color / Text / Link

Color / Surface / Base
Color / Surface / Raised
Color / Surface / Sunken
Color / Surface / Overlay
Color / Surface / Disabled
Color / Surface / Inverse

Color / Border / Subtle
Color / Border / Default
Color / Border / Strong
Color / Border / Focus
Color / Border / Error

Color / Action / Primary
Color / Action / Primary-Hover
Color / Action / Primary-Active
Color / Action / Primary-Disabled
Color / Action / Secondary
Color / Action / Destructive

Color / State / Success
Color / State / Success-Subtle
Color / State / Warning
Color / State / Warning-Subtle
Color / State / Error
Color / State / Error-Subtle
Color / State / Info
Color / State / Info-Subtle

```text

Chaque style référence une variable `Semantic / Color`.
```

### 6.2 Styles de texte
Typography / Display XL
Typography / Display LG
Typography / Heading 1
Typography / Heading 2
Typography / Heading 3
Typography / Heading 4
Typography / Body LG
Typography / Body MD
Typography / Body SM
Typography / Label
Typography / Caption
Typography / Micro
Typography / Code

```text

Famille : **Inter** (Regular, Medium, SemiBold).
Famille monospace : **JetBrains Mono** (Regular).
```

### 6.3 Styles d'effet
Elevation / 0
Elevation / 1
Elevation / 2
Elevation / 3
Elevation / 4

Chaque style référence une variable `Elevation`.

### 6.4 Styles de grille
Grid / Mobile (4 colonnes, gouttière 16, marge 16)
Grid / Tablet (8 colonnes, gouttière 24, marge 24)
Grid / Desktop (12 colonnes, gouttière 24, marge 24)

---

## 7. Composants

### 7.1 Principe

Chaque composant Figma :

- porte le **même nom** que le composant React ;
- expose les **mêmes variants** que les props React ;
- utilise **exclusivement** les variables sémantiques ;
- inclut une **documentation intégrée** (description + annotations) ;
- propose un **prototype** pour les états interactifs.

### 7.2 Convention de nommage

- **Composant principal** : `Button`
- **Variants** : propriétés `Variant`, `Size`, `State`, `Icon Start`, `Icon End`, `Full Width`
- **Slots exposés** : `Label`, `Icon Start`, `Icon End`
- **Instances** : nommées automatiquement d'après les variants sélectionnés

### 7.3 Exemple : `Button`

| Propriété | Valeurs |
|-----------|---------|
| Variant | primary, secondary, ghost, destructive, link |
| Size | sm, md, lg |
| State | default, hover, focus, active, disabled, loading |
| Icon Start | true, false |
| Icon End | true, false |
| Full Width | true, false |

- **Auto-layout** : horizontal, gap `spacing/2`.
- **Padding** : `spacing/3` (sm), `spacing/4` (md), `spacing/5` (lg).
- **Tokens** : `color/action/primary`, `color/action/primary-hover`, `color/text/inverse`, `radius/md`, `typography/label`.

### 7.4 Liste complète des composants

Voir `packages/figma/components-inventory.md`.

---

## 8. Documentation intégrée

### 8.1 Description (champ natif Figma)

Chaque composant contient une description au format :

```markdown
# [Nom du composant]

[Description courte]

## Quand l'utiliser

- …

## Quand ne pas l'utiliser

- …

## Accessibilité

- …

## Références

- Foundation Specification v1.0
- Document 14 — Component Specification
```
---
8.2 Annotations
Chaque instance clé porte des annotations (via plugin « Annotations ») qui précisent :

-les tokens utilisés ;
-les règles de composition ;
-les cas limites.

### 8.3 Prototype
Chaque composant interactif possède un prototype reliant les états :

default → hover : motion/duration/base, easing standard

hover → active : motion/duration/fast

Focus : outline 2 px, offset 2 px

## 9. Publication et versioning
### 9.1 Publication
Fichier source : conservé dans l'espace Figma de Walden Corp (accès restreint).

Publication : via Assets → Publish library.

Consommation : par les équipes design via la bibliothèque d'équipe.

### 9.2 Versioning
Version Figma : alignée sur @waldencorp/ds-react (SemVer).

Changelog : maintenu dans la page Cover.

Versions nommées : v1.0.1, v1.1.0, etc.

Alias de variables : utilisés pour faciliter les migrations futures.

## 10. Préparation à l'IA
Noms stables : identiques entre Figma, React, tokens.

Description structurée : parsable par un agent IA.

Exportable en JSON : via plugin Tokens Studio.

Référençable par URL : chaque composant possède une URL stable.

## 11. Gouvernance
Owner : Designer principal du Design System.

Contributeurs : designers produit (via RFC).

Validation : comité design.

Publication : par l'Owner uniquement.

## 12. Checklist de conformité
□ Toutes les variables proviennent de tokens.json.
□ Aucune valeur en dur dans les composants.
□ Chaque composant a une description.
□ Chaque composant interactif a un prototype.
□ Les noms sont identiques à React.
□ Les variants correspondent aux props React.
□ Les styles de couleur/text/effet sont publiés.
□ Le changelog est à jour.
□ La version Figma est alignée sur la version npm.
13. Références
Foundation Specification v1.0

Document 14 — Component Specification

packages/figma/structure.md

packages/figma/components-inventory.md

packages/ds-tokens/figma/variables.json

*Fin du document.*
