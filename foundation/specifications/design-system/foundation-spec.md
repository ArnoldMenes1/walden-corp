# Phase 1 — Canonisation du système

## Document 21 — Foundation Specification v1.0

**Statut :** Source unique de vérité (Single Source of Truth)
**Classification :** Fondamental — remplace et consolide les valeurs chiffrées de tous les documents précédents

---

## Préambule

### Rôle de ce document

Le présent document constitue la **spécification canonique** de toutes les fondations chiffrées du Design System Walden Corp. Il est la **source unique de vérité** à partir de laquelle sont générés :

- les Design Tokens (`tokens.json`) ;
- les variables CSS ;
- les variables Figma ;
- la configuration Tailwind ;
- les thèmes React, Flutter, Android, iOS ;
- tous les composants.

Aucune valeur utilisée dans une interface Walden Corp ne peut être définie ailleurs que dans ce document. En cas de divergence entre ce document et un autre, **ce document prime**.

### Portée

Ce document consolide et remplace :

- le Color System branding v1.0 (produit en amont) ;
- le Document 9 — Color System (doctrinal) ;
- le Document 10 — Typography System (doctrinal) ;
- le Document 11 — Grid & Spacing System (doctrinal) ;
- le Document 12 — Elevation & Shadows (doctrinal) ;
- le Document 13 — Iconography & Illustration (doctrinal).

Il ne remplace pas les documents doctrinaux, qui restent la référence pour les règles et principes. Il les complète en fixant les **valeurs canoniques**.

---

# Partie 1 — Couleurs

## 1.1 Palette primaire

| Token primitif | Nom | HEX | RGB | HSL | CMYK |
|----------------|-----|-----|-----|-----|------|
| `primitive.blue.950` | Midnight Blue (Primary) | `#0F2052` | `rgb(15, 32, 82)` | `hsl(225, 69%, 19%)` | C82 M61 Y0 K68 |
| `primitive.blue.800` | Primary Light | `#1E3A8A` | `rgb(30, 58, 138)` | `hsl(224, 64%, 33%)` | C78 M58 Y0 K46 |
| `primitive.blue.990` | Primary Dark | `#081331` | `rgb(8, 19, 49)` | `hsl(224, 72%, 11%)` | C84 M61 Y0 K81 |
| `primitive.silver.300` | Silver (Secondary) | `#C0C0C0` | `rgb(192, 192, 192)` | `hsl(0, 0%, 75%)` | C0 M0 Y0 K25 |
| `primitive.silver.200` | Silver Light | `#E4E4E7` | `rgb(228, 228, 231)` | `hsl(240, 6%, 90%)` | C1 M1 Y0 K9 |
| `primitive.silver.400` | Silver Dark | `#A1A1AA` | `rgb(161, 161, 170)` | `hsl(240, 5%, 65%)` | C5 M5 Y0 K33 |
| `primitive.black.900` | Deep Black (Neutral Dark) | `#1C1C1E` | `rgb(28, 28, 30)` | `hsl(240, 3%, 11%)` | C7 M7 Y0 K88 |
| `primitive.white.0` | White (Neutral Light) | `#FFFFFF` | `rgb(255, 255, 255)` | `hsl(0, 0%, 100%)` | C0 M0 Y0 K0 |

## 1.2 Palette de gris

| Token primitif | Nom | HEX | RGB | HSL |
|----------------|-----|-----|-----|-----|
| `primitive.gray.50` | Gray 50 | `#FAFAFA` | `rgb(250, 250, 250)` | `hsl(0, 0%, 98%)` |
| `primitive.gray.100` | Gray 100 | `#F4F4F5` | `rgb(244, 244, 245)` | `hsl(240, 5%, 96%)` |
| `primitive.gray.200` | Gray 200 | `#E4E4E7` | `rgb(228, 228, 231)` | `hsl(240, 6%, 90%)` |
| `primitive.gray.300` | Gray 300 | `#D4D4D8` | `rgb(212, 212, 216)` | `hsl(240, 5%, 84%)` |
| `primitive.gray.400` | Gray 400 | `#A1A1AA` | `rgb(161, 161, 170)` | `hsl(240, 5%, 65%)` |
| `primitive.gray.500` | Gray 500 | `#71717A` | `rgb(113, 113, 122)` | `hsl(240, 4%, 46%)` |
| `primitive.gray.600` | Gray 600 | `#52525B` | `rgb(82, 82, 91)` | `hsl(240, 4%, 34%)` |
| `primitive.gray.700` | Gray 700 | `#3F3F46` | `rgb(63, 63, 70)` | `hsl(240, 5%, 26%)` |
| `primitive.gray.800` | Gray 800 | `#27272A` | `rgb(39, 39, 42)` | `hsl(240, 4%, 16%)` |
| `primitive.gray.900` | Gray 900 | `#18181B` | `rgb(24, 24, 27)` | `hsl(240, 6%, 10%)` |
| `primitive.gray.950` | Gray 950 | `#0F0F11` | `rgb(15, 15, 17)` | `hsl(240, 6%, 6%)` |

