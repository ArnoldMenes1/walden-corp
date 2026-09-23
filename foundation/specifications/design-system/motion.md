# Document 6 — Motion Philosophy

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Fondamental — dépend des Documents 1, 2, 4 et 5

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit la **philosophie du mouvement** dans les interfaces Walden Corp. Il précise quand une animation est autorisée, quand elle est interdite, comment elle est dimensionnée, comment elle respecte l'accessibilité, et comment elle est documentée.

Il ne traite pas des interactions (Document 5) ni des composants (Document 14), mais il fixe les règles du mouvement qui s'y appliquent.

### 1.2 Dépendances

- **Dépend de :** Documents 1, 2, 4, 5.
- **Est dépendant de :** Documents 7 (accessibilité), 12 (élévation), 14 (composants), 15 (patterns), 16 (IA).

---

## 2. Objectif

Garantir que toute animation Walden Corp :

- **sert une fonction** identifiable ;
- **respecte un budget temporel** strict ;
- **reste accessible** (préférences utilisateur, motion sickness) ;
- **est cohérente** dans l'ensemble de l'écosystème ;
- **ne dégrade jamais la perception de performance**.

---

## 3. Portée

Toutes les interfaces Walden Corp, sur tous les supports.

---

## 4. Définitions

**Animation** — Changement d'état visuel progressif, perceptible dans le temps.

**Transition** — Passage d'un état à un autre, généralement de courte durée.

**Micro-interaction** — Interaction de très courte durée, souvent en réaction à une action utilisateur.

**Easing** — Courbe définissant l'accélération et la décélération d'une transition.

**Durée** — Temps total d'une animation.

**Délai (delay)** — Temps avant le début d'une animation.

**Motion sickness** — Malaise lié à certains mouvements visuels.

**`prefers-reduced-motion`** — Préférence système indiquant une réduction souhaitée du mouvement.

**Motion design** — Discipline de conception du mouvement.

**Orchestration** — Coordination de plusieurs animations simultanées.

---

## 5. Philosophie du mouvement

### 5.1 Postulats

**Postulat 1 — Le mouvement est une information, pas une décoration.** Une animation existe pour transmettre une information : changement d'état, relation spatiale, progression, confirmation.

**Postulat 2 — Le mouvement sert la compréhension.** Une animation utile clarifie une transition qui serait ambiguë sans elle.

**Postulat 3 — Le mouvement est contenu.** Durées courtes, distances réduites, courbes sobres.

**Postulat 4 — Le mouvement est accessible.** Il respecte les préférences système et ne provoque pas de malaise.

**Postulat 5 — Le mouvement est optionnel.** L'absence d'animation ne doit jamais empêcher la compréhension.

### 5.2 Les cinq fonctions autorisées du mouvement

Une animation est autorisée uniquement si elle sert l'une de ces cinq fonctions :

1. **Feedback** — Confirmer qu'une action a été enregistrée.
2. **Orientation** — Indiquer une relation spatiale (entrée, sortie, expansion).
3. **Progression** — Signaler une opération en cours.
4. **Attirer l'attention** — Signaler un événement critique (usage très restreint).
5. **Révéler une relation** — Montrer un lien entre deux éléments (parent-enfant).

Toute animation qui ne sert aucune de ces cinq fonctions est interdite.

### 5.3 Les fonctions interdites du mouvement

Une animation est interdite si elle sert :

- la décoration ;
- l'amusement ;
- la démonstration technique ;
- l'expression de la marque ;
- la "modernisation" perçue d'une interface.

---

## 6. Principes du mouvement

### Principe M-1 — Utilité avant esthétique

Une animation doit servir une fonction documentée. Aucune animation purement esthétique.

### Principe M-2 — Sobriété

Une animation Walden Corp est courte, discrète, non répétitive.

### Principe M-3 — Cohérence

Toute animation respecte les durées et courbes définies dans ce document.

### Principe M-4 — Réversibilité

Une animation d'entrée possède une animation de sortie symétrique.

### Principe M-5 — Accessibilité

Toute animation respecte `prefers-reduced-motion`.

### Principe M-6 — Performance

Aucune animation ne dégrade la fluidité perçue.

### Principe M-7 — Non-bloquante

Aucune animation ne retarde une action utilisateur au-delà de sa durée définie.

### Principe M-8 — Interruptible

Toute animation longue est interruptible.

---

## 7. Architecture du mouvement

Le mouvement Walden Corp s'organise en quatre catégories.

**Catégorie 1 — Micro-interactions.** Réactions à une action utilisateur (150–200 ms).

