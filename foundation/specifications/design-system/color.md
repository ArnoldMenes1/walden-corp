# WALDEN CORP
# Color System
**Version 1.0 — Document officiel**

---

## Préambule

Le **Walden Corp Color System** constitue la fondation chromatique officielle de l'identité visuelle de l'entreprise. Il définit l'ensemble des couleurs autorisées, leurs usages, leurs déclinaisons techniques (CSS, Tailwind, Design Tokens, Figma) et les règles d'accessibilité garantissant une expérience cohérente, premium et intemporelle sur tous les supports : sites web, applications desktop, applications mobiles, interfaces SaaS et logiciels professionnels.

Ce document est la **référence unique** pour tout designer, développeur Front-End, développeur Back-End, architecte Design System et système d'IA génératif intervenant sur les produits Walden Corp.

---

# 1. Palette principale

## 1.1 Midnight Blue — *Primary*

| Attribut | Valeur |
|---|---|
| **Nom** | Midnight Blue |
| **HEX** | `#0F2052` |
| **RGB** | `rgb(15, 32, 82)` |
| **HSL** | `hsl(225, 69%, 19%)` |
| **CMYK** | `C: 82 M: 61 Y: 0 K: 68` |

**Description :**
Bleu nuit profond, dense et sophistiqué. C'est la couleur signature de Walden Corp.

**Signification :**
Confiance, stabilité, expertise, sécurité, sérieux professionnel.

**Cas d'utilisation :**
- Couleur de marque principale
- Boutons primaires
- En-têtes de navigation (Navbar)
- Liens actifs
- Éléments interactifs clés (CTA)
- Graphiques et data-visualisation (catégorie principale)
- Fond de marque (marketing)

---

## 1.2 Silver — *Secondary*

| Attribut | Valeur |
|---|---|
| **Nom** | Silver |
| **HEX** | `#C0C0C0` |
| **RGB** | `rgb(192, 192, 192)` |
| **HSL** | `hsl(0, 0%, 75%)` |
| **CMYK** | `C: 0 M: 0 Y: 0 K: 25` |

**Description :**
Gris argenté, sobre et élégant. Il apporte une touche premium sans jamais voler la vedette au Midnight Blue.

**Signification :**
Raffinement, neutralité, modernité discrète, équilibre.

**Cas d'utilisation :**
- Accents secondaires
- Séparateurs
- Icônes inactives
- Éléments décoratifs fins
- Badges neutres
- Textes secondaires sur fond sombre
- États désactivés (disabled)

---

## 1.3 Deep Black — *Neutral Dark*

| Attribut | Valeur |
|---|---|
| **Nom** | Deep Black |
| **HEX** | `#1C1C1E` |
| **RGB** | `rgb(28, 28, 30)` |
| **HSL** | `hsl(240, 3%, 11%)` |
| **CMYK** | `C: 7 M: 7 Y: 0 K: 88` |

**Description :**
Noir profond légèrement bleuté, jamais pur. Il évite l'effet "plat" du `#000000` et confère une sensation premium.

**Signification :**
Autorité, sérieux, élégance, contraste maîtrisé.

**Cas d'utilisation :**
- Texte principal en Light Mode
- Fonds en Dark Mode
- Titres
- Bordures à fort contraste
- Icônes principales

---

## 1.4 White — *Neutral Light*

| Attribut | Valeur |
|---|---|
| **Nom** | White |
| **HEX** | `#FFFFFF` |
| **RGB** | `rgb(255, 255, 255)` |
| **HSL** | `hsl(0, 0%, 100%)` |
| **CMYK** | `C: 0 M: 0 Y: 0 K: 0` |

**Description :**
Blanc pur, base de respiration visuelle.

**Signification :**
Clarté, transparence, espace, minimalisme.

**Cas d'utilisation :**
- Fond principal en Light Mode
- Texte sur fond Midnight Blue ou Deep Black
- Cartes et surfaces
- Espaces négatifs

---

# 2. Palette de gris

Palette neutre de 11 niveaux, calibrée pour offrir une hiérarchie visuelle fine et cohérente.

