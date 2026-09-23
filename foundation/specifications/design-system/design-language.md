# Document 2 — Design Language

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Fondamental — dépend du Document 1

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit le **langage visuel** de Walden Corp. Il traduit la philosophie (Document 1) en vocabulaire graphique exploitable par les designers, les développeurs et les systèmes d'IA.

Il ne prescrit pas encore de valeurs exactes (couleurs, typographies) — celles-ci sont définies dans les Documents 9 à 13. Il définit le **vocabulaire** à partir duquel ces valeurs seront choisies et organisées.

### 1.2 Dépendances

- **Dépend de :** Document 1 (Design Philosophy), Constitution.
- **Est dépendant de :** Documents 3 à 15.

---

## 2. Objectif

Fournir un vocabulaire graphique commun, rigoureux et stable, permettant :

- aux designers de justifier chaque choix visuel ;
- aux développeurs de comprendre la logique sous-jacente ;
- aux IA de générer des interfaces cohérentes ;
- aux équipes produit d'évaluer la cohérence.

---

## 3. Portée

S'applique à toutes les interfaces numériques Walden Corp.

---

## 4. Définitions

**Vocabulaire graphique** — Ensemble des éléments visuels de base (formes, couleurs, typographies, espacements).

**Équilibre** — Répartition harmonieuse des masses visuelles dans une composition.

**Hiérarchie** — Ordre de priorité perçu entre les éléments d'une composition.

**Densité** — Quantité d'information par unité de surface.

**Rythme** — Répétition régulière d'éléments structurants.

**Contraste** — Différence perceptible entre deux éléments.

**Perception** — Manière dont l'œil humain interprète une composition.

**Harmonie** — Cohérence globale perçue entre les éléments.

**Identité** — Ensemble des traits distinctifs qui rendent un produit reconnaissable.

---

## 5. Philosophie du langage visuel

Le langage visuel Walden Corp repose sur cinq postulats.

### Postulat 1 — Le calme visuel

Une interface professionnelle doit être **calme**. Le calme visuel est obtenu par :

- une palette restreinte ;
- des contrastes maîtrisés ;
- une densité contrôlée ;
- une absence d'effets gratuits.

Le calme visuel n'est pas de la platitude : c'est une maîtrise consciente de l'énergie visuelle.

### Postulat 2 — La hiérarchie explicite

Chaque écran doit comporter une hiérarchie visuelle **explicite**, c'est-à-dire lisible sans effort. La hiérarchie repose sur trois leviers principaux :

- la taille ;
- le contraste ;
- l'espacement.

L'utilisation combinée de ces trois leviers produit une hiérarchie robuste. Aucun levier seul ne doit porter toute la hiérarchie.

### Postulat 3 — La densité fonctionnelle

Walden Corp privilégie la **densité fonctionnelle** (information utile par unité de surface) sur la **densité esthétique** (respiration décorative). Une densité élevée n'est acceptable que si elle reste lisible et scannable.

### Postulat 4 — Le rythme régulier

Chaque écran respecte un **rythme régulier** : répétition prévisible d'espacements, de tailles, d'alignements. Le rythme crée la reconnaissance et réduit l'effort d'orientation.

### Postulat 5 — L'harmonie silencieuse

L'harmonie Walden Corp est **silencieuse** : elle ne s'impose pas, elle soutient. Une interface harmonieuse est une interface dont on ne remarque pas la conception, parce qu'elle s'efface derrière le contenu.

---

## 6. Principes du langage visuel

Douze principes opérationnels structurent le langage visuel.

### Principe L1 — Contraste fonctionnel

Le contraste doit servir la fonction : signaler, hiérarchiser, distinguer. Le contraste purement décoratif est proscrit.