**Catégorie 2 — Transitions d'interface.** Changement de vue, d'état, de page (200–300 ms).

**Catégorie 3 — Animations de contenu.** Entrée, sortie, apparition (200–400 ms).

**Catégorie 4 — Animations de progression.** Indicateurs de chargement (boucles continues).

Aucune animation ne dépasse les bornes de sa catégorie.

---

## 8. Standards du mouvement

**S1 — Toute animation est documentée** (fonction, durée, easing, cible).

**S2 — Toute animation respecte `prefers-reduced-motion`.**

**S3 — Toute animation appartient à une catégorie.**

**S4 — Toute animation possède un équivalent réduit** (voir section 9.4).

**S5 — Toute animation utilise une courbe de la bibliothèque** (voir section 10).

**S6 — Toute animation est testée sur matériel de référence.**

**S7 — Toute animation est testée avec lecteur d'écran.**

**S8 — Toute animation est annulable si elle dure plus de 300 ms.**

---

## 9. Règles du mouvement

### 9.1 Durées

| Catégorie | Durée minimale | Durée maximale |
|-----------|----------------|----------------|
| Micro-interaction | 100 ms | 200 ms |
| Transition d'interface | 150 ms | 300 ms |
| Animation de contenu | 200 ms | 400 ms |
| Animation de progression | Variable | Boucle |

**R1 — Aucune animation ne dépasse 400 ms, sauf boucle de progression.**

**R2 — Aucune micro-interaction ne dépasse 200 ms.**

### 9.2 Courbes (easing)

Courbes autorisées :

- **Standard** : `cubic-bezier(0.2, 0, 0, 1)` — pour la majorité des transitions.
- **Entrée** : `cubic-bezier(0, 0, 0.2, 1)` — pour les éléments qui apparaissent.
- **Sortie** : `cubic-bezier(0.4, 0, 1, 1)` — pour les éléments qui disparaissent.
- **Linéaire** : `linear` — uniquement pour les progressions continues.

**R3 — Aucune courbe exotique (bounce, elastic, spring) sans justification documentée.**

### 9.3 Mouvements autorisés

- Fondu (fade).
- Glissement (slide) vertical ou horizontal, distance ≤ 16 px.
- Échelle (scale) entre 0.95 et 1.05.
- Rotation (uniquement pour les indicateurs de progression).

**R4 — Aucun mouvement de plus de 16 px pour un glissement.**

**R5 — Aucune rotation hors indicateur de progression.**

**R6 — Aucun zoom de plus de 5 %.**

### 9.4 Réduction du mouvement

Lorsque `prefers-reduced-motion: reduce` est détecté :

- les transitions sont remplacées par des fondus ou des apparitions instantanées ;
- les animations de progression deviennent statiques ou basse fréquence ;
- les micro-interactions sont réduites à un changement d'état instantané.

**R7 — Aucune animation décorative ne peut ignorer `prefers-reduced-motion`.**

---

## 10. Bibliothèque de courbes et durées

### 10.1 Durées tokenisées

| Token | Valeur | Usage |
|-------|--------|-------|
| `motion.duration.instant` | 0 ms | Changement sans animation |
| `motion.duration.fast` | 100 ms | Feedback immédiat |
| `motion.duration.base` | 150 ms | Micro-interactions courantes |
| `motion.duration.medium` | 200 ms | Transitions d'interface |
| `motion.duration.slow` | 300 ms | Transitions complexes |
| `motion.duration.long` | 400 ms | Entrée/sortie de contenu |

### 10.2 Courbes tokenisées

| Token | Valeur |
|-------|--------|
| `motion.easing.standard` | `cubic-bezier(0.2, 0, 0, 1)` |
| `motion.easing.entrance` | `cubic-bezier(0, 0, 0.2, 1)` |
| `motion.easing.exit` | `cubic-bezier(0.4, 0, 1, 1)` |
| `motion.easing.linear` | `linear` |

---

## 11. Recommandations

- Privilégier les fondus aux glissements.
- Éviter les animations simultanées (orchestration minimale).
- Tester la perception sur les écrans bas de gamme.
- Documenter la fonction de chaque animation.
- Rendre les animations interruptibles.

---

## 12. Bonnes pratiques

- Utiliser les tokens de durée et de courbe.
- Tester avec `prefers-reduced-motion: reduce`.
- Privilégier les transformations GPU-accélérées (`transform`, `opacity`).
- Éviter d'animer `width`, `height`, `top`, `left`.
- Documenter chaque animation dans le Document 14.

---

## 13. Mauvaises pratiques

