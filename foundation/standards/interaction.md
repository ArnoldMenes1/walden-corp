# Document 5 — Interaction Principles

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Fondamental — dépend des Documents 1, 2 et 4

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit le **comportement** des interfaces Walden Corp : états des composants, transitions, focus, hover, active, disabled, drag, drop, navigation, raccourcis clavier et gestes tactiles.

Il ne définit pas les composants eux-mêmes (Document 14) ni les patterns (Document 15), mais il fixe les règles de comportement qu'ils doivent respecter.

### 1.2 Dépendances

- **Dépend de :** Documents 1, 2, 4.
- **Est dépendant de :** Documents 6, 7, 12, 14, 15, 16.

---

## 2. Objectif

Garantir que toute interaction Walden Corp soit **prévisible, cohérente, accessible et efficace** sur tous les supports.

---

## 3. Portée

Toutes les interfaces Walden Corp, sur tous les supports.

---

## 4. Définitions

**État** — Situation momentanée d'un composant (repos, hover, active, focus, disabled, loading, error, success).

**Transition** — Passage d'un état à un autre.

**Focus** — État indiquant qu'un élément est la cible des entrées clavier.

**Hover** — État indiquant qu'un pointeur survole un élément.

**Active** — État d'un élément pendant une interaction continue (clic maintenu).

**Disabled** — État d'un élément non interactif.

**Drag** — Action consistant à déplacer un élément par saisie continue.

**Drop** — Action consistant à déposer un élément dans une zone cible.

**Raccourci clavier** — Combinaison de touches déclenchant une action.

**Geste tactile** — Interaction tactile (tap, swipe, pinch, long press).

---

## 5. Philosophie d'interaction

### 5.1 Postulats

**Postulat 1 — L'interaction est un dialogue.** Chaque action utilisateur produit une réaction de l'interface. L'absence de réaction est un bug.

**Postulat 2 — L'interaction est stable.** Une même action produit toujours la même réaction.

**Postulat 3 — L'interaction est accessible.** Toute interaction au pointeur est disponible au clavier.

**Postulat 4 — L'interaction est sobre.** Aucune interaction décorative.

**Postulat 5 — L'interaction est documentée.** Chaque interaction a un comportement défini et testé.

### 5.2 Les cinq qualités d'une interaction Walden Corp

- **Prévisible** — L'utilisateur sait ce qui va se produire.
- **Réactive** — La réaction est immédiate.
- **Réversible** — L'utilisateur peut annuler.
- **Accessible** — Utilisable par tous, y compris au clavier et avec un lecteur d'écran.
- **Discrète** — Sans effet gratuit.

---

## 6. Principes d'interaction

### Principe INT-1 — Réaction immédiate

Toute interaction produit un feedback visuel en moins de 100 ms.

### Principe INT-2 — Cohérence des états

Les états sont définis identiquement pour tous les composants similaires.

### Principe INT-3 — Accessibilité clavier

Toute interaction au pointeur est disponible au clavier.

### Principe INT-4 — Stabilité des positions

Aucune position d'élément interactif ne change sans action utilisateur.

### Principe INT-5 — Confirmation des actions critiques

Les actions destructives exigent une confirmation explicite.

### Principe INT-6 — Réversibilité

Les actions réversibles proposent un Undo.

### Principe INT-7 — Feedback progressif

Les opérations longues produisent un feedback progressif.

### Principe INT-8 — Découvrabilité des raccourcis

Les raccourcis clavier sont visibles dans les menus.

### Principe INT-9 — Cohérence des gestes

Les gestes tactiles respectent les standards de la plateforme.

### Principe INT-10 — Limitation des animations d'état

Les transitions d'état sont contenues (voir Document 6).

---

## 7. Architecture des états

Chaque composant Walden Corp possède un ensemble d'états standardisés.

### 7.1 États de base

| État | Description | Visibilité |
|------|-------------|-----------|
| Repos | État par défaut | Permanent |
| Hover | Pointeur au-dessus | Pointeur uniquement |
| Focus | Cible clavier | Clavier |
| Active | Interaction en cours | Pendant l'action |
| Disabled | Non interactif | Permanent |
| Loading | Opération en cours | Temporaire |
| Error | Erreur détectée | Jusqu'à correction |
| Success | Action réussie | Temporaire |

### 7.2 Combinaisons d'états

- Un élément peut être focus + hover simultanément.
- Un élément ne peut pas être focus + disabled.
- Un élément ne peut pas être hover + disabled.
- Un élément peut être active + focus.

