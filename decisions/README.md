# Document 17 — Contribution Guide

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Opérationnel — dépend des Documents 1 à 16

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit le **processus de contribution** au Design System Walden Corp. Il précise comment proposer une évolution, comment la documenter, comment la faire valider, comment la publier, comment la maintenir dans le temps, et comment déprécier ce qui devient obsolète.

Il ne définit pas les rôles et responsabilités du comité (voir Document 18) ni les règles de versioning (voir Document 19), mais il décrit **le parcours complet d'une contribution**, de l'idée à la publication.

### 1.2 Dépendances

- **Dépend de :** Documents 1 à 16.
- **Est dépendant de :** Documents 18, 19, 20.

---

## 2. Objectif

Garantir que toute évolution du Design System Walden Corp soit :

- **tracée** ;
- **documentée** ;
- **évaluée** ;
- **validée** ;
- **publiée** ;
- **maintenue**.

Aucune contribution n'est acceptée sans passer par le processus défini ici.

---

## 3. Portée

Toutes les contributions au Design System :

- ajout d'un composant ;
- évolution d'un composant ;
- ajout d'un pattern ;
- évolution d'un pattern ;
- modification d'un token ;
- ajout d'un token ;
- modification d'un principe ;
- ajout d'une règle ;
- modification d'une règle ;
- dépréciation d'un élément.

---

## 4. Définitions

**Contribution** — Proposition d'ajout, de modification ou de suppression d'un élément du Design System.

**RFC** — Request for Comments : document formel décrivant une proposition et son impact.

**Revue** — Évaluation par un ou plusieurs reviewers.

**Validation** — Approbation formelle par le comité compétent.

**Publication** — Mise à disposition officielle de l'évolution.

**Dépréciation** — Marquer un élément comme obsolète sans le supprimer immédiatement.

**Migration** — Processus permettant de passer d'une version à une autre.

**Maintenance** — Ensemble des activités de suivi d'un élément après publication.

**Breaking change** — Modification incompatible avec l'existant.

**Non-breaking change** — Modification compatible avec l'existant.

---

## 5. Philosophie de contribution

### 5.1 Postulats

**Postulat 1 — Toute contribution suit le processus.** Aucune exception.

**Postulat 2 — Toute contribution est documentée.** Une contribution non documentée n'existe pas.

**Postulat 3 — Toute contribution est évaluée.** Toute proposition est examinée selon des critères objectifs.

**Postulat 4 — Toute contribution est tracée.** L'historique des contributions est conservé.

**Postulat 5 — Toute contribution est réversible.** Une contribution peut être retirée si elle s'avère problématique.

**Postulat 6 — Toute contribution respecte la Constitution.** Aucune contribution ne peut contredire les Design Principles.

### 5.2 Les cinq qualités d'une contribution Walden Corp

- **Justifiée** — Elle répond à un besoin documenté.
- **Documentée** — Elle est décrite selon le format RFC.
- **Évaluée** — Elle est testée, mesurée, comparée.
- **Traçable** — Elle est enregistrée.
- **Réversible** — Elle peut être retirée.

---

## 6. Principes de contribution

### Principe CO-1 — Besoin avant solution

Toute contribution part d'un besoin documenté, jamais d'une solution préétablie.

### Principe CO-2 — Impact avant implémentation

L'impact d'une contribution est évalué avant toute implémentation.

### Principe CO-3 — Réutilisation avant création

Avant toute contribution, vérifier qu'un élément existant ne résout pas déjà le problème.

### Principe CO-4 — Documentation obligatoire

Toute contribution est accompagnée d'une RFC complète.

### Principe CO-5 — Validation par les pairs

Toute contribution est validée par au moins deux reviewers indépendants.

### Principe CO-6 — Compatibilité

Toute contribution respecte les règles de versioning sémantique (Document 19).

### Principe CO-7 — Migration

Toute contribution breaking fournit un chemin de migration.

### Principe CO-8 — Communication

Toute contribution publiée est communiquée à toutes les parties prenantes.

### Principe CO-9 — Rétrocompatibilité

La rétrocompatibilité est privilégiée sur la nouveauté.

### Principe CO-10 — Simplicité

Une contribution complexe est découpée en contributions plus simples.

---

## 7. Architecture du processus de contribution

Le processus de contribution s'organise en **huit étapes**.

1. **Identification du besoin**
2. **Rédaction de la RFC**
3. **Revue interne**
4. **Validation**
5. **Implémentation**
6. **Test**
7. **Publication**
8. **Maintenance**

Aucune étape ne peut être sautée.

---

## 8. Étapes du processus

### 8.1 Étape 1 — Identification du besoin

**Objectif** : documenter un besoin clairement.

**Livrables** :

