import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';
import { cn } from '../../utils/cn';
import './Input.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Libellé persistant affiché au-dessus du champ. */
  label?: string;
  /** Texte d'aide affiché sous le champ. */
  helperText?: string;
  /** Message d'erreur affiché sous le champ. */
  error?: string;
  /** Icône affichée au début du champ. */
  iconStart?: ReactNode;
  /** Icône affichée à la fin du champ. */
  iconEnd?: ReactNode;
  /** Taille du champ. Par défaut : `md`. */
  size?: 'sm' | 'md' | 'lg';
  /** Étend le champ sur toute la largeur. */
  fullWidth?: boolean;
}

/**
 * Input — Champ de saisie du Design System Walden Corp.
 *
 * Conforme aux documents :
 * - Document 5 — Interaction Principles (focus, hover, disabled)
 * - Document 7 — Accessibility Standards (labels, erreurs, contrastes)
 * - Document 14 — Component Specification
 * - Foundation Specification v1.0 (tokens)
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      iconStart,
      iconEnd,
      size = 'md',
      fullWidth = false,
      disabled,
      id,
      className,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? `wc-input-${generatedId}`;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const describedBy = [
      error ? errorId : null,
      helperText ? helperId : null,
      ariaDescribedBy,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <div className={cn('wc-input-wrapper', fullWidth && 'wc-input-wrapper--full', className)}>
        {label && (
          <label htmlFor={inputId} className="wc-input__label">
            {label}
          </label>
        )}
        <div
          className={cn(
            'wc-input',
            `wc-input--${size}`,
            error && 'wc-input--error',
            disabled && 'wc-input--disabled'
          )}
        >
          {iconStart && (
            <span className="wc-input__icon wc-input__icon--start" aria-hidden="true">
              {iconStart}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className="wc-input__field"
            disabled={disabled}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            {...props}
          />
          {iconEnd && (
            <span className="wc-input__icon wc-input__icon--end" aria-hidden="true">
              {iconEnd}
            </span>
          )}
        </div>
        {error && (
          <p id={errorId} className="wc-input__error" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="wc-input__helper">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
