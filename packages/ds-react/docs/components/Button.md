# Button

**Version :** 1.0.1
**Statut :** Stable

## Description
Composant d'action principal du Design System Walden Corp.

## Anatomie
- Container
- Label
- Icon (début ou fin, optionnel)
- State layer

## Variantes
- `primary` — Action principale
- `secondary` — Action secondaire
- `ghost` — Action discrète
- `destructive` — Action destructive
- `link` — Lien inline

## Tailles
- `sm` — 32 px hauteur
- `md` — 40 px hauteur (défaut)
- `lg` — 48 px hauteur

## États
- Repos
- Hover
- Focus (outline 2 px)
- Active
- Disabled
- Loading

## API
| Propriété | Type | Défaut | Description |
|-----------|------|--------|-------------|
| `variant` | `ButtonVariant` | `'primary'` | Variante visuelle |
| `size` | `ButtonSize` | `'md'` | Taille |
| `iconStart` | `ReactNode` | — | Icône début |
| `iconEnd` | `ReactNode` | — | Icône fin |
| `loading` | `boolean` | `false` | État de chargement |
| `fullWidth` | `boolean` | `false` | Pleine largeur |
| `disabled` | `boolean` | `false` | Désactivé |

## Accessibilité
- Rôle `button` natif.
- Focus visible (outline 2 px).
- `aria-busy` en état loading.
- Navigation clavier : Entrée et Espace.
- Contraste : conforme WCAG AA (voir Foundation Specification, section 1.6).

## Responsive
- `fullWidth` sur mobile pour les CTA principaux.
- Taille `lg` recommandée sur mobile (zone tactile 48 px).

## Cas d'usage
- Action principale d'un formulaire → `primary`
- Action secondaire → `secondary`
- Annulation → `ghost`
- Suppression → `destructive`
- Lien dans un paragraphe → `link`

## Anti-patterns
- Deux boutons `primary` côte à côte.
- Bouton `primary` pour une action destructive.
- Bouton icône-seule sans `aria-label`.
