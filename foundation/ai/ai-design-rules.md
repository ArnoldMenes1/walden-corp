# Document 16 — AI Design Rules

**Version :** 1.0
**Statut :** Document officiel
**Classification :** Opérationnel — dépend des Documents 1 à 15

---

## 1. Préambule

### 1.1 Rôle de ce document

Le présent document définit les **règles destinées aux IA génératives** produisant des interfaces Walden Corp. Il précise comment une IA doit générer une interface, choisir un composant, utiliser les tokens, documenter ses choix, quand demander une validation humaine, et comment éviter les hallucinations de design.

### 1.2 Dépendances

- **Dépend de :** Documents 1 à 15.
- **Est dépendant de :** Documents 17 à 20.

---

## 2. Objectif

Garantir que toute production d'IA générative destinée à Walden Corp soit :

- **conforme** au Design System ;
- **traçable** ;
- **validable** ;
- **documentée**.

---

## 3. Portée

Toutes les productions d'IA génératives concernant les interfaces Walden Corp.

---

## 4. Définitions

**IA générative** — Système produisant du contenu automatiquement.

**Prompt système** — Instructions initiales données à une IA.

**Hallucination de design** — Production d'un élément inexistant ou non conforme.

**Validation humaine** — Approbation par une personne qualifiée.

**Traçabilité** — Capacité à retrouver l'origine d'une décision.

---

## 5. Philosophie IA

### 5.1 Postulats

**Postulat 1 — L'IA est un outil, pas un auteur.** Elle produit, mais ne décide pas.

**Postulat 2 — L'IA respecte la Constitution.** Aucune production ne peut la contredire.

**Postulat 3 — L'IA documente.** Chaque production cite les principes et tokens utilisés.

**Postulat 4 — L'IA demande validation.** Aucune production n'est publiée sans validation humaine.

**Postulat 5 — L'IA apprend du système.** Elle est mise à jour avec le Design System.

### 5.2 Les cinq qualités d'une production IA Walden Corp

- **Conforme** — Respecte le Design System.
- **Traçable** — Documentée.
- **Validable** — Soumise à revue.
- **Réutilisable** — Composée de primitives existantes.
- **Explicable** — Justifiée.

---

## 6. Principes IA

### Principe IA-1 — Constitution

Toute production IA respecte la Constitution.

### Principe IA-2 — Documentation

Toute production IA est documentée (principes, tokens, composants).

### Principe IA-3 — Validation

Toute production IA est validée humainement avant publication.

### Principe IA-4 — Traçabilité

Toute production IA est traçable (prompt, modèle, version, timestamp).

### Principe IA-5 — Non-hallucination

Toute production IA utilise uniquement des éléments existants.

### Principe IA-6 — Cohérence

Toute production IA est cohérente avec les productions humaines.

### Principe IA-7 — Réutilisabilité

Toute production IA réutilise les composants et patterns existants.

### Principe IA-8 — Amélioration continue

Toute production IA alimente l'amélioration du Design System.

---

## 7. Architecture IA

Les productions IA sont organisées en cinq niveaux.

**Niveau 1 — Prompt système** — Contient les principes et règles.

**Niveau 2 — Contexte** — Contient les composants et tokens disponibles.

**Niveau 3 — Production** — Génère l'interface.

**Niveau 4 — Documentation** — Produit la justification.

**Niveau 5 — Validation** — Soumet à revue humaine.

---

## 8. Standards IA

**S-IA1 — Tout prompt système contient la Constitution.**

**S-IA2 — Tout prompt système contient les Documents 1 à 15.**

**S-IA3 — Toute production IA cite les principes appliqués.**

**S-IA4 — Toute production IA cite les tokens utilisés.**

**S-IA5 — Toute production IA cite les composants utilisés.**

**S-IA6 — Toute production IA est traçable.**

**S-IA7 — Toute production IA est validée humainement.**

**S-IA8 — Toute production IA est enregistrée dans le journal des productions IA.**

**S-IA9 — Toute production IA utilise uniquement des éléments existants.**

**S-IA10 — Toute production IA est testée en accessibilité.**

---

## 9. Règles IA

**R1 — Aucune production IA sans prompt système contenant la Constitution.**

**R2 — Aucune production IA sans documentation.**

**R3 — Aucune production IA sans validation humaine.**

**R4 — Aucune production IA avec valeurs en dur.**

**R5 — Aucune production IA avec composants non existants.**

**R6 — Aucune production IA avec patterns non documentés.**

**R7 — Aucune production IA avec tokens non existants.**

**R8 — Aucune production IA sans tests d'accessibilité.**

**R9 — Aucune production IA sans traçabilité.**

**R10 — Aucune production IA mise en production sans revue humaine.**

**R11 — Aucune production IA ne peut créer un nouveau composant sans RFC.**

**R12 — Aucune production IA ne peut modifier un token.**

**R13 — Aucune production IA ne peut contredire un principe constitutionnel.**

**R14 — Aucune production IA ne peut ignorer les documents 6 (motion), 7 (accessibilité), 8 (contenu).**

**R15 — Aucune production IA ne peut être diffusée sans label « Généré par IA ».**

---

## 10. Choix d'un composant par une IA

Ordre de priorité :

1. Chercher un composant existant qui résout le problème.
2. Si aucun composant existant ne convient, chercher un pattern existant.
3. Si aucun pattern existant ne convient, proposer une composition de composants.
4. Si aucune composition ne convient, proposer une RFC pour un nouveau composant.

L'IA ne crée jamais de composant directement.

---

## 11. Utilisation des tokens par une IA

Ordre de priorité :

1. Tokens sémantiques existants.
2. Tokens primitifs existants.
3. Aucune valeur en dur.
4. Aucun token inventé.

