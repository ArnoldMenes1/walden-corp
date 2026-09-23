# Document 7 — Accessibility Standards

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Fondamental — dépend des Documents 1, 2, 4, 5, 6

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit les **standards d'accessibilité** de Walden Corp. Il dépasse les exigences WCAG 2.1 AA et fixe des règles plus strictes pour garantir une expérience utilisable par tous, y compris les personnes en situation de handicap, les utilisateurs sous contrainte temporaire (blessure, fatigue) et les utilisateurs dans des environnements dégradés (bruit, luminosité).

### 1.2 Dépendances

- **Dépend de :** Documents 1 à 6.
- **Est dépendant de :** Documents 8 à 16.

---

## 2. Objectif

Permettre à **toute personne** d'utiliser les interfaces Walden Corp dans des conditions conformes à ses capacités, sans dégradation fonctionnelle.

---

## 3. Portée

Toutes les interfaces Walden Corp, sur tous les supports.

---

## 4. Définitions

**WCAG** — Web Content Accessibility Guidelines (norme internationale).

**ARIA** — Accessible Rich Internet Applications (spécification WAI-ARIA).

**Lecteur d'écran** — Technologie d'assistance vocalisant le contenu.

**Contraste** — Différence de luminance entre deux couleurs.

**Zone tactile** — Zone interactive sur écran tactile.

**Focus** — État indiquant la cible des entrées clavier.

**Skip link** — Lien permettant de sauter une partie de la page.

**Reduced motion** — Préférence système de réduction du mouvement.

**High contrast** — Préférence système de contraste élevé.

**Zoom** — Agrandissement du contenu (navigateur, OS).

---

## 5. Philosophie d'accessibilité

### 5.1 Postulats

**Postulat 1 — L'accessibilité est une propriété native.** Elle n'est jamais ajoutée après coup.

**Postulat 2 — L'accessibilité profite à tous.** Une interface accessible est plus claire, plus structurée, plus prévisible.

**Postulat 3 — L'accessibilité est testable.** Chaque exigence est vérifiable objectivement.

**Postulat 4 — L'accessibilité est continue.** Elle est vérifiée à chaque livraison, pas une fois pour toutes.

**Postulat 5 — L'accessibilité prime.** En cas de conflit avec un autre principe, elle l'emporte (voir Constitution).

### 5.2 Niveaux d'accessibilité Walden Corp

Walden Corp définit **trois niveaux** :

- **Niveau A** — Conformité WCAG A (minimum absolu).
- **Niveau AA** — Conformité WCAG AA (standard Walden Corp).
- **Niveau AAA (partiel)** — Au-delà de WCAG AA sur certains aspects critiques : contraste, focus visible, zones tactiles, respect des préférences système.

---

## 6. Principes d'accessibilité

### Principe A-1 — Perceptible

Toute information doit être perceptible par au moins un sens.

### Principe A-2 — Utilisable

Toute fonctionnalité doit être utilisable au clavier, à la souris et au tactile.

### Principe A-3 — Compréhensible

Toute information et tout comportement doivent être compréhensibles.

### Principe A-4 — Robuste

Toute interface doit fonctionner avec les technologies d'assistance.

### Principe A-5 — Respect des préférences

Toute préférence système doit être respectée (`prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`).

---

## 7. Architecture d'accessibilité

L'accessibilité Walden Corp s'organise en sept domaines.

1. **Clavier**
2. **Lecteurs d'écran**
3. **Contraste et couleurs**
4. **ARIA et sémantique**
5. **Mouvement**
6. **Typographie et lisibilité**
7. **Mobile et tactile**

Chaque domaine est documenté ci-dessous.

---

## 8. Standards d'accessibilité

### 8.1 Clavier

**S-A1.1 — Toute fonctionnalité accessible au clavier.**

**S-A1.2 — Ordre de tabulation logique.**

**S-A1.3 — Focus visible sur tous les éléments interactifs.**

**S-A1.4 — Focus jamais piégé sans possibilité de sortie.**

**S-A1.5 — Raccourcis clavier documentés.**

**S-A1.6 — Skip link en début de page pour le contenu principal.**

### 8.2 Lecteurs d'écran

**S-A2.1 — Structure sémantique correcte (h1-h6, landmarks, listes).**

**S-A2.2 — Labels explicites sur tous les champs de formulaire.**

**S-A2.3 — Messages d'erreur associés aux champs.**

**S-A2.4 — Alternatives textuelles sur les images.**

**S-A2.5 — ARIA utilisé lorsque la sémantique HTML est insuffisante.**

