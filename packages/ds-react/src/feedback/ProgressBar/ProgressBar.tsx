import { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './ProgressBar.css';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Valeur entre 0 et 100. */
  value: number;
  /** Affiche la valeur en pourcentage. */
  showValue?: boolean;
  /** Label accessible. */
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export function ProgressBar({
  value,
  showValue = false,
  label = 'Progression',
  size = 'md',
  variant = 'default',
  className,
  ...props
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={cn('wc-progress', className)} {...props}>
      <div
        className={cn('wc-progress__track', `wc-progress__track--${size}`)}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={cn('wc-progress__fill', `wc-progress__fill--${variant}`)}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showValue && (
        <span className="wc-progress__value">{Math.round(clamped)}%</span>
      )}
    </div>
  );
}
