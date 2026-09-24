# Structure des routes du site de documentation

**Version :** 1.0.1
**Site cible :** `https://ds.waldencorp.com`

---

## 1. Vue d'ensemble

Le site est organisé en **10 sections principales**, contenant au total **80+ pages**.

| Section | Nombre de pages | Rôle |
|---------|-----------------|------|
| Accueil | 1 | Point d'entrée |
| Démarrage | 1 | Guide de démarrage rapide |
| Principes | 1 | Constitution du Design System |
| Fondations | 7 | Color, Typography, Grid, Elevation, Iconography, Motion, Accessibility |
| Composants | 27 | Fiches détaillées |
| Patterns | 3 | Dashboard, Form, List |
| Tokens | 1 | Référentiel interactif |
| IA | 1 | Règles pour les agents IA |
| Ressources | 4 | Figma, Starter kits, Changelog, Policies |
| Recherche | 1 | Recherche globale |
| **Total** | **~47** | (hors pages dynamiques) |

---

## 2. Routes détaillées

### 2.1 Accueil

| Route | Fichier | Type | Description |
|-------|---------|------|-------------|
| `/` | `app/page.tsx` | Server Component | Page d'accueil avec hero, sections, liens rapides |

**Contenu :**
- Hero avec titre + sous-titre + deux CTA.
- Grille de 4 cards (Fondations, Composants, Tokens, IA).
- Liens vers démarrage rapide.

---

### 2.2 Démarrage

| Route | Fichier | Type | Description |
|-------|---------|------|-------------|
| `/getting-started` | `app/(docs)/getting-started/page.mdx` | MDX | Guide de démarrage |

**Contenu :**
- Installation de `@waldencorp/ds-react`.
- Import des variables CSS.
- Premier composant.
- Configuration Tailwind.
- Liens vers les fondations.

---

### 2.3 Principes

| Route | Fichier | Type | Description |
|-------|---------|------|-------------|
| `/principles` | `app/(docs)/principles/page.mdx` | MDX | Constitution (18 principes) |

**Contenu :**
- Préambule.
- 18 principes avec philosophie, conséquences, exemples.
- Ordre de priorité en cas de conflit.
- Processus de validation.

---

### 2.4 Fondations

| Route | Fichier | Type | Description |
|-------|---------|------|-------------|
| `/foundations` | `app/(docs)/foundations/page.mdx` | MDX | Vue d'ensemble |
| `/foundations/color` | `app/(docs)/foundations/color/page.mdx` | MDX | Couleurs |
| `/foundations/typography` | `app/(docs)/foundations/typography/page.mdx` | MDX | Typographie |
| `/foundations/grid` | `app/(docs)/foundations/grid/page.mdx` | MDX | Grille et espacement |
| `/foundations/elevation` | `app/(docs)/foundations/elevation/page.mdx` | MDX | Élévation et ombres |
| `/foundations/iconography` | `app/(docs)/foundations/iconography/page.mdx` | MDX | Iconographie |
| `/foundations/motion` | `app/(docs)/foundations/motion/page.mdx` | MDX | Mouvement |
| `/foundations/accessibility` | `app/(docs)/foundations/accessibility/page.mdx` | MDX | Accessibilité |

**Contenu type :**
- Introduction.
- Tokens disponibles.
- Exemples visuels.
- Contrastes / validation.
- Références.

---

### 2.5 Composants

Chaque composant dispose d'une page dédiée avec le même format.

| Route | Fichier | Composant |
|-------|---------|-----------|
| `/components` | `app/(docs)/components/page.mdx` | Vue d'ensemble (catalogue) |
| `/components/button` | `app/(docs)/components/[slug]/page.mdx` | Button |
| `/components/input` | `app/(docs)/components/[slug]/page.mdx` | Input |
| `/components/textarea` | idem | Textarea |
| `/components/checkbox` | idem | Checkbox |
| `/components/radio` | idem | Radio |
| `/components/switch` | idem | Switch |
| `/components/select` | idem | Select |
| `/components/icon` | idem | Icon |
| `/components/card` | idem | Card |
| `/components/panel` | idem | Panel |
| `/components/divider` | idem | Divider |
| `/components/spinner` | idem | Spinner |
| `/components/progress-bar` | idem | ProgressBar |
| `/components/alert` | idem | Alert |
| `/components/toast` | idem | Toast |
| `/components/modal` | idem | Modal |
| `/components/drawer` | idem | Drawer |
| `/components/popover` | idem | Popover |
| `/components/tooltip` | idem | Tooltip |
| `/components/tabs` | idem | Tabs |
| `/components/sidebar` | idem | Sidebar |
| `/components/breadcrumbs` | idem | Breadcrumbs |
| `/components/pagination` | idem | Pagination |
| `/components/table` | idem | Table |
| `/components/list` | idem | List |
| `/components/tag` | idem | Tag |
| `/components/container` | idem | Container |
| `/components/stack` | idem | Stack |
| `/components/grid` | idem | Grid |

**Format standard d'une fiche :**

1. Titre + version + statut.
2. Description.
3. Exemple live.
4. Anatomie.
5. Variantes.
6. États.
7. API (PropTable).
8. Accessibilité.
9. Tokens utilisés.
10. Cas d'usage.
11. Anti-patterns.
12. Références.

---

### 2.6 Patterns