## 1.3 Couleurs d'état

### Success

| Token primitif | Nom | HEX | RGB | HSL |
|----------------|-----|-----|-----|-----|
| `primitive.green.700` | Success | `#15803D` | `rgb(21, 128, 61)` | `hsl(142, 72%, 29%)` |
| `primitive.green.100` | Success Light | `#DCFCE7` | `rgb(220, 252, 231)` | `hsl(141, 84%, 93%)` |
| `primitive.green.800` | Success Dark | `#166534` | `rgb(22, 101, 52)` | `hsl(143, 64%, 24%)` |

### Warning

| Token primitif | Nom | HEX | RGB | HSL |
|----------------|-----|-----|-----|-----|
| `primitive.amber.700` | Warning | `#B45309` | `rgb(180, 83, 9)` | `hsl(26, 90%, 37%)` |
| `primitive.amber.100` | Warning Light | `#FEF3C7` | `rgb(254, 243, 199)` | `hsl(48, 96%, 89%)` |
| `primitive.amber.800` | Warning Dark | `#92400E` | `rgb(146, 64, 14)` | `hsl(26, 83%, 31%)` |

### Error

| Token primitif | Nom | HEX | RGB | HSL |
|----------------|-----|-----|-----|-----|
| `primitive.red.700` | Error | `#B91C1C` | `rgb(185, 28, 28)` | `hsl(0, 74%, 42%)` |
| `primitive.red.100` | Error Light | `#FEE2E2` | `rgb(254, 226, 226)` | `hsl(0, 93%, 94%)` |
| `primitive.red.800` | Error Dark | `#991B1B` | `rgb(153, 27, 27)` | `hsl(0, 70%, 35%)` |

### Info

| Token primitif | Nom | HEX | RGB | HSL |
|----------------|-----|-----|-----|-----|
| `primitive.blue.info` | Info | `#1D4ED8` | `rgb(29, 78, 216)` | `hsl(224, 76%, 48%)` |
| `primitive.blue.info.light` | Info Light | `#DBEAFE` | `rgb(219, 234, 254)` | `hsl(214, 95%, 93%)` |
| `primitive.blue.info.dark` | Info Dark | `#1E40AF` | `rgb(30, 64, 175)` | `hsl(224, 71%, 40%)` |

## 1.4 Tokens sémantiques — Thème clair

### Texte

| Token | Référence | HEX |
|-------|-----------|-----|
| `color.text.primary` | `primitive.black.900` | `#1C1C1E` |
| `color.text.secondary` | `primitive.gray.500` | `#71717A` |
| `color.text.tertiary` | `primitive.gray.400` | `#A1A1AA` |
| `color.text.disabled` | `primitive.gray.300` | `#D4D4D8` |
| `color.text.inverse` | `primitive.white.0` | `#FFFFFF` |
| `color.text.link` | `primitive.blue.950` | `#0F2052` |

### Surfaces

| Token | Référence | HEX |
|-------|-----------|-----|
| `color.surface.base` | `primitive.white.0` | `#FFFFFF` |
| `color.surface.raised` | `primitive.white.0` | `#FFFFFF` |
| `color.surface.sunken` | `primitive.gray.50` | `#FAFAFA` |
| `color.surface.overlay` | `primitive.white.0` | `#FFFFFF` |
| `color.surface.disabled` | `primitive.gray.100` | `#F4F4F5` |
| `color.surface.inverse` | `primitive.black.900` | `#1C1C1E` |

### Bordures