**S-A2.6 — ARIA jamais utilisé à mauvais escient (rôles incorrects).**

**S-A2.7 — Régions live (`aria-live`) pour les mises à jour dynamiques.**

### 8.3 Contraste et couleurs

**S-A3.1 — Texte normal : contraste ≥ 4.5:1.**

**S-A3.2 — Texte large (≥ 18.66 px bold ou 24 px) : contraste ≥ 3:1.**

**S-A3.3 — Composants d'interface : contraste ≥ 3:1.**

**S-A3.4 — Aucune information transmise uniquement par la couleur.**

**S-A3.5 — Mode contraste élevé respecté.**

**S-A3.6 — Aucune couleur utilisée comme seul indicateur d'état.**

### 8.4 ARIA et sémantique

**S-A4.1 — HTML sémantique prioritaire.**

**S-A4.2 — ARIA utilisé uniquement si nécessaire.**

**S-A4.3 — Rôles, états et propriétés ARIA corrects.**

**S-A4.4 — Nom accessible sur chaque élément interactif.**

**S-A4.5 — États dynamiques annoncés (`aria-expanded`, `aria-selected`, `aria-checked`).**

### 8.5 Mouvement

**S-A5.1 — `prefers-reduced-motion` respecté.**

**S-A5.2 — Aucune animation provocant un malaise.**

**S-A5.3 — Aucun clignotement de plus de 3 Hz.**

**S-A5.4 — Contenu en mouvement contrôlable par l'utilisateur.**

### 8.6 Typographie et lisibilité

**S-A6.1 — Taille de police minimale : 14 px pour le corps de texte.**

**S-A6.2 — Zoom 200 % sans perte d'information.**

**S-A6.3 — Longueur de ligne optimale (45–75 caractères).**

**S-A6.4 — Interlignage suffisant (≥ 1.4 pour le corps).**

**S-A6.5 — Aucun texte justifié.**

**S-A6.6 — Aucun texte en majuscules pour des blocs > 1 ligne.**

### 8.7 Mobile et tactile

**S-A7.1 — Zones tactiles ≥ 48 × 48 px.**

**S-A7.2 — Espacement entre zones tactiles ≥ 8 px.**

**S-A7.3 — Orientations portrait et paysage supportées.**

**S-A7.4 — Gestes standards respectés.**

**S-A7.5 — Gestes alternatifs disponibles pour les gestes complexes.**

---

## 9. Règles d'accessibilité

**R1 — Aucun élément interactif inaccessible au clavier.**

**R2 — Aucun focus supprimé sans remplacement visible.**

**R3 — Aucun contraste inférieur aux seuils définis.**

**R4 — Aucune information uniquement par la couleur.**

**R5 — Aucun label manquant sur les champs de formulaire.**

**R6 — Aucun message d'erreur non associé au champ concerné.**

**R7 — Aucune image sans alternative textuelle.**

**R8 — Aucun ARIA incorrect (rôle, état, propriété).**

**R9 — Aucune animation ne respectant pas `prefers-reduced-motion`.**

**R10 — Aucune zone tactile inférieure à 48 × 48 px.**

**R11 — Aucun texte inférieur à 14 px.**

**R12 — Aucune perte d'information en zoom 200 %.**

**R13 — Aucune structure non sémantique.**

**R14 — Aucun champ de formulaire sans label persistant.**

**R15 — Aucun élément cliquable non accessible au clavier.**

---

## 10. Recommandations

- Tester chaque livraison avec un lecteur d'écran (VoiceOver, NVDA, JAWS).
- Tester chaque livraison au clavier seul.
- Tester chaque livraison en zoom 200 %.
- Tester chaque livraison en mode contraste élevé.
- Tester chaque livraison en `prefers-reduced-motion`.
- Former les équipes à l'accessibilité.

---

## 11. Bonnes pratiques

- Utiliser HTML sémantique avant ARIA.
- Préférer les libellés explicites aux icônes seules.
- Conserver la structure logique même en zoom.
- Documenter les raccourcis clavier.
- Tester avec des utilisateurs en situation de handicap.

---

## 12. Mauvaises pratiques

- Supprimer le focus visuel (`outline: none`).
- Utiliser `div` cliquable au lieu de `button`.
- Utiliser un placeholder comme label.
- Transmettre une information uniquement par la couleur.
- Utiliser un ARIA incorrect.
- Ignorer `prefers-reduced-motion`.
- Utiliser une image sans `alt`.
- Créer un piège de focus.

---

## 13. Cas d'usage

### Cas 1 — Formulaire accessible

