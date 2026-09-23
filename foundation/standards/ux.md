# Document 4 — UX Principles

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Fondamental — dépend des Documents 1 et 2

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit les **principes fondamentaux d'expérience utilisateur** de Walden Corp. Il traite des dimensions cognitives, motivationnelles et comportementales de l'usage des interfaces.

Il ne définit pas les interactions détaillées (voir Document 5) ni les patterns (voir Document 15), mais il fixe les règles qui les gouvernent.

### 1.2 Dépendances

- **Dépend de :** Documents 1 (Philosophy), 2 (Design Language).
- **Est dépendant de :** Documents 5 à 15, notamment 15 (Pattern Library).

---

## 2. Objectif

Permettre à toute équipe de concevoir des **expériences utilisateurs professionnelles** qui minimisent la charge cognitive, maximisent l'efficacité, construisent la confiance et facilitent l'apprentissage.

---

## 3. Portée

Toutes les interfaces Walden Corp.

---

## 4. Définitions

**Expérience utilisateur (UX)** — Ensemble des perceptions et réactions d'un utilisateur avant, pendant et après l'usage d'une interface.

**Charge mentale** — Quantité de ressources cognitives mobilisées par une tâche.

**Charge cognitive intrinsèque** — Charge liée à la complexité de la tâche elle-même.

**Charge cognitive extrinsèque** — Charge ajoutée par l'interface.

**Charge cognitive pertinente** — Charge utile à l'apprentissage.

**Apprentissage** — Processus par lequel un utilisateur acquiert la maîtrise d'une interface.

**Confiance** — Croyance de l'utilisateur dans la fiabilité et la prévisibilité d'une interface.

**Efficacité** — Capacité à accomplir une tâche avec un minimum de temps, d'erreurs et d'effort.

**Feedback** — Réaction de l'interface à une action utilisateur.

**Découvrabilité** — Capacité d'une fonctionnalité à être trouvée sans documentation.

**Mémorisation** — Capacité de l'utilisateur à se souvenir des interactions.

---

## 5. Philosophie UX

### 5.1 Postulat central

Walden Corp considère que **l'objectif premier d'une interface professionnelle est de disparaître au profit du travail de l'utilisateur**. L'interface n'est pas un but, c'est un moyen.

### 5.2 Les quatre dettes UX

Walden Corp identifie quatre dettes UX qui doivent être activement combattues :

- **Dette cognitive** — accumulation de complexités qui ralentissent l'utilisateur.
- **Dette d'apprentissage** — accumulation de concepts à mémoriser.
- **Dette de confiance** — accumulation de comportements imprévisibles.
- **Dette de mémorisation** — accumulation d'interactions non reconnaissables.

Chaque décision UX doit réduire ou maintenir ces dettes. Aucune décision ne doit les augmenter.

### 5.3 Les trois niveaux d'utilisateur

Toute interface Walden Corp doit servir trois profils simultanément :

- **Novice** — découvre l'interface pour la première fois.
- **Intermédiaire** — utilise régulièrement l'interface.
- **Expert** — utilise intensivement, quotidiennement.

Une interface qui ne sert qu'un profil est une interface défaillante.

### 5.4 Les deux horizons temporels

- **Court terme** — l'utilisateur accomplit une tâche maintenant.
- **Long terme** — l'utilisateur maîtrise un outil sur des années.

Ces deux horizons doivent être servis simultanément.

---

## 6. Principes UX

### Principe UX-1 — Réduire la charge extrinsèque

**Objectif** : éliminer toute complexité ajoutée par l'interface elle-même.

**Application** :

- Vocabulaire explicite.
- Libellés complets.
- Aides contextuelles discrètes.
- Valeurs par défaut intelligentes.

**Anti-pattern** : introduire un concept interne sous un nom opaque ("module A7B") sans explication.

### Principe UX-2 — Favoriser la reconnaissance sur la mémorisation

**Objectif** : permettre à l'utilisateur de reconnaître des éléments plutôt que de les mémoriser.

**Application** :

- Icônes accompagnées de libellés.
- Raccourcis clavier visibles dans les menus.
- Historique des actions.
- Recherche globale.

