# Walden Corp

**Constitution Repository** — Source de vérité institutionnelle de Walden Corp.

---

## À propos

Ce dépôt est la **base de connaissances officielle** de Walden Corp. Il regroupe :

- la **Constitution** de l'entreprise (principes intemporels) ;
- les **Standards** (règles obligatoires transverses) ;
- les **Spécifications** (valeurs techniques chiffrées) ;
- la **Gouvernance** (rôles, comités, validations) ;
- les **Opérations** (procédures d'exploitation) ;
- les règles **IA** (règles, prompts, garde-fous) ;
- les **Décisions** (ADR et RFC) ;
- les **Politiques** officielles ;
- la **Connaissance métier** ;
- les **Méta-données** (index, taxonomie, conventions).

Ce dépôt **ne contient pas de code applicatif**. Il définit ce qui doit être considéré comme **la vérité officielle** et il est consommé par :

- les équipes humaines (direction, design, ingénierie, produit) ;
- les agents IA (via `meta/ai-index.md`) ;
- les futurs dépôts de code (`ds-react`, `cli`, produits, etc.).

---

## Démarrage rapide

| Tu es… | Commence par |
|--------|--------------|
| **Direction** | [`foundation/constitution/company-philosophy.md`](./foundation/constitution/company-philosophy.md) |
| **Designer** | [`foundation/constitution/design-principles.md`](./foundation/constitution/design-principles.md) puis [`foundation/specifications/design-system/`](./foundation/specifications/design-system/) |
| **Ingénieur** | [`foundation/constitution/engineering-principles.md`](./foundation/constitution/engineering-principles.md) puis [`foundation/standards/coding.md`](./foundation/standards/coding.md) |
| **Product Manager** | [`foundation/constitution/product-principles.md`](./foundation/constitution/product-principles.md) |
| **Agent IA** | [`meta/ai-index.md`](./meta/ai-index.md) |
| **Nouveau collaborateur** | [`CONTRIBUTING.md`](./CONTRIBUTING.md) |
| **Contributeur externe** | [`GOVERNANCE.md`](./GOVERNANCE.md) puis [`CONTRIBUTING.md`](./CONTRIBUTING.md) |

---

## Structure du dépôt

walden-corp/
├── foundation/ Constitution, standards, spécifications, IA

├── knowledge/ Connaissance métier (domaines, concepts, modèles)

├── decisions/ ADR et RFC

├── policies/ Politiques officielles

├── meta/ Méta-données (taxonomie, index, conventions)

├── packages/ Packages techniques (ds-tokens, ds-react, ds-flutter, cli)

├── apps/ Applications (docs-site, playground)

├── assets/ Logos, icônes, illustrations, images

├── diagrams/ Schémas et diagrammes

├── scripts/ Scripts d'automatisation

└── legal/ Mentions légales et licences tierces


La carte complète est décrite dans [`meta/repository-map.md`](./meta/repository-map.md).

---

## Règles fondamentales

1. **Aucune information ne peut contredire la Constitution.** Voir [`foundation/constitution/`](./foundation/constitution/).
2. **Toute contribution suit le processus RFC ou ADR.** Voir [`CONTRIBUTING.md`](./CONTRIBUTING.md) et [`decisions/`](./decisions/).
3. **Aucune décision majeure sans traçabilité.** Voir [`decisions/decisions-log.md`](./decisions/decisions-log.md).
4. **Les agents IA se réfèrent à `meta/ai-index.md`** avant toute génération.

---

## Licence

Voir [`LICENSE.md`](./LICENSE.md).

---

## Gouvernance

La gouvernance du dépôt et de ses contenus est définie dans [`GOVERNANCE.md`](./GOVERNANCE.md).

---

## Contact

- Canal interne : `#walden-foundation`
- Email : `foundation@waldencorp.com`
