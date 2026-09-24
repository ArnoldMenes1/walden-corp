# Document 19 — Versioning & Release Management

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Institutionnel — dépend des Documents 1 à 18

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit le **versioning et la gestion des releases** du Design System Walden Corp. Il précise le Semantic Versioning, le changelog, la migration, la dépréciation, la compatibilité et la roadmap.

### 1.2 Dépendances

- **Dépend de :** Documents 1 à 18.
- **Est dépendant de :** Document 20.

---

## 2. Objectif

Garantir que les évolutions du Design System soient :

- **prévisibles** ;
- **traçables** ;
- **compatibles** ;
- **documentées** ;
- **planifiées**.

---

## 3. Portée

Toutes les évolutions du Design System Walden Corp.

---

## 4. Définitions

**Version** — État identifié du Design System.

**Semantic Versioning (SemVer)** — Format MAJOR.MINOR.PATCH.

**Breaking change** — Modification incompatible.

**Non-breaking change** — Modification compatible.

**Changelog** — Journal des modifications.

**Migration** — Passage d'une version à une autre.

**Dépréciation** — Marquage d'obsolescence.

**Compatibilité** — Capacité à fonctionner avec des versions antérieures.

**Roadmap** — Planification des évolutions.

**Release** — Publication d'une version.

**Release Candidate (RC)** — Version de pré-publication.

**Hotfix** — Correctif urgent.

---

## 5. Philosophie de versioning

### 5.1 Postulats

**Postulat 1 — Toute évolution est versionnée.** Aucune exception.

**Postulat 2 — Toute évolution est documentée.** Changelog obligatoire.

**Postulat 3 — Toute évolution est compatible.** Sauf breaking annoncé.

**Postulat 4 — Toute évolution breaking fournit une migration.**

**Postulat 5 — Toute évolution est planifiée.** Roadmap publiée.

**Postulat 6 — Toute évolution est testée.** Avant publication.

---

## 6. Principes de versioning

### Principe V-1 — Semantic Versioning

Toute version suit SemVer : MAJOR.MINOR.PATCH.

### Principe V-2 — Changelog exhaustif

Toute version a un changelog complet.

### Principe V-3 — Migration documentée

Toute breaking fournit un guide de migration.

### Principe V-4 — Dépréciation progressive

Toute dépréciation suit une période de grâce.

### Principe V-5 — Compatibilité ascendante

Les versions MINOR et PATCH sont compatibles avec les versions antérieures.

### Principe V-6 — Roadmap publique

La roadmap est publiée et accessible.

### Principe V-7 — Release notes

Chaque release est accompagnée de notes.

### Principe V-8 — Traçabilité

Chaque release est tracée.

---

## 7. Architecture du versioning
MAJOR.MINOR.PATCH
│ │ │

│ │ └── Correctifs rétrocompatibles

│ └──────── Ajouts rétrocompatibles

└─────────────── Modifications breaking


---

## 8. Semantic Versioning

### 8.1 MAJOR

Incrémentation lorsque :

- breaking change sur un composant ;
- breaking change sur un token ;
- breaking change sur un pattern ;
- évolution de la Constitution ;
- suppression d'un élément déprécié.

### 8.2 MINOR

Incrémentation lorsque :

- ajout d'un composant ;
- ajout d'un token ;
- ajout d'un pattern ;
- ajout d'une règle non-breaking ;
- évolution d'un composant sans breaking.

### 8.3 PATCH

Incrémentation lorsque :

- correctif de bug ;
- correction de documentation ;
- correction de valeur de token sans impact fonctionnel.

---

## 9. Standards de versioning

**S-V1 — Toute version suit SemVer.**

**S-V2 — Toute version a un changelog.**

**S-V3 — Toute breaking a une migration.**

**S-V4 — Toute dépréciation a une période de grâce.**

**S-V5 — Toute release a des notes.**

**S-V6 — Toute release est tracée.**

**S-V7 — Toute release est testée.**

**S-V8 — Toute release est communiquée.**

**S-V9 — La roadmap est publiée.**

**S-V10 — La compatibilité est respectée.**

---

## 10. Règles de versioning

**R1 — Aucune version sans changelog.**

**R2 — Aucune breaking sans migration.**

**R3 — Aucune dépréciation sans période de grâce (min. 1 version majeure).**

**R4 — Aucune release sans notes.**

**R5 — Aucune release sans test.**

**R6 — Aucune release sans communication.**

**R7 — Aucune release non planifiée.**

**R8 — Aucune incompatibilité non annoncée.**

**R9 — Aucune suppression sans dépréciation préalable.**

**R10 — Aucune roadmap non publiée.**

---

## 11. Changelog

### 11.1 Format

Chaque changelog suit le format « Keep a Changelog » :
[Version] - YYYY-MM-DD

