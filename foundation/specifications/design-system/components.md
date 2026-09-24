# Document 14 — Component Specification

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Opérationnel — dépend des Documents 1 à 13

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit les **règles générales applicables à tous les composants** du Design System Walden Corp. Il précise l'anatomie, l'API, les variantes, les états, l'accessibilité, le comportement responsive, l'usage des tokens et la documentation.

Il ne remplace pas les spécifications individuelles de chaque composant (qui sont publiées dans le catalogue des composants), mais il fixe les règles que ces spécifications doivent respecter.

### 1.2 Dépendances

- **Dépend de :** Documents 1 à 13.
- **Est dépendant de :** Documents 15, 16, 17, 18, 19, 20.

---

## 2. Objectif

Garantir que tout composant Walden Corp soit :

- **cohérent** ;
- **documenté** ;
- **accessible** ;
- **testé** ;
- **réutilisable** ;
- **composable**.

---

## 3. Portée

Tous les composants des interfaces Walden Corp.

---

## 4. Définitions

**Composant** — Unité fonctionnelle d'interface réutilisable.

**Anatomie** — Structure interne d'un composant.

**API** — Ensemble des propriétés exposées par un composant.

**Variante** — Version déclinée d'un composant.

**État** — Situation momentanée d'un composant.

**Slot** — Emplacement de contenu paramétrable.

**Token** — Unité atomique de design (couleur, espacement, etc.).

**Composabilité** — Capacité d'un composant à être combiné avec d'autres.

**Accessibilité** — Conformité aux standards (Document 7).

**Responsive** — Adaptation aux tailles d'écran.

**Composant primitif** — Composant atomique (bouton, icône).

**Composant composé** — Composant construit à partir de primitives.

---

## 5. Philosophie des composants

### 5.1 Postulats

**Postulat 1 — Un composant est une décision stabilisée.** Il représente une solution validée à un problème récurrent.

**Postulat 2 — Un composant est réutilisable.** Il sert dans plusieurs contextes sans modification.

**Postulat 3 — Un composant est documenté.** Sa spécification précède son implémentation.

**Postulat 4 — Un composant est accessible.** Il respecte le Document 7 sans exception.

**Postulat 5 — Un composant est composable.** Il combine des primitives sans duplication.

**Postulat 6 — Un composant est stable.** Son API évolue selon le versioning sémantique (Document 19).

**Postulat 7 — Un composant est testé.** Il passe une batterie de tests automatisés et manuels.

### 5.2 Les cinq qualités d'un composant Walden Corp

- **Cohérent** — Visuellement et comportementalement identique partout.
- **Accessible** — Utilisable par tous, y compris au clavier et avec lecteur d'écran.
- **Documenté** — Spécification complète publiée dans le catalogue.
- **Testé** — Couverture de tests définie.
- **Versionné** — Suivi selon Semantic Versioning.

---

## 6. Principes de composants

### Principe CO-1 — Un problème, un composant

Un composant résout un problème identifié. Deux composants ne résolvent jamais le même problème.

### Principe CO-2 — Documentation avant implémentation

Aucun composant n'est implémenté avant que sa spécification ne soit validée.

### Principe CO-3 — Accessibilité intégrée

L'accessibilité est testée avant la publication.

### Principe CO-4 — Réutilisation avant création

Avant de créer un composant, vérifier qu'il n'existe pas (Document *Design Principles*, Principe 10).

### Principe CO-5 — Composition avant monolithe

Préférer la composition de primitives à un composant monolithique.

### Principe CO-6 — Contrats stables

L'API d'un composant évolue selon le versioning sémantique.

### Principe CO-7 — Tests obligatoires

Aucun composant n'entre en production sans tests.

### Principe CO-8 — Dépréciation contrôlée

Un composant obsolète est déprécié progressivement, jamais supprimé sans migration (Document 19).

---

## 7. Architecture d'un composant