| Token | Référence | HEX |
|-------|-----------|-----|
| `color.border.subtle` | `primitive.gray.200` | `#E4E4E7` |
| `color.border.default` | `primitive.gray.300` | `#D4D4D8` |
| `color.border.strong` | `primitive.gray.400` | `#A1A1AA` |
| `color.border.focus` | `primitive.blue.950` | `#0F2052` |
| `color.border.error` | `primitive.red.700` | `#B91C1C` |

### Actions

| Token | Référence | HEX |
|-------|-----------|-----|
| `color.action.primary` | `primitive.blue.950` | `#0F2052` |
| `color.action.primary.hover` | `primitive.blue.800` | `#1E3A8A` |
| `color.action.primary.active` | `primitive.blue.990` | `#081331` |
| `color.action.primary.disabled` | `primitive.gray.300` | `#D4D4D8` |
| `color.action.secondary` | `primitive.white.0` | `#FFFFFF` |
| `color.action.secondary.border` | `primitive.gray.300` | `#D4D4D8` |
| `color.action.destructive` | `primitive.red.700` | `#B91C1C` |

### États sémantiques

| Token | Référence | HEX |
|-------|-----------|-----|
| `color.state.success` | `primitive.green.700` | `#15803D` |
| `color.state.success.subtle` | `primitive.green.100` | `#DCFCE7` |
| `color.state.warning` | `primitive.amber.700` | `#B45309` |
| `color.state.warning.subtle` | `primitive.amber.100` | `#FEF3C7` |
| `color.state.error` | `primitive.red.700` | `#B91C1C` |
| `color.state.error.subtle` | `primitive.red.100` | `#FEE2E2` |
| `color.state.info` | `primitive.blue.info` | `#1D4ED8` |
| `color.state.info.subtle` | `primitive.blue.info.light` | `#DBEAFE` |

## 1.5 Tokens sémantiques — Thème sombre

### Texte

| Token | Référence | HEX |
|-------|-----------|-----|
| `color.text.primary.dark` | `primitive.gray.50` | `#FAFAFA` |
| `color.text.secondary.dark` | `primitive.gray.400` | `#A1A1AA` |
| `color.text.tertiary.dark` | `primitive.gray.500` | `#71717A` |
| `color.text.disabled.dark` | `primitive.gray.700` | `#3F3F46` |
| `color.text.inverse.dark` | `primitive.black.900` | `#1C1C1E` |
| `color.text.link.dark` | `primitive.silver.300` | `#C0C0C0` |

### Surfaces

| Token | Référence | HEX |
|-------|-----------|-----|
| `color.surface.base.dark` | `primitive.gray.950` | `#0F0F11` |
| `color.surface.raised.dark` | `primitive.gray.900` | `#18181B` |
| `color.surface.sunken.dark` | `primitive.gray.950` | `#0F0F11` |
| `color.surface.overlay.dark` | `primitive.gray.800` | `#27272A` |
| `color.surface.disabled.dark` | `primitive.gray.800` | `#27272A` |
| `color.surface.inverse.dark` | `primitive.white.0` | `#FFFFFF` |

### Bordures

| Token | Référence | HEX |
|-------|-----------|-----|
| `color.border.subtle.dark` | `primitive.gray.800` | `#27272A` |
| `color.border.default.dark` | `primitive.gray.700` | `#3F3F46` |
| `color.border.strong.dark` | `primitive.gray.600` | `#52525B` |
| `color.border.focus.dark` | `primitive.silver.300` | `#C0C0C0` |

### Actions

| Token | Référence | HEX |
|-------|-----------|-----|
| `color.action.primary.dark` | `primitive.silver.300` | `#C0C0C0` |
| `color.action.primary.hover.dark` | `primitive.white.0` | `#FFFFFF` |
| `color.action.primary.active.dark` | `primitive.silver.200` | `#E4E4E7` |
| `color.action.primary.text.dark` | `primitive.black.900` | `#1C1C1E` |

### États sombres

| Token | Référence | HEX |
|-------|-----------|-----|
| `color.state.success.dark` | `#86EFAC` | `#86EFAC` |
| `color.state.success.subtle.dark` | `#052E16` | `#052E16` |
| `color.state.warning.dark` | `#FCD34D` | `#FCD34D` |
| `color.state.warning.subtle.dark` | `#451A03` | `#451A03` |
| `color.state.error.dark` | `#FCA5A5` | `#FCA5A5` |
| `color.state.error.subtle.dark` | `#450A0A` | `#450A0A` |
| `color.state.info.dark` | `#93C5FD` | `#93C5FD` |
| `color.state.info.subtle.dark` | `#172554` | `#172554` |