### 7.3 Priorités d'état

1. Disabled
2. Loading
3. Error
4. Active
5. Focus
6. Hover
7. Repos

L'état au sommet de cette liste prime visuellement.

---

## 8. Standards d'interaction

**S1 — Chaque composant documente ses états** (Document 14).

**S2 — Chaque état produit un feedback visuel distinct.**

**S3 — Chaque état possède un token dédié** (Document 9).

**S4 — Toute interaction clavier est documentée.**

**S5 — Tout geste tactile respecte les standards de la plateforme.**

**S6 — Toute transition est conforme au Document 6.**

**S7 — Toute interaction est testée au clavier, à la souris et au tactile.**

**S8 — Toute interaction est testée avec lecteur d'écran.**

---

## 9. Règles d'interaction

**R1 — Aucun élément interactif sans état hover, focus, active et disabled.**

**R2 — Aucun élément interactif sans focus visible.**

**R3 — Aucun élément interactif inaccessible au clavier.**

**R4 — Aucun élément interactif n'est focus + disabled.**

**R5 — Aucune position d'élément ne change sans action utilisateur.**

**R6 — Aucune action destructive sans confirmation.**

**R7 — Aucune action réversible sans Undo.**

**R8 — Aucune opération > 300 ms sans feedback.**

**R9 — Aucun raccourci clavier non documenté.**

**R10 — Aucun geste tactile non standard sans justification.**

**R11 — Aucune zone interactive inférieure à 48 × 48 px sur mobile.**

**R12 — Aucun glisser-déposer sans alternative clavier.**

**R13 — Aucune animation de transition supérieure à 300 ms (voir Document 6).**

**R14 — Aucune interaction ne peut modifier la position d'un autre élément non ciblé.**

**R15 — Aucune interaction ne peut produire un état incohérent.**

---

## 10. Recommandations

