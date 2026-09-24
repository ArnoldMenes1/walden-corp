import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';
import { cn } from '../../utils/cn';
import './Checkbox.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
  helperText?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, helperText, error, id, className, ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id ?? `wc-checkbox-${generatedId}`;
    const errorId = `${checkboxId}-error`;
    const helperId = `${checkboxId}-helper`;
    const describedBy =
      [error ? errorId : null, helperText ? helperId : null].filter(Boolean).join(' ') ||
      undefined;

    return (
      <div className={cn('wc-checkbox', className)}>
        <label htmlFor={checkboxId} className="wc-checkbox__label">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className="wc-checkbox__input"
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            {...props}
          />
          <span className="wc-checkbox__box" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M3.5 8L6.5 11L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="wc-checkbox__text">{label}</span>
        </label>
        {error && (
          <p id={errorId} className="wc-checkbox__error" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="wc-checkbox__helper">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