| Token | HEX | RGB | HSL | Utilisation recommandée |
|---|---|---|---|---|
| **Gray 50** | `#FAFAFA` | `rgb(250, 250, 250)` | `hsl(0, 0%, 98%)` | Fond de page ultra-clair |
| **Gray 100** | `#F4F4F5` | `rgb(244, 244, 245)` | `hsl(240, 5%, 96%)` | Fond de section, Cards |
| **Gray 200** | `#E4E4E7` | `rgb(228, 228, 231)` | `hsl(240, 6%, 90%)` | Bordures légères, Dividers |
| **Gray 300** | `#D4D4D8` | `rgb(212, 212, 216)` | `hsl(240, 5%, 84%)` | Bordures d'input, Séparateurs |
| **Gray 400** | `#A1A1AA` | `rgb(161, 161, 170)` | `hsl(240, 5%, 65%)` | Placeholder, Icônes inactives |
| **Gray 500** | `#71717A` | `rgb(113, 113, 122)` | `hsl(240, 4%, 46%)` | Texte secondaire, Métadonnées |
| **Gray 600** | `#52525B` | `rgb(82, 82, 91)` | `hsl(240, 4%, 34%)` | Texte tertiaire, Labels |
| **Gray 700** | `#3F3F46` | `rgb(63, 63, 70)` | `hsl(240, 5%, 26%)` | Texte fort sur fond clair |
| **Gray 800** | `#27272A` | `rgb(39, 39, 42)` | `hsl(240, 4%, 16%)` | Fonds Dark Mode (surfaces) |
| **Gray 900** | `#18181B` | `rgb(24, 24, 27)` | `hsl(240, 6%, 10%)` | Fond Dark Mode principal |
| **Gray 950** | `#0F0F11` | `rgb(15, 15, 17)` | `hsl(240, 6%, 6%)` | Fond Dark Mode profond |

---

# 3. Couleurs d'état

Couleurs sémantiques calibrées pour rester sobres et corporate. **Aucune couleur criarde, aucun néon.**

## 3.1 Success

| Token | HEX | RGB | HSL | Utilisation |
|---|---|---|---|---|
| **Success** | `#15803D` | `rgb(21, 128, 61)` | `hsl(142, 72%, 29%)` | Confirmations, validations, badges positifs |
| **Success Light** | `#DCFCE7` | `rgb(220, 252, 231)` | `hsl(141, 84%, 93%)` | Fonds d'alerte succès, badges doux |
| **Success Dark** | `#166534` | `rgb(22, 101, 52)` | `hsl(143, 64%, 24%)` | Hover, états actifs, texte sur fond clair |

## 3.2 Warning

| Token | HEX | RGB | HSL | Utilisation |
|---|---|---|---|---|
| **Warning** | `#B45309` | `rgb(180, 83, 9)` | `hsl(26, 90%, 37%)` | Avertissements, actions à confirmer |
| **Warning Light** | `#FEF3C7` | `rgb(254, 243, 199)` | `hsl(48, 96%, 89%)` | Fonds d'alerte warning |
| **Warning Dark** | `#92400E` | `rgb(146, 64, 14)` | `hsl(26, 83%, 31%)` | Hover, états actifs |

## 3.3 Error

| Token | HEX | RGB | HSL | Utilisation |
|---|---|---|---|---|
| **Error** | `#B91C1C` | `rgb(185, 28, 28)` | `hsl(0, 74%, 42%)` | Erreurs, suppressions, alertes critiques |
| **Error Light** | `#FEE2E2` | `rgb(254, 226, 226)` | `hsl(0, 93%, 94%)` | Fonds d'alerte erreur |
| **Error Dark** | `#991B1B` | `rgb(153, 27, 27)` | `hsl(0, 70%, 35%)` | Hover, états actifs |

## 3.4 Info

| Token | HEX | RGB | HSL | Utilisation |
|---|---|---|---|---|
| **Info** | `#1D4ED8` | `rgb(29, 78, 216)` | `hsl(224, 76%, 48%)` | Informations neutres, tooltips, hints |
| **Info Light** | `#DBEAFE` | `rgb(219, 234, 254)` | `hsl(214, 95%, 93%)` | Fonds d'information |
| **Info Dark** | `#1E40AF` | `rgb(30, 64, 175)` | `hsl(224, 71%, 40%)` | Hover, états actifs |