Tout composant Walden Corp suit une architecture en cinq couches.

**Couche 1 — Anatomie.** Structure interne documentée.

**Couche 2 — États.** États standardisés (Document 5).

**Couche 3 — Variantes.** Versions déclinées (taille, apparence).

**Couche 4 — API.** Propriétés exposées.

**Couche 5 — Tokens.** Tokens de design utilisés.

---

## 8. Standards de composants

**S-CO1 — Tout composant est documenté au format standard.**

**S-CO2 — Tout composant utilise exclusivement des tokens.**

**S-CO3 — Tout composant respecte les états définis.**

**S-CO4 — Tout composant est accessible.**

**S-CO5 — Tout composant est responsive.**

**S-CO6 — Tout composant est testé.**

**S-CO7 — Tout composant est versionné.**

**S-CO8 — Tout composant supporte le thème clair et le thème sombre.**

**S-CO9 — Tout composant supporte le contraste élevé.**

**S-CO10 — Tout composant supporte `prefers-reduced-motion`.**

**S-CO11 — Tout composant supporte les langues RTL.**

**S-CO12 — Tout composant supporte les langues longues (allemand, finnois, etc.).**

**S-CO13 — Tout composant supporte les langues à hauteur de ligne élevée (arabe, hindi, etc.).**

**S-CO14 — Tout composant est testé au clavier, à la souris, au tactile et au lecteur d'écran.**

**S-CO15 — Tout composant documente ses limites et cas d'usage.**

---

## 9. Règles de composants

**R1 — Aucun composant hors catalogue.**

**R2 — Aucune valeur en dur dans un composant.**

**R3 — Aucun état non documenté.**

**R4 — Aucune variante non documentée.**

**R5 — Aucune API non documentée.**

**R6 — Aucun composant inaccessible.**

**R7 — Aucun composant non testé.**

**R8 — Aucun composant non versionné.**

**R9 — Aucun composant non documenté.**

**R10 — Aucun composant non conforme aux tokens.**

**R11 — Aucun composant dupliqué.**

**R12 — Aucun composant ne dépend d'un contexte implicite.**

**R13 — Aucun composant ne modifie l'état global sans API explicite.**

**R14 — Aucun composant n'utilise un z-index arbitraire (voir Document 12).**

**R15 — Aucun composant ne s'appuie sur une position absolue sans justification.**

---

## 10. Anatomie d'un composant

Tout composant documente son anatomie.

**Exemple : Bouton**

- **Container** — Zone interactive.
- **Label** — Texte.
- **Icon** — Icône optionnelle (début ou fin).
- **State layer** — Couche d'état (hover, focus, active).
- **Loading indicator** — Indicateur de chargement optionnel.

**Exemple : Champ de texte**

- **Label** — Libellé persistant.
- **Input** — Zone de saisie.
- **Placeholder** — Texte indicatif.
- **Helper text** — Texte d'aide.
- **Error message** — Message d'erreur.
- **Icon (leading/trailing)** — Icônes optionnelles.
- **State layer** — Couche d'état.

**Exemple : Carte**

- **Container** — Zone conteneur.
- **Media** — Image ou graphique optionnel.
- **Header** — Titre et sous-titre.
- **Body** — Contenu principal.
- **Footer** — Actions.
- **State layer** — Couche d'état (si interactive).

L'anatomie est documentée pour chaque composant dans le catalogue.

---

## 11. API d'un composant

L'API d'un composant définit ses propriétés exposées.

**Propriétés standard**

- `variant` — Variante (primary, secondary, etc.).
- `size` — Taille (sm, md, lg).
- `state` — État forcé (hover, focus, disabled).
- `disabled` — Booléen.
- `loading` — Booléen.
- `iconStart` — Icône début.
- `iconEnd` — Icône fin.
- `fullWidth` — Pleine largeur.
- `ariaLabel` — Label accessible.
- `testId` — Identifiant de test.

