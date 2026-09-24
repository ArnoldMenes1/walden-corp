# Document 11 — Grid & Spacing System

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Fondamental — dépend des Documents 1, 2, 3, 9, 10

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit le **système de grille et d'espacement** de Walden Corp. Il précise la grille, les colonnes, les gouttières, l'échelle d'espacement, les marges, le comportement responsive, les règles desktop et mobile, ainsi que la densité.

### 1.2 Dépendances

- **Dépend de :** Documents 1, 2, 3, 9, 10.
- **Est dépendant de :** Documents 12, 14, 15, 16.

---

## 2. Objectif

Garantir que la mise en page de toute interface Walden Corp soit :

- **cohérente** ;
- **rigoureuse** ;
- **responsive** ;
- **adaptée à la densité** ;
- **documentée**.

---

## 3. Portée

Toutes les interfaces Walden Corp, sur tous les supports.

---

## 4. Définitions

**Grille** — Système de colonnes et de lignes.

**Colonne** — Unité verticale de la grille.

**Gouttière (gutter)** — Espace entre colonnes.

**Marge** — Espace entre la grille et le bord de l'écran.

**Espacement** — Distance entre deux éléments.

**Échelle d'espacement** — Ensemble ordonné de valeurs.

**Densité** — Quantité d'information par unité de surface.

**Responsive** — Adaptation aux tailles d'écran.

**Breakpoint** — Seuil de changement de layout.

**Densité confortable** — Densité par défaut.

**Densité compacte** — Densité augmentée.

---

## 5. Philosophie de la grille

### 5.1 Postulats

**Postulat 1 — La grille est une contrainte.** Elle structure la mise en page, elle ne la limite pas.

**Postulat 2 — L'espacement est systématique.** Aucun espacement arbitraire.

**Postulat 3 — La densité est contrôlée.** Elle s'adapte au contexte, jamais au hasard.

**Postulat 4 — Le responsive est natif.** Toute mise en page s'adapte à toutes les tailles.

**Postulat 5 — La grille sert le contenu.** Elle ne se substitue jamais à lui.

### 5.2 Les trois qualités d'une mise en page Walden Corp

- **Structurée** — Alignée, rigoureuse.
- **Respirante** — Sans surcharge.
- **Dense** — Sans vide inutile.

---

## 6. Principes de grille et d'espacement

### Principe G-1 — Alignement systématique

Tout élément s'aligne sur la grille.

### Principe G-2 — Espacement systématique

Tout espacement appartient à l'échelle.

### Principe G-3 — Densité adaptée

La densité s'adapte au contexte.

### Principe G-4 — Responsive raisonné

Chaque palier a un comportement documenté.

### Principe G-5 — Contenu prioritaire

Le contenu prime sur la grille en cas de conflit.

### Principe G-6 — Cohérence inter-écrans

La grille est identique dans tous les produits.

### Principe G-7 — Cohérence inter-supports

La logique est identique entre desktop, tablette et mobile.

---

## 7. Architecture de la grille

### 7.1 Grille de référence

Walden Corp utilise une **grille à 12 colonnes** sur desktop, **8 colonnes** sur tablette, **4 colonnes** sur mobile.

| Support | Colonnes | Gouttière | Marge |
|---------|----------|-----------|-------|
| Mobile | 4 | 16 px | 16 px |
| Tablette | 8 | 24 px | 24 px |
| Desktop | 12 | 24 px | 24 px |

### 7.2 Breakpoints

| Nom | Plage |
|-----|-------|
| XS | 0–479 px |
| SM | 480–767 px |
| MD | 768–1023 px |
| LG | 1024–1439 px |
| XL | 1440–1919 px |
| XXL | ≥ 1920 px |

### 7.3 Largeur maximale

La largeur maximale du contenu est de **1440 px**, centrée.

---

## 8. Échelle d'espacement

L'échelle est basée sur une unité de **4 px**.