**Conséquence** : chaque utilisation du contraste doit être justifiée par une fonction (signalement d'état, distinction de blocs, hiérarchie typographique).

### Principe L2 — Palette restreinte

La palette de couleurs doit rester restreinte et strictement tokenisée. Aucune couleur hors tokens n'est autorisée. Voir Document 9.

### Principe L3 — Typographie sobre

Une seule famille principale, un nombre limité de tailles, une hiérarchie stable. Voir Document 10.

### Principe L4 — Espacement systématique

Aucun espacement arbitraire. Chaque espacement appartient à l'échelle. Voir Document 11.

### Principe L5 — Alignement rigoureux

Tout élément aligné sur la grille. Aucun alignement approximatif. Voir Document 11.

### Principe L6 — Profondeur minimale

L'utilisation de la profondeur (ombres, élévation) est minimale et fonctionnelle. Voir Document 12.

### Principe L7 — Mouvement contenu

Le mouvement est contenu, fonctionnel, court. Voir Document 6 et Document 12.

### Principe L8 — Iconographie discrète

Les icônes accompagnent le texte ; elles ne le remplacent pas, sauf exception documentée. Voir Document 13.

### Principe L9 — Surface au service du contenu

Les surfaces (arrière-plans, cartes) servent le contenu. Elles ne le concurrencent pas. Voir Document 12.

### Principe L10 — Cohérence inter-produits

Un élément identique doit avoir une apparence identique dans tous les produits Walden Corp.

### Principe L11 — Adaptabilité raisonnée

Le langage visuel s'adapte aux contextes (mobile, desktop, densité) selon des règles documentées, jamais par improvisation.

### Principe L12 — Accessibilité native

L'accessibilité est intégrée dès la conception du langage, pas ajoutée après coup. Voir Document 7.

---

## 7. Architecture du langage visuel

Le langage visuel s'organise en cinq couches.

**Couche 1 — Fondations.** Grille, échelle typographique, palette, échelle d'espacement, échelle de rayons, échelle d'élévation.

**Couche 2 — Primitives.** Composants atomiques (boutons, champs, icônes, tags).

**Couche 3 — Compositions.** Groupes de primitives (formulaires, cartes, en-têtes).

**Couche 4 — Patterns.** Structures récurrentes (dashboards, tableaux, listes).

**Couche 5 — Écrans.** Assemblages complets.

Chaque couche dépend de la précédente et ne peut pas la contredire.

---

## 8. Standards du langage visuel

**S1 — Tout élément visuel appartient à une échelle documentée.**

**S2 — Aucune valeur arbitraire (px, %, couleur) n'est autorisée dans le code de production.**

**S3 — Toute composition respecte la grille définie au Document 11.**

**S4 — Toute couleur provient du Document 9.**

**S5 — Toute typographie provient du Document 10.**

**S6 — Toute ombre provient du Document 12.**

**S7 — Toute icône provient du Document 13.**

**S8 — Tout mouvement provient du Document 6.**

---

## 9. Règles du langage visuel

**R1 — Alignement.** Tout élément textuel s'aligne sur une colonne de la grille.

**R2 — Espacement.** Aucun espacement hors échelle.

**R3 — Typographie.** Aucune taille hors échelle.

**R4 — Couleur.** Aucune couleur hors tokens.

**R5 — Rayon.** Aucun rayon hors échelle.

**R6 — Élévation.** Aucune élévation hors échelle.

**R7 — Iconographie.** Aucune icône hors bibliothèque.

**R8 — Motif.** Aucun motif décoratif non documenté.

**R9 — Dégradé.** Les dégradés sont interdits sauf usage documenté dans le Document 9.

**R10 — Texture.** Aucune texture photographique ou simulée dans les interfaces produit.

---

## 10. Recommandations

- Concevoir en niveaux de gris avant d'introduire la couleur.
- Tester la composition en mode contraste élevé avant validation.
- Vérifier la cohérence sur trois tailles d'écran (mobile, tablette, desktop) avant validation.
- Documenter toute composition récurrente dans le Document 15 (Pattern Library).

---

## 11. Bonnes pratiques

- Utiliser la grille comme contrainte de conception, pas comme vérification post-hoc.
- Privilégier un contraste de forme (taille, graisse) plutôt qu'un contraste de couleur seul.
- Utiliser les tokens sémantiques (par exemple `color.text.primary`) plutôt que les valeurs.
- Documenter chaque exception avec une justification par principe.

---

## 12. Mauvaises pratiques

- Introduire une couleur "juste pour voir".
- Utiliser une taille de texte hors échelle "car elle rentre mieux".
- Aligner visuellement à l'œil au lieu d'aligner sur la grille.
- Utiliser des ombres décoratives.
- Ajouter des textures ou motifs non documentés.
- Utiliser des dégradés pour "moderniser" une interface.

---

## 13. Cas d'usage

### Cas 1 — Conception d'un dashboard

**Approche** : grille à 12 colonnes (desktop), cartes alignées, typographie issue de l'échelle, couleurs issues des tokens sémantiques. Hiérarchie explicite par taille et espacement. Voir Document 15, pattern Dashboard.

### Cas 2 — Conception d'un formulaire

**Approche** : alignement vertical, labels persistants, espacements issus de l'échelle, messages d'erreur intégrés au flux. Voir Document 15, pattern Formulaire.

### Cas 3 — Conception d'une liste dense

**Approche** : hauteur de ligne constante, colonnes alignées, séparateurs minimaux, informations hiérarchisées par taille. Voir Document 15, pattern Tableau.

### Cas 4 — Conception d'un écran mobile

**Approche** : grille à 4 colonnes, marges latérales standardisées, cibles tactiles conformes au Document 7.

---

## 14. Exemples

### Exemple 1 — Hiérarchie typographique conforme

- Titre d'écran : taille H1 de l'échelle (Document 10).
- Titre de section : taille H2.
- Label : taille Label.
- Corps : taille Body.
- Légende : taille Caption.

Aucune taille hors échelle.

### Exemple 2 — Hiérarchie non conforme

Titre à 22 px, section à 21 px, corps à 19 px — trois tailles hors échelle et trop proches pour produire une hiérarchie lisible.

---

## 15. Anti-patterns

- **Contraste multiple dans un même bloc** — Utilisation simultanée de plusieurs contrastes non coordonnés.
- **Hiérarchie par couleur uniquement** — Utilisation de la couleur sans support de taille ou d'espacement.
- **Densité variable dans une même liste** — Hauteurs de ligne différentes pour un même type d'item.
- **Ombre portée décorative** — Ombre utilisée pour "soulever" un élément sans fonction.
- **Palette étendue** — Introduction progressive de couleurs ad hoc jusqu'à perte de cohérence.
- **Dégradé de fond** — Dégradé décoratif qui dilue la lisibilité.

---

## 16. Checklist de validation du langage visuel

- [ ] Toutes les couleurs proviennent du Document 9.
- [ ] Toutes les typographies proviennent du Document 10.
- [ ] Tous les espacements proviennent du Document 11.
- [ ] Toutes les ombres proviennent du Document 12.
- [ ] Toutes les icônes proviennent du Document 13.
- [ ] Toutes les animations proviennent du Document 6.
- [ ] La grille est respectée sur toutes les tailles d'écran cibles.
- [ ] La hiérarchie visuelle est explicite.
- [ ] Le contraste d'accessibilité est vérifié.
- [ ] Aucun dégradé non documenté n'est présent.
- [ ] Aucune texture non documentée n'est présente.
- [ ] La cohérence avec les autres produits Walden Corp est vérifiée.

---

## 17. Critères de validation formels

Une composition visuelle est conforme si :

1. Elle respecte l'intégralité des Règles R1 à R10.
2. Elle satisfait l'intégralité des Standards S1 à S8.
3. Elle passe la checklist (section 16).
4. Elle est documentée si elle constitue un pattern récurrent.

---

## 18. Gouvernance

Les évolutions du langage visuel suivent le processus RFC (Document 17). Toute modification majeure exige validation du comité design (Document 18) et publication d'une nouvelle version (Document 19).

---

## 19. Versioning

| Version | Date | Auteur | Changements |
|--------|------|--------|-------------|
| 1.0 | — | Comité design | Publication initiale |

---

## 20. FAQ

**Q1 — Peut-on introduire une nouvelle couleur dans un cas exceptionnel ?**
Non. Toute nouvelle couleur doit passer par une RFC et une évolution du Document 9.

**Q2 — Les dégradés sont-ils totalement interdits ?**
Ils sont interdits par défaut. Toute exception doit être documentée dans le Document 9 avec justification.

**Q3 — Peut-on utiliser une typographie différente pour une identité produit ?**
Non. Le Document 10 définit une famille unique, éventuellement complétée par une famille d'accent strictement documentée.

**Q4 — Que faire si une composition ne tient pas dans la grille ?**
Revoir la composition. La grille est une contrainte, pas une option.

**Q5 — Peut-on s'inspirer d'autres Design Systems pour une composition ?**
Oui, mais sans copier. Toute inspiration doit aboutir à une composition conforme aux présents standards.

---

## 21. Glossaire spécifique

**Alignement** — Positionnement sur une ligne directrice commune.

**Anti-pattern** — Pratique à éviter, identifiée comme source de problèmes.

**Composition** — Assemblage d'éléments visuels formant un ensemble.

**Densité fonctionnelle** — Information utile par unité de surface.

**Échelle** — Suite ordonnée de valeurs (typographiques, d'espacement, etc.).

**Hiérarchie visuelle** — Ordre de priorité perçu des éléments.

**Pattern** — Structure récurrente documentée.

**Rythme** — Répétition régulière d'éléments.

**Token** — Unité atomique nommée et référençable.

**Vocabulaire graphique** — Ensemble des éléments visuels de base.

---

## 22. Annexes

### Annexe A — Correspondance avec le Document 1

| Postulat / principe | Document 1 – Section |
|---------------------|----------------------|
| Calme visuel | 5.2 (Axe 3) |
| Hiérarchie explicite | 5.2 (Axe 1) |
| Densité fonctionnelle | 5.2 (Axe 3) |
| Rythme régulier | 5.2 (Axe 4) |
| Harmonie silencieuse | 5.2 (Axe 1) |

### Annexe B — Références croisées

- Document 1 — Design Philosophy
- Document 3 — Visual Identity
- Document 6 — Motion Philosophy
- Document 7 — Accessibility Standards
- Document 9 — Color System
- Document 10 — Typography System
- Document 11 — Grid & Spacing System
- Document 12 — Elevation & Shadows
- Document 13 — Iconography & Illustration
- Document 15 — Pattern Library

---

*Fin du Document 2 — Design Language.*