**Règles**

- Toute propriété est documentée.
- Aucune propriété n'est implicite.
- Les valeurs par défaut sont documentées.
- Les propriétés obsolètes sont dépréciées progressivement.

---

## 12. Variantes

Chaque composant définit ses variantes selon :

- **Apparence** — Primary, secondary, ghost, destructive.
- **Taille** — Small, medium, large.
- **Densité** — Confortable, compacte.
- **Contexte** — Inline, block, full-width.

Aucune variante n'est implicite.

---

## 13. États

Chaque composant interactif définit au minimum :

- Repos.
- Hover.
- Focus.
- Active.
- Disabled.
- Loading (si applicable).

Chaque état est documenté avec :

- Apparence.
- Comportement.
- Accessibilité.
- Tokens utilisés.

Voir Document 5 pour les règles générales.

---

## 14. Accessibilité

Tout composant respecte :

- Navigation clavier complète.
- Focus visible.
- Rôles ARIA corrects.
- Labels explicites.
- Contraste conforme.
- Zones tactiles ≥ 48 × 48 px.
- Support `prefers-reduced-motion`.
- Support lecteur d'écran.

Voir Document 7 pour les règles détaillées.

---

## 15. Responsive

Tout composant définit son comportement à chaque breakpoint (Document 11).

**Règles**

- Aucune taille figée en pixels absolus.
- Adaptation à la largeur disponible.
- Comportement documenté sur les 6 breakpoints.
- Test sur mobile, tablette, desktop.

---

## 16. Tokens

Tout composant utilise exclusivement les tokens définis dans les Documents 9 à 13.

**Règles**

- Aucune valeur en dur.
- Tokens sémantiques préférés aux tokens primitifs.
- Tokens documentés pour chaque élément d'anatomie.

---

## 17. Documentation

Chaque composant est documenté au format standard suivant :

1. **Nom**
2. **Description**
3. **Anatomie**
4. **Variantes**
5. **États**
6. **API**
7. **Accessibilité**
8. **Responsive**
9. **Tokens**
10. **Cas d'usage**
11. **Anti-patterns**
12. **Exemples**
13. **Version**
14. **Changelog**

Aucun composant n'est publié sans documentation complète.

---

## 18. Recommandations

- Documenter avant d'implémenter.
- Tester avant de publier.
- Maintenir la cohérence entre composants.
- Déprécier progressivement.

---

## 19. Bonnes pratiques

- Composer des primitives.
- Documenter les cas limites.
- Tester en accessibilité.
- Versionner selon SemVer.

---

## 20. Mauvaises pratiques

- Créer un composant pour un usage unique.
- Introduire une valeur en dur.
- Modifier une API sans versioning.
- Dupliquer un composant.
- Publier sans tests.

---

## 21. Cas d'usage

### Cas 1 — Création d'un nouveau composant

1. Vérifier qu'il n'existe pas.
2. Documenter l'anatomie, l'API, les états.
3. Valider par RFC (Document 17).
4. Implémenter.
5. Tester.
6. Publier.
7. Versionner.

### Cas 2 — Évolution d'un composant

1. Documenter l'évolution.
2. Évaluer l'impact (breaking change ou non).
3. Appliquer le versioning sémantique.
4. Publier avec changelog.
5. Documenter la migration.

### Cas 3 — Dépréciation

1. Annoncer la dépréciation.
2. Fournir une alternative.
3. Maintenir pendant au moins une version majeure.
4. Documenter la migration.
5. Supprimer après la période de grâce.

---

## 22. Exemples

### Exemple 1 — Fiche de composant conforme