**Anti-pattern** : exiger la mémorisation de codes ou de chemins non visibles.

### Principe UX-3 — Construire la confiance par la prévisibilité

**Objectif** : chaque action produit un résultat prévisible.

**Application** :

- Comportements identiques dans des contextes identiques.
- Messages d'erreur explicites.
- Confirmations pour actions destructives.
- Undo pour actions réversibles.

**Anti-pattern** : action destructrice sans confirmation ni undo.

### Principe UX-4 — Servir l'expert sans négliger le novice

**Objectif** : trois niveaux d'utilisateur, un seul produit.

**Application** :

- Progressive Disclosure.
- Raccourcis clavier pour experts.
- Documentation contextuelle.
- Onboarding intégré à l'usage.

**Anti-pattern** : onboarding séparé de l'usage réel.

### Principe UX-5 — Rendre le feedback immédiat

**Objectif** : chaque action génère une réaction perceptible en moins de 100 ms.

**Application** :

- Feedback visuel immédiat sur clic.
- Squelettes de chargement.
- États de chargement contextualisés.
- Messages de succès ou d'erreur.

**Anti-pattern** : spinner générique non contextualisé.

### Principe UX-6 — Favoriser la découvrabilité

**Objectif** : toute fonctionnalité essentielle est trouvable sans documentation externe.

**Application** :

- Navigation claire.
- Recherche universelle.
- Groupements logiques.
- Aides contextuelles.

**Anti-pattern** : fonctionnalité majeure accessible uniquement par un raccourci clavier non documenté.

### Principe UX-7 — Soutenir la mémorisation

**Objectif** : permettre à l'utilisateur de retrouver rapidement ses repères.

**Application** :

- Structures stables.
- Emplacements cohérents.
- Historique d'activité.
- Favoris et récents.

**Anti-pattern** : réorganisation périodique de l'interface sans justification.

### Principe UX-8 — Respecter le temps de l'utilisateur

**Objectif** : chaque interaction doit être justifiée par un bénéfice supérieur à son coût temporel.

**Application** :

- Suppression des confirmations inutiles.
- Raccourcis pour actions fréquentes.
- Valeurs par défaut pertinentes.
- Opérations asynchrones.

**Anti-pattern** : double confirmation pour une action triviale.

### Principe UX-9 — Permettre le contrôle

**Objectif** : l'utilisateur peut toujours interrompre, annuler, revenir.

**Application** :

- Bouton Annuler sur les formulaires.
- Undo sur les actions rapides.
- Possibilité de fermer un processus long.
- Reprise d'une tâche interrompue.

**Anti-pattern** : opération bloquante sans échappatoire.

### Principe UX-10 — Favoriser la focalisation

**Objectif** : permettre à l'utilisateur de se concentrer sans distraction.

**Application** :

- Pas de notification non essentielle.
- Pas de popup non sollicitée.
- Pas d'animation décorative.
- Mode focus documenté.

**Anti-pattern** : notifications d'engagement.

### Principe UX-11 — Réduire l'ambiguïté

**Objectif** : aucune action ambiguë.

**Application** :

- Libellés explicites ("Supprimer le projet" plutôt que "OK").
- Distinction visuelle claire.
- Messages d'erreur qui expliquent.
- Aide contextuelle.

**Anti-pattern** : bouton "OK" dans une modale ambiguë.

### Principe UX-12 — Soutenir la récupération d'erreur

**Objectif** : en cas d'erreur, l'utilisateur peut corriger facilement.

**Application** :

- Messages d'erreur explicites.
- Position du curseur sur le champ erroné.
- Conservation des données saisies.
- Historique des versions.

**Anti-pattern** : formulaire effacé après erreur.

---

## 7. Architecture UX

L'expérience Walden Corp s'organise en cinq niveaux.

**Niveau 1 — Stratégie** — Objectifs utilisateur et métier.

**Niveau 2 — Portée** — Fonctionnalités et contenus.

**Niveau 3 — Structure** — Organisation de l'information.

**Niveau 4 — Squelette** — Organisation des écrans et des parcours.

