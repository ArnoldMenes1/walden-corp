/**
 * Fusionne des classes CSS conditionnelles en une chaîne.
 * Évite les doublons et les valeurs falsy.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
