# Document 9 — Color System

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Fondamental — dépend des Documents 1, 2, 3

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit le **système de couleurs** de Walden Corp. Il précise la philosophie, les tokens, les couleurs sémantiques, les thèmes (clair et sombre), les contrastes, les usages et les interdictions.

### 1.2 Dépendances

- **Dépend de :** Documents 1, 2, 3.
- **Est dépendant de :** Documents 7, 12, 13, 14, 15, 16.

---

## 2. Objectif

Garantir que toute couleur utilisée dans une interface Walden Corp soit :

- **tokenisée** ;
- **sémantique** ;
- **accessible** ;
- **cohérente** ;
- **documentée**.

---

## 3. Portée

Toutes les interfaces Walden Corp, sur tous les supports, en tous thèmes (clair, sombre, contraste élevé).

---

## 4. Définitions

**Token de couleur** — Nom stable référençant une couleur.

**Token sémantique** — Token nommé selon son usage ("texte principal"), pas sa valeur.

**Thème** — Ensemble de valeurs pour un contexte (clair, sombre).

**Contraste** — Différence de luminance.

**Palette** — Ensemble restreint de couleurs.

**Couleur sémantique** — Couleur portant une signification (succès, erreur).

**État** — Situation d'un composant (repos, hover, etc.).

**Alpha** — Canal de transparence.

---

## 5. Philosophie des couleurs

### 5.1 Postulats

**Postulat 1 — La couleur est fonctionnelle.** Elle informe, hiérarchise, signale un état. Elle ne décore jamais.

**Postulat 2 — La couleur est tokenisée.** Aucune valeur hexadécimale dans le code de production.

**Postulat 3 — La couleur est sémantique.** Un token décrit l'usage, pas la teinte.

**Postulat 4 — La couleur est accessible.** Chaque paire respecte les seuils WCAG AA minimum.

**Postulat 5 — La couleur est sobre.** Palette restreinte, pas d'effets, pas de dégradés décoratifs.

**Postulat 6 — La couleur est multi-thème.** Toute couleur fonctionne en clair et en sombre.

### 5.2 Les rôles fonctionnels

Walden Corp distingue **six rôles fonctionnels** :

1. **Primaire** — Couleur de marque, actions principales.
2. **Secondaire** — Accent discret.
3. **Neutre** — Texte, surfaces, bordures.
4. **Succès** — Confirmations.
5. **Avertissement** — Avertissements.
6. **Erreur** — Erreurs critiques.

---

## 6. Principes de couleur

### Principe C-1 — Sémantique avant esthétique

Les tokens décrivent l'usage, pas la teinte.

### Principe C-2 — Palette restreinte

Le nombre de teintes est limité. Aucune introduction ad hoc.

### Principe C-3 — Contraste garanti

Chaque paire texte/fond respecte les seuils WCAG AA.

### Principe C-4 — Couleur non seule

Aucune information n'est transmise uniquement par la couleur.

### Principe C-5 — Thèmes symétriques

Les thèmes clair et sombre sont conçus conjointement.

### Principe C-6 — Cohérence inter-produits

Toutes les interfaces Walden Corp utilisent les mêmes tokens.

### Principe C-7 — Performance

Aucune couleur n'est introduite sans considération de performance de rendu.

---

## 7. Architecture du système de couleurs

Le système s'organise en **trois niveaux** :

**Niveau 1 — Primitives** — Valeurs brutes (par exemple, `blue.500`). Ne sont jamais utilisées directement dans les composants.

**Niveau 2 — Sémantiques** — Tokens nommés par usage (`text.primary`, `surface.elevated`). Utilisés dans les composants.

**Niveau 3 — Thèmes** — Valeurs de tokens sémantiques pour un contexte donné (clair, sombre).

Les composants n'utilisent que le niveau 2. Le niveau 1 est un référentiel interne. Le niveau 3 est déterminé automatiquement selon le thème actif.

---

## 8. Standards de couleur