- Animation de plus de 400 ms.
- Rotation décorative.
- Bounce ou elastic.
- Animation qui bloque l'utilisateur.
- Animation qui ignore `prefers-reduced-motion`.
- Animation qui dégrade la fluidité.
- Animation simultanée sur plusieurs éléments sans raison.

---

## 14. Cas d'usage

### Cas 1 — Feedback de bouton

**Fonction** : Feedback.
**Durée** : 100 ms.
**Courbe** : `standard`.
**Effet** : changement de couleur de fond.

### Cas 2 — Ouverture de modale

**Fonction** : Orientation.
**Durée** : 200 ms.
**Courbe** : `entrance`.
**Effet** : fade + scale de 0.98 à 1.

### Cas 3 — Chargement de données

**Fonction** : Progression.
**Durée** : boucle continue.
**Effet** : rotation linéaire ou squelette animé.

### Cas 4 — Apparition d'un message de succès

**Fonction** : Feedback.
**Durée** : 200 ms.
**Courbe** : `entrance`.
**Effet** : fade + slide de 8 px.

### Cas 5 — Suppression d'un élément

**Fonction** : Feedback.
**Durée** : 200 ms.
**Courbe** : `exit`.
**Effet** : fade + slide inverse.

---

## 15. Exemples

### Exemple 1 — Animation conforme

Bouton primaire au clic : changement de couleur en 100 ms avec courbe standard.

### Exemple 2 — Animation non conforme

Bouton primaire au clic : rotation de 360° en 500 ms avec rebond final.

---

## 16. Anti-patterns de mouvement

- **Animation d'attention** — Clignotement pour attirer l'œil.
- **Animation de célébration** — Confettis, sons, etc.
- **Animation décorative** — Élément qui bouge sans raison.
- **Animation bloquante** — Empêche l'action utilisateur.
- **Animation ignorante** — Ne respecte pas `prefers-reduced-motion`.
- **Animation coûteuse** — Anime des propriétés non composées.
- **Animation simultanée** — Multiples animations non coordonnées.

---

## 17. Checklist de validation du mouvement

- [ ] Chaque animation sert une fonction documentée.
- [ ] Chaque durée appartient à une catégorie définie.
- [ ] Chaque courbe appartient à la bibliothèque.
- [ ] Aucune animation ne dépasse 400 ms (hors boucle).
- [ ] Aucune animation décorative n'est présente.
- [ ] `prefers-reduced-motion` est respecté.
- [ ] Les animations sont testées sur matériel bas de gamme.
- [ ] Les animations sont interruptibles.
- [ ] Les propriétés animées sont composées (`transform`, `opacity`).
- [ ] Aucune animation bloquante n'est présente.

---

## 18. Critères de validation formels

Une animation est conforme si :

1. Elle respecte R1 à R7.
2. Elle satisfait S1 à S8.
3. Elle passe la checklist (section 17).
4. Elle est documentée dans le Document 14.

---

## 19. Gouvernance

Toute nouvelle animation passe par RFC (Document 17). Toute animation critique (globale, système) exige validation du comité design (Document 18).

---

## 20. Versioning

| Version | Date | Auteur | Changements |
|--------|------|--------|-------------|
| 1.0 | — | Comité design | Publication initiale |

---

## 21. FAQ

**Q1 — Peut-on utiliser une animation de rebond ?**
Non, sauf justification documentée exceptionnelle.

**Q2 — Peut-on animer une transition de page ?**
Oui, dans la limite de 300 ms, avec courbe `standard`.

**Q3 — Peut-on ignorer `prefers-reduced-motion` pour une animation importante ?**
Non. Aucune exception.

**Q4 — Peut-on animer `width` ou `height` ?**
Non. Privilégier `transform` et `opacity`.

**Q5 — Combien d'animations simultanées sont autorisées ?**
Le minimum nécessaire. Idéalement une seule à la fois.

---

## 22. Glossaire spécifique

**Courbe** — Fonction d'easing.

**Durée** — Temps total.

**Easing** — Accélération/décélération.

**Micro-interaction** — Interaction très courte.

**Motion sickness** — Malaise lié au mouvement.

**Orchestration** — Coordination d'animations.

**Transition** — Passage d'état.

---

## 23. Annexes

### Annexe A — Références croisées

- Document 1 — Design Philosophy
- Document 2 — Design Language
- Document 4 — UX Principles
- Document 5 — Interaction Principles
- Document 7 — Accessibility Standards
- Document 12 — Elevation & Shadows
- Document 14 — Component Specification
- Document 15 — Pattern Library

---

*Fin du Document 6 — Motion Philosophy.*
