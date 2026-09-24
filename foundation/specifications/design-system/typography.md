# Document 10 — Typography System

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Fondamental — dépend des Documents 1, 2, 3, 7, 9

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit le **système typographique** de Walden Corp. Il précise les familles, la hiérarchie, les tailles, les interlignes, le comportement responsive, la lisibilité, l'usage des polices variables et les bonnes pratiques.

Il complète le Document 9 (Color System) : ensemble, ils constituent la base visuelle de toute interface Walden Corp.

### 1.2 Dépendances

- **Dépend de :** Documents 1, 2, 3, 7, 9.
- **Est dépendant de :** Documents 11, 14, 15, 16.

---

## 2. Objectif

Garantir que tout texte affiché dans une interface Walden Corp soit :

- **lisible** ;
- **hiérarchisé** ;
- **cohérent** ;
- **accessible** ;
- **traduisible** ;
- **performant**.

---

## 3. Portée

Tous les textes affichés dans une interface Walden Corp, sur tous les supports.

---

## 4. Définitions

**Famille typographique** — Ensemble de polices partageant un dessin commun.

**Police** — Variante spécifique d'une famille (Regular, Bold, etc.).

**Graisse (weight)** — Épaisseur des traits.

**Interligne (line-height)** — Espace vertical entre lignes.

**Interlettrage (letter-spacing)** — Espace horizontal entre caractères.

**Échelle typographique** — Ensemble de tailles ordonnées.

**Police variable** — Police dont les axes (graisse, largeur, etc.) sont continus.

**Optical size** — Variante optimisée pour une taille donnée.

**Modular scale** — Échelle construite par multiplicateur constant.

**Font stack** — Liste ordonnée de polices avec fallback.

---

## 5. Philosophie typographique

### 5.1 Postulats

**Postulat 1 — Le texte est l'interface principale.** Toute interface Walden Corp est d'abord un texte à lire et à comprendre.

**Postulat 2 — La typographie est fonctionnelle.** Elle sert la lecture, la hiérarchie et la compréhension.

**Postulat 3 — La typographie est sobre.** Une famille principale, une échelle restreinte, aucune fioriture.

**Postulat 4 — La typographie est accessible.** Tailles minimales, contrastes suffisants, interlignes adéquats.

**Postulat 5 — La typographie est durable.** Aucune mode typographique.

### 5.2 Les trois niveaux de typographie

- **Niveau éditorial** — Titres, accroches, textes de présentation.
- **Niveau fonctionnel** — Labels, boutons, navigation.
- **Niveau documentaire** — Corps de texte, paragraphes, tableaux.

Chaque niveau suit des règles spécifiques.

---

## 6. Principes typographiques

### Principe T-1 — Lisibilité avant style

Une typographie lisible prime toujours sur une typographie élégante.

### Principe T-2 — Hiérarchie explicite

La hiérarchie typographique repose sur la taille, la graisse et l'espacement.

### Principe T-3 — Sobriété

Une famille principale, éventuellement une famille monospace pour le code. Aucune famille décorative.

### Principe T-4 — Cohérence

Un même niveau de contenu utilise toujours les mêmes tokens.

### Principe T-5 — Accessibilité

Les tailles respectent les seuils définis (Document 7).

### Principe T-6 — Traduisibilité

L'échelle typographique supporte toutes les langues cibles.

### Principe T-7 — Performance

Les polices sont chargées de manière optimisée (subset, preload).

### Principe T-8 — Durabilité

Aucune police à la mode.

---

## 7. Architecture typographique

Le système s'organise en cinq niveaux.

**Niveau 1 — Familles.** Famille principale, famille monospace, fallbacks.

**Niveau 2 — Échelle.** Ensemble des tailles.

**Niveau 3 — Poids.** Ensemble des graisses.

**Niveau 4 — Interlignes.** Ensemble des interlignes.

