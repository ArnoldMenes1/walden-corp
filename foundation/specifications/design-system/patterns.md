# Document 15 — Pattern Library

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Opérationnel — dépend des Documents 1 à 14

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit les **grands patterns UX** utilisés dans les interfaces Walden Corp. Il ne définit pas les composants individuels (Document 14) mais leur assemblage dans des situations récurrentes : dashboards, tableaux, recherche, filtres, onboarding, CRUD, formulaires, navigation, paramètres, notifications, authentification, workflows.

### 1.2 Dépendances

- **Dépend de :** Documents 1 à 14.
- **Est dépendant de :** Documents 16, 17, 20.

---

## 2. Objectif

Garantir que les **situations UX récurrentes** soient traitées de manière cohérente dans tous les produits Walden Corp.

---

## 3. Portée

Toutes les interfaces Walden Corp.

---

## 4. Définitions

**Pattern** — Solution réutilisable à un problème récurrent.

**CRUD** — Create, Read, Update, Delete.

**Workflow** — Enchaînement d'étapes.

**Onboarding** — Intégration d'un nouvel utilisateur.

**Empty state** — État d'un écran vide.

**Loading state** — État de chargement.

**Error state** — État d'erreur.

**Auth** — Authentification.

**SSO** — Single Sign-On.

**MFA** — Multi-Factor Authentication.

---

## 5. Philosophie des patterns

### 5.1 Postulats

**Postulat 1 — Un pattern est une décision collective.** Il est validé par plusieurs équipes.

**Postulat 2 — Un pattern est documenté.** Sa documentation précède son usage.

**Postulat 3 — Un pattern est testé.** Il est validé par des utilisateurs.

**Postulat 4 — Un pattern est évolutif.** Il est versionné (Document 19).

**Postulat 5 — Un pattern est adaptatif.** Il s'adapte aux contextes.

### 5.2 Les quatre qualités d'un pattern Walden Corp

- **Cohérent** — Identique dans tous les contextes similaires.
- **Accessible** — Conforme au Document 7.
- **Documenté** — Fiche complète.
- **Testé** — Validé par usage réel.

---

## 6. Principes de patterns

### Principe P-1 — Réutilisation avant création

Chercher un pattern existant avant d'en créer un.

### Principe P-2 — Documentation avant usage

Aucun pattern n'est utilisé avant d'être documenté.

### Principe P-3 — Accessibilité intégrée

Chaque pattern respecte le Document 7.

### Principe P-4 — Cohérence

Un même problème est résolu par un même pattern.

### Principe P-5 — Évolutivité

Un pattern évolue selon le versioning sémantique.

### Principe P-6 — Contextualisation

Un pattern s'adapte au contexte sans se dénaturer.

---

## 7. Architecture des patterns

Chaque pattern est documenté selon le format standard suivant :

1. **Nom**
2. **Objectif**
3. **Contexte d'usage**
4. **Anatomie**
5. **États**
6. **Variantes**
7. **Accessibilité**
8. **Responsive**
9. **Bonnes pratiques**
10. **Anti-patterns**
11. **Exemples**
12. **Version**

---

## 8. Patterns documentés

### 8.1 Dashboard

**Objectif** : fournir une vue synthétique de l'activité.

**Contexte** : écran principal d'un produit.

**Anatomie** :

- En-tête (titre, filtres, actions).
- Zone de KPI (cartes métriques).
- Zone de graphiques.
- Zone de tableaux ou listes.
- Zone d'activité récente.

**États** : chargement, vide, erreur, données.

**Variantes** : personnel, équipe, entreprise.

**Accessibilité** : structure sémantique, alternatives textuelles aux graphiques.

**Responsive** : 4 colonnes en mobile, 12 en desktop.

**Bonnes pratiques** : 3–5 KPI prioritaires, filtres persistants, liens vers le détail.

**Anti-patterns** : surcharge de widgets, absence de hiérarchie, données non actionnables.

---

### 8.2 Tableau

**Objectif** : afficher des données tabulaires.

**Contexte** : listes de données.

**Anatomie** :

- En-tête de colonnes (tri, filtres).
- Corps (lignes).
- Pagination ou virtualisation.
- Sélection.
- Actions par ligne ou globales.

**États** : chargement, vide, erreur, données.

**Variantes** : simple, dense, avec sélection multiple.

**Accessibilité** : structure `<table>`, en-têtes associés, navigation clavier.

**Responsive** : scroll horizontal en mobile, colonnes prioritaires.

**Bonnes pratiques** : colonnes triables, filtres visibles, export, pagination.

**Anti-patterns** : absence de tri, pagination absente, sélection non accessible.

---

### 8.3 Recherche

**Objectif** : trouver rapidement une information.

**Contexte** : toute interface avec données.

**Anatomie** :

- Champ de recherche.
- Suggestions.
- Historique.
- Résultats.
- Filtres.

**États** : vide, saisie, résultats, aucun résultat, erreur.

**Variantes** : globale, contextuelle, avancée.

**Accessibilité** : rôle `searchbox`, suggestions annoncées.

