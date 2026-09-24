import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useFocusTrap } from '../../utils/useFocusTrap';
import { cn } from '../../utils/cn';
import './Modal.css';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Empêche la fermeture par clic sur le scrim ou touche Échap. */
  persistent?: boolean;
}

/**
 * Modal — Fenêtre superposée bloquante du Design System Walden Corp.
 *
 * Conforme aux documents :
 * - Document 5 — Interaction Principles (focus trap, Échap)
 * - Document 7 — Accessibility Standards (role="dialog", aria-modal)
 * - Document 12 — Elevation & Shadows (scrim, z-index)
 * - Document 14 — Component Specification
 */
export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  persistent = false,
}: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useFocusTrap(containerRef, open);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !persistent) onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, persistent, onClose]);

  if (!open) return null;

  const handleScrimClick = () => {
    if (!persistent) onClose();
  };

  return createPortal(
    <div className="wc-modal" role="presentation">
      <div
        className="wc-modal__scrim"
        onClick={handleScrimClick}
        aria-hidden="true"
      />
      <div
        ref={containerRef}
        className={cn('wc-modal__dialog', `wc-modal__dialog--${size}`)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="wc-modal-title"
      >
        <header className="wc-modal__header">
          <h2 id="wc-modal-title" className="wc-modal__title">
            {title}
          </h2>
          <button
            type="button"
            className="wc-modal__close"
            onClick={onClose}
            aria-label="Fermer"
          >
            ×
          </button>
        </header>
        <div className="wc-modal__body">{children}</div>
        {footer && <footer className="wc-modal__footer">{footer}</footer>}
      </div>
    </div>,
    document.body
  );
}
