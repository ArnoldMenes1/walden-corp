import { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Spinner.css';

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Label accessible annoncé aux lecteurs d'écran. */
  label?: string;
}

/**
 * Spinner — Indicateur de chargement.
 *
 * Conforme aux documents :
 * - Document 6 — Motion Philosophy (durées, boucle)
 * - Document 7 — Accessibility Standards (aria-live)
 * - Foundation Specification v1.0
 */
export function Spinner({
  size = 'md',
  label = 'Chargement en cours',
  className,
  ...props
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-live="polite"
      aria-label={label}
      className={cn('wc-spinner', `wc-spinner--${size}`, className)}
      {...props}
    >
      <svg
        className="wc-spinner__svg"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="60"
          strokeDashoffset="15"
          opacity="0.2"
        />
        <path
          d="M22 12a10 10 0 0 1-10 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="wc-sr-only">{label}</span>
    </span>
  );
}
