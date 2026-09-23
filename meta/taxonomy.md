# Taxonomie du dépôt `walden-corp`

**Statut :** Document de cadrage sémantique — référence obligatoire
**Version :** 1.0
**Portée :** Ensemble du dépôt

---

## Objectif

Ce document définit **la frontière sémantique** entre les catégories de contenus du dépôt. Il a pour but d'éviter :

- les doublons entre catégories ;
- les ambiguïtés lors du classement d'un nouveau document ;
- la dérive progressive de la structure.

Tout contributeur qui ajoute un document **doit d'abord consulter ce document**.

---

## Les dix catégories

| # | Catégorie | Nature | Rythme de changement | Responsable |
|---|-----------|--------|---------------------|-------------|
| 1 | **Constitution** | Principes intemporels | Années | Direction |
| 2 | **Standards** | Règles obligatoires transverses | Trimestres | Comité design + technique |
| 3 | **Specifications** | Valeurs techniques chiffrées | Mois | Comité design + technique |
| 4 | **Governance** | Rôles, comités, validations | Années | Direction |
| 5 | **Operations** | Procédures exécutables | Semaines | Ingénierie + Ops |
| 6 | **AI** | Règles, prompts, garde-fous | Mois | Comité IA |
| 7 | **Knowledge** | Connaissance métier | Mois | Produit + direction |
| 8 | **Decisions** | Traçabilité décisionnelle | Continue | Tous |
| 9 | **Policies** | Règles de conduite / processus | Années | Direction |
| 10 | **References** | Externe, historique | Rare | Tous |

---

## Définitions et règles d'affectation

### 1. Constitution

**Définition :** principes intemporels qui orientent toute décision. Ne décrivent pas de valeurs techniques.

**Rythme :** changement très rare (années).

**Exemples :**
- « Accessibility by Default »
- « Function Before Decoration »
- « Nous concevons pour des professionnels »

**Test d'affectation :**
> « Ce principe est-il encore vrai dans 5 ans, quelle que soit la technologie ? »
> Si oui → Constitution.

**Emplacement :** `foundation/constitution/`

---

### 2. Standards

**Définition :** règles obligatoires et transverses, applicables à tous les projets. Elles ne contiennent pas de valeurs chiffrées (celles-ci vont dans Specifications).

**Rythme :** trimestres.

**Exemples :**
- « Le contraste minimum est WCAG AA »
- « Tout composant est testé au clavier »
- « Aucune couleur en dur dans le code »

**Test d'affectation :**
> « Est-ce une règle obligatoire qui s'applique à tous les projets, indépendamment des valeurs choisies ? »
> Si oui → Standards.

**Emplacement :** `foundation/standards/`

---

### 3. Specifications

**Définition :** valeurs techniques chiffrées, tokens, définitions précises d'API, schémas d'architecture.

**Rythme :** mois.

**Exemples :**
- `#0F2052` pour la couleur primaire
- `4px` pour l'unité d'espacement
- Schéma d'un endpoint API
- Diagramme d'architecture système

**Test d'affectation :**
> « Ce document contient-il des valeurs chiffrées, des tokens, des schémas, ou des définitions précises ? »
> Si oui → Specifications.

**Emplacement :** `foundation/specifications/`

---

### 4. Governance

**Définition :** rôles, responsabilités, comités, processus de validation, ownership.

**Rythme :** années.

**Exemples :**
- « Qui valide une RFC ? »
- « Composition du comité design »
- « Qui possède le design system ? »

**Test d'affectation :**
> « Ce document décrit-il qui décide, qui valide, ou qui possède ? »
> Si oui → Governance.

**Emplacement :** `foundation/governance/`

---

### 5. Operations

**Définition :** procédures exécutables, instructions pas-à-pas.

**Rythme :** semaines.

**Exemples :**
- « Comment déployer en production »
- « Procédure d'incident »
- « Plan de reprise après sinistre »

**Test d'affectation :**
> « Ce document est-il une procédure que quelqu'un peut exécuter, étape par étape ? »
> Si oui → Operations.