| Token | Valeur | Usage |
|-------|--------|-------|
| `spacing.0` | 0 | Aucun espacement |
| `spacing.1` | 4 px | Micro-espaces |
| `spacing.2` | 8 px | Espaces entre icône et texte |
| `spacing.3` | 12 px | Espaces internes de composants |
| `spacing.4` | 16 px | Espaces courants |
| `spacing.5` | 20 px | Espaces intermédiaires |
| `spacing.6` | 24 px | Espaces entre composants |
| `spacing.8` | 32 px | Espaces entre sections |
| `spacing.10` | 40 px | Espaces majeurs |
| `spacing.12` | 48 px | Espaces entre groupes |
| `spacing.16` | 64 px | Espaces entre sections majeures |
| `spacing.20` | 80 px | Espaces de page |
| `spacing.24` | 96 px | Espaces de page larges |

Toute autre valeur est interdite.

---

## 9. Standards de grille et d'espacement

**S-G1 — Toute mise en page utilise la grille de référence.**

**S-G2 — Tout espacement appartient à l'échelle.**

**S-G3 — Toute marge respecte les valeurs définies.**

**S-G4 — Toute gouttière respecte les valeurs définies.**

**S-G5 — Toute mise en page est responsive sur les 6 breakpoints.**

**S-G6 — La largeur maximale est respectée.**

**S-G7 — La densité par défaut est confortable.**

**S-G8 — La densité compacte est activable par l'utilisateur.**

---

## 10. Règles de grille et d'espacement

**R1 — Aucun espacement hors échelle.**

**R2 — Aucune marge hors valeurs définies.**

**R3 — Aucune gouttière hors valeurs définies.**

**R4 — Aucune mise en page hors grille.**

**R5 — Aucun alignement approximatif.**

**R6 — Aucune largeur maximale dépassée.**

**R7 — Aucune mise en page non responsive.**

**R8 — Aucune densité arbitraire.**

**R9 — Aucun élément débordant de sa colonne sans raison.**

**R10 — Aucune grille locale.**

---

## 11. Comportement responsive

### 11.1 Mobile (XS, SM)

- 4 colonnes.
- Marge latérale : 16 px.
- Gouttière : 16 px.
- Layout en pile.
- Navigation par onglets ou menu.

### 11.2 Tablette (MD)

- 8 colonnes.
- Marge latérale : 24 px.
- Gouttière : 24 px.
- Layout 1 ou 2 colonnes de contenu.

### 11.3 Desktop (LG, XL, XXL)

