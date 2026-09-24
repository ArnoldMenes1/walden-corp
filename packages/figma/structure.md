# Structure du fichier Figma « Walden Corp Design System »

**Version :** 1.0.1
**Fichier cible :** https://figma.com/file/[ID] (privé)

---

## 1. Vue d'ensemble

Le fichier Figma est organisé en **pages** distinctes, chacune couvrant un domaine spécifique du Design System. La navigation se fait par onglet en haut de l'interface Figma.

### Convention de nommage des pages
[Emoji] [Catégorie] — [Sous-catégorie]

Exemples :
- `📄 Cover`
- `📄 Foundations — Color`
- `📄 Components — Primitives`

### Convention de nommage des frames
[Catégorie] / [Nom] / [Contexte]

Exemples :
- `Foundations / Color / Palette primitives`
- `Components / Button / Variants`
- `Components / Button / États`

---

## 2. Page `📄 Cover`

**Rôle :** Point d'entrée visuel + changelog.

**Contenu :**

- Logo Walden Corp.
- Titre : « Walden Corp Design System ».
- Version : `v1.0.1`.
- Date de dernière publication.
- Owner : Designer principal.
- **Changelog** : liste des versions avec résumé des changements.
- Liens vers :
  - la documentation officielle (site) ;
  - le dépôt GitHub ;
  - le package npm.

**Frame :** 1440 × 900 px.

---

## 3. Page `📄 Getting Started`

**Rôle :** Guide d'utilisation de la bibliothèque.

**Contenu :**

- Comment importer la bibliothèque.
- Comment utiliser les variables.
- Comment utiliser les styles.
- Comment utiliser les composants.
- Comment proposer une modification (RFC).

**Frames :**

- `Getting Started / Import`
- `Getting Started / Variables`
- `Getting Started / Styles`
- `Getting Started / Components`
- `Getting Started / Contribution`

---

## 4. Page `📄 Foundations — Color`

**Rôle :** Palette complète, tokens, contrastes WCAG.

**Contenu :**

- Frames par famille :
  - `Foundations / Color / Primitives` — grille de swatches avec noms de variables.
  - `Foundations / Color / Semantic — Light` — tokens sémantiques.
  - `Foundations / Color / Semantic — Dark` — tokens sémantiques sombres.
  - `Foundations / Color / États` — success, warning, error, info.
  - `Foundations / Color / Contrastes WCAG` — tableau de validation.
- Annotations sur chaque swatch.

**Layout :** grille 12 colonnes, gouttière 24, marge 24.

---

## 5. Page `📄 Foundations — Typography`

**Rôle :** Échelle typographique, poids, interlignes, exemples.

**Contenu :**

- Frames :
  - `Foundations / Typography / Display` — XL, LG.
  - `Foundations / Typography / Headings` — H1 à H4.
  - `Foundations / Typography / Body` — LG, MD, SM.
  - `Foundations / Typography / Labels & Captions`
  - `Foundations / Typography / Code`
- Chaque frame affiche :
  - le nom du style ;
  - la taille ;
  - l'interligne ;
  - le poids ;
  - un exemple visuel.

---

## 6. Page `📄 Foundations — Grid`

**Rôle :** Grilles, breakpoints, densités.

**Contenu :**

- Frames :
  - `Foundations / Grid / Breakpoints` — tableau récapitulatif.
  - `Foundations / Grid / Mobile` — grille 4 colonnes.
  - `Foundations / Grid / Tablet` — grille 8 colonnes.
  - `Foundations / Grid / Desktop` — grille 12 colonnes.
  - `Foundations / Grid / Densités` — confortable, compacte, spacieuse.
- Layout rulers activés.

---

## 7. Page `📄 Foundations — Elevation`

**Rôle :** Ombres, z-index, scrims.

**Contenu :**

- Frames :
  - `Foundations / Elevation / Niveaux` — 5 niveaux (0 à 4) avec exemples.
  - `Foundations / Elevation / Z-index` — tableau récapitulatif.
  - `Foundations / Elevation / Scrims` — opacités canoniques.
- Annotations sur chaque niveau.

---

## 8. Page `📄 Foundations — Iconography`

**Rôle :** Tailles, grilles, style.

**Contenu :**

- Frames :
  - `Foundations / Icons / Grille` — grille de référence 24 × 24.
  - `Foundations / Icons / Tailles` — 12, 16, 20, 24, 32, 48, 64 px.
  - `Foundations / Icons / Style` — stroke, terminaisons, coins.
  - `Foundations / Icons / Catalogue` — liste des icônes Lucide utilisées.
- Annotations sur le stroke.

---

## 9. Page `📄 Foundations — Motion`

**Rôle :** Durées, courbes, prototypes.

**Contenu :**