**Emplacement :** `foundation/operations/`

---

### 6. AI

**Définition :** règles pour les agents IA, prompts système, garde-fous, sélection de modèles, évaluation.

**Rythme :** mois.

**Exemples :**
- « Aucune production IA sans validation humaine »
- Prompt système pour un agent designer
- Critères d'évaluation d'un modèle

**Test d'affectation :**
> « Ce document s'adresse-t-il à un agent IA ou décrit-il son fonctionnement ? »
> Si oui → AI.

**Emplacement :** `foundation/ai/`

---

### 7. Knowledge

**Définition :** connaissance métier — domaines fonctionnels, concepts, modèles de données, processus métier.

**Rythme :** mois.

**Exemples :**
- « Qu'est-ce qu'un client chez Walden Corp ? »
- « Modèle de données d'un projet »
- « Processus de facturation »

**Test d'affectation :**
> « Ce document décrit-il un concept métier (non technique, non design) ? »
> Si oui → Knowledge.

**Emplacement :** `knowledge/`

---

### 8. Decisions

**Définition :** traçabilité des décisions prises (ADR et RFC).

**Rythme :** continu.

**Sous-catégories :**
- **ADR** (Architecture Decision Record) : décisions techniques structurantes, ponctuelles.
- **RFC** (Request for Comments) : propositions formelles ouvertes à commentaires.

**Test d'affectation :**
> « Ce document décrit-il une décision passée (ADR) ou une proposition (RFC) ? »
> Si oui → Decisions.

**Emplacement :** `decisions/{adr,rfc}/`

---

### 9. Policies

**Définition :** politiques officielles transverses (sécurité, confidentialité, publication, versioning, IA, conformité).

**Rythme :** années.

**Exemples :**
- « Politique de publication »
- « Politique d'usage de l'IA »
- « Politique de versioning »

**Test d'affectation :**
> « Ce document définit-il une politique d'entreprise (règle globale, non technique) ? »
> Si oui → Policies.

**Emplacement :** `policies/`

---

### 10. References

**Définition :** sources externes, bibliographies, inspirations, liens, archives.

**Rythme :** rare.

**Exemples :**
- Bibliographie Material Design
- Liste des Design Systems inspirants
- Archivage des anciens documents

**Test d'affectation :**
> « Ce document référence-t-il une source externe ou archive-t-il un contenu ? »
> Si oui → References.

**Emplacement :** `foundation/references/`

---

## Règles de résolution en cas d'ambiguïté

**Ordre de priorité (du plus spécifique au plus général) :**

1. **Decisions** — si le document est une décision ou une proposition formelle.
2. **Operations** — si c'est une procédure exécutable.
3. **Specifications** — si c'est une valeur chiffrée ou un schéma.
4. **Standards** — si c'est une règle obligatoire sans valeur chiffrée.
5. **Constitution** — si c'est un principe intemporel.
6. **AI** — si c'est spécifique aux agents IA.
7. **Knowledge** — si c'est un concept métier.
8. **Policies** — si c'est une politique d'entreprise.
9. **Governance** — si c'est un rôle, une responsabilité.
10. **References** — si c'est externe ou archivistique.

---

## Cas concrets

| Question | Catégorie |
|----------|-----------|
| « Le contraste minimum est WCAG AA » | Standard |
| « La couleur primaire est #0F2052 » | Specification |
| « Aucune production IA sans validation » | Policy + AI (double référence) |
| « Qui valide une RFC ? » | Governance |
| « Comment déployer en production » | Operations |
| « Qu'est-ce qu'un client ? » | Knowledge |
| « Pourquoi avons-nous choisi React ? » | Decisions (ADR) |
| « Accessibility by Default » | Constitution |
| « Liste des Design Systems inspirants » | References |

---

## Mise à jour de la taxonomie

Toute évolution de ce document suit le processus **RFC** (`decisions/rfc/`).

---

*Fin du document.*
