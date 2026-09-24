# Inventaire des composants Figma

**Version :** 1.0.1
**Nombre total :** 27 composants
**Alignement :** 1:1 avec `@waldencorp/ds-react`

---

## 1. Vue synthétique

| Catégorie | Nombre | Composants |
|-----------|--------|------------|
| Primitives | 8 | Button, Input, Textarea, Checkbox, Radio, Switch, Select, Icon |
| Surfaces | 3 | Card, Panel, Divider |
| Feedback | 4 | Spinner, ProgressBar, Alert, Toast |
| Overlays | 4 | Modal, Drawer, Popover, Tooltip |
| Navigation | 4 | Tabs, Sidebar, Breadcrumbs, Pagination |
| Data | 3 | Table, List, Tag |
| Layout | 3 | Container, Stack, Grid |
| **Total** | **27** | |

---

## 2. Primitives

### 2.1 Button

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Button` |
| Page | `Components — Primitives` |
| Variants | `Variant` (5), `Size` (3), `State` (6), `Icon Start` (2), `Icon End` (2), `Full Width` (2) |
| Slots | `Label`, `Icon Start`, `Icon End` |
| Tokens | `color/action/primary`, `color/action/primary-hover`, `color/action/primary-active`, `color/text/inverse`, `radius/md`, `typography/label`, `spacing/2`, `spacing/3`, `spacing/4`, `spacing/5` |
| Prototype | Oui (hover, active, focus) |
| Composant React | `@waldencorp/ds-react/Button` |

### 2.2 Input

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Input` |
| Variants | `State` (default, focus, error, disabled), `Size` (3), `Icon Start` (2), `Icon End` (2) |
| Slots | `Label`, `Helper`, `Error`, `Icon Start`, `Icon End` |
| Tokens | `color/border/default`, `color/border/focus`, `color/border/error`, `color/surface/base`, `radius/md`, `typography/body-md`, `spacing/3`, `spacing/4` |
| Prototype | Oui (focus, erreur) |

### 2.3 Textarea

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Textarea` |
| Variants | `State` (default, focus, error, disabled) |
| Slots | `Label`, `Helper`, `Error`, `Count` |
| Tokens | Idem Input + `radius/md` |

### 2.4 Checkbox

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Checkbox` |
| Variants | `State` (default, checked, indeterminate, disabled), `Error` (true, false) |
| Slots | `Label`, `Helper`, `Error` |
| Tokens | `color/action/primary`, `color/border/default`, `radius/xs`, `typography/body-sm` |

### 2.5 Radio

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Radio` |
| Variants | `State` (default, checked, disabled) |
| Slots | `Label`, `Helper` |
| Tokens | `color/action/primary`, `color/border/default`, `radius/full`, `typography/body-sm` |

### 2.6 Switch

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Switch` |
| Variants | `State` (off, on, disabled) |
| Slots | `Label`, `Helper` |
| Tokens | `color/action/primary`, `color/border/default`, `radius/full`, `elevation/1` |

### 2.7 Select

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Select` |
| Variants | `State` (default, focus, error, disabled), `Size` (3) |
| Slots | `Label`, `Helper`, `Error`, `Icon Start`, `Chevron` |
| Tokens | Idem Input + `color/text/secondary` |

### 2.8 Icon

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Icon` |
| Variants | `Size` (7 : xs, sm, md, lg, xl, 2xl, 3xl) |
| Slots | `Glyph` |
| Tokens | `icon/size/*` |
| Bibliothèque | Lucide Icons |

---

## 3. Surfaces

### 3.1 Card

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Card` |
| Variants | `Variant` (default, outlined, elevated), `Padding` (4), `Has Header` (2), `Has Footer` (2), `Interactive` (2) |
| Slots | `Header`, `Body`, `Footer` |
| Tokens | `color/surface/raised`, `color/border/subtle`, `radius/lg`, `elevation/1`, `spacing/4`, `spacing/6`, `spacing/8` |

### 3.2 Panel

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Panel` |
| Variants | `Variant` (default, sunken, elevated), `Padding` (4) |
| Slots | `Header`, `Body`, `Footer` |
| Tokens | `color/surface/base`, `color/surface/sunken`, `radius/lg`, `elevation/2` |