- 12 colonnes.
- Marge latérale : 24 px (jusqu'à 1440 px), centrée au-delà.
- Gouttière : 24 px.
- Layout multi-colonnes.
- Navigation latérale persistante.

---

## 12. Densité

### 12.1 Densité par défaut (confortable)

Espacements standards, hauteur de ligne confortable, adaptée à l'usage général.

### 12.2 Densité compacte

Espacements réduits de 25 % à 50 %, hauteur de ligne réduite, adaptée aux tableaux denses et aux tableaux de bord experts.

### 12.3 Densité confortable

Espacements augmentés de 25 %, adaptée aux usages occasionnels.

La densité est choisie par l'utilisateur dans les paramètres, jamais imposée par l'écran.

---

## 13. Recommandations

- Concevoir en mobile d'abord pour valider la priorité du contenu.
- Tester chaque mise en page aux 6 breakpoints.
- Documenter les comportements responsive.
- Utiliser les tokens d'espacement.

---

## 14. Bonnes pratiques

- Aligner sur la grille avant tout ajustement visuel.
- Utiliser les espacements pour hiérarchiser.
- Éviter les espacements négatifs.
- Tester avec un contenu long.

---

## 15. Mauvaises pratiques

- Espacement arbitraire (par exemple, 22 px).
- Marge inférieure aux valeurs définies.
- Grille locale pour une section.
- Layout non responsive.
- Débordement silencieux.

---

## 16. Cas d'usage

### Cas 1 — Dashboard desktop

- Grille 12 colonnes.
- Cartes KPI sur 3 colonnes chacune (4 cartes par ligne).
- Cartes graphiques sur 6 ou 12 colonnes.

### Cas 2 — Formulaire mobile

- 4 colonnes.
- Champs sur 4 colonnes.
- Espacement entre champs : `spacing.4` (16 px).

### Cas 3 — Liste desktop

- Colonnes : 2 (icône + contenu) ou 4.
- Hauteur de ligne : 48 px (densité confortable).
- Séparateurs fins.

### Cas 4 — Tableau dense

- Densité compacte activée.
- Hauteur de ligne : 32 px.
- Colonnes alignées sur la grille.

### Cas 5 — Page marketing

- Contenu centré, largeur max 1440 px.
- Sections espacées de `spacing.16` (64 px).

---

## 17. Exemples

### Exemple 1 — Espacement conforme

```css
.card { padding: var(--spacing-4); }
.card + .card { margin-top: var(--spacing-6); }
```

Exemple 2 — Espacement non conforme
```css
.card { padding: 22px; }
.card + .card { margin-top: 27px; }
```
18. Anti-patterns
Espacement arbitraire — Valeur hors échelle.

Grille locale — Grille ad hoc pour une section.

Marge excessive — Marge réduisant le contenu utile.

Layout non responsive — Non testé sur mobile.

Densité imposée — Densité non contrôlée par l'utilisateur.

Débordement — Contenu hors de sa colonne.

## 19. Checklist de validation de grille et d'espacement
□ Grille de référence respectée.
□ Marges conformes.
□ Gouttières conformes.
□ Espacements tous issus de l'échelle.
□ Largeur maximale respectée.
□ Comportement responsive testé sur les 6 breakpoints.
□ Densité par défaut conforme.
□ Densité compacte documentée.
□ Aucun débordement.
□ Aucune grille locale.
## 20. Critères de validation formels
Une mise en page est conforme si :

Elle respecte R1 à R10.

Elle satisfait S-G1 à S-G8.

Elle passe la checklist (section 19).

## 21. Gouvernance
Toute évolution de la grille ou de l'échelle d'espacement suit le processus RFC (Document 17). Les évolutions majeures exigent validation du comité design (Document 18).

## 22. Versioning
Version	Date	Auteur	Changements
1.0	—	Comité design	Publication initiale
## 23. FAQ
Q1 — Peut-on ajouter une valeur d'espacement intermédiaire ?
Uniquement si la valeur appartient à l'échelle (4 px) et fait l'objet d'une RFC.

Q2 — Peut-on utiliser une grille différente pour un produit ?
Non. La grille de référence est unique.

Q3 — Peut-on déroger aux marges pour un cas spécifique ?
Uniquement si documenté et validé.

Q4 — Peut-on proposer plusieurs densités ?
Oui : confortable, par défaut, compacte. Toutes documentées.

Q5 — Peut-on avoir une largeur maximale différente ?
Non. 1440 px est la largeur maximale.

## 24. Glossaire spécifique
Breakpoint — Seuil de changement de layout.

Colonne — Unité verticale de la grille.

Densité — Quantité d'information par unité de surface.

Gouttière — Espace entre colonnes.

Grille — Système de colonnes.

Marge — Espace au bord de la grille.

Responsive — Adaptation aux tailles d'écran.

## 25. Annexes
Annexe A — Références croisées
Document 1 — Design Philosophy

Document 2 — Design Language

Document 3 — Visual Identity

Document 9 — Color System

Document 10 — Typography System

Document 12 — Elevation & Shadows

Document 14 — Component Specification

Document 15 — Pattern Library

Document 16 — AI Design Rules

Annexe B — Références externes (inspiration)
Material Design — Layout

IBM Carbon — Grid

Microsoft Fluent — Layout

Adobe Spectrum — Layout

Shopify Polaris — Layout
---

*Fin du Document 11 — Grid & Spacing System.*