## 1.6 Contrastes WCAG validés

| Combinaison | Contraste | Niveau | Usage |
|-------------|-----------|--------|-------|
| White sur Primary (`#FFFFFF` / `#0F2052`) | 14.2:1 | AAA | Texte, boutons |
| White sur Deep Black (`#FFFFFF` / `#1C1C1E`) | 16.9:1 | AAA | Texte |
| Deep Black sur White (`#1C1C1E` / `#FFFFFF`) | 16.9:1 | AAA | Texte |
| Deep Black sur Gray 50 (`#1C1C1E` / `#FAFAFA`) | 16.2:1 | AAA | Texte |
| Primary sur White (`#0F2052` / `#FFFFFF`) | 14.2:1 | AAA | Liens, accents |
| Gray 500 sur White (`#71717A` / `#FFFFFF`) | 4.8:1 | AA | Texte secondaire |
| Gray 400 sur White (`#A1A1AA` / `#FFFFFF`) | 2.6:1 | ❌ Refusé | Décoratif uniquement |
| Success sur White (`#15803D` / `#FFFFFF`) | 4.6:1 | AA | Texte état |
| Warning sur White (`#B45309` / `#FFFFFF`) | 4.7:1 | AA | Texte état |
| Error sur White (`#B91C1C` / `#FFFFFF`) | 5.9:1 | AA | Texte état |
| Info sur White (`#1D4ED8` / `#FFFFFF`) | 6.3:1 | AA | Texte état |
| White sur Success (`#FFFFFF` / `#15803D`) | 4.6:1 | AA | Boutons |
| White sur Error (`#FFFFFF` / `#B91C1C`) | 5.9:1 | AA | Boutons |
| Gray 50 sur Gray 950 (`#FAFAFA` / `#0F0F11`) | 18.9:1 | AAA | Dark mode texte |
| Silver sur Gray 950 (`#C0C0C0` / `#0F0F11`) | 11.4:1 | AAA | Dark mode texte |

**Règle stricte** : `Gray 400` sur `White` (2.6:1) est **interdit** pour tout texte. Usage décoratif uniquement.

---

# Partie 2 — Typographie

## 2.1 Famille principale

**Famille retenue :** Inter Variable

**Justification :**
- Sans-serif humaniste neutre et intemporel ;
- Excellente lisibilité en petite taille ;
- Support de plus de 100 langues (latin, cyrillique, grec) ;
- Disponible en police variable (poids 100–900, optical size) ;
- Licence SIL Open Font (usage professionnel illimité) ;
- Fallback système identique ;
- Utilisée par les meilleurs Design Systems contemporains (Linear, Vercel, Figma).

