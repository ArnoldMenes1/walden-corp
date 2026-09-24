# Spécification — Site de documentation Walden Corp Design System

**Version :** 1.0.1
**Statut :** Spécification officielle
**URL cible :** `https://ds.waldencorp.com`
**Source de vérité :** Foundation Specification v1.0

---

## 1. Objectif

Ce document spécifie **l'intégralité** du site de documentation officiel du Design System Walden Corp : vision, stack technique, architecture, fonctionnalités, accessibilité, performance, déploiement, gouvernance.

Il constitue la **référence unique** pour les développeurs chargés de construire, maintenir et déployer le site.

---

## 2. Portée

Le site couvre :

- la **documentation** de tous les documents du dépôt `walden-corp` ;
- les **exemples live** des 27 composants React ;
- les **patterns** UX documentés ;
- la **recherche instantanée** ;
- l'**export de tokens** ;
- l'**accès aux règles IA** ;
- les **ressources** (Figma, starter kits, changelog).

---

## 3. Principes directeurs

1. **Source unique de vérité** : le contenu provient exclusivement du dépôt `walden-corp`.
2. **Alignement strict avec le code** : chaque exemple est rendu à partir de `@waldencorp/ds-react`.
3. **Accessibilité native** : WCAG 2.1 AA minimum.
4. **Performance** : Lighthouse ≥ 95 sur toutes les catégories.
5. **Préparation à l'IA** : structure sémantique, URLs stables, données structurées.
6. **Déploiement continu** : chaque merge sur `main` déclenche un déploiement.

---

## 4. Stack technique

| Couche | Technologie | Justification |
|--------|-------------|---------------|
| Framework | Next.js 14 (App Router) | SSG, MDX natif, performance, SEO |
| Langage | TypeScript 5+ (strict) | Typage strict |
| Contenu | MDX (Markdown + JSX) | Documentation + exemples live |
| Style | Tailwind CSS v4 + tokens Walden | Cohérence avec la bibliothèque |
| Composants | `@waldencorp/ds-react` | Source unique |
| Recherche | `orama` (ou `algolia` en option) | Recherche instantanée |
| Déploiement | Vercel | Edge, CDN, previews |
| Analytics | Plausible | Respect vie privée |
| Tests | Playwright + axe-core | E2E + accessibilité |
| CI/CD | GitHub Actions | Lint, type-check, tests, build, deploy |

---

## 5. Structure des routes

Voir `apps/docs-site/routes.md` pour la liste complète.

Routes principales :

- `/` — Accueil
- `/getting-started` — Démarrage rapide
- `/principles` — Constitution
- `/foundations/*` — Fondations (color, typography, grid, elevation, iconography, motion, accessibility)
- `/components/*` — Composants (27 fiches)
- `/patterns/*` — Patterns (dashboard, form, list)
- `/tokens` — Référentiel des tokens
- `/ai` — Règles IA
- `/resources/*` — Figma, starter kits, changelog
- `/search` — Recherche globale

---

## 6. Structure des dossiers

apps/docs-site/
├── package.json
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── (docs)/
│   │   ├── layout.tsx
│   │   ├── getting-started/page.mdx
│   │   ├── principles/page.mdx
│   │   ├── foundations/
│   │   │   ├── color/page.mdx
│   │   │   ├── typography/page.mdx
│   │   │   ├── grid/page.mdx
│   │   │   ├── elevation/page.mdx
│   │   │   ├── iconography/page.mdx
│   │   │   ├── motion/page.mdx
│   │   │   └── accessibility/page.mdx
│   │   ├── components/
│   │   │   ├── [slug]/page.mdx
│   │   │   └── ...
│   │   ├── patterns/
│   │   ├── tokens/page.tsx
│   │   ├── ai/page.mdx
│   │   └── resources/
│   └── api/
│       ├── search/route.ts
│       └── tokens/route.ts
├── components/
│   ├── layout/
│   │   ├── TopNav.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TableOfContents.tsx
│   │   ├── Breadcrumbs.tsx
│   │   ├── Footer.tsx
│   │   ├── SearchDialog.tsx
│   │   └── ThemeToggle.tsx
│   ├── doc/
│   │   ├── MDXComponents.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── Callout.tsx
│   │   ├── PropTable.tsx
│   │   ├── Playground.tsx
│   │   └── DoDont.tsx
│   └── home/
│       ├── Hero.tsx
│       ├── FeatureGrid.tsx
│       └── QuickLinks.tsx
├── content/
│   ├── components/
│   │   ├── button.mdx
│   │   ├── input.mdx
│   │   └── ...
│   └── patterns/
├── lib/
│   ├── mdx.ts
│   ├── search.ts
│   ├── tokens.ts
│   └── nav.ts
├── public/
│   ├── logos/
│   └── assets/
├── styles/
│   └── globals.css
└── README.md

---

## 7. Contenu

### 7.1 Source du contenu

Le contenu provient de **deux sources** :

1. **Dépôt `walden-corp`** (sous-module ou sync) :
   - `foundation/**/*.md` → pages `/foundations/*`, `/principles`, `/ai`
   - `policies/**/*.md` → pages `/resources/policies`
   - `decisions/**/*.md` → pages `/resources/decisions`

2. **Dossier `content/`** du site :
   - `content/components/*.mdx` → pages `/components/*`
   - `content/patterns/*.mdx` → pages `/patterns/*`

### 7.2 Frontmatter obligatoire

Chaque fichier MDX contient un frontmatter YAML :

