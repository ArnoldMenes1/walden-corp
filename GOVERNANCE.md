# Gouvernance

**Version :** 1.0
**Portée :** Dépôt `walden-corp`

---

## Objectif

Ce document définit la **gouvernance** du Constitution Repository de Walden Corp : rôles, responsabilités, processus de décision, comités et validation.

---

## Principes

1. **Clarté** — chaque décision a un responsable identifié.
2. **Transparence** — toute décision est documentée et tracée.
3. **Collégialité** — les décisions majeures sont prises en comité.
4. **Rapidité** — les décisions sont prises dans des délais définis.
5. **Réversibilité** — toute décision peut être révisée.
6. **Conformité** — aucune décision ne peut contredire la Constitution.

---

## Rôles

### Direction

**Responsabilités :**
- Valider les évolutions majeures.
- Arbitrer en cas de conflit non résolu.
- Nommer les membres des comités.
- Valider les politiques et la Constitution.

### Owner — Constitution Repository

**Responsabilités :**
- Piloter le dépôt.
- Animer les comités.
- Valider les RFC majeures.
- Communiquer les évolutions.

### Maintainers

**Responsabilités :**
- Maintenir les documents.
- Réaliser les revues.
- Implémenter les évolutions.
- Supporter les contributeurs.

### Comité design

**Composition :**
- Owner (président).
- Maintainers design (2 à 5).
- Représentants produit (2 à 4).
- Représentant accessibilité.
- Représentant technique.

**Fréquence :** hebdomadaire ou bimensuelle.

**Compétences :**
- Design system.
- Standards UX / UI.
- Spécifications design.

### Comité technique

**Composition :**
- Owner technique (président).
- Maintainers front-end (2 à 4).
- Maintainer back-end.
- Représentant QA.
- Représentant design.

**Fréquence :** hebdomadaire ou bimensuelle.

**Compétences :**
- Architecture.
- Standards techniques.
- Spécifications API.

### Comité IA

**Composition :**
- Owner IA (président).
- Maintainers IA (2 à 3).
- Représentant sécurité.
- Représentant juridique.

**Fréquence :** mensuelle.

**Compétences :**
- Règles IA.
- Prompts.
- Garde-fous.
- Évaluation.

---

## Processus de décision

### Décisions mineures

- **Qui :** Maintainers.
- **Comment :** Pull Request simple, 1 reviewer.
- **Délai :** 2 jours.

### Décisions majeures

- **Qui :** Comité compétent.
- **Comment :** RFC, 2 reviewers, délibération.
- **Délai :** 7 à 15 jours.

### Décisions constitutionnelles

- **Qui :** Direction + Comité design + Comité technique.
- **Comment :** RFC exceptionnelle, validation unanime.
- **Délai :** 15 à 30 jours.

---

## Matrice de validation

| Type de modification | Reviewer | Comité | Direction |
|----------------------|----------|--------|-----------|
| Correction typo | 1 | — | — |
| Documentation | 1 | — | — |
| Standard | 2 | Design ou Technique | — |
| Spécification | 2 | Design ou Technique | — |
| Architecture | 2 | Technique | — |
| API | 2 | Technique | — |
| Politique | 2 | Concerné | ✅ |
| Constitution | 3 | Design + Technique | ✅ (unanime) |
| ADR | 1 | Technique | — |
| RFC | 2 | Concerné | — |

---

## Arbitrage

### En cas de conflit design

1. Tentative de résolution au sein du comité design.
2. Escalade à l'Owner.
3. Escalade à la Direction si nécessaire.

### En cas de conflit technique

1. Tentative de résolution au sein du comité technique.
2. Escalade à l'Owner technique.
3. Escalade à la Direction si nécessaire.

### En cas de conflit design ↔ technique

1. Réunion conjointe des deux comités.
2. Arbitrage par les deux Owners.
3. Escalade à la Direction si nécessaire.

---

## Ownership

| Domaine | Owner |
|---------|-------|
| Constitution | Direction |
| Standards | Comité design + technique |
| Specifications | Comité compétent |
| Governance | Direction |
| Operations | Ingénierie + Ops |
| AI | Comité IA |
| Knowledge | Produit |
| Decisions | Tous |
| Policies | Direction |
| References | Tous |

---

## Journal des décisions

Toutes les décisions majeures sont enregistrées dans [`decisions/decisions-log.md`](./decisions/decisions-log.md).

Format :

| ID | Date | Sujet | Décision | Owner | Statut |
|----|------|-------|----------|-------|--------|
| DEC-2026-001 | 2026-01-15 | Choix React | Approuvé | Comité technique | Publié |
Évolution de la gouvernance
Toute évolution de ce document suit le processus RFC avec validation unanime du comité compétent et validation de la Direction.

*Fin du document.*
