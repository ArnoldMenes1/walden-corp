# Carte du dépôt `walden-corp`

**Version :** 1.0
**Rôle :** Vue d'ensemble navigable du dépôt pour humains et agents IA

---

## Vue racine
walden-corp/


| Dossier / Fichier | Contenu | Responsable |
|-------------------|---------|-------------|
| `README.md` | Point d'entrée du dépôt | Direction |
| `LICENSE.md` | Licence | Direction |
| `CONTRIBUTING.md` | Guide de contribution | Comité design + technique |
| `CHANGELOG.md` | Historique des versions | Comité technique |
| `ROADMAP.md` | Vision et roadmap | Direction |
| `GOVERNANCE.md` | Gouvernance générale | Direction |
| `CODE_OF_CONDUCT.md` | Code de conduite | Direction |
| `SECURITY.md` | Politique de sécurité | Sécurité |

---

## `.github/`

| Élément | Contenu |
|---------|---------|
| `README.md` | Fonctionnement GitHub |
| `ISSUE_TEMPLATE/` | Modèles d'issues (bug, feature, improvement, question) |
| `DISCUSSION_TEMPLATE/` | Modèles de discussions (proposal, architecture, governance) |
| `PULL_REQUEST_TEMPLATE.md` | Modèle de Pull Request |
| `workflows/` | Workflows CI (lint, docs, build, release, ai-index) |

---

## `foundation/`

Cœur institutionnel du dépôt.

| Sous-dossier | Contenu |
|--------------|---------|
| `constitution/` | Principes intemporels (design, engineering, AI, product, security) |
| `standards/` | Règles obligatoires transverses |
| `specifications/` | Valeurs chiffrées (design system, architecture, API) |
| `governance/` | Rôles, comités, validations, ownership |
| `operations/` | Procédures d'exploitation |
| `ai/` | Règles IA, prompts système, garde-fous |
| `references/` | Documentation externe et historique |

---

## `knowledge/`

Connaissance métier de Walden Corp.

| Sous-dossier | Contenu |
|--------------|---------|
| `domains/` | Domaines fonctionnels |
| `concepts/` | Concepts métier |
| `models/` | Modèles de données |
| `processes/` | Processus métier |
| `glossary.md` | Glossaire métier |
| `faq.md` | FAQ interne |

---

## `decisions/`

Traçabilité décisionnelle.

| Sous-dossier | Contenu |
|--------------|---------|
| `adr/` | Architecture Decision Records |
| `rfc/` | Request for Comments |
| `decisions-log.md` | Journal chronologique des décisions |

---

## `policies/`

Politiques officielles transverses.

- `security.md`, `privacy.md`, `documentation.md`, `quality.md`, `ai-usage.md`, `publication.md`, `versioning.md`, `open-source.md`, `compliance.md`

---

## `meta/`

Méta-données machine-lisibles et conventions.

| Fichier | Rôle |
|---------|------|
| `repository-map.md` | Ce document |
| `taxonomy.md` | Cadrage sémantique |
| `naming-conventions.md` | Conventions de nommage |
| `metadata.schema.json` | Schéma JSON des frontmatters |
| `ai-index.md` | Index pour agents IA (**généré automatiquement**) |
| `search-index.json` | Index de recherche (**généré automatiquement**) |
| `manifest.json` | Manifeste du dépôt |

---

## `packages/`

Packages techniques.

- `ds-tokens/` — Tokens (JSON, CSS, Tailwind)
- `ds-react/` — Bibliothèque React
- `ds-flutter/` — Bibliothèque Flutter
- `cli/` — CLI officielle

---

## `apps/`

Applications.

- `docs-site/` — Site de documentation interactif
- `playground/` — Bac à sable

---

## `assets/`, `diagrams/`, `scripts/`, `legal/`

| Dossier | Contenu |
|---------|---------|
| `assets/` | Logos, icônes, illustrations, images |
| `diagrams/` | Schémas d'architecture, workflows, business, system |
| `scripts/` | Automatisation (génération AI index, validation, export PDF) |
| `legal/` | Mentions légales, licences tierces, copyright |

---

## Navigation par rôle

- **Direction** → `foundation/constitution/`, `GOVERNANCE.md`, `ROADMAP.md`
- **Designers** → `foundation/specifications/design-system/`
- **Ingénieurs** → `foundation/standards/`, `foundation/specifications/architecture/`
- **Product Managers** → `knowledge/`, `foundation/constitution/product-principles.md`
- **Agents IA** → `meta/ai-index.md`
- **Contributeurs** → `CONTRIBUTING.md`

---

*Fin du document.*