---

## 12. Documentation par une IA

Toute production IA documente :

- Le prompt utilisé.
- Le modèle utilisé.
- La version du Design System.
- Les principes appliqués.
- Les composants utilisés.
- Les tokens utilisés.
- Les tests effectués.
- Les limites connues.
- Le timestamp.

---

## 13. Validation humaine

Toute production IA est validée par :

- Un designer pour la conformité visuelle.
- Un développeur pour la conformité technique.
- Un expert accessibilité pour la conformité WCAG.

Aucune production IA n'est publiée sans les trois validations.

---

## 14. Prévention des hallucinations

L'IA doit :

- Ne jamais inventer de composant.
- Ne jamais inventer de token.
- Ne jamais inventer de pattern.
- Ne jamais inventer de couleur.
- Ne jamais inventer de typographie.
- Ne jamais inventer de principe.
- Citer ses sources.
- Signaler les ambiguïtés.

En cas de doute, l'IA demande une validation humaine.

---

## 15. Journal des productions IA

Chaque production IA est enregistrée avec :

- Identifiant unique.
- Prompt.
- Modèle.
- Version du Design System.
- Contenu produit.
- Validations reçues.
- Date et heure.
- Statut (validé, rejeté, en revue).

---

## 16. Recommandations

- Mettre à jour les prompts système à chaque évolution du Design System.
- Tester les productions IA en environnement isolé.
- Documenter les cas d'échec.
- Partager les bonnes pratiques entre équipes.

---

## 17. Bonnes pratiques

- Fournir à l'IA un contexte riche et à jour.
- Contraindre l'IA aux composants existants.
- Exiger la documentation à chaque production.
- Traiter les productions IA comme des productions humaines.

---

## 18. Mauvaises pratiques

- Publier sans validation humaine.
- Ignorer les tokens.
- Inventer des composants.
- Ignorer les tests d'accessibilité.
- Ne pas documenter la production.
- Ne pas tracer le prompt.

---

## 19. Cas d'usage

### Cas 1 — Génération d'un dashboard

Prompt système contenant la Constitution, les Documents 1 à 15, et le catalogue de composants. Production d'un dashboard. Documentation. Tests. Validation humaine.

### Cas 2 — Génération d'un formulaire

Prompt système contenant les règles de formulaire. Production. Documentation. Tests. Validation.

### Cas 3 — Génération d'un écran vide

Prompt système contenant les règles d'illustration. Production. Tests. Validation.

### Cas 4 — Proposition d'un nouveau composant

L'IA détecte qu'aucun composant existant ne convient. Elle propose une RFC. Aucune production directe.

---

## 20. Exemples

### Exemple 1 — Production IA conforme

```yaml
prompt: "Générer un dashboard Walden Corp pour un produit SaaS de gestion de projet."
model: "gpt-X"
design_system_version: "1.0"
principles_applied:
  - Function Before Decoration
  - Content Drives Layout
  - Progressive Disclosure
components_used:
  - DashboardPattern
  - Card
  - Table
  - Chart
tokens_used:
  - color.action.primary
  - spacing.4
  - typography.heading.2
tests:
  - accessibility: pass
  - responsive: pass
validation:
  designer: validated
  developer: validated
  accessibility: validated
timestamp: "2025-01-01T12:00:00Z"
status: validated
```

### Exemple 2 — Production IA non conforme
Pas de documentation.

Pas de validation.

Tokens inventés.

Composant créé sans RFC.

## 21. Anti-patterns IA
Hallucination — Invention d'un composant ou token.

Sans documentation — Production non justifiée.

Sans validation — Publication directe.

Tokens en dur — Valeurs non tokenisées.

Composants inventés — Non existants.

Sans tests — Non testée.

Sans traçabilité — Non tracée.

22. Checklist de validation d'une production IA
□ Prompt système contient la Constitution.
□ Prompt système contient les Documents 1 à 15.
□ Production documentée (principes, tokens, composants).
□ Tokens existants uniquement.
□ Composants existants uniquement.
□ Patterns existants uniquement.
□ Tests d'accessibilité effectués.
□ Tests responsive effectués.
□ Traçabilité enregistrée.
□ Validation designer effectuée.
□ Validation développeur effectuée.
□ Validation accessibilité effectuée.
□ Label « Généré par IA » présent.
□ Journal des productions IA mis à jour.

## 23. Critères de validation formels
Une production IA est conforme si :

Elle respecte R1 à R15.

Elle satisfait S-IA1 à S-IA10.

Elle passe la checklist (section 22).

## 24. Gouvernance
Toute production IA passe par le processus de validation défini à la section 13. Les évolutions des règles IA suivent le processus RFC (Document 17).

## 25. Versioning
Version	Date	Auteur	Changements
1.0	—	Comité design	Publication initiale
## 26. FAQ
Q1 — Peut-on publier une production IA sans validation ?
Non.

Q2 — Peut-on laisser une IA inventer un composant ?
Non. RFC obligatoire.

Q3 — Peut-on utiliser un token non existant ?
Non.

Q4 — Peut-on omettre la documentation ?
Non.

Q5 — Peut-on tracer une production IA a posteriori ?
Non. La traçabilité est obligatoire dès la production.

## 27. Glossaire spécifique
Hallucination — Invention non conforme.

Prompt système — Instructions initiales.

Traçabilité — Capacité à retrouver l'origine.

Validation humaine — Approbation par une personne.

## 28. Annexes
Annexe A — Références croisées
Documents 1 à 15.

Document 17 — Contribution Guide.

Document 18 — Governance.

Document 19 — Versioning & Release Management.

Document 20 — Handbook.

**Fin du Document 16 — AI Design Rules.**