**Niveau 5 — Surface** — Apparence visuelle.

Chaque niveau est documenté et validé avant de passer au suivant.

---

## 8. Standards UX

**S1 — Toute fonctionnalité essentielle doit être découvrable sans documentation externe.**

**S2 — Toute action destructive doit exiger une confirmation explicite.**

**S3 — Toute action réversible doit proposer un Undo accessible.**

**S4 — Toute opération de plus de 300 ms doit produire un feedback visible.**

**S5 — Toute interface doit être utilisable au clavier (voir Document 7).**

**S6 — Tout message d'erreur doit expliquer et proposer une correction.**

**S7 — Toute interface doit être testée avec au moins trois profils d'utilisateur.**

**S8 — Toute interface doit documenter ses métriques d'usage.**

---

## 9. Règles UX

**R1 — Aucune notification non sollicitée.**

**R2 — Aucune popup non déclenchée par l'utilisateur.**

**R3 — Aucune confirmation pour une action triviale.**

**R4 — Aucune attente bloquante sans feedback.**

**R5 — Aucune action critique sans confirmation.**

**R6 — Aucune perte de données sans avertissement préalable.**

**R7 — Aucune interface exigeant la mémorisation de codes ou de chemins.**

**R8 — Aucune structure réorganisée sans justification documentée.**

**R9 — Aucune action de plus de 5 secondes sans possibilité d'annulation.**

**R10 — Aucune fonctionnalité essentielle accessible uniquement par raccourci.**

---

## 10. Recommandations

- Concevoir pour le cas fréquent, gérer le cas rare.
- Favoriser les interactions directes.
- Documenter chaque parcours utilisateur critique.
- Tester chaque interface avec au moins trois profils.
- Mesurer en continu les indicateurs UX.

---

## 11. Bonnes pratiques