**S-C1 — Toute couleur provient d'un token sémantique.**

**S-C2 — Aucune valeur hexadécimale dans le code de production.**

**S-C3 — Toute paire texte/fond respecte WCAG AA.**

**S-C4 — Toute couleur fonctionne en clair et en sombre.**

**S-C5 — Toute couleur documente son usage.**

**S-C6 — Toute couleur est testée avec `prefers-contrast: more`.**

**S-C7 — Toute couleur est testée avec daltonisme (protanopie, deutéranopie, tritanopie).**

**S-C8 — Toute couleur est testée en impression monochrome si nécessaire.**

---

## 9. Règles de couleur

**R1 — Aucune couleur en dehors des tokens.**

**R2 — Aucune couleur transmettant une information seule.**

**R3 — Aucun contraste inférieur aux seuils.**

**R4 — Aucun dégradé sauf usage documenté.**

**R5 — Aucune couleur fluorescente ou saturée à l'excès.**

**R6 — Aucune couleur dans les palettes non documentées.**

**R7 — Aucune couleur de marque utilisée pour du texte long.**

**R8 — Aucune couleur sémantique détournée de son usage.**

**R9 — Aucune couleur d'état sans état associé.**

**R10 — Aucune couleur personnalisée hors tokens.**

---

## 10. Tokens sémantiques

### 10.1 Tokens de texte

- `color.text.primary`
- `color.text.secondary`
- `color.text.tertiary`
- `color.text.disabled`
- `color.text.inverse`
- `color.text.link`
- `color.text.link.visited`
- `color.text.success`
- `color.text.warning`
- `color.text.error`
- `color.text.info`

### 10.2 Tokens de surface

- `color.surface.base`
- `color.surface.raised`
- `color.surface.overlay`
- `color.surface.sunken`
- `color.surface.disabled`
- `color.surface.inverse`

### 10.3 Tokens de bordure

- `color.border.subtle`
- `color.border.default`
- `color.border.strong`
- `color.border.focus`
- `color.border.error`
- `color.border.success`
- `color.border.warning`

### 10.4 Tokens d'action

- `color.action.primary`
- `color.action.primary.hover`
- `color.action.primary.active`
- `color.action.primary.disabled`
- `color.action.secondary`
- `color.action.secondary.hover`
- `color.action.tertiary`
- `color.action.destructive`

### 10.5 Tokens d'état

- `color.state.success`
- `color.state.warning`
- `color.state.error`
- `color.state.info`

### 10.6 Tokens d'accent

- `color.accent.brand`
- `color.accent.subtle`

---

## 11. Thèmes

### 11.1 Thème clair (par défaut)

Fond clair, texte sombre. Contraste respecté. Palette neutre avec couleur de marque utilisée pour les actions principales.

### 11.2 Thème sombre

Fond sombre, texte clair. Contraste respecté. Les couleurs de marque sont ajustées pour rester lisibles.

### 11.3 Thème contraste élevé

Toutes les couleurs sont adaptées pour maximiser le contraste, selon `prefers-contrast: more`.

### 11.4 Sélection automatique

Le thème suit `prefers-color-scheme` par défaut, avec option manuelle dans les paramètres.

---

## 12. Recommandations

- Utiliser les tokens sémantiques dans les composants.
- Documenter chaque token dans le catalogue.
- Vérifier les contrastes avant chaque livraison.
- Tester en clair et en sombre.
- Tester avec daltonisme.

---

## 13. Bonnes pratiques

- Privilégier les contrastes de forme.
- Ne jamais transmettre d'information uniquement par la couleur.
- Documenter les exceptions.
- Mettre à jour le catalogue à chaque évolution.

---

## 14. Mauvaises pratiques

- Utiliser `#0F2052` en dur dans le code.
- Introduire une couleur locale.
- Utiliser une couleur uniquement décorative.
- Ignorer le thème sombre.
- Utiliser la couleur pour signifier un état sans autre indicateur.

---