- Frames :
  - `Foundations / Motion / Durées` — tableau (instant, fast, base, medium, slow, long).
  - `Foundations / Motion / Courbes` — visualisation des cubic-bezier.
  - `Foundations / Motion / Transitions` — exemples de transitions.
  - `Foundations / Motion / Prototypes` — prototypes interactifs.
- Préférence `prefers-reduced-motion` documentée.

---

## 10. Page `📄 Components — Primitives`

**Rôle :** Composants atomiques.

**Composants :**

- Button
- Input
- Textarea
- Checkbox
- Radio
- Switch
- Select
- Icon

**Organisation par composant :**

- Frame `Components / [Nom] / Variants` — grille de tous les variants.
- Frame `Components / [Nom] / États` — default, hover, focus, active, disabled, loading.
- Frame `Components / [Nom] / Anatomie` — structure interne annotée.
- Frame `Components / [Nom] / Tokens` — liste des tokens utilisés.
- Frame `Components / [Nom] / Do & Don't` — bons et mauvais usages.

---

## 11. Page `📄 Components — Surfaces`

**Composants :**

- Card
- Panel
- Divider

**Organisation :** identique à `Components — Primitives`.

---

## 12. Page `📄 Components — Feedback`

**Composants :**

- Spinner
- ProgressBar
- Alert
- Toast

**Organisation :** identique à `Components — Primitives`.

---

## 13. Page `📄 Components — Overlays`

**Composants :**

- Modal
- Drawer
- Popover
- Tooltip

**Organisation :** identique à `Components — Primitives`, avec frame supplémentaire :

- `Components / [Nom] / Prototype` — interaction complète.

---

## 14. Page `📄 Components — Navigation`

**Composants :**

- Tabs
- Sidebar
- Breadcrumbs
- Pagination

**Organisation :** identique.

---

## 15. Page `📄 Components — Data`

**Composants :**

- Table
- List
- Tag

**Organisation :** identique.

---

## 16. Page `📄 Components — Layout`

**Composants :**

- Container
- Stack
- Grid

**Organisation :** identique, avec exemples visuels de composition.

---

## 17. Page `📄 Patterns`

**Rôle :** Assemblages UX récurrents.

**Patterns :**

- `Patterns / Dashboard` — Card + Table + Chart.
- `Patterns / Formulaire` — Input + Select + Button.
- `Patterns / Liste` — List + Pagination.

Chaque pattern est un **composant figé**, documenté, réutilisable.

---

## 18. Page `📄 Playground`

**Rôle :** Zone d'assemblage libre pour expérimentation.

**Contenu :**
- Aucune contrainte de structure.
- Non publiée dans la bibliothèque d'équipe.
- Usage interne uniquement.

---

## 19. Page `📄 Archive`

**Rôle :** Conservation des versions précédentes.

**Contenu :**
- Frames archivées par version (`v1.0.0`, `v0.9.0`, etc.).
- Aucune publication.

---

## 20. Convention de nommage des composants

### Composant principal
Button

text

### Propriétés de variant
Variant: primary | secondary | ghost | destructive | link
Size: sm | md | lg
State: default | hover | focus | active | disabled | loading
Icon Start: true | false
Icon End: true | false
Full Width: true | false

text

### Slots exposés
Label
Icon Start
Icon End

text

### Instances

Nommées automatiquement : `Button / primary / md / default`.

---

## 21. Frames standards

Pour chaque composant, créer les frames suivantes :

| Frame | Dimensions | Contenu |
|-------|-----------|---------|
| `Variants` | Auto | Grille de tous les variants |
| `États` | Auto | Tous les états |
| `Anatomie` | 1440 × auto | Structure annotée |
| `Tokens` | Auto | Liste des tokens |
| `Do & Don't` | 1440 × auto | Usages corrects/incorrects |
| `Prototype` (si interactif) | 1440 × auto | Prototype complet |

---

## 22. Annotations

Utiliser le plugin **Annotations** ou les annotations natives Figma pour :

- identifier les tokens utilisés ;
- signaler les règles de composition ;
- noter les cas limites ;
- référencer la documentation externe.

---

## 23. Publication

- **Fréquence :** à chaque version npm majeure ou mineure.
- **Processus :**
  1. Mettre à jour les variables.
  2. Mettre à jour les styles.
  3. Mettre à jour les composants.
  4. Mettre à jour la page `Cover` (changelog).
  5. Publier via `Assets → Publish library`.
  6. Notifier les équipes.

---

## 24. Contrôles qualité

Avant chaque publication :

- [ ] Aucune valeur en dur dans les composants.
- [ ] Tous les styles publiés.
- [ ] Toutes les variables publiées.
- [ ] Chaque composant a une description.
- [ ] Chaque composant a une frame `Do & Don't`.
- [ ] Les noms sont alignés avec React.
- [ ] Le changelog est à jour.
- [ ] La version est alignée.

---

*Fin du document.*
