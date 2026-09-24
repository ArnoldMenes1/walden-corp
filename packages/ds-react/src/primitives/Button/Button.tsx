import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { Spinner } from '../../feedback/Spinner/Spinner';
import './Button.css';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'destructive'
  | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante visuelle du bouton. Par défaut : `primary`. */
  variant?: ButtonVariant;
  /** Taille du bouton. Par défaut : `md`. */
  size?: ButtonSize;
  /** Icône affichée avant le label. */
  iconStart?: ReactNode;
  /** Icône affichée après le label. */
  iconEnd?: ReactNode;
  /** Affiche un indicateur de chargement et désactive l'interaction. */
  loading?: boolean;
  /** Étend le bouton sur toute la largeur disponible. */
  fullWidth?: boolean;
  /** Label accessible si le contenu visuel est une icône seule. */
  'aria-label'?: string;
}

/**
 * Button — Composant d'action principal du Design System Walden Corp.
 *
 * Conforme aux documents :
 * - Document 5 — Interaction Principles (états, focus, hover, active)
 * - Document 7 — Accessibility Standards (focus, contraste, clavier)
 * - Document 14 — Component Specification (anatomie, API, variantes)
 * - Foundation Specification v1.0 (tokens)
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      iconStart,
      iconEnd,
      loading = false,
      fullWidth = false,
      disabled,
      children,
      className,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'wc-button',
          `wc-button--${variant}`,
          `wc-button--${size}`,
          fullWidth && 'wc-button--full',
          loading && 'wc-button--loading',
          className
        )}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && (
          <span className="wc-button__spinner" aria-hidden="true">
            <Spinner size="sm" />
          </span>
        )}
        {!loading && iconStart && (
          <span className="wc-button__icon wc-button__icon--start" aria-hidden="true">
            {iconStart}
          </span>
        )}
        <span className="wc-button__label">{children}</span>
        {!loading && iconEnd && (
          <span className="wc-button__icon wc-button__icon--end" aria-hidden="true">
            {iconEnd}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