**Fallback stack :**
```css
font-family: 'Inter', 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

**Chargement :**
- Sous-ensemble latin + latin-extended ;
- `font-display: swap` ;
- Préchargement de la variante principale ;
- Format WOFF2.

## 2.2 Famille monospace

**Famille retenue :** JetBrains Mono

**Justification :**
- Lisible en petite taille ;
- Formes distinguables (0/O, 1/l/I) ;
- Licence Apache 2.0 ;
- Support du code et des identifiants techniques.

**Fallback stack :**
```css
font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
```

## 2.3 Échelle typographique canonique

Ratio : 1.25 (Major Third), ancré sur 16 px.

| Token | Taille | Line-height | Weight | Letter-spacing | Usage |
|-------|--------|-------------|--------|----------------|-------|
| `typography.display.xl` | 48 px (3rem) | 1.2 | 600 | -0.02em | Marketing |
| `typography.display.lg` | 40 px (2.5rem) | 1.25 | 600 | -0.02em | Marketing |
| `typography.heading.1` | 32 px (2rem) | 1.3 | 600 | -0.01em | Titre écran |
| `typography.heading.2` | 24 px (1.5rem) | 1.35 | 600 | -0.01em | Section |
| `typography.heading.3` | 20 px (1.25rem) | 1.4 | 600 | -0.005em | Sous-section |
| `typography.heading.4` | 18 px (1.125rem) | 1.45 | 600 | 0 | Bloc |
| `typography.body.lg` | 18 px (1.125rem) | 1.55 | 400 | 0 | Corps mis en avant |
| `typography.body.md` | 16 px (1rem) | 1.55 | 400 | 0 | Corps standard |
| `typography.body.sm` | 14 px (0.875rem) | 1.5 | 400 | 0 | Corps secondaire |
| `typography.label` | 14 px (0.875rem) | 1.4 | 500 | 0 | Labels formulaire |
| `typography.caption` | 13 px (0.8125rem) | 1.4 | 400 | 0 | Légendes |
| `typography.micro` | 12 px (0.75rem) | 1.4 | 500 | +0.02em | Badges, tags |
| `typography.code` | 14 px (0.875rem) | 1.5 | 400 | 0 | Code (monospace) |

## 2.4 Échelle responsive

| Token | Mobile (<768) | Tablette (768-1023) | Desktop (≥1024) |
|-------|---------------|---------------------|-----------------|
| `typography.display.xl` | 32 px | 40 px | 48 px |
| `typography.display.lg` | 28 px | 34 px | 40 px |
| `typography.heading.1` | 24 px | 28 px | 32 px |
| `typography.heading.2` | 20 px | 22 px | 24 px |
| `typography.heading.3` | 18 px | 19 px | 20 px |
| `typography.heading.4` | 16 px | 17 px | 18 px |
| `typography.body.lg` | 17 px | 18 px | 18 px |
| `typography.body.md` | 16 px | 16 px | 16 px |
| `typography.body.sm` | 14 px | 14 px | 14 px |
| `typography.label` | 14 px | 14 px | 14 px |
| `typography.caption` | 13 px | 13 px | 13 px |
| `typography.micro` | 12 px | 12 px | 12 px |

## 2.5 Poids typographiques autorisés

| Poids | Usage |
|-------|-------|
| 400 | Regular — corps, paragraphes |
| 500 | Medium — labels, accents, micro |
| 600 | Semibold — titres, headings |

**Poids interdits :** 100, 200, 300, 700, 800, 900.

## 2.6 Interlettrage

| Contexte | Valeur |
|----------|--------|
| Corps | 0 |
| Titres ≥ 24 px | -0.01em |
| Display ≥ 40 px | -0.02em |
| Capitales courtes | +0.02em |
| Monospace | 0 |

## 2.7 Longueur de ligne

- Minimum : 45 caractères
- Maximum : 75 caractères
- Optimal : 60–66 caractères

## 2.8 Tailles minimales

- Corps : 16 px
- Labels : 14 px
- Captions : 13 px
- Micro : 12 px (badges uniquement)

**Aucune taille inférieure à 12 px n'est autorisée.**

---

# Partie 3 — Grille et espacement

## 3.1 Unité de base

Unité : **4 px** (`spacing.1`)

## 3.2 Échelle d'espacement canonique

| Token | Valeur | Usage type |
|-------|--------|-----------|
| `spacing.0` | 0 | Aucun |
| `spacing.1` | 4 px | Micro |
| `spacing.2` | 8 px | Icône-texte |
| `spacing.3` | 12 px | Padding composant |
| `spacing.4` | 16 px | Courant |
| `spacing.5` | 20 px | Intermédiaire |
| `spacing.6` | 24 px | Entre composants |
| `spacing.8` | 32 px | Entre sections |
| `spacing.10` | 40 px | Majeur |
| `spacing.12` | 48 px | Entre groupes |
| `spacing.16` | 64 px | Entre sections majeures |
| `spacing.20` | 80 px | Page |
| `spacing.24` | 96 px | Page large |

**Aucune valeur intermédiaire n'est autorisée.**

## 3.3 Breakpoints canoniques

| Token | Valeur | Appareil |
|-------|--------|----------|
| `breakpoint.xs` | 0 px | Mobile portrait |
| `breakpoint.sm` | 480 px | Mobile large |
| `breakpoint.md` | 768 px | Tablette portrait |
| `breakpoint.lg` | 1024 px | Tablette paysage / desktop |
| `breakpoint.xl` | 1440 px | Desktop large |
| `breakpoint.2xl` | 1920 px | Desktop très large |

## 3.4 Grille canonique

| Breakpoint | Colonnes | Gouttière | Marge |
|-----------|----------|-----------|-------|
| xs–sm | 4 | 16 px | 16 px |
| md | 8 | 24 px | 24 px |
| lg–2xl | 12 | 24 px | 24 px |

**Largeur maximale du contenu :** 1440 px, centrée.

## 3.5 Densités

| Densité | Padding vertical | Hauteur ligne | Usage |
|---------|------------------|---------------|-------|
| Confortable | 16 px | 48 px | Par défaut |
| Compacte | 8 px | 32 px | Tableaux denses |
| Spacieuse | 24 px | 56 px | Marketing |

---

# Partie 4 — Rayons (border-radius)

## 4.1 Échelle canonique

| Token | Valeur | Usage |
|-------|--------|-------|
| `radius.none` | 0 | Tableaux, containers pleine largeur |
| `radius.xs` | 2 px | Badges micro, tags |
| `radius.sm` | 4 px | Inputs, petits boutons |
| `radius.md` | 8 px | Boutons, champs, cartes compactes |
| `radius.lg` | 12 px | Cartes, panneaux |
| `radius.xl` | 16 px | Modales, grandes cartes |
| `radius.2xl` | 24 px | Grands panneaux marketing |
| `radius.full` | 9999 px | Pills, avatars, tags |

**Aucune autre valeur n'est autorisée.**

---

# Partie 5 — Élévation et ombres

## 5.1 Échelle canonique

| Token | Ombre | Usage |
|-------|-------|-------|
| `elevation.0` | Aucune | Base, surface plate |
| `elevation.1` | `0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.10)` | Cartes légères |
| `elevation.2` | `0 2px 4px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.08)` | Menus, dropdowns |
| `elevation.3` | `0 4px 8px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.10)` | Modales, drawers |
| `elevation.4` | `0 8px 16px rgba(0,0,0,0.10), 0 16px 32px rgba(0,0,0,0.12)` | Toasts, tooltips |

## 5.2 Z-index canonique

| Token | Valeur | Usage |
|-------|--------|-------|
| `z.base` | 0 | Contenu |
| `z.sticky` | 100 | Headers collants |
| `z.dropdown` | 200 | Menus |
| `z.overlay` | 300 | Overlays |
| `z.modal` | 400 | Modales |
| `z.toast` | 500 | Toasts |
| `z.tooltip` | 600 | Tooltips |
| `z.debug` | 9999 | Dev uniquement |

## 5.3 Scrims canoniques

| Contexte | Opacité | Couleur |
|----------|---------|---------|
| Modale | 40 % | Noir |
| Drawer | 30 % | Noir |
| Menu contextuel | 20 % | Noir |

---

# Partie 6 — Opacités

## 6.1 Échelle canonique

| Token | Valeur | Usage |
|-------|--------|-------|
| `opacity.0` | 0 | Invisible |
| `opacity.5` | 0.05 | Survol très léger |
| `opacity.10` | 0.10 | Survol léger |
| `opacity.20` | 0.20 | Scrim menu |
| `opacity.30` | 0.30 | Scrim drawer |
| `opacity.40` | 0.40 | Scrim modale |
| `opacity.50` | 0.50 | Désactivation |
| `opacity.60` | 0.60 | Atténuation |
| `opacity.80` | 0.80 | Texte secondaire |
| `opacity.100` | 1.00 | Plein |

**Aucune autre valeur n'est autorisée.**

---

# Partie 7 — Mouvement

## 7.1 Durées canoniques

| Token | Valeur | Usage |
|-------|--------|-------|
| `motion.duration.instant` | 0 ms | Changement sans animation |
| `motion.duration.fast` | 100 ms | Feedback immédiat |
| `motion.duration.base` | 150 ms | Micro-interactions |
| `motion.duration.medium` | 200 ms | Transitions |
| `motion.duration.slow` | 300 ms | Transitions complexes |
| `motion.duration.long` | 400 ms | Entrée/sortie contenu |

## 7.2 Courbes canoniques

| Token | Valeur |
|-------|--------|
| `motion.easing.standard` | `cubic-bezier(0.2, 0, 0, 1)` |
| `motion.easing.entrance` | `cubic-bezier(0, 0, 0.2, 1)` |
| `motion.easing.exit` | `cubic-bezier(0.4, 0, 1, 1)` |
| `motion.easing.linear` | `linear` |

## 7.3 Transitions canoniques

| Élément | Durée | Courbe |
|---------|-------|--------|
| Couleur de fond | 150 ms | standard |
| Couleur de bordure | 150 ms | standard |
| Opacité | 150 ms | standard |
| Transform | 200 ms | standard |
| Entrée modale | 200 ms | entrance |
| Sortie modale | 150 ms | exit |
| Entrée toast | 200 ms | entrance |
| Sortie toast | 150 ms | exit |

---

# Partie 8 — Iconographie

## 8.1 Tailles canoniques

| Token | Valeur | Usage |
|-------|--------|-------|
| `icon.size.xs` | 12 px | Inline micro |
| `icon.size.sm` | 16 px | Inline |
| `icon.size.md` | 20 px | Listes |
| `icon.size.lg` | 24 px | Standard |
| `icon.size.xl` | 32 px | Action |
| `icon.size.2xl` | 48 px | Section |
| `icon.size.3xl` | 64 px | Illustration |

## 8.2 Style canonique

- Grille : 24 × 24 px
- Stroke : 1.5 px (jusqu'à 24 px), 2 px (au-delà)
- Terminaisons : arrondies
- Coins : arrondis
- Espace optique : 2 px minimum
- Bibliothèque retenue : **Lucide Icons** (fork documenté si nécessaire)

**Justification :** Lucide est open-source (ISC), cohérent, actif, propose plus de 1000 icônes, licence permissive, style uniforme.

---

# Partie 9 — Tailles minimales de composants

| Composant | Taille minimale |
|-----------|-----------------|
| Bouton (hauteur) | 32 px |
| Bouton (zone tactile) | 48 × 48 px |
| Input (hauteur) | 32 px |
| Input (zone tactile) | 48 × 48 px |
| Checkbox / Radio | 20 × 20 px (cible 48 × 48 px) |
| Icône cliquable | 20 px (cible 48 × 48 px) |
| Avatar | 24 px |
| Tag / Badge | 20 px hauteur |
| Toast | 48 px hauteur |

---

# Partie 10 — Validation

## 10.1 Checklist Foundation

- [ ] Toutes les couleurs sont chiffrées (Partie 1)
- [ ] Tous les contrastes WCAG sont calculés (Partie 1.6)
- [ ] La famille typographique est choisie (Partie 2.1)
- [ ] L'échelle typographique est chiffrée (Partie 2.3)
- [ ] L'échelle responsive est chiffrée (Partie 2.4)
- [ ] L'échelle d'espacement est chiffrée (Partie 3.2)
- [ ] Les breakpoints sont chiffrés (Partie 3.3)
- [ ] Les rayons sont chiffrés (Partie 4)
- [ ] Les élévations sont chiffrées (Partie 5)
- [ ] Les opacités sont chiffrées (Partie 6)
- [ ] Les durées et courbes sont chiffrées (Partie 7)
- [ ] L'iconographie est chiffrée (Partie 8)
- [ ] Les tailles minimales sont chiffrées (Partie 9)

## 10.2 Critères de validation formels

La Foundation Specification v1.0 est **complète** si :

1. Aucune valeur n'est laissée à l'interprétation.
2. Toutes les valeurs sont chiffrées.
3. Toutes les valeurs sont nommées selon les conventions.
4. Toutes les valeurs sont validées en contraste (couleurs).
5. Toutes les valeurs sont testées (typographie, grille).
6. Toutes les valeurs sont documentées dans ce document.
7. Aucune autre source ne définit de valeur.

---

# Partie 11 — Versioning

| Version | Date | Auteur | Changements |
|---------|------|--------|-------------|
| 1.0 | — | Comité design | Canonisation initiale |

---

# Partie 12 — Prochaine étape

Après validation de ce document :

- **Phase 2** — Audit documentaire des 20 documents + Foundation
- **Phase 3** — Extraction technique (tokens.json, CSS, Tailwind, Figma, React, Flutter, Android, iOS)
- **Phase 4** — Implémentation (composants, Figma, site, starter kit)

---

**© Walden Corp**
**Foundation Specification v1.0**
**Document officiel — Single Source of Truth.**

*Fin du Document 21.*
