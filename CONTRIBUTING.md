# Guide de contribution

**Version :** 1.0
**Portée :** Dépôt `walden-corp`

---

## Bienvenue

Merci de contribuer au **Constitution Repository** de Walden Corp. Ce dépôt est la **source de vérité institutionnelle** de l'entreprise. Toute contribution doit être traitée avec **rigueur, traçabilité et respect du processus**.

---

## Avant de commencer

### Lecture obligatoire

1. [`README.md`](./README.md) — vue d'ensemble.
2. [`meta/taxonomy.md`](./meta/taxonomy.md) — **critique** : comprendre où classer ton document.
3. [`meta/naming-conventions.md`](./meta/naming-conventions.md) — conventions de nommage.
4. [`GOVERNANCE.md`](./GOVERNANCE.md) — rôles et validation.
5. [`foundation/constitution/`](./foundation/constitution/) — la Constitution.

---

## Types de contributions

| Type | Dépôt concerné | Processus |
|------|----------------|-----------|
| Correction de typo / reformulation | N'importe quel fichier `.md` | Pull Request simple |
| Ajout de documentation | `foundation/`, `knowledge/`, `policies/` | Pull Request + revue |
| Modification d'un standard | `foundation/standards/` | Pull Request + RFC si majeur |
| Modification d'une spécification | `foundation/specifications/` | Pull Request + revue comité design/technique |
| Nouvelle décision technique | `decisions/adr/` | ADR |
| Nouvelle proposition | `decisions/rfc/` | RFC |
| Nouvelle politique | `policies/` | RFC + validation direction |
| Évolution de la Constitution | `foundation/constitution/` | RFC exceptionnelle + validation unanime |

---

## Processus standard

### 1. Ouvre une issue

Utilise le template approprié :

- [Bug](./.github/ISSUE_TEMPLATE/bug.yml)
- [Feature](./.github/ISSUE_TEMPLATE/feature.yml)
- [Improvement](./.github/ISSUE_TEMPLATE/improvement.yml)
- [Question](./.github/ISSUE_TEMPLATE/question.yml)

### 2. Crée une branche

Convention : voir [`meta/naming-conventions.md#6-noms-de-branches-git`](./meta/naming-conventions.md).

`git checkout -b docs/foundation/clarify-accessibility-standard`

3. Rédige ta contribution
Respecte la taxonomie.

Utilise le nommage.

Ajoute un frontmatter YAML conforme au schéma.

Documente tes sources si externe.

4. Ajoute un changeset
bash
# (si applicable)
5. Commit
Conventional Commits obligatoire.

`git commit -m "docs(foundation): clarify accessibility standard"`

**6. Push et Pull Request**

`git push origin docs/foundation/clarify-accessibility-standard`

Ouvre une Pull Request sur GitHub. Le template se chargera automatiquement.

**7. Revue**

1 reviewer pour une correction mineure.

2 reviewers pour une modification de contenu.

Comité design pour une modification de standard ou spécification.

Comité technique pour une modification d'architecture ou d'API.

Direction pour une modification de Constitution, politique ou gouvernance.

**8. Merge**
Une fois approuvée, la PR est fusionnée en main selon la stratégie squash and merge.

Processus RFC (proposition formelle)
Pour toute proposition structurante, ouvre une RFC.

Copie decisions/rfc/template.md.

Renomme en NNNN-slug.md (ex : 0042-versioning-tokens.md).

Remplis toutes les sections.

Ouvre une Pull Request avec le label rfc.

Une période de commentaires de 7 jours s'ouvre.

Le comité compétent délibère.

La RFC est acceptée, modifiée ou rejetée.

Le statut est mis à jour dans le document.

Processus ADR (décision technique)
Copie decisions/adr/template.md.

Renomme en NNNN-slug.md.

Remplis le contexte, la décision, les conséquences.

Ouvre une Pull Request avec le label adr.

Revue par le comité technique.

Merge → décision officielle.

Règles de contenu
Langue
*Contenu : français.*

Noms de fichiers : anglais (kebab-case).

Code et identifiants techniques : anglais.

Ton
Professionnel, neutre, précis.

Pas de marketing, pas d'humour.

Pas de jugements personnels.

Structure
Chaque document commence par un frontmatter YAML :


title: Titre du document
description: Description courte
version: 1.0
status: draft | review | approved | deprecated
owner: Nom du responsable
last_updated: 2026-01-15
tags: [tag1, tag2]
---

Références
Toute affirmation technique doit être sourcée.

Les sources externes sont listées dans foundation/references/.

Ce qui n'est PAS accepté
Duplication de contenu entre catégories.

Ajout de code applicatif dans foundation/.

Contradiction avec la Constitution.

Absence de frontmatter.

Noms de fichiers non conformes.

Commit non conforme.

PR sans description.

Code de conduite
Toutes les contributions sont soumises au CODE_OF_CONDUCT.md.

Besoin d'aide ?
Canal : #walden-foundation

Email : foundation@waldencorp.com

Discussion : GitHub Discussions

*Fin du document.*
