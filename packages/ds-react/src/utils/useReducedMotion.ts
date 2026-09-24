import { useEffect, useState } from 'react';

/**
 * Détecte la préférence utilisateur `prefers-reduced-motion`.
 * Retourne `true` si l'utilisateur souhaite réduire les animations.
 *
 * Conforme au Document 7 — Accessibility Standards, section 8.5.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(query.matches);
    const handler = (event: MediaQueryListEvent) => setPrefersReduced(event.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}