---

# 4. Variables CSS

```css
:root {
  /* ===== Brand ===== */
  --color-primary: #0F2052;
  --color-primary-light: #1E3A8A;
  --color-primary-dark: #081331;

  --color-secondary: #C0C0C0;
  --color-secondary-light: #E4E4E7;
  --color-secondary-dark: #A1A1AA;

  /* ===== Surfaces & Backgrounds ===== */
  --color-background: #FFFFFF;
  --color-surface: #FAFAFA;
  --color-surface-elevated: #FFFFFF;
  --color-border: #E4E4E7;
  --color-border-strong: #D4D4D8;

  /* ===== Textes ===== */
  --color-text: #1C1C1E;
  --color-text-light: #71717A;
  --color-text-muted: #A1A1AA;
  --color-text-inverse: #FFFFFF;

  /* ===== Icônes ===== */
  --color-icon: #1C1C1E;
  --color-icon-muted: #71717A;
  --color-icon-inverse: #FFFFFF;

  /* ===== États sémantiques ===== */
  --color-success: #15803D;
  --color-success-light: #DCFCE7;
  --color-success-dark: #166534;

  --color-warning: #B45309;
  --color-warning-light: #FEF3C7;
  --color-warning-dark: #92400E;

  --color-error: #B91C1C;
  --color-error-light: #FEE2E2;
  --color-error-dark: #991B1B;

  --color-info: #1D4ED8;
  --color-info-light: #DBEAFE;
  --color-info-dark: #1E40AF;

  /* ===== Dark Mode ===== */
  --color-background-dark: #0F0F11;
  --color-surface-dark: #18181B;
  --color-surface-elevated-dark: #27272A;
  --color-border-dark: #27272A;
  --color-text-dark: #FAFAFA;
  --color-text-light-dark: #A1A1AA;
}
```

---

# 5. Variables Tailwind CSS (v4)

```js
// tailwind.config.js
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F2052",
          light: "#1E3A8A",
          dark: "#081331",
        },
        secondary: {
          DEFAULT: "#C0C0C0",
          light: "#E4E4E7",
          dark: "#A1A1AA",
        },
        gray: {
          50:  "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
          950: "#0F0F11",
        },
        success: {
          DEFAULT: "#15803D",
          light:   "#DCFCE7",
          dark:    "#166534",
        },
        warning: {
          DEFAULT: "#B45309",
          light:   "#FEF3C7",
          dark:    "#92400E",
        },
        error: {
          DEFAULT: "#B91C1C",
          light:   "#FEE2E2",
          dark:    "#991B1B",
        },
        info: {
          DEFAULT: "#1D4ED8",
          light:   "#DBEAFE",
          dark:    "#1E40AF",
        },
      },
    },
  },
  plugins: [],
};
```

---

# 6. Design Tokens

Organisation officielle des tokens de design Walden Corp.

```
Color.Primary            → #0F2052
Color.Primary.Light      → #1E3A8A
Color.Primary.Dark       → #081331

Color.Secondary          → #C0C0C0
Color.Secondary.Light    → #E4E4E7
Color.Secondary.Dark     → #A1A1AA

Color.Background         → #FFFFFF
Color.Background.Dark    → #0F0F11

Color.Surface            → #FAFAFA
Color.Surface.Elevated   → #FFFFFF
Color.Surface.Dark       → #18181B

Color.Border             → #E4E4E7
Color.Border.Strong      → #D4D4D8
Color.Border.Dark        → #27272A

Color.Text               → #1C1C1E
Color.Text.Light         → #71717A
Color.Text.Muted         → #A1A1AA
Color.Text.Inverse       → #FFFFFF

Color.Icon               → #1C1C1E
Color.Icon.Muted         → #71717A
Color.Icon.Inverse       → #FFFFFF

Color.Success            → #15803D
Color.Warning            → #B45309
Color.Error              → #B91C1C
Color.Info               → #1D4ED8
```

