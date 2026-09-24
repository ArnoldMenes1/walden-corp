import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useFocusTrap } from '../../utils/useFocusTrap';
import { cn } from '../../utils/cn';
import './Drawer.css';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  position?: DrawerPosition;
  size?: 'sm' | 'md' | 'lg';
  persistent?: boolean;
}

export function Drawer({
  open,
  onClose,
  title,
  children,
  footer,
  position = 'right',
  size = 'md',
  persistent = false,
}: DrawerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useFocusTrap(containerRef, open);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !persistent) onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, persistent, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="wc-drawer" role="presentation">
      <div
        className="wc-drawer__scrim"
        onClick={() => !persistent && onClose()}
        aria-hidden="true"
      />
      <div
        ref={containerRef}
        className={cn(
          'wc-drawer__panel',
          `wc-drawer__panel--${position}`,
          `wc-drawer__panel--${size}`
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="wc-drawer-title"
      >
        <header className="wc-drawer__header">
          <h2 id="wc-drawer-title" className="wc-drawer__title">{title}</h2>
          <button
            type="button"
            className="wc-drawer__close"
            onClick={onClose}
            aria-label="Fermer"
          >
            ×
          </button>
        </header>
        <div className="wc-drawer__body">{children}</div>
        {footer && <footer className="wc-drawer__footer">{footer}</footer>}
      </div>
    </div>,
    document.body
  );
}