- Description du problème.
- Cas d'usage concernés.
- Produits concernés.
- Impact estimé.
- Alternatives existantes examinées.

**Responsable** : porteur de la contribution.

**Durée indicative** : 1 à 5 jours.

### 8.2 Étape 2 — Rédaction de la RFC

**Objectif** : formaliser la proposition.

**Livrables** : RFC complète au format standard (voir section 9).

**Responsable** : porteur de la contribution.

**Durée indicative** : 3 à 10 jours.

### 8.3 Étape 3 — Revue interne

**Objectif** : évaluer la proposition.

**Livrables** : rapport de revue.

**Responsable** : reviewers désignés par le comité design (Document 18).

**Durée indicative** : 5 à 10 jours.

**Critères de revue** :

- Conformité à la Constitution.
- Conformité aux Documents 1 à 16.
- Impact sur l'existant.
- Impact sur l'accessibilité.
- Impact sur la performance.
- Impact sur la maintenabilité.
- Complexité.
- Alternative.

### 8.4 Étape 4 — Validation

**Objectif** : approuver formellement la RFC.

**Responsable** : comité design (Document 18).

**Décisions possibles** :

- Acceptée.
- Acceptée avec modifications.
- Rejetée.
- Renvoyée pour complément.

**Durée indicative** : 5 à 15 jours.

### 8.5 Étape 5 — Implémentation

**Objectif** : produire l'élément.

**Responsable** : équipe technique désignée.

**Livrables** :

- Implémentation.
- Documentation.
- Tests.

**Durée indicative** : variable.

### 8.6 Étape 6 — Test

**Objectif** : valider l'implémentation.

**Responsable** : équipe QA.

**Livrables** :

- Tests d'accessibilité.
- Tests de performance.
- Tests responsive.
- Tests multi-thèmes.
- Tests RTL.
- Tests multilingues.

**Durée indicative** : 3 à 10 jours.

### 8.7 Étape 7 — Publication

**Objectif** : rendre l'élément disponible.

**Responsable** : mainteneurs du Design System.

**Livrables** :

- Publication au catalogue.
- Changelog.
- Guide de migration (si applicable).
- Communication.

**Durée indicative** : 1 à 3 jours.

### 8.8 Étape 8 — Maintenance

**Objectif** : maintenir l'élément dans le temps.

**Responsable** : mainteneurs.

**Livrables** :

- Veille.
- Correctifs.
- Évolutions mineures.
- Dépréciation éventuelle.

**Durée** : continue.

---

## 9. Format de RFC

Toute RFC suit le format standard suivant.

### 9.1 En-tête

- **RFC ID** : identifiant unique.
- **Titre**.
- **Auteur**.
- **Date**.
- **Statut** : brouillon, en revue, validée, rejetée, publiée.
- **Version du Design System concernée**.

### 9.2 Sections obligatoires

1. **Résumé** — 3 à 5 phrases.
2. **Motivation** — problème, besoin, cas d'usage.
3. **Proposition détaillée** — description complète.
4. **Alternatives examinées** — au moins deux.
5. **Justification** — principes appliqués, données mobilisées.
6. **Impact** :
   - impact sur les composants existants ;
   - impact sur les produits ;
   - impact sur l'accessibilité ;
   - impact sur la performance ;
   - impact sur la documentation.
7. **Migration** — si applicable.
8. **Tests prévus**.
9. **Rétrocompatibilité**.
10. **Plan de communication**.
11. **Annexes** — schémas, exemples, maquettes.

### 9.3 Critères d'acceptation

Une RFC est complète si toutes les sections sont renseignées et si au moins deux alternatives ont été examinées.

---

## 10. Standards de contribution

**S-C1 — Toute contribution fait l'objet d'une RFC.**

**S-C2 — Toute RFC respecte le format standard.**

**S-C3 — Toute RFC est revue par au moins deux reviewers.**

**S-C4 — Toute RFC est validée par le comité design.**

**S-C5 — Toute contribution est tracée.**

**S-C6 — Toute contribution breaking fournit un guide de migration.**

**S-C7 — Toute contribution est testée.**

**S-C8 — Toute contribution est documentée.**

**S-C9 — Toute contribution respecte la Constitution.**

**S-C10 — Toute contribution respecte les règles de versioning.**

---

## 11. Règles de contribution

**R1 — Aucune contribution sans RFC.**

**R2 — Aucune contribution sans documentation.**

**R3 — Aucune contribution sans validation.**

**R4 — Aucune contribution sans test.**

**R5 — Aucune contribution sans traçabilité.**

**R6 — Aucune contribution contredisant la Constitution.**

**R7 — Aucune contribution breaking sans migration.**

**R8 — Aucune contribution sans communication.**

**R9 — Aucune contribution sans revue par les pairs.**

