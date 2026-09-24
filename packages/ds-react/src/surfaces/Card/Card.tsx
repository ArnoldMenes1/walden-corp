import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Variante visuelle. Par défaut : `default`. */
  variant?: 'default' | 'outlined' | 'elevated';
  /** Zone d'en-tête optionnelle. */
  header?: ReactNode;
  /** Zone de pied optionnelle. */
  footer?: ReactNode;
  /** Élévation (0 à 4). N'a d'effet qu'en variant `elevated`. */
  elevation?: 0 | 1 | 2 | 3 | 4;
  /** Padding interne. Par défaut : `md`. */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Rend la carte interactive (hover, focus). */
  interactive?: boolean;
}

/**
 * Card — Surface de contenu du Design System Walden Corp.
 *
 * Conforme aux documents :
 * - Document 12 — Elevation & Shadows
 * - Document 14 — Component Specification
 * - Foundation Specification v1.0
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      header,
      footer,
      elevation = 1,
      padding = 'md',
      interactive = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'wc-card',
          `wc-card--${variant}`,
          `wc-card--padding-${padding}`,
          interactive && 'wc-card--interactive',
          className
        )}
        style={{ boxShadow: variant === 'elevated' ? `var(--elevation-${elevation})` : undefined }}
        {...props}
      >
        {header && <div className="wc-card__header">{header}</div>}
        <div className="wc-card__body">{children}</div>
        {footer && <div className="wc-card__footer">{footer}</div>}
      </div>
    );
  }
);

Card.displayName = 'Card';