**Niveau 5 — Interlettrage.** Ensemble des interlettrages.

Chaque niveau dépend du précédent.

---

## 8. Standards typographiques

**S-T1 — Une famille principale unique.**

**S-T2 — Une famille monospace pour le code.**

**S-T3 — Une échelle typographique restreinte.**

**S-T4 — Poids et interlignes tokenisés.**

**S-T5 — Tailles minimales respectées.**

**S-T6 — Interlignes ≥ 1.4 pour le corps.**

**S-T7 — Longueur de ligne 45–75 caractères.**

**S-T8 — Chargement optimisé (subset, preload, `font-display: swap`).**

**S-T9 — Fallbacks documentés.**

**S-T10 — Tests multilingues.**

---

## 9. Règles typographiques

**R1 — Aucune famille décorative.**

**R2 — Aucune taille hors échelle.**

**R3 — Aucune graisse hors échelle.**

**R4 — Aucun interligne arbitraire.**

**R5 — Aucune taille inférieure à 14 px pour le corps.**

**R6 — Aucun texte en majuscules sur plus d'une ligne.**

**R7 — Aucun texte justifié.**

**R8 — Aucun texte en italique pour des blocs longs.**

**R9 — Aucun soulignement non fonctionnel.**

**R10 — Aucun tracking négatif au-delà de -0.02em.**

**R11 — Aucun tracking positif au-delà de 0.05em (hors capitales courtes).**

**R12 — Aucune police chargée sans `font-display`.**

**R13 — Aucun texte sur image sans contraste vérifié.**

**R14 — Aucune ligne dépassant 75 caractères.**

**R15 — Aucune ligne inférieure à 45 caractères pour du texte long.**

---

## 10. Familles typographiques

### 10.1 Famille principale

La famille principale Walden Corp est une **police sans-serif humaniste**, sobre, lisible, avec des formes neutres. Elle est utilisée pour toute l'interface.

**Critères de sélection** :

- excellente lisibilité en petite taille ;
- formes neutres et intemporelles ;
- support d'un large ensemble de langues ;
- disponibilité en police variable ;
- licence compatible avec l'usage professionnel.

**Fallback** : une police système équivalente (par exemple, `-apple-system`, `Segoe UI`, `Roboto`, `sans-serif`).

### 10.2 Famille monospace

La famille monospace est utilisée pour :

- code ;
- identifiants techniques ;
- raccourcis clavier ;
- journaux (logs).

