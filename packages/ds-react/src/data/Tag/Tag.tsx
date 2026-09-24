import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Tag.css';

export type TagVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
export type TagSize = 'sm' | 'md';

export interface TagProps {
  variant?: TagVariant;
  size?: TagSize;
  icon?: ReactNode;
  onRemove?: () => void;
  removable?: boolean;
  className?: string;
  children: ReactNode;
}

export function Tag({
  variant = 'default',
  size = 'md',
  icon,
  onRemove,
  removable = false,
  className,
  children,
}: TagProps) {
  return (
    <span
      className={cn('wc-tag', `wc-tag--${variant}`, `wc-tag--${size}`, className)}
    >
      {icon && <span className="wc-tag__icon" aria-hidden="true">{icon}</span>}
      <span className="wc-tag__label">{children}</span>
      {removable && (
        <button
          type="button"
          className="wc-tag__remove"
          onClick={onRemove}
          aria-label={`Retirer ${typeof children === 'string' ? children : 'le tag'}`}
        >
          ×
        </button>
      )}
    </span>
  );
}
