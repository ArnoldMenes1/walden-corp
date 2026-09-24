import { cn } from '../../utils/cn';
import './Divider.css';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'subtle' | 'default' | 'strong';
  className?: string;
  label?: string;
}

export function Divider({
  orientation = 'horizontal',
  variant = 'default',
  className,
  label,
}: DividerProps) {
  if (label && orientation === 'horizontal') {
    return (
      <div className={cn('wc-divider--labeled', className)} role="separator">
        <span className={cn('wc-divider', `wc-divider--${variant}`)} aria-hidden="true" />
        <span className="wc-divider__label">{label}</span>
        <span className={cn('wc-divider', `wc-divider--${variant}`)} aria-hidden="true" />
      </div>
    );
  }

  return (
    <hr
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'wc-divider',
        `wc-divider--${variant}`,
        `wc-divider--${orientation}`,
        className
      )}
    />
  );
}