**Fallback** : `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `monospace`.

### 10.3 Famille éditoriale (optionnelle)

Une famille éditoriale (serif ou display) peut être utilisée **uniquement** pour :

- pages marketing publiques ;
- documentation publique longue ;
- supports imprimés.

Elle n'est **jamais** utilisée dans les interfaces produit.

---

## 11. Échelle typographique

L'échelle est définie selon un **modular scale** à ratio 1.25, ancré sur une base de 16 px.

| Niveau | Taille | Interligne | Graisse | Usage |
|--------|--------|-----------|---------|-------|
| Display XL | 48 px | 1.2 | 600 | Pages marketing |
| Display | 40 px | 1.25 | 600 | Titres de section marketing |
| Heading 1 | 32 px | 1.3 | 600 | Titre principal d'écran |
| Heading 2 | 24 px | 1.35 | 600 | Titre de section |
| Heading 3 | 20 px | 1.4 | 600 | Sous-section |
| Heading 4 | 18 px | 1.45 | 600 | Titre de bloc |
| Body Large | 18 px | 1.55 | 400 | Corps mis en avant |
| Body | 16 px | 1.55 | 400 | Corps standard |
| Body Small | 14 px | 1.5 | 400 | Corps secondaire |
| Label | 14 px | 1.4 | 500 | Labels de formulaire |
| Caption | 13 px | 1.4 | 400 | Légendes |
| Micro | 12 px | 1.4 | 500 | Badges, tags |
| Code | 14 px | 1.5 | 400 | Code monospace |

Toute autre taille est interdite.

---

## 12. Poids typographiques

Poids autorisés :

- **400** — Regular (corps).
- **500** — Medium (labels, accents).
- **600** — Semibold (titres).

Poids interdits :

- 100 (Thin).
- 200 (ExtraLight).
- 300 (Light) — sauf pour des usages éditoriaux spécifiques et documentés.
- 700 (Bold) — remplacé par 600.
- 800, 900.

Tout autre poids est interdit.

---

## 13. Interlettrage

| Contexte | Valeur |
|----------|--------|
| Corps | 0 |
| Titres (≥ 24 px) | -0.01em |
| Display (≥ 40 px) | -0.02em |
| Capitales courtes | +0.05em |
| Monospace | 0 |

Aucune autre valeur n'est autorisée.

---

## 14. Comportement responsive

L'échelle s'adapte aux tailles d'écran selon trois paliers.

| Niveau | Mobile | Tablette | Desktop |
|--------|--------|----------|---------|
| Display XL | 32 px | 40 px | 48 px |
| Display | 28 px | 34 px | 40 px |
| Heading 1 | 24 px | 28 px | 32 px |
| Heading 2 | 20 px | 22 px | 24 px |
| Heading 3 | 18 px | 19 px | 20 px |
| Heading 4 | 16 px | 17 px | 18 px |
| Body Large | 17 px | 18 px | 18 px |
| Body | 16 px | 16 px | 16 px |
| Body Small | 14 px | 14 px | 14 px |
| Label | 14 px | 14 px | 14 px |
| Caption | 13 px | 13 px | 13 px |
| Micro | 12 px | 12 px | 12 px |

Le corps reste à 16 px minimum sur tous les supports.

---

## 15. Recommandations

- Privilégier une police variable.
- Limiter à 2–3 graisses visibles par écran.
- Utiliser des titres courts.
- Éviter les niveaux de hiérarchie au-delà de 4.
- Tester la lisibilité en zoom 200 %.
- Tester les langues RTL.

---

## 16. Bonnes pratiques

- Charger les polices avec `font-display: swap`.
- Sous-ensembler selon les langues.
- Précharger la police critique.
- Documenter les fallbacks.
- Utiliser des unités `rem` pour l'accessibilité.

---

## 17. Mauvaises pratiques

- Utiliser plusieurs familles décoratives.
- Introduire des tailles arbitraires.
- Justifier le texte.
- Utiliser l'italique pour du texte long.
- Dépasser 75 caractères par ligne.
- Charger la police sans fallback.
- Utiliser une police sans support multilingue.

---

## 18. Cas d'usage

### Cas 1 — Écran de dashboard

- Titre de page : Heading 1 (32 px, 600).
- Titre de section : Heading 2 (24 px, 600).
- Label de KPI : Micro (12 px, 500).
- Valeur de KPI : Display (40 px, 600).
- Corps d'aide : Body Small (14 px).

### Cas 2 — Formulaire

- Label : Label (14 px, 500).
- Champ : Body (16 px, 400).
- Message d'aide : Caption (13 px, 400).
- Message d'erreur : Caption (13 px, 400), couleur sémantique.

### Cas 3 — Tableau

- En-tête : Label (14 px, 500).
- Cellule : Body Small (14 px, 400).
- Total : Body (16 px, 600).

### Cas 4 — Documentation publique

- Titre : Display XL (48 px, 600).
- Chapeau : Body Large (18 px, 400).
- Sous-titre : Heading 2 (24 px, 600).
- Corps : Body (16 px, 400).
- Code : Code (14 px).

### Cas 5 — Écran mobile

- Titre : Heading 1 (24 px, 600).
- Corps : Body (16 px, 400).
- Label : Label (14 px, 500).

---

## 19. Exemples

### Exemple 1 — Hiérarchie conforme

```html
<h1>Facturation</h1>
<h2>Factures en cours</h2>
<h3>Montant total</h3>
<p>1 245 €</p>
<small>Mis à jour il y a 3 minutes</small>
```
Tailles issues de l'échelle, graisses conformes, interlignes conformes.

Exemple 2 — Hiérarchie non conforme
```html
<h1 style="font-size: 27px; font-weight: 900">Facturation</h1>
<h2 style="font-size: 26px; font-weight: 200">Factures</h2>
```
Taille hors échelle, graisses interdites.

## 20. Anti-patterns typographiques
Famille multiple — Plusieurs familles non documentées.

Graisse excessive — Graisses hors échelle.

Taille arbitraire — Taille hors échelle.

Justification — Texte justifié.

Ligne longue — Ligne > 75 caractères.

Italique long — Bloc en italique.

Soulignement décoratif — Soulignement non fonctionnel.

Police décorative — Police non conforme.

## 21. Checklist de validation typographique
□ Une seule famille principale.
□ Une seule famille monospace.
□ Aucune famille décorative en interface produit.
□ Toutes les tailles proviennent de l'échelle.
□ Tous les poids proviennent de l'ensemble autorisé.
□ Tous les interlignes proviennent de l'échelle.
□ Aucune taille inférieure à 14 px pour le corps.
□ Longueur de ligne 45–75 caractères.
□ Aucun texte justifié.
□ Aucun texte en majuscules > 1 ligne.
□ Aucun italique long.
□ Aucun soulignement décoratif.
□ Fallbacks documentés.
□ Chargement optimisé (font-display, subset, preload).
□ Tests multilingues effectués.
□ Tests RTL effectués.
□ Tests zoom 200 % effectués.

## 22. Critères de validation formels
Une interface est typographiquement conforme si :

Elle respecte R1 à R15.

Elle satisfait S-T1 à S-T10.

Elle passe la checklist (section 21).

## 23. Gouvernance
Toute évolution typographique suit le processus RFC (Document 17). Les évolutions majeures exigent validation du comité design (Document 18).

## 24. Versioning
Version	Date	Auteur	Changements
1.0	—	Comité design	Publication initiale
## 25. FAQ
Q1 — Peut-on utiliser une famille différente pour un produit spécifique ?
Non. La famille principale est unique pour tout Walden Corp.

Q2 — Peut-on utiliser une famille éditoriale en interface ?
Non. Elle est réservée aux supports éditoriaux publics.

Q3 — Peut-on utiliser l'italique pour des citations ?
Oui, avec parcimonie et pour des citations courtes.

Q4 — Peut-on augmenter la taille du corps sur mobile ?
La taille du corps reste 16 px sur tous les supports. Les autres niveaux s'adaptent.

Q5 — Comment gérer les langues RTL ?
Les polices supportent l'arabe et l'hébreu. Le layout s'inverse selon dir="rtl".

## 26. Glossaire spécifique
Font stack — Liste ordonnée de polices.

Interlettrage — Espace horizontal.

Interligne — Espace vertical.

Modular scale — Échelle par multiplicateur.

Optical size — Variante optimisée.

Police variable — Police aux axes continus.

Subset — Sous-ensemble de glyphes.

Weight — Graisse.

## 27. Annexes
Annexe A — Références croisées
Document 1 — Design Philosophy

Document 2 — Design Language

Document 3 — Visual Identity

Document 7 — Accessibility Standards

Document 9 — Color System

Document 11 — Grid & Spacing System

Document 14 — Component Specification

Document 15 — Pattern Library

Document 16 — AI Design Rules

Annexe B — Références externes (inspiration)
Material Design — Typography

IBM Carbon — Type

Microsoft Fluent — Typography

Apple HIG — Typography

Adobe Spectrum — Typography

Shopify Polaris — Typography

GitHub Primer — Typography


*Fin du Document 10 — Typography System.*
