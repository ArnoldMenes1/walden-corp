import { forwardRef, TextareaHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/cn';
import './Textarea.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  /** Affiche le compteur de caractères. */
  showCount?: boolean;
  /** Nombre maximal de caractères. */
  maxLength?: number;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, helperText, error, showCount, maxLength, fullWidth, id, className, value, ...props },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id ?? `wc-textarea-${generatedId}`;
    const helperId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;
    const describedBy =
      [error ? errorId : null, helperText ? helperId : null].filter(Boolean).join(' ') ||
      undefined;

    const currentLength = typeof value === 'string' ? value.length : 0;

    return (
      <div className={cn('wc-textarea-wrapper', fullWidth && 'wc-textarea-wrapper--full', className)}>
        {label && (
          <label htmlFor={textareaId} className="wc-textarea__label">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn('wc-textarea', error && 'wc-textarea--error')}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          maxLength={maxLength}
          value={value}
          {...props}
        />
        <div className="wc-textarea__meta">
          {error && (
            <p id={errorId} className="wc-textarea__error" role="alert">
              {error}
            </p>
          )}
          {helperText && !error && (
            <p id={helperId} className="wc-textarea__helper">
              {helperText}
            </p>
          )}
          {showCount && maxLength && (
            <span className="wc-textarea__count" aria-live="polite">
              {currentLength} / {maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