- Privilégier des états discrets (changement de couleur plutôt que d'ombre).
- Documenter chaque interaction au format : déclencheur → état → transition → résultat.
- Tester les interactions sous contrainte (clavier seul, souris seule, tactile seul, lecteur d'écran).
- Préférer les raccourcis clavier aux menus profonds.

---

## 11. Bonnes pratiques

- Utiliser des transitions courtes et discrètes.
- Rendre visible le focus clavier même sans survol.
- Offrir une alternative clavier pour tout drag-and-drop.
- Documenter les raccourcis dans la documentation utilisateur.
- Tester chaque interaction avec `prefers-reduced-motion`.

---

## 12. Mauvaises pratiques

- Élément interactif sans focus visible.
- Focus clavier supprimé (`outline: none`) sans remplacement.
- Position d'un bouton changeant au survol.
- Animation d'état de plus de 300 ms.
- Drag-and-drop sans alternative clavier.
- Raccourci clavier exotique non documenté.

---

## 13. Cas d'usage

### Cas 1 — Bouton primaire

**Déclencheur** : clic ou Entrée (focus).
**États** : repos, hover, focus, active, disabled, loading.
**Transition** : 150 ms sur la couleur de fond.
**Résultat** : action documentée, feedback immédiat.

### Cas 2 — Champ texte

**Déclencheur** : clic ou focus clavier.
**États** : repos, focus, filled, error, disabled, readonly.
**Transition** : 150 ms sur la bordure.
**Résultat** : saisie, validation en temps réel.

### Cas 3 — Liste réordonnable

**Déclencheur** : drag avec poignée, ou Ctrl + ↑/↓ au clavier.
**États** : repos, dragging, dropping.
**Transition** : 200 ms.
**Résultat** : réordonnancement.

### Cas 4 — Suppression d'un élément

**Déclencheur** : clic sur icône poubelle.
**États** : confirmation modale, loading, success.
**Transition** : 150 ms.
**Résultat** : suppression avec Undo pendant 10 secondes.

### Cas 5 — Navigation

**Déclencheur** : clic ou Entrée sur un lien.
**États** : repos, hover, focus, active, visited (le cas échéant).
**Transition** : 150 ms.
**Résultat** : changement de page avec conservation du scroll si pertinent.

---

## 14. Exemples

### Exemple 1 — Interaction conforme

**Bouton "Enregistrer"** :
- Repos : couleur primaire pleine.
- Hover : couleur primaire légèrement plus sombre.
- Focus : contour visible.
- Active : couleur primaire plus sombre.
- Loading : spinner intégré, bouton désactivé.

### Exemple 2 — Interaction non conforme

- Repos : couleur primaire.
- Hover : bouton se déplace de 2 px vers le haut.
- Focus : aucun indicateur visuel.
- Active : animation de rebond de 500 ms.
- Loading : bouton reste cliquable.

---

## 15. Anti-patterns d'interaction

- **Outline supprimé** — Focus clavier invisible.
- **Déplacement au survol** — Élément qui bouge sans raison.
- **Animation d'état décorative** — Animation qui ne signale rien.
- **Drag sans alternative** — Aucun moyen clavier de réordonner.
- **Confirmation inutile** — Popup pour une action triviale.
- **Undo absent** — Action réversible sans annulation.
- **Loading silencieux** — Opération longue sans indication.
- **Raccourci caché** — Fonctionnalité accessible uniquement par raccourci non documenté.

---

## 16. Checklist de validation d'interaction

- [ ] Chaque composant interactif possède les états requis.
- [ ] Le focus est visible sur tous les éléments interactifs.
- [ ] Le clavier permet d'atteindre tous les éléments interactifs.
- [ ] Aucun élément interactif n'est focus + disabled.
- [ ] Les transitions respectent le Document 6.
- [ ] Les zones tactiles respectent 48 × 48 px.
- [ ] Le drag-and-drop possède une alternative clavier.
- [ ] Les raccourcis sont documentés.
- [ ] Les actions critiques sont confirmées.
- [ ] Les actions réversibles proposent Undo.
- [ ] Les opérations longues produisent un feedback.
- [ ] Le comportement est testé au clavier, souris, tactile, lecteur d'écran.
- [ ] `prefers-reduced-motion` est respecté.

---

## 17. Critères de validation formels

Une interaction est conforme si :

1. Elle respecte R1 à R15.
2. Elle satisfait S1 à S8.
3. Elle passe la checklist (section 16).
4. Elle est documentée au format standard.

---

## 18. Gouvernance

Toute nouvelle interaction passe par RFC (Document 17). Les interactions critiques (drag-and-drop, raccourcis globaux) exigent validation du comité design (Document 18).

---

## 19. Versioning

| Version | Date | Auteur | Changements |
|--------|------|--------|-------------|
| 1.0 | — | Comité design | Publication initiale |

---

## 20. FAQ

**Q1 — Peut-on supprimer l'outline de focus pour des raisons esthétiques ?**
Non. Le focus clavier doit être visible.

**Q2 — Peut-on animer un bouton au survol ?**
Un changement de couleur est acceptable. Un déplacement ou une animation complexe ne l'est pas.

**Q3 — Peut-on utiliser le drag-and-drop sans alternative clavier ?**
Non. Une alternative clavier est obligatoire.

**Q4 — Peut-on laisser un élément interactif dans plusieurs états contradictoires ?**
Non. Les priorités d'état doivent être respectées.

**Q5 — Peut-on créer un raccourci clavier exotique ?**
Uniquement s'il est documenté et testé avec des utilisateurs.

---

## 21. Glossaire spécifique

**Active** — État pendant une interaction continue.

**Disabled** — État non interactif.

**Drag** — Déplacement par saisie continue.

**Drop** — Dépose d'un élément dans une zone cible.

**Focus** — État indiquant la cible clavier.

**Hover** — État de survol pointeur.

**Loading** — État d'opération en cours.

**Raccourci clavier** — Combinaison de touches déclenchant une action.

**Transition** — Passage d'un état à un autre.

**Undo** — Annulation d'une action.

---

## 22. Annexes

### Annexe A — Correspondance avec la Constitution

| Principe constitutionnel | Application interaction |
|--------------------------|-------------------------|
| Predictability Creates Trust | INT-2, INT-4 |
| Accessibility by Default | INT-3, INT-9 |
| Speed Feels Like Quality | INT-1, INT-7 |
| Reliability Over Novelty | INT-5, INT-6 |
| Function Before Decoration | INT-10 |
| Consistency Is Mandatory | INT-2 |

### Annexe B — Références croisées

- Document 1 — Design Philosophy
- Document 2 — Design Language
- Document 4 — UX Principles
- Document 6 — Motion Philosophy
- Document 7 — Accessibility Standards
- Document 9 — Color System
- Document 12 — Elevation & Shadows
- Document 14 — Component Specification
- Document 15 — Pattern Library
- Document 16 — AI Design Rules

---

*Fin du Document 5 — Interaction Principles.*