- [Added](ca://s?q=Changelog_Added)
- [Changed](ca://s?q=Changelog_Changed)
- [Deprecated](ca://s?q=Changelog_Deprecated)
- [Removed](ca://s?q=Changelog_Removed)
- [Fixed](ca://s?q=Changelog_Fixed)
- [Security](ca://s?q=Changelog_Security)


### 11.2 Contenu

- Description claire de chaque changement.
- Références aux RFC concernées.
- Impact potentiel.

---

## 12. Migration

### 12.1 Guide de migration

Toute breaking change fournit :

- Description du changement.
- Impact sur le code.
- Étapes de migration.
- Exemples avant / après.
- Outils de migration automatique (si applicable).
- Période de support des deux versions.

### 12.2 Période de grâce

- Minimum une version majeure.
- Idéalement deux versions majeures.

---

## 13. Dépréciation

### 13.1 Processus

1. RFC de dépréciation.
2. Validation.
3. Annonce.
4. Publication avec mention « déprécié ».
5. Période de grâce.
6. Suppression.

### 13.2 Communication

La dépréciation est communiquée :

- Dans le changelog.
- Dans la documentation.
- Par email aux équipes produit.
- Sur les canaux internes.

---

## 14. Compatibilité

### 14.1 Règles

- MINOR et PATCH sont compatibles avec les versions antérieures.
- MAJOR peut être incompatible.
- La compatibilité est testée avant publication.

### 14.2 Politique

- Support de la version N-1 minimum.
- Support de deux versions majeures pour les produits en production.

---

## 15. Roadmap

### 15.1 Contenu

- Versions prévues.
- Fonctionnalités majeures.
- Dépréciations prévues.
- Évolutions de la Constitution (exceptionnelles).

### 15.2 Publication

- Mise à jour trimestrielle.
- Accessible à toutes les équipes.
- Revue en comité design.

---

## 16. Recommandations

- Publier régulièrement.
- Communiquer largement.
- Documenter rigoureusement.
- Anticiper les migrations.

---

## 17. Bonnes pratiques

- Grouper les breaking dans une version majeure.
- Déprécier progressivement.
- Tester la migration.
- Documenter les cas limites.

---

## 18. Mauvaises pratiques

- Publier sans changelog.
- Breaking sans migration.
- Supprimer sans dépréciation.
- Roadmap secrète.

---

## 19. Cas d'usage

### Cas 1 — Correctif urgent (Hotfix)

Version PATCH, changelog, publication immédiate, communication ciblée.

### Cas 2 — Ajout d'un composant

Version MINOR, changelog, publication, communication.

### Cas 3 — Refonte d'un composant

Version MAJOR, changelog, guide de migration, période de grâce, publication.

### Cas 4 — Évolution de la Constitution

Version MAJOR, changelog, communication étendue, validation unanime.

---

## 20. Exemples

### Exemple 1 — Changelog conforme

[2.3.0] - 2025-03-15
Added
Composant Chip (RFC-2025-012).

Token color.accent.subtle (RFC-2025-014).

Changed
Amélioration du contraste sur le bouton secondaire (RFC-2025-015).

Deprecated
Token color.legacy.gray (déprécié, suppression prévue en 3.0.0).

Fixed
Correction de l'alignement du label dans le champ texte.


### Exemple 2 — Changelog non conforme

Nouveau composant.

Corrections.


---

## 21. Anti-patterns de versioning

- **Absence de changelog** — Non traçable.
- **Breaking silencieuse** — Non annoncée.
- **Suppression directe** — Sans dépréciation.
- **Roadmap secrète** — Non partagée.
- **Versions non testées** — Non validées.

---

## 22. Checklist de validation de version

- [ ] Version conforme à SemVer.
- [ ] Changelog rédigé.
- [ ] Release notes publiées.
- [ ] Tests effectués.
- [ ] Migration documentée (si breaking).
- [ ] Dépréciation annoncée (si applicable).
- [ ] Communication diffusée.
- [ ] Roadmap mise à jour.
- [ ] Traçabilité enregistrée.

---

## 23. Critères de validation formels

Une version est conforme si :

1. Elle respecte R1 à R10.
2. Elle satisfait S-V1 à S-V10.
3. Elle passe la checklist (section 22).

---

## 24. Gouvernance

Toute version est validée par le comité design (Document 18) avant publication.

---

## 25. Versioning du présent document

| Version | Date | Auteur | Changements |
|--------|------|--------|-------------|
| 1.0 | — | Comité design | Publication initiale |

---

## 26. FAQ

**Q1 — Quand incrémenter MAJOR ?**
En cas de breaking change.

**Q2 — Quand incrémenter MINOR ?**
En cas d'ajout rétrocompatible.

**Q3 — Quand incrémenter PATCH ?**
En cas de correctif rétrocompatible.

**Q4 — Comment gérer les versions préliminaires ?**
Via des RC (Release Candidates).

**Q5 — Combien de temps supporter N-1 ?**
Minimum une version majeure, idéalement deux.

---

## 27. Glossaire spécifique

**Breaking change** — Modification incompatible.

**Changelog** — Journal des modifications.

**Hotfix** — Correctif urgent.

**Migration** — Passage d'une version à une autre.

**RC** — Release Candidate.

**Roadmap** — Planification.

**SemVer** — Semantic Versioning.

---

## 28. Annexes

### Annexe A — Références croisées

- Documents 1 à 18.
- Document 20 — Handbook.

---

*Fin du Document 19 — Versioning & Release Management.*
