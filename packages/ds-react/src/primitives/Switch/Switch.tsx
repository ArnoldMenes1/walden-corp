import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';
import { cn } from '../../utils/cn';
import './Switch.css';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
  helperText?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, helperText, id, className, ...props }, ref) => {
    const generatedId = useId();
    const switchId = id ?? `wc-switch-${generatedId}`;
    const helperId = `${switchId}-helper`;

    return (
      <div className={cn('wc-switch', className)}>
        <label htmlFor={switchId} className="wc-switch__label">
          <input
            ref={ref}
            id={switchId}
            type="checkbox"
            role="switch"
            className="wc-switch__input"
            aria-describedby={helperText ? helperId : undefined}
            {...props}
          />
          <span className="wc-switch__track" aria-hidden="true">
            <span className="wc-switch__thumb" />
          </span>
          <span className="wc-switch__text">{label}</span>
        </label>
        {helperText && (
          <p id={helperId} className="wc-switch__helper">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