## 15. Cas d'usage

### Cas 1 — Bouton primaire

- Repos : `color.action.primary`
- Hover : `color.action.primary.hover`
- Active : `color.action.primary.active`
- Disabled : `color.action.primary.disabled`

### Cas 2 — Champ de formulaire

- Bordure : `color.border.default`
- Bordure focus : `color.border.focus`
- Bordure erreur : `color.border.error`

### Cas 3 — Carte

- Surface : `color.surface.raised`
- Bordure : `color.border.subtle`

### Cas 4 — Message de succès

- Fond : `color.state.success.subtle`
- Texte : `color.state.success`
- Icône : `color.state.success`

### Cas 5 — Alerte critique

- Fond : `color.state.error.subtle`
- Texte : `color.state.error`
- Bordure : `color.border.error`

---

## 16. Exemples

### Exemple 1 — Mauvais usage

```css
.button { background: #0F2052; }
```
Exemple 2 — Bon usage

```css
.button { background: var(--color-action-primary); }
```
17. Anti-patterns de couleur
Couleur en dur — Valeur hexadécimale dans le code.

Couleur seule — Information uniquement chromatique.

Dégradé décoratif — Dégradé sans fonction.

Palette étendue — Ajout de couleurs locales.

Thème unique — Thème sombre absent ou bâclé.

Contraste insuffisant — Sous les seuils WCAG.

18. Checklist de validation de couleur
□ Aucune valeur hexadécimale dans le code de production.
□ Toutes les couleurs proviennent de tokens sémantiques.
□ Toutes les paires respectent WCAG AA.
□ Aucune information transmise uniquement par la couleur.
□ Thème clair testé.
□ Thème sombre testé.
□ Thème contraste élevé testé.
□ Daltonisme testé (3 types).
□ Aucun dégradé non documenté.
□ Aucune couleur locale non documentée.
□ Les tokens sont documentés dans le catalogue.
19. Critères de validation formels
Une interface est conforme sur le plan chromatique si :

Elle respecte R1 à R10.

Elle satisfait S-C1 à S-C8.

Elle passe la checklist (section 18).

20. Gouvernance
Toute évolution de la palette suit le processus RFC (Document 17). Les évolutions majeures exigent validation du comité design (Document 18).

21. Versioning
Version	Date	Auteur	Changements
1.0	—	Comité design	Publication initiale
22. FAQ
Q1 — Peut-on utiliser une couleur en dur dans un prototype ?
Uniquement en prototype non livré. Jamais en production.

Q2 — Peut-on créer une couleur locale pour une marque partenaire ?
Non. Les couleurs partenaires sont gérées par des tokens dédiés documentés.

Q3 — Peut-on ignorer le thème sombre ?
Non. Toute interface supporte le thème sombre.

Q4 — Comment gérer les couleurs de graphique ?
Via des tokens dédiés dans le Document 13 (Iconography) et Document 15 (Patterns).

Q5 — Peut-on utiliser la couleur de marque pour du texte long ?
Non. Elle est réservée aux actions et accents.

23. Glossaire spécifique
Alpha — Canal de transparence.

Contraste — Différence de luminance.

Palette — Ensemble restreint.

Primitive — Valeur brute.

Sémantique — Relatif au sens.

Thème — Contexte de valeurs.

Token — Unité nommée.

24. Annexes
Annexe A — Références croisées
Document 1 — Design Philosophy

Document 2 — Design Language

Document 3 — Visual Identity

Document 7 — Accessibility Standards

Document 10 — Typography System

Document 12 — Elevation & Shadows

Document 13 — Iconography & Illustration

Document 14 — Component Specification

Document 15 — Pattern Library

Document 16 — AI Design Rules

Annexe B — Références externes (inspiration)
Material Design — Color System

IBM Carbon — Color

Adobe Spectrum — Color

Shopify Polaris — Color Tokens

Salesforce Lightning — Design Tokens


*Fin du Document 9 — Color System.*
