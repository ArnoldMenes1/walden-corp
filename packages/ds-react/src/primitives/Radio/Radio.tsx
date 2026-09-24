import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';
import { cn } from '../../utils/cn';
import './Radio.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
  helperText?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, helperText, id, className, ...props }, ref) => {
    const generatedId = useId();
    const radioId = id ?? `wc-radio-${generatedId}`;
    const helperId = `${radioId}-helper`;

    return (
      <div className={cn('wc-radio', className)}>
        <label htmlFor={radioId} className="wc-radio__label">
          <input
            ref={ref}
            id={radioId}
            type="radio"
            className="wc-radio__input"
            aria-describedby={helperText ? helperId : undefined}
            {...props}
          />
          <span className="wc-radio__circle" aria-hidden="true" />
          <span className="wc-radio__text">{label}</span>
        </label>
        {helperText && (
          <p id={helperId} className="wc-radio__helper">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';