| Route | Fichier | Type | Description |
|-------|---------|------|-------------|
| `/patterns` | `app/(docs)/patterns/page.mdx` | MDX | Vue d'ensemble |
| `/patterns/dashboard` | `app/(docs)/patterns/dashboard/page.mdx` | MDX | Pattern Dashboard |
| `/patterns/form` | `app/(docs)/patterns/form/page.mdx` | MDX | Pattern Formulaire |
| `/patterns/list` | `app/(docs)/patterns/list/page.mdx` | MDX | Pattern Liste |

**Contenu type :**
- Objectif.
- Contexte d'usage.
- Anatomie.
- Composition.
- Exemple live.
- Accessibilité.
- Anti-patterns.

---

### 2.7 Tokens

| Route | Fichier | Type | Description |
|-------|---------|------|-------------|
| `/tokens` | `app/(docs)/tokens/page.tsx` | Server Component | Référentiel interactif |

**Contenu :**
- Filtres par catégorie (color, typography, spacing, radius, elevation, opacity, motion).
- Tableau interactif (recherche, copie).
- Export (JSON, CSS, Tailwind, Figma).
- Lien vers la Foundation Specification.

---

### 2.8 IA

| Route | Fichier | Type | Description |
|-------|---------|------|-------------|
| `/ai` | `app/(docs)/ai/page.mdx` | MDX | Règles IA |

**Contenu :**
- Règles de génération d'interface.
- Choix de composant.
- Utilisation des tokens.
- Documentation obligatoire.
- Validation humaine.
- Anti-patterns (hallucinations).

---

### 2.9 Ressources

| Route | Fichier | Type | Description |
|-------|---------|------|-------------|
| `/resources` | `app/(docs)/resources/page.mdx` | MDX | Vue d'ensemble |
| `/resources/figma` | `app/(docs)/resources/figma/page.mdx` | MDX | Lien bibliothèque Figma |
| `/resources/starter-kits` | `app/(docs)/resources/starter-kits/page.mdx` | MDX | Kits de démarrage |
| `/resources/changelog` | `app/(docs)/resources/changelog/page.mdx` | MDX | Journal des versions |

---

### 2.10 Recherche

| Route | Fichier | Type | Description |
|-------|---------|------|-------------|
| `/search` | `app/(docs)/search/page.tsx` | Client Component | Recherche globale |

**Fonctionnalités :**
- Champ de recherche.
- Résultats instantanés.
- Filtres par catégorie.
- Accès direct à la recherche via `⌘K` (modale).

---

### 2.11 API

| Route | Méthode | Description |
|-------|---------|-------------|
| `/api/search?q=...` | GET | Recherche full-text |
| `/api/tokens?format=json` | GET | Export JSON des tokens |
| `/api/tokens?format=css` | GET | Export CSS |
| `/api/tokens?format=tailwind` | GET | Export Tailwind |
| `/api/tokens?format=figma` | GET | Export Figma |

---

## 3. Navigation

### 3.1 TopNav

| Élément | Route | Description |
|---------|-------|-------------|
| Logo | `/` | Retour à l'accueil |
| Démarrage | `/getting-started` | Guide de démarrage |
| Principes | `/principles` | Constitution |
| Fondations | `/foundations` | Menu déroulant |
| Composants | `/components` | Menu déroulant |
| Patterns | `/patterns` | Menu déroulant |
| Tokens | `/tokens` | Référentiel |
| Ressources | `/resources` | Menu déroulant |
| Recherche | Modale `⌘K` | Recherche globale |
| Thème | Toggle | Clair / Sombre |

### 3.2 Sidebar

La sidebar reflète la section active :

- **Section `getting-started`** : introduction, installation, premier composant.
- **Section `principles`** : 18 principes + annexes.
- **Section `foundations`** : 7 sous-pages.
- **Section `components`** : 27 composants classés par catégorie.
- **Section `patterns`** : 3 patterns.
- **Section `resources`** : 4 sous-pages.

### 3.3 Breadcrumbs

Affichés sur les pages profondes (composants, patterns, fondations).

Format : `Accueil / Section / Sous-section / Page`.

---

## 4. Redirections

| Ancienne route | Nouvelle route | Statut |
|----------------|----------------|--------|
| `/docs/*` | `/foundations/*` | 301 |
| `/components/button-primary` | `/components/button` | 301 |
| `/guide` | `/getting-started` | 301 |

---

## 5. Indexation

### 5.1 SEO

- Sitemap généré automatiquement (`/sitemap.xml`).
- `robots.txt` autorisant l'indexation.
- Balises meta (`title`, `description`, `og:*`, `twitter:*`).
- Données structurées (JSON-LD) sur les pages composants.

### 5.2 Recherche interne

- Index construit à partir des frontmatters et du contenu.
- Régénéré à chaque build.

---

## 6. Résumé

| Section | Nombre de pages |
|---------|-----------------|
| Accueil | 1 |
| Démarrage | 1 |
| Principes | 1 |
| Fondations | 8 |
| Composants | 30 |
| Patterns | 4 |
| Tokens | 1 |
| IA | 1 |
| Ressources | 4 |
| Recherche | 1 |
| **Total** | **52 pages** (+ API) |

---

## 7. Références

- `apps/docs-site/SPECIFICATION.md`
- `foundation/specifications/design-system/`
- `packages/ds-react/`
- `meta/repository-map.md`

---

*Fin du document.*