### 3.3 Divider

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Divider` |
| Variants | `Orientation` (horizontal, vertical), `Variant` (subtle, default, strong), `Labeled` (2) |
| Slots | `Label` (si labeled) |
| Tokens | `color/border/subtle`, `color/border/default`, `color/border/strong` |

---

## 4. Feedback

### 4.1 Spinner

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Spinner` |
| Variants | `Size` (4 : xs, sm, md, lg) |
| Tokens | `motion/duration/base` |
| Prototype | Rotation continue |

### 4.2 ProgressBar

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `ProgressBar` |
| Variants | `Size` (3), `Variant` (4 : default, success, warning, error), `Show Value` (2) |
| Slots | `Value` |
| Tokens | `color/action/primary`, `color/state/*`, `radius/full`, `motion/duration/slow` |

### 4.3 Alert

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Alert` |
| Variants | `Variant` (4 : info, success, warning, error), `Dismissible` (2) |
| Slots | `Icon`, `Title`, `Body`, `Actions`, `Close` |
| Tokens | `color/state/*`, `color/state/*-subtle`, `radius/md`, `spacing/4` |

### 4.4 Toast

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Toast` |
| Variants | `Variant` (4 : info, success, warning, error), `Dismissible` (2) |
| Slots | `Title`, `Description`, `Close` |
| Tokens | `color/surface/overlay`, `elevation/3`, `radius/md`, `color/state/*` |
| Prototype | Animation d'entrée/sortie |

---

## 5. Overlays

### 5.1 Modal

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Modal` |
| Variants | `Size` (4 : sm, md, lg, xl), `Persistent` (2) |
| Slots | `Title`, `Body`, `Footer`, `Close` |
| Tokens | `color/surface/overlay`, `elevation/3`, `radius/xl`, `color/scrim` |
| Prototype | Ouverture/fermeture, focus trap |

### 5.2 Drawer

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Drawer` |
| Variants | `Position` (4 : left, right, top, bottom), `Size` (3), `Persistent` (2) |
| Slots | `Title`, `Body`, `Footer`, `Close` |
| Tokens | Idem Modal + `motion/duration/medium` |
| Prototype | Glissement d'entrée/sortie |

### 5.3 Popover

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Popover` |
| Variants | `Placement` (4 : top, bottom, left, right) |
| Slots | `Trigger`, `Content` |
| Tokens | `color/surface/overlay`, `elevation/2`, `radius/lg` |
| Prototype | Ouverture au clic, fermeture au clic extérieur |

### 5.4 Tooltip

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Tooltip` |
| Variants | `Placement` (4) |
| Slots | `Trigger`, `Content` |
| Tokens | `color/surface/inverse`, `color/text/inverse`, `radius/sm`, `elevation/2` |
| Prototype | Apparition au survol/focus |

---

## 6. Navigation

### 6.1 Tabs

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Tabs` |
| Variants | `State` (default, active, disabled) |
| Slots | `Icon`, `Label`, `Panel` |
| Tokens | `color/action/primary`, `color/text/secondary`, `color/border/subtle` |

### 6.2 Sidebar

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Sidebar` |
| Variants | `Collapsed` (2) |
| Slots | `Header`, `Item`, `Badge`, `Footer` |
| Tokens | `color/surface/sunken`, `color/surface/base`, `color/action/primary`, `radius/md` |

### 6.3 Breadcrumbs

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Breadcrumbs` |
| Variants | `Items` (2-5) |
| Slots | `Item`, `Separator` |
| Tokens | `color/text/link`, `color/text/secondary`, `typography/body-sm` |

### 6.4 Pagination

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Pagination` |
| Variants | `State` (default, active, disabled), `Dots` (2) |
| Slots | `Page`, `Prev`, `Next` |
| Tokens | `color/action/primary`, `color/text/disabled`, `radius/md` |

---

## 7. Data

### 7.1 Table

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Table` |
| Variants | `Density` (2 : comfortable, compact), `Clickable Row` (2) |
| Slots | `Header`, `Row`, `Cell`, `Empty` |
| Tokens | `color/surface/sunken`, `color/border/subtle`, `typography/label`, `spacing/3` |

### 7.2 List

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `List` |
| Variants | `Variant` (3 : default, bordered, divided), `Selected` (2) |
| Slots | `Leading`, `Title`, `Description`, `Trailing` |
| Tokens | `color/surface/base`, `color/surface/sunken`, `radius/md` |

### 7.3 Tag

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Tag` |
| Variants | `Variant` (5 : default, success, warning, error, info), `Size` (2), `Removable` (2) |
| Slots | `Icon`, `Label`, `Remove` |
| Tokens | `color/state/*`, `color/state/*-subtle`, `radius/full`, `typography/micro` |

---

## 8. Layout

### 8.1 Container

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Container` |
| Variants | `Size` (5 : sm, md, lg, xl, full), `Padding` (4 : none, sm, md, lg) |
| Slots | `Content` |
| Tokens | `spacing/3`, `spacing/4`, `spacing/6`, `spacing/8` |

### 8.2 Stack

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Stack` |
| Variants | `Direction` (2), `Gap` (10), `Align` (5), `Justify` (6), `Wrap` (2) |
| Slots | `Child` |
| Tokens | `spacing/*` |

### 8.3 Grid

| Attribut | Valeur |
|----------|--------|
| Nom Figma | `Grid` |
| Variants | `Columns` (responsive : 4/8/12), `Gap` (10) |
| Slots | `Item` |
| Tokens | `spacing/*` |

---

## 9. Correspondance Figma ↔ React

| Figma | React |
|-------|-------|
| `Button` | `<Button>` |
| `Input` | `<Input>` |
| `Textarea` | `<Textarea>` |
| `Checkbox` | `<Checkbox>` |
| `Radio` | `<Radio>` |
| `Switch` | `<Switch>` |
| `Select` | `<Select>` |
| `Icon` | `<Icon>` |
| `Card` | `<Card>` |
| `Panel` | `<Panel>` |
| `Divider` | `<Divider>` |
| `Spinner` | `<Spinner>` |
| `ProgressBar` | `<ProgressBar>` |
| `Alert` | `<Alert>` |
| `Toast` | `useToast()` |
| `Modal` | `<Modal>` |
| `Drawer` | `<Drawer>` |
| `Popover` | `<Popover>` |
| `Tooltip` | `<Tooltip>` |
| `Tabs` | `<Tabs>` |
| `Sidebar` | `<Sidebar>` |
| `Breadcrumbs` | `<Breadcrumbs>` |
| `Pagination` | `<Pagination>` |
| `Table` | `<Table>` |
| `List` | `<List>` |
| `Tag` | `<Tag>` |
| `Container` | `<Container>` |
| `Stack` | `<Stack>` |
| `Grid` | `<Grid>` |

**Total :** 29 correspondances (27 composants + 2 associations indirectes : Toast via hook, Tabs via composition).

---

## 10. Ordre de création recommandé

1. Variables (`Primitives / Color`, `Semantic / Color`, `Spacing`, `Radius`)
2. Styles (couleur, texte, effet, grille)
3. Foundations (Color, Typography, Grid, Elevation, Iconography, Motion)
4. Primitives (8 composants)
5. Surfaces (3)
6. Feedback (4)
7. Overlays (4)
8. Navigation (4)
9. Data (3)
10. Layout (3)
11. Patterns (3)
12. Publication

---

## 11. Checklist par composant

Avant de publier un composant :

- [ ] Nom identique à React.
- [ ] Variants identiques aux props.
- [ ] Slots exposés correctement.
- [ ] Tokens exclusivement sémantiques.
- [ ] Description rédigée.
- [ ] Annotations ajoutées.
- [ ] Prototype (si interactif).
- [ ] Frame `Do & Don't` créée.
- [ ] Frame `Anatomie` créée.
- [ ] Frame `Tokens` créée.
- [ ] Alignement vérifié avec le composant React.

---

*Fin du document.*