- Considérer l'utilisateur comme un professionnel compétent, pas comme un débutant permanent.
- Réduire la friction sans supprimer les garde-fous utiles.
- Privilégier des retours silencieux (par exemple, changement d'état) aux notifications bruyantes.
- Documenter les cas limites.

---

## 12. Mauvaises pratiques

- Confondre simplicité apparente et simplicité réelle.
- Traiter l'utilisateur comme un enfant.
- Ajouter des fonctionnalités parce qu'elles sont "attendues".
- Multiplier les confirmations par excès de prudence.
- Notifier sans nécessité.
- Réorganiser l'interface sans mesure.

---

## 13. Cas d'usage

### Cas 1 — Création d'un compte

**Objectif** : permettre à un nouvel utilisateur de créer un compte en moins de 90 secondes.

**Approche** : formulaire minimal, validation en temps réel, feedback immédiat, aucun onboarding forcé.

### Cas 2 — Modification d'une donnée critique

**Objectif** : permettre une modification sûre sans ralentir l'utilisateur.

**Approche** : édition en place, sauvegarde automatique, historique, undo.

### Cas 3 — Suppression d'une donnée

**Objectif** : permettre une suppression sûre.

**Approche** : confirmation explicite avec conséquence visible, possibilité d'annulation dans les secondes suivantes, corbeille pour les suppressions.

### Cas 4 — Onboarding produit

**Objectif** : permettre à un nouvel utilisateur d'être productif en moins de 10 minutes.

**Approche** : onboarding intégré à l'usage, aides contextuelles, exemples, pas de tutoriel forcé.

---

## 14. Exemples

### Exemple 1 — Parcours conforme

**Contexte** : enregistrement d'un document.

- L'utilisateur clique sur "Enregistrer".
- L'état du bouton change immédiatement (loading).
- Un message discret confirme "Enregistré".
- Aucun popup.
- Un historique est disponible.

### Exemple 2 — Parcours non conforme

- L'utilisateur clique sur "OK".
- Un spinner s'affiche 3 secondes.
- Un popup apparaît : "Votre document a bien été enregistré. Cliquez sur OK pour continuer."
- L'utilisateur doit confirmer.
- Aucun historique.

---

## 15. Anti-patterns UX

- **Confirmation inutile** — Demander confirmation pour une action triviale.
- **Notification intrusive** — Notifier pour notifier.
- **Onboarding forcé** — Forcer un tutoriel avant tout usage.
- **Réorganisation silencieuse** — Modifier l'interface sans prévenir.
- **Perte de données silencieuse** — Échec silencieux d'une opération.
- **Action critique non confirmée** — Suppression sans garde-fou.
- **Mémorisation forcée** — Exiger des codes ou des chemins non visibles.
- **Attente silencieuse** — Opération longue sans feedback.

---

## 16. Checklist de validation UX

- [ ] La charge extrinsèque est minimisée.
- [ ] Les trois profils (novice, intermédiaire, expert) sont servis.
- [ ] Les raccourcis clavier sont disponibles pour les actions fréquentes.
- [ ] Les actions critiques sont confirmées.
- [ ] Les actions réversibles proposent un Undo.
- [ ] Le feedback est immédiat.
- [ ] Les messages d'erreur expliquent et proposent une correction.
- [ ] Aucune notification non sollicitée n'est présente.
- [ ] Aucune popup non déclenchée n'est présente.
- [ ] L'utilisateur peut interrompre les opérations longues.
- [ ] Aucune structure n'est réorganisée sans justification.
- [ ] Les métriques UX sont définies et instrumentées.

---

## 17. Critères de validation formels

Une expérience UX est conforme si :

1. Elle respecte les Règles R1 à R10.
2. Elle satisfait les Standards S1 à S8.
3. Elle passe la checklist (section 16).
4. Elle démontre un gain mesurable sur au moins un indicateur UX.

---

## 18. Gouvernance

Les évolutions UX suivent le processus RFC (Document 17). Toute modification majeure doit être validée par le comité design (Document 18).

---

## 19. Versioning

| Version | Date | Auteur | Changements |
|--------|------|--------|-------------|
| 1.0 | — | Comité design | Publication initiale |

---

## 20. FAQ

**Q1 — Peut-on ne pas supporter les trois profils ?**
Non. Une interface Walden Corp doit servir novice, intermédiaire et expert.

**Q2 — Peut-on utiliser une popup pour attirer l'attention ?**
Non. R2 l'interdit.

**Q3 — Faut-il un onboarding ?**
L'onboarding est optionnel et intégré à l'usage. Il n'est jamais forcé.

**Q4 — Comment mesurer l'efficacité UX ?**
Par des métriques définies par produit (temps de tâche, taux d'erreur, taux de complétion, satisfaction).

**Q5 — Que faire d'une fonctionnalité rare mais utile ?**
L'inclure avec Progressive Disclosure.

---

## 21. Glossaire spécifique

**Charge cognitive** — Ressources cognitives mobilisées.

**Découvrabilité** — Capacité d'une fonctionnalité à être trouvée.

**Dette cognitive** — Accumulation de complexité.

**Feedback** — Réaction perceptible à une action.

**Mémorisation** — Capacité à se souvenir d'interactions.

**Onboarding** — Processus d'intégration d'un nouvel utilisateur.

**Progressive Disclosure** — Révélation progressive de la complexité.

**Reconnaissance** — Capacité à identifier sans mémoriser.

**Undo** — Action d'annulation.

---

## 22. Annexes

### Annexe A — Correspondance avec la Constitution

| Principe constitutionnel | Application UX |
|--------------------------|----------------|
| Function Before Decoration | UX-1, UX-8 |
| Clarity Above Everything | UX-11 |
| Less Interface, More Work | UX-8, UX-10 |
| Predictability Creates Trust | UX-3 |
| Intelligent Defaults | UX-1, UX-8 |
| Progressive Disclosure | UX-4 |
| Speed Feels Like Quality | UX-5 |
| Accessibility by Default | S5 |

### Annexe B — Références croisées

- Document 1 — Design Philosophy
- Document 2 — Design Language
- Document 5 — Interaction Principles
- Document 7 — Accessibility Standards
- Document 8 — Content & Writing
- Document 15 — Pattern Library
- Document 16 — AI Design Rules

---

*Fin du Document 4 — UX Principles.*