---

# 7. Variables Figma

Organisation en collections, groupes et variables.

```
📁 Brand/
   └── Primary        → #0F2052
   └── Secondary      → #C0C0C0

📁 Neutral/
   └── Gray/50 … Gray/950

📁 Semantic/
   └── Success        → #15803D
   └── Warning        → #B45309
   └── Error          → #B91C1C
   └── Info           → #1D4ED8

📁 Background/
   └── Default        → #FFFFFF
   └── Dark           → #0F0F11

📁 Surface/
   └── Base           → #FAFAFA
   └── Elevated       → #FFFFFF
   └── Dark           → #18181B

📁 Border/
   └── Default        → #E4E4E7
   └── Strong         → #D4D4D8
   └── Dark           → #27272A

📁 Text/
   └── Default        → #1C1C1E
   └── Light          → #71717A
   └── Muted          → #A1A1AA
   └── Inverse        → #FFFFFF

📁 Icons/
   └── Default        → #1C1C1E
   └── Muted          → #71717A
   └── Inverse        → #FFFFFF
```

---

# 8. Accessibilité — WCAG AA

Norme appliquée : **WCAG 2.1 Niveau AA minimum.**
- Texte normal : contraste **≥ 4.5:1**
- Texte large (≥ 18.66px bold ou ≥ 24px) : contraste **≥ 3:1**
- Composants UI et éléments graphiques : **≥ 3:1**

## 8.1 Combinaisons principales