```yaml
---
title: Titre de la page
description: Description courte
category: Primitives | Surfaces | Feedback | Overlays | Navigation | Data | Layout
version: 1.0.1
status: stable | beta | deprecated
owner: Nom
last_updated: 2026-01-15
tags: [tag1, tag2]
---
```

### 7.3 Composants MDX disponibles

- `<Playground>` — exemple live interactif
- `<PropTable>` — tableau des props
- `<DoDont>` — bonne/mauvaise pratique
- `<Callout>` — encart (info, warning, error, success)
- `<CodeBlock>` — bloc de code avec coloration
- `<Tokens>` — liste de tokens
- `<Anatomy>` — schéma d'anatomie

---

## 8. Fonctionnalités

### 8.1 Navigation

- **TopNav** — header sticky avec logo, liens principaux, recherche, thème.
- **Sidebar** — navigation documentaire contextuelle.
- **TableOfContents** — sommaire de page avec scroll-spy.
- **Breadcrumbs** — fil d'Ariane sur les pages profondes.
- **Footer** — liens secondaires, mentions légales, GitHub.

### 8.2 Recherche

- **Déclencheur** : `⌘K` (Mac) / `Ctrl+K` (Windows/Linux).
- **Backend** : API `/api/search` basée sur `orama`.
- **Résultats** : instantanés (< 150 ms), classés par pertinence.
- **Accessibilité** : navigation clavier complète, `aria-live`.

### 8.3 Exemples live

- Rendus à partir de `@waldencorp/ds-react`.
- Éditable en direct (via `<Playground>`).
- Code source affiché et copiable.
- Contrôles de props (variant, size, etc.).

### 8.4 Mode clair / sombre

- Basculement automatique selon `prefers-color-scheme`.
- Toggle manuel dans le `TopNav`.
- Persistance dans `localStorage`.
- Toutes les couleurs proviennent des tokens.

### 8.5 Export de tokens

- Page `/tokens` : liste interactive.
- Export JSON, CSS, Tailwind, Figma.
- API `/api/tokens?format=json|csv|figma`.

### 8.6 Accessibilité

- WCAG 2.1 AA minimum.
- Skip link en haut de page.
- Focus visible sur tous les éléments.
- Navigation clavier complète.
- `aria-live` sur les mises à jour dynamiques.
- `prefers-reduced-motion` respecté.

### 8.7 Performance

- Lighthouse ≥ 95 (Perf, A11y, Best Practices, SEO).
- SSG (Static Site Generation) pour les pages documentaires.
- ISR pour les pages dynamiques.
- Images optimisées via `next/image`.
- Polices préchargées, `display: swap`.

---

## 9. Design

### 9.1 Identité visuelle

Le site utilise **exclusivement** les tokens du Design System Walden Corp :

- Couleurs : `color.*`
- Typographie : `typography.*` (Inter Variable)
- Espacements : `spacing.*`
- Rayons : `radius.*`
- Élévations : `elevation.*`

### 9.2 Styles de page

- **Largeur maximale** : 1440 px.
- **Largeur de lecture** : 720 px pour le contenu principal.
- **Grille** : 12 colonnes (desktop), 8 (tablette), 4 (mobile).
- **Sidebar** : 280 px.
- **TableOfContents** : 240 px.

### 9.3 Composants internes

- `TopNav` : hauteur 64 px, sticky, border-bottom subtile.
- `Sidebar` : sticky, scroll indépendant.
- `TableOfContents` : sticky, scroll-spy.
- `Footer` : 3 colonnes, fond sunken.

---

## 10. Sécurité

- **CSP** stricte (Content Security Policy).
- **HTTPS** obligatoire (redirection).
- **Headers de sécurité** : HSTS, X-Frame-Options, X-Content-Type-Options.
- **Aucun secret** dans le code client.
- **Variables d'environnement** documentées dans `.env.example`.

---

## 11. Déploiement

### 11.1 Environnements

- **`preview`** — à chaque Pull Request (Vercel).
- **`staging`** — branche `staging` (optionnel).
- **`production`** — branche `main`, URL `https://ds.waldencorp.com`.

### 11.2 CI/CD (GitHub Actions)

Workflow `.github/workflows/docs-site.yml` :

1. Lint (ESLint).
2. Type-check (tsc --noEmit).
3. Tests (Playwright + axe-core).
4. Build (Next.js).
5. Déploiement Vercel.

### 11.3 Monitoring

- **Vercel Analytics** : Web Vitals.
- **Plausible** : trafic respectueux de la vie privée.
- **Sentry** : erreurs runtime.

---

## 12. Gouvernance

- **Owner** : Lead Front-End du Design System.
- **Contributeurs** : équipes design et technique.
- **Processus** : RFC + Pull Request (voir `CONTRIBUTING.md`).
- **Publication** : automatique après merge sur `main`.

---

## 13. Checklist de conformité

- [ ] Toutes les pages ont un frontmatter YAML valide.
- [ ] Aucune couleur en dur (tokens uniquement).
- [ ] Aucune taille de police hors échelle.
- [ ] Navigation clavier complète.
- [ ] Focus visible sur tous les éléments interactifs.
- [ ] Contrastes WCAG AA conformes.
- [ ] `prefers-reduced-motion` respecté.
- [ ] `prefers-color-scheme` respecté.
- [ ] Recherche accessible.
- [ ] Lighthouse ≥ 95.
- [ ] Aucun secret exposé.
- [ ] Headers de sécurité configurés.

---

## 14. Références

- `apps/docs-site/routes.md`
- `foundation/specifications/design-system/`
- `packages/ds-react/`
- `meta/taxonomy.md`
- `CONTRIBUTING.md`

---

*Fin du document.*