Chaque champ possède un `<label>` associé, un message d'erreur lié via `aria-describedby`, un focus visible, et une validation accessible.

### Cas 2 — Modale accessible

Focus piégé dans la modale, `Esc` ferme, focus rendu au déclencheur, structure ARIA `dialog` correcte.

### Cas 3 — Tableau accessible

Structure `<table>` avec `<thead>` et `<th>`, association en-têtes/cellules, résumé textuel.

### Cas 4 — Dashboard accessible

Graphiques accompagnés de tableaux alternatifs, couleurs non seules indicatrices, contrastes conformes.

### Cas 5 — Application mobile accessible

Zones tactiles 48 × 48 px, gestes standards, support des lecteurs d'écran natifs (VoiceOver, TalkBack).

---

## 14. Exemples

### Exemple 1 — Bouton accessible

```html
<button type="button" aria-label="Enregistrer le document">
  <svg aria-hidden="true">…</svg>
  Enregistrer
</button>
```

Absence de role, de tabindex, de label, de focus.

15. Anti-patterns d'accessibilité
Focus supprimé — Aucun indicateur de focus.

Div cliquable — Élément interactif non sémantique.

Placeholder-label — Placeholder utilisé comme label.

Couleur seule — Information uniquement chromatique.

Piège de focus — Impossible de sortir d'une modale.

ARIA incorrect — Rôle non conforme à la fonction.

Alt vide sur image informative — Perte d'information.

Mouvement non contrôlable — Animation sans option d'arrêt.

16. Checklist de validation d'accessibilité
□ Navigation clavier complète.
□ Focus visible sur tous les éléments interactifs.
□ Ordre de tabulation logique.
□ Skip link présent.
□ Structure sémantique correcte (h1-h6, landmarks).
□ Labels explicites sur tous les champs.
□ Messages d'erreur associés aux champs.
□ Alternatives textuelles sur les images.
□ ARIA correct (rôles, états, propriétés).
□ Contraste ≥ 4.5:1 (texte normal).
□ Contraste ≥ 3:1 (composants).
□ Aucune information uniquement par la couleur.
□ prefers-reduced-motion respecté.
□ prefers-color-scheme respecté.
□ prefers-contrast respecté.
□ Zoom 200 % testé.
□ Zones tactiles ≥ 48 × 48 px.
□ Testé avec lecteur d'écran.
□ Testé au clavier seul.
17. Critères de validation formels
Une interface est accessible si :

Elle respecte R1 à R15.

Elle satisfait S-A1.1 à S-A7.5.

Elle passe la checklist (section 16).

Elle est testée avec au moins un lecteur d'écran.

18. Gouvernance
L'accessibilité est non négociable. Aucune exception n'est autorisée sans validation du comité design (Document 18) et documentation publique.

19. Versioning
Version	Date	Auteur	Changements
1.0	—	Comité design	Publication initiale
20. FAQ
Q1 — Peut-on supprimer l'outline de focus pour des raisons esthétiques ?
Non. Jamais.

Q2 — Faut-il supporter tous les lecteurs d'écran ?
Au minimum VoiceOver (Apple), NVDA (Windows), TalkBack (Android).

Q3 — Faut-il atteindre WCAG AAA ?
Non, AA est le standard. Walden Corp dépasse AA sur certains aspects critiques.

Q4 — Comment tester l'accessibilité ?
Tests manuels (clavier, lecteur d'écran) + outils automatisés (axe, Lighthouse).

Q5 — L'accessibilité s'applique-t-elle aux sites marketing ?
Oui. Toute interface Walden Corp.

21. Glossaire spécifique
ARIA — Accessible Rich Internet Applications.

Contraste — Différence de luminance.

Focus — Cible des entrées clavier.

Lecteur d'écran — Technologie d'assistance vocalisant le contenu.

Reduced motion — Préférence de réduction du mouvement.

Skip link — Lien de saut.

Zone tactile — Zone interactive tactile.

WCAG — Web Content Accessibility Guidelines.

22. Annexes
Annexe A — Références croisées
Document 1 — Design Philosophy

Document 2 — Design Language

Document 5 — Interaction Principles

Document 6 — Motion Philosophy

Document 8 — Content & Writing

Document 9 — Color System

Document 10 — Typography System

Document 11 — Grid & Spacing System

Document 14 — Component Specification

Document 15 — Pattern Library

Annexe B — Références externes (inspiration)
WCAG 2.1 (W3C)

WAI-ARIA Authoring Practices

Apple Human Interface Guidelines — Accessibility

Material Design — Accessibility

IBM Carbon — Accessibility

Fin du Document 7 — Accessibility Standards.
