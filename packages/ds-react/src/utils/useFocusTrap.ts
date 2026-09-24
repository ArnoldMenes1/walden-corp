import { useEffect, RefObject } from 'react';

/**
 * Piège le focus clavier à l'intérieur d'un conteneur.
 * Utilisé par les modales, drawers et popovers.
 *
 * Conforme au Document 7 — Accessibility Standards, section 8.1.
 */
export function useFocusTrap(
  containerRef: RefObject<HTMLElement>,
  active: boolean
): void {
  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    const focusableSelector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const focusables = container.querySelectorAll<HTMLElement>(focusableSelector);
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    first?.focus();

    const handler = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      if (focusables.length === 0) {
        event.preventDefault();
        return;
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    container.addEventListener('keydown', handler);
    return () => container.removeEventListener('keydown', handler);
  }, [containerRef, active]);
}