**Nom** : Bouton primaire
**Anatomie** : Container, Label, Icon, State layer.
**Variantes** : Primary, secondary, ghost, destructive.
**Tailles** : sm, md, lg.
**États** : repos, hover, focus, active, disabled, loading.
**API** : `variant`, `size`, `disabled`, `loading`, `iconStart`, `iconEnd`, `onClick`.
**Accessibilité** : rôle `button`, focus visible, libellé explicite.
**Responsive** : pleine largeur en mobile, largeur auto en desktop.
**Tokens** : `color.action.primary`, `spacing.3`, `radius.md`, `typography.label`.
**Cas d'usage** : action principale d'un formulaire.
**Anti-patterns** : usage décoratif, action destructive non confirmée.

### Exemple 2 — Fiche de composant non conforme

Absence d'API documentée, absence d'états, absence d'accessibilité, valeurs en dur, non versionné.

---

## 23. Anti-patterns

- **Composant orphelin** — Utilisé une seule fois.
- **Composant incohérent** — Différent du reste du système.
- **Composant inaccessible** — Non conforme au Document 7.
- **Composant non documenté** — Sans fiche.
- **Composant en dur** — Valeurs non tokenisées.
- **Composant monolithique** — Non composable.
- **Composant figé** — Non responsive.

---

## 24. Checklist de validation d'un composant

- [ ] Documenté au format standard.
- [ ] Anatomie documentée.
- [ ] Variantes documentées.
- [ ] États documentés.
- [ ] API documentée.
- [ ] Accessibilité conforme (Document 7).
- [ ] Responsive testé (Document 11).
- [ ] Tokens utilisés (Documents 9 à 13).
- [ ] Tests automatisés présents.
- [ ] Tests manuels effectués (clavier, souris, tactile, lecteur d'écran).
- [ ] Thème clair testé.
- [ ] Thème sombre testé.
- [ ] Contraste élevé testé.
- [ ] `prefers-reduced-motion` testé.
- [ ] RTL testé.
- [ ] Langues longues testées.
- [ ] Versionné.
- [ ] Changelog publié.

---

## 25. Critères de validation formels

Un composant est conforme si :

1. Il respecte R1 à R15.
2. Il satisfait S-CO1 à S-CO15.
3. Il passe la checklist (section 24).
4. Il est publié dans le catalogue officiel.

---

## 26. Gouvernance

Toute création ou évolution de composant suit le processus RFC (Document 17). Les évolutions majeures exigent validation du comité design (Document 18) et du comité technique.

---

## 27. Versioning

Chaque composant est versionné selon le Semantic Versioning (Document 19).

| Version | Date | Auteur | Changements |
|--------|------|--------|-------------|
| 1.0 | — | Comité design | Publication initiale |

---

## 28. FAQ

**Q1 — Peut-on créer un composant local ?**
Non. Tout composant passe par le catalogue et la RFC.

**Q2 — Peut-on modifier une API sans versioning ?**
Non. Toujours selon SemVer.

**Q3 — Peut-on déprécier un composant sans alternative ?**
Non. Une alternative doit être fournie.

**Q4 — Peut-on publier un composant sans test ?**
Non.

**Q5 — Comment documenter un composant ?**
Selon le format standard défini à la section 17.

---

## 29. Glossaire spécifique

**API** — Propriétés exposées.

**Anatomie** — Structure interne.

**Composabilité** — Capacité à être combiné.

**Composant** — Unité fonctionnelle.

**État** — Situation momentanée.

**Slot** — Emplacement paramétrable.

**Variante** — Version déclinée.

---

## 30. Annexes

### Annexe A — Références croisées

- Documents 1 à 13 (fondations).
- Document 15 — Pattern Library.
- Document 16 — AI Design Rules.
- Document 17 — Contribution Guide.
- Document 18 — Governance.
- Document 19 — Versioning & Release Management.
- Document 20 — Handbook.

### Annexe B — Références externes (inspiration)

- Material Components
- IBM Carbon Components
- Microsoft Fluent UI Components
- Apple SwiftUI Components
- Adobe Spectrum Components
- GitHub Primer Components
- Shopify Polaris Components

---

*Fin du Document 14 — Component Specification.*
