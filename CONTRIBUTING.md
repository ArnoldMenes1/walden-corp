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

```bash
git checkout -b docs/foundation/clarify-accessibility-standard