**R10 — Aucune contribution non versionnée.**

**R11 — Aucune contribution ne peut modifier la Constitution sans validation unanime du comité design.**

**R12 — Aucune contribution ne peut être publiée sans tests d'accessibilité.**

**R13 — Aucune contribution ne peut ignorer les langues RTL.**

**R14 — Aucune contribution ne peut ignorer `prefers-reduced-motion`.**

**R15 — Aucune contribution ne peut dégrader la performance globale.**

---

## 12. Recommandations

- Documenter avant d'implémenter.
- Découper les contributions complexes.
- Impliquer les équipes produit dès la revue.
- Communiquer largement.
- Capitaliser les apprentissages.

---

## 13. Bonnes pratiques

- Considérer la RFC comme un outil de communication.
- Tester avec des utilisateurs réels.
- Documenter les échecs.
- Maintenir une bibliothèque de RFC.

---

## 14. Mauvaises pratiques

- Contribution directe sans RFC.
- RFC vide ou incomplète.
- Validation unilatérale.
- Publication sans test.
- Absence de communication.

---

## 15. Cas d'usage

### Cas 1 — Ajout d'un composant

1. Identification du besoin (composant inexistant).
2. Rédaction de la RFC.
3. Revue.
4. Validation.
5. Implémentation.
6. Tests.
7. Publication.
8. Maintenance.

### Cas 2 — Évolution d'un composant (non-breaking)

Processus allégé : RFC simplifiée, revue ciblée, tests réduits, publication avec patch ou minor version.

### Cas 3 — Évolution breaking d'un composant

Processus complet + guide de migration + communication étendue + période de dépréciation.

### Cas 4 — Dépréciation

1. RFC de dépréciation.
2. Validation.
3. Annonce.
4. Période de grâce (min. 1 version majeure).
5. Suppression.

### Cas 5 — Évolution de la Constitution

RFC exceptionnelle + validation unanime du comité design + validation direction + publication majeure.

---

## 16. Exemples

### Exemple 1 — RFC conforme

Voir le format défini à la section 9.

### Exemple 2 — RFC non conforme

Absence de motivation, absence d'alternatives, absence d'impact, absence de tests prévus.

---

## 17. Anti-patterns de contribution

- **Contribution directe** — Sans RFC.
- **RFC incomplète** — Sections vides.
- **Validation unilatérale** — Un seul reviewer.
- **Publication hâtive** — Sans tests.
- **Absence de migration** — Breaking sans guide.
- **Absence de communication** — Contribution silencieuse.

---

## 18. Checklist de validation d'une contribution

- [ ] RFC rédigée au format standard.
- [ ] Au moins deux alternatives examinées.
- [ ] Impact évalué.
- [ ] Revue par au moins deux reviewers.
- [ ] Validation par le comité design.
- [ ] Tests effectués (accessibilité, responsive, RTL, multilingue).
- [ ] Documentation complète.
- [ ] Changelog rédigé.
- [ ] Guide de migration (si breaking).
- [ ] Communication diffusée.
- [ ] Versioning appliqué (Document 19).
- [ ] Traçabilité enregistrée.

---

## 19. Critères de validation formels

Une contribution est conforme si :

1. Elle respecte R1 à R15.
2. Elle satisfait S-C1 à S-C10.
3. Elle passe la checklist (section 18).

---

## 20. Gouvernance

Le processus de contribution est supervisé par le comité design (Document 18). Toute évolution du processus suit elle-même une RFC.

---

## 21. Versioning

| Version | Date | Auteur | Changements |
|--------|------|--------|-------------|
| 1.0 | — | Comité design | Publication initiale |

---

## 22. FAQ

**Q1 — Peut-on contribuer sans RFC ?**
Non.

**Q2 — Combien de reviewers sont nécessaires ?**
Au minimum deux, indépendants.

**Q3 — Peut-on publier une contribution breaking sans migration ?**
Non.

**Q4 — Peut-on modifier la Constitution ?**
Uniquement par RFC exceptionnelle avec validation unanime.

**Q5 — Peut-on accélérer le processus ?**
Uniquement pour des correctifs urgents, avec traçabilité.

---

## 23. Glossaire spécifique

**Breaking change** — Modification incompatible.

**Contribution** — Proposition d'évolution.

**Dépréciation** — Marquage d'obsolescence.

**Migration** — Passage d'une version à une autre.

**RFC** — Request for Comments.

**Revue** — Évaluation par les pairs.

**Validation** — Approbation formelle.

---

## 24. Annexes

### Annexe A — Références croisées

- Documents 1 à 16.
- Document 18 — Governance.
- Document 19 — Versioning & Release Management.
- Document 20 — Handbook.

---

*Fin du Document 17 — Contribution Guide.*