**Responsive** : icône en mobile, champ en desktop.

**Bonnes pratiques** : recherche floue, historique, raccourcis clavier.

**Anti-patterns** : recherche stricte, absence de suggestions.

---

### 8.4 Filtres

**Objectif** : affiner un ensemble de données.

**Contexte** : listes, tableaux, dashboards.

**Anatomie** :

- Groupe de filtres.
- Chips de filtres actifs.
- Bouton d'application.
- Bouton de réinitialisation.

**États** : inactif, actif, partiellement appliqué.

**Variantes** : panneau latéral, barre horizontale, modale.

**Accessibilité** : champs associés, focus visible.

**Responsive** : panneau en drawer en mobile.

**Bonnes pratiques** : filtres persistants, chips visibles, compteur de résultats.

**Anti-patterns** : filtres cachés, non persistants, non réinitialisables.

---

### 8.5 Onboarding

**Objectif** : intégrer un nouvel utilisateur.

**Contexte** : première utilisation.

**Anatomie** :

- Étapes courtes.
- Progression visible.
- Contenu utile.
- Possibilité de sauter.

**États** : étape en cours, terminé, sauté.

**Variantes** : intégré, overlay.

**Accessibilité** : navigation clavier, focus piégé si modal.

**Responsive** : plein écran en mobile.

**Bonnes pratiques** : onboarding intégré à l'usage, facultatif, mesurable.

**Anti-patterns** : tutoriel forcé, contenu inutile, non fermable.

---

### 8.6 CRUD

**Objectif** : créer, lire, modifier, supprimer une entité.

**Contexte** : gestion d'entités.

**Anatomie** :

- Liste (Read).
- Bouton de création (Create).
- Formulaire (Create, Update).
- Détail (Read).
- Confirmation de suppression (Delete).

**États** : liste, formulaire, détail, erreur.

**Variantes** : inline, pleine page, modale.

**Accessibilité** : formulaires accessibles, confirmations claires.

**Responsive** : formulaires en pleine page en mobile.

**Bonnes pratiques** : édition en place, sauvegarde automatique, undo.

**Anti-patterns** : édition par modale pour des formulaires complexes, absence d'undo.

---

### 8.7 Formulaires

**Objectif** : collecter des données.

**Contexte** : création, modification, configuration.

**Anatomie** :

- Étapes (si multi-étapes).
- Champs.
- Labels persistants.
- Aides contextuelles.
- Messages d'erreur.
- Boutons (submit, cancel).

**États** : saisie, validation, erreur, succès.

**Variantes** : simple, multi-étapes, wizard.

**Accessibilité** : labels associés, erreurs annoncées.

**Responsive** : une colonne en mobile.

**Bonnes pratiques** : validation en temps réel, sauvegarde automatique, undo.

**Anti-patterns** : labels placeholder, validation tardive, formulaires très longs sans regroupement.

---

### 8.8 Navigation

**Objectif** : permettre à l'utilisateur de se déplacer.

**Contexte** : toute interface.

**Anatomie** :

- Navigation principale (barre ou rail).
- Navigation secondaire (onglets, sous-menus).
- Fil d'Ariane.
- Actions contextuelles.

**États** : actif, inactif, hover, focus.

**Variantes** : barre supérieure, rail latéral, onglets.

**Accessibilité** : structure sémantique, navigation clavier.

**Responsive** : menu burger en mobile, rail en desktop.

**Bonnes pratiques** : cohérence, stabilité, raccourcis.

**Anti-patterns** : menus profonds, incohérence entre écrans.

---

### 8.9 Paramètres

**Objectif** : configurer le produit.

**Contexte** : écran de configuration.

**Anatomie** :

- Catégories.
- Formulaires.
- Actions (sauvegarder, réinitialiser).
- Aide contextuelle.

**États** : modifié, sauvegardé, erreur.

**Variantes** : personnel, équipe, entreprise.

**Accessibilité** : labels, sections.

**Responsive** : sections empilées en mobile.

**Bonnes pratiques** : sauvegarde explicite, annulation, aide.

**Anti-patterns** : sauvegarde immédiate sans confirmation, absence d'annulation.

---

### 8.10 Notifications

**Objectif** : informer sans interrompre.

**Contexte** : événements asynchrones.

**Anatomie** :