| Combinaison | Contraste | Texte normal | Texte large | Boutons | Liens |
|---|---|---|---|---|---|
| White sur Primary (#0F2052) | **14.2:1** | ✅ Accepté | ✅ Accepté | ✅ | ✅ |
| White sur Deep Black (#1C1C1E) | **16.9:1** | ✅ Accepté | ✅ Accepté | ✅ | ✅ |
| Deep Black sur White | **16.9:1** | ✅ Accepté | ✅ Accepté | ✅ | ✅ |
| Deep Black sur Gray 50 (#FAFAFA) | **16.2:1** | ✅ Accepté | ✅ Accepté | ✅ | ✅ |
| Primary sur White | **14.2:1** | ✅ Accepté | ✅ Accepté | ✅ | ✅ |
| Primary sur Gray 100 (#F4F4F5) | **13.1:1** | ✅ Accepté | ✅ Accepté | ✅ | ✅ |
| Gray 500 (#71717A) sur White | **4.8:1** | ✅ Accepté | ✅ Accepté | ⚠️ | ⚠️ |
| Gray 400 (#A1A1AA) sur White | **2.6:1** | ❌ Refusé | ❌ Refusé | ❌ | ❌ |
| Success (#15803D) sur White | **4.6:1** | ✅ Accepté | ✅ Accepté | ✅ | ✅ |
| Error (#B91C1C) sur White | **5.9:1** | ✅ Accepté | ✅ Accepté | ✅ | ✅ |
| Warning (#B45309) sur White | **4.7:1** | ✅ Accepté | ✅ Accepté | ✅ | ✅ |
| Info (#1D4ED8) sur White | **6.3:1** | ✅ Accepté | ✅ Accepté | ✅ | ✅ |
| White sur Success | **4.6:1** | ✅ Accepté | ✅ Accepté | ✅ | ✅ |
| White sur Error | **5.9:1** | ✅ Accepté | ✅ Accepté | ✅ | ✅ |

**Règle stricte :** le **Gray 400** est réservé aux éléments décoratifs (placeholders, séparateurs, icônes décoratives). Il ne doit **jamais** être utilisé pour du texte lisible.

---

# 9. Light Mode

| Élément | Couleur | Token |
|---|---|---|
| **Background** | `#FFFFFF` | `Color.Background` |
| **Cards** | `#FFFFFF` (bordure `#E4E4E7`) | `Color.Surface.Elevated` |
| **Navbar** | `#FFFFFF` (bordure basse `#E4E4E7`) | — |
| **Sidebar** | `#FAFAFA` | `Color.Surface` |
| **Footer** | `#1C1C1E` (texte `#FAFAFA`) | `Color.Text` inverse |
| **Buttons (Primary)** | Fond `#0F2052`, texte `#FFFFFF` | `Color.Primary` |
| **Buttons (Secondary)** | Fond `#FFFFFF`, bordure `#D4D4D8`, texte `#1C1C1E` | — |
| **Inputs** | Fond `#FFFFFF`, bordure `#D4D4D8`, texte `#1C1C1E`, placeholder `#A1A1AA` | — |
| **Tables** | Header `#FAFAFA`, lignes `#FFFFFF`, bordures `#E4E4E7` | — |
| **Badges (neutre)** | Fond `#F4F4F5`, texte `#52525B` | `Gray 100 / Gray 600` |
| **Alerts (Success)** | Fond `#DCFCE7`, texte `#166534` | — |
| **Alerts (Warning)** | Fond `#FEF3C7`, texte `#92400E` | — |
| **Alerts (Error)** | Fond `#FEE2E2`, texte `#991B1B` | — |
| **Alerts (Info)** | Fond `#DBEAFE`, texte `#1E40AF` | — |

---

# 10. Dark Mode

Le Dark Mode **n'est pas une inversion** du Light Mode. Les teintes sont **recalibrées** pour préserver le confort visuel et l'aspect premium.

| Élément | Couleur | Token |
|---|---|---|
| **Background** | `#0F0F11` | `Color.Background.Dark` |
| **Cards** | `#18181B` (bordure `#27272A`) | `Color.Surface.Dark` |
| **Navbar** | `#18181B` (bordure basse `#27272A`) | — |
| **Sidebar** | `#18181B` | — |
| **Footer** | `#0F0F11` (texte `#FAFAFA`) | — |
| **Buttons (Primary)** | Fond `#1E3A8A`, texte `#FFFFFF` | `Color.Primary.Light` |
| **Buttons (Secondary)** | Fond transparent, bordure `#3F3F46`, texte `#FAFAFA` | — |
| **Inputs** | Fond `#18181B`, bordure `#3F3F46`, texte `#FAFAFA`, placeholder `#71717A` | — |
| **Tables** | Header `#18181B`, lignes `#0F0F11`, bordures `#27272A` | — |
| **Badges (neutre)** | Fond `#27272A`, texte `#D4D4D8` | — |
| **Alerts (Success)** | Fond `#052E16`, texte `#86EFAC` | — |
| **Alerts (Warning)** | Fond `#451A03`, texte `#FCD34D` | — |
| **Alerts (Error)** | Fond `#450A0A`, texte `#FCA5A5` | — |
| **Alerts (Info)** | Fond `#172554`, texte `#93C5FD` | — |

**Principe du Dark Mode Walden Corp :**
- Jamais de noir pur (`#000000`)
- Toujours un léger sous-ton bleuté
- Les couleurs d'état sont désaturées et éclaircies pour rester lisibles
- Les contrastes ne doivent jamais être agressifs

---

# 11. Règles d'utilisation

| Couleur | Quand l'utiliser | Quand ne pas l'utiliser |
|---|---|---|
| **Primary (Midnight Blue)** | Boutons principaux, navbar, liens actifs, éléments de marque, en-têtes | Jamais en fond de grandes surfaces textuelles longues, jamais en accent décoratif massif |
| **Secondary (Silver)** | Accents discrets, séparateurs, icônes inactives, badges neutres | Jamais pour du texte principal, jamais pour un CTA |
| **Silver / Gray tones** | Hiérarchie visuelle, textes secondaires, bordures | Jamais pour du texte critique ou des actions |
| **Deep Black** | Texte principal, fonds Dark Mode, titres | Jamais en fond de grandes sections en Light Mode (préférer White/Gray 50) |
| **White** | Fonds, texte sur fond sombre, respiration | Jamais comme couleur unique d'un composant sur fond blanc (prévoir une bordure) |
| **Success** | Confirmations, validations, badges positifs | Jamais pour un CTA principal |
| **Warning** | Avertissements, actions irréversibles modérées | Jamais pour un message critique bloquant (utiliser Error) |
| **Error** | Erreurs, suppressions, échecs | Jamais en décoration |
| **Info** | Messages neutres, tooltips, hints, aides contextuelles | Jamais en CTA principal |

---

# 12. Exemples d'utilisation

## 12.1 Dashboard
- Background : `White`
- Sidebar : `Gray 50`
- Cartes KPI : `White` + bordure `Gray 200`
- Titre : `Deep Black`
- Valeur : `Primary`
- Variation positive : `Success`
- Graphique principal : `Primary` + nuances `Primary.Light`
- Grille : `Gray 200`

## 12.2 Landing Page
- Hero background : `Primary`
- Texte hero : `White`
- CTA : fond `White`, texte `Primary`
- Sections alternées : `White` et `Gray 50`
- Icônes de features : `Primary`
- Footer : `Deep Black`

## 12.3 CRM
- Header : `White`
- Filtres : `Gray 100`
- Lignes : alternance `White` / `Gray 50`
- Badge "Client actif" : fond `Success Light`, texte `Success Dark`
- Badge "En attente" : fond `Warning Light`, texte `Warning Dark`
- Badge "Inactif" : fond `Gray 100`, texte `Gray 600`

## 12.4 Application Desktop
- Fond fenêtre : `Gray 50`
- Barre latérale : `White`
- Barre supérieure : `White` + bordure `Gray 200`
- Menu actif : fond `Primary`, texte `White`
- Boutons d'action : `Primary`

## 12.5 Application Mobile
- Fond : `White`
- Tab bar : `White` + bordure haute `Gray 200`
- Onglet actif : `Primary`
- Onglet inactif : `Gray 400`
- CTA principal : `Primary`
- Notifications : `Error`

## 12.6 Interface SaaS
- Topbar : `Primary`
- Contenu : `White`
- Cartes abonnement actif : bordure `Primary`
- Statut "Opérationnel" : `Success`
- Statut "Dégradé" : `Warning`
- Statut "Hors service" : `Error`
- Documentation inline : `Info`

## 12.7 Blog
- Fond article : `White`
- Titres : `Deep Black`
- Texte : `Gray 700`
- Liens : `Primary`
- Citations : bordure gauche `Primary`, fond `Gray 50`
- Tags : `Gray 100` + texte `Gray 600`

## 12.8 Documentation
- Fond : `White`
- Sidebar navigation : `Gray 50`
- Code inline : fond `Gray 100`, texte `Primary`
- Blocs de code : fond `Deep Black`, texte `Gray 100`
- Avertissements : `Warning Light` + bordure `Warning`
- Astuces : `Info Light` + bordure `Info`

---

# 13. Bonnes pratiques

## À faire
- ✔ Utiliser les couleurs avec **cohérence** sur tous les produits
- ✔ Respecter les **contrastes WCAG AA**
- ✔ Limiter les couleurs d'accent (Primary + une couleur d'état max par écran)
- ✔ Privilégier le **blanc et les gris** comme base
- ✔ Réserver le `Primary` aux éléments **structurants et interactifs**
- ✔ Utiliser les couleurs d'état **uniquement** pour leur sémantique

## À ne pas faire
- ✘ Trop de couleurs dans une même interface
- ✘ Dégradés inutiles ou décoratifs
- ✘ Faible contraste (texte gris clair sur fond blanc)
- ✘ Mélanger plusieurs styles graphiques
- ✘ Utiliser des couleurs flashy, néons ou criardes
- ✘ Détourner les couleurs d'état (Success en décoration)
- ✘ Utiliser `Primary` en fond de gros blocs de texte
- ✘ Introduire des couleurs hors palette

---

# 14. Conclusion

Le **Walden Corp Color System v1.0** constitue la référence chromatique officielle de l'entreprise. Il doit être appliqué sans exception sur l'ensemble des produits, sites, applications et interfaces développés ou diffusés par Walden Corp.

Toute évolution, ajout ou modification devra faire l'objet d'une **nouvelle version validée** par la direction de Walden Corp.

---

**© Walden Corp**
**Color System**
**Version 1.0**
**Document officiel.**

*Toute modification devra faire l'objet d'une nouvelle version validée par Walden Corp.*
