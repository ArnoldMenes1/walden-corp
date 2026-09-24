import { forwardRef, SelectHTMLAttributes, ReactNode, useId } from 'react';
import { cn } from '../../utils/cn';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  iconStart?: ReactNode;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, helperText, error, options, placeholder, iconStart, fullWidth, id, className, ...props },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id ?? `wc-select-${generatedId}`;
    const errorId = `${selectId}-error`;
    const helperId = `${selectId}-helper`;
    const describedBy =
      [error ? errorId : null, helperText ? helperId : null].filter(Boolean).join(' ') ||
      undefined;

    return (
      <div className={cn('wc-select-wrapper', fullWidth && 'wc-select-wrapper--full', className)}>
        {label && (
          <label htmlFor={selectId} className="wc-select__label">
            {label}
          </label>
        )}
        <div className={cn('wc-select', error && 'wc-select--error')}>
          {iconStart && <span className="wc-select__icon" aria-hidden="true">{iconStart}</span>}
          <select
            ref={ref}
            id={selectId}
            className="wc-select__field"
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="wc-select__chevron" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        {error && (
          <p id={errorId} className="wc-select__error" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="wc-select__helper">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