- Toast (temporaire, non bloquant).
- Bannière (persistante jusqu'à action).
- Notification (centre de notifications).

**États** : apparaît, visible, fermé.

**Variantes** : succès, info, avertissement, erreur.

**Accessibilité** : `aria-live`, fermable au clavier.

**Responsive** : toast en bas en mobile.

**Bonnes pratiques** : notifications informatives, fermables, non intrusives.

**Anti-patterns** : notifications d'engagement, non fermables, persistantes.

---

### 8.11 Authentification

**Objectif** : permettre l'accès sécurisé.

**Contexte** : connexion, inscription, récupération.

**Anatomie** :

- Formulaire de connexion.
- SSO.
- MFA.
- Récupération de mot de passe.
- Inscription.

**États** : saisie, validation, erreur, succès, MFA.

**Variantes** : simple, SSO, MFA.

**Accessibilité** : labels associés, erreurs annoncées.

**Responsive** : pleine page en mobile.

**Bonnes pratiques** : messages neutres (pas de "mot de passe incorrect" qui révèle l'existence du compte), MFA, SSO.

**Anti-patterns** : messages d'erreur trop précis, absence de MFA, absence de SSO.

---

### 8.12 Workflows

**Objectif** : guider l'utilisateur à travers un processus complexe.

**Contexte** : processus multi-étapes.

**Anatomie** :

- Étapes.
- État d'avancement.
- Actions par étape.
- Sauvegarde automatique.

**États** : en cours, terminé, échoué, en pause.

**Variantes** : linéaire, ramifié.

**Accessibilité** : navigation clavier, annonces.

**Responsive** : une colonne en mobile.

**Bonnes pratiques** : sauvegarde automatique, reprise, annulation.

**Anti-patterns** : perte de données, impossibilité de revenir.

---

## 9. Standards de patterns

**S-P1 — Tout pattern est documenté.**

**S-P2 — Tout pattern est accessible.**

**S-P3 — Tout pattern est responsive.**

**S-P4 — Tout pattern est testé.**

**S-P5 — Tout pattern est versionné.**

**S-P6 — Tout pattern est cohérent inter-produits.**

**S-P7 — Tout pattern est conforme aux Documents 1 à 14.**

---

## 10. Règles de patterns

**R1 — Aucun pattern hors catalogue.**

**R2 — Aucun pattern non documenté.**

**R3 — Aucun pattern non testé.**

**R4 — Aucun pattern non accessible.**

**R5 — Aucun pattern non responsive.**

**R6 — Aucun pattern non versionné.**

**R7 — Aucun pattern contredisant un principe constitutionnel.**

**R8 — Aucun pattern dupliqué.**

**R9 — Aucun pattern local non documenté.**

**R10 — Aucun pattern non évolutif.**

---

## 11. Recommandations

- Documenter tout pattern récurrent.
- Tester avec utilisateurs.
- Faire évoluer selon les retours.
- Partager inter-produits.

---

## 12. Bonnes pratiques

- Considérer le pattern comme une décision collective.
- Documenter les cas limites.
- Prévoir les états vides, chargement, erreur.

---

## 13. Mauvaises pratiques

- Créer un pattern local.
- Ne pas documenter.
- Ignorer les états vides.
- Dupliquer.

---

## 14. Cas d'usage

Voir les patterns documentés.

---

## 15. Exemples

Voir les patterns documentés.

---

## 16. Anti-patterns

- **Pattern local** — Non documenté.
- **Pattern non testé** — Non validé.
- **Pattern dupliqué** — Redondance.
- **Pattern inaccessible** — Non conforme au Document 7.
- **Pattern non responsive** — Non adapté aux tailles.
- **Pattern monolithique** — Non évolutif.

---

## 17. Checklist de validation d'un pattern

- [ ] Documenté au format standard.
- [ ] Objectif clair.
- [ ] Contexte d'usage défini.
- [ ] Anatomie documentée.
- [ ] États documentés.
- [ ] Variantes documentées.
- [ ] Accessibilité conforme.
- [ ] Responsive testé.
- [ ] Bonnes pratiques documentées.
- [ ] Anti-patterns documentés.
- [ ] Exemples fournis.
- [ ] Versionné.
- [ ] Changelog publié.

---

## 18. Critères de validation formels

Un pattern est conforme si :

1. Il respecte R1 à R10.
2. Il satisfait S-P1 à S-P7.
3. Il passe la checklist (section 17).

---

## 19. Gouvernance

Toute création ou évolution de pattern suit le processus RFC (Document 17). Les évolutions majeures exigent validation du comité design (Document 18).

---

## 20. Versioning

Chaque pattern est versionné selon SemVer (Document 19).

| Version | Date | Auteur | Changements |
|--------|------|--------|-------------|
| 1.0 | — | Comité design | Publication initiale |

---

## 21. FAQ

**Q1 — Peut-on créer un pattern local ?**
Non.

**Q2 — Peut-on utiliser un pattern sans le documenter ?**
Non.

**Q3 — Peut-on dévier d'un pattern ?**
Uniquement par RFC documentée.

**Q4 — Comment évoluer un pattern ?**
Par RFC et SemVer.

**Q5 — Comment documenter un pattern ?**
Selon le format standard (section 7).

---

## 22. Glossaire spécifique

**CRUD** — Create, Read, Update, Delete.

**Empty state** — État d'écran vide.

**Onboarding** — Intégration.

**Pattern** — Solution réutilisable.

**Workflow** — Enchaînement d'étapes.

---

## 23. Annexes

### Annexe A — Références croisées

- Documents 1 à 14.
- Document 16 — AI Design Rules.
- Document 17 — Contribution Guide.
- Document 18 — Governance.
- Document 19 — Versioning & Release Management.
- Document 20 — Handbook.

---

*Fin du Document 15 — Pattern Library.*
