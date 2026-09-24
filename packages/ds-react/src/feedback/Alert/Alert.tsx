import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Alert.css';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  icon?: ReactNode;
  /** Autorise la fermeture de l'alerte. */
  onClose?: () => void;
  /** Actions affichées en bas de l'alerte. */
  actions?: ReactNode;
}

const DEFAULT_ROLE: Record<AlertVariant, 'status' | 'alert'> = {
  info: 'status',
  success: 'status',
  warning: 'alert',
  error: 'alert',
};

export function Alert({
  variant = 'info',
  title,
  icon,
  onClose,
  actions,
  children,
  className,
  ...props
}: AlertProps) {
  return (
    <div
      role={DEFAULT_ROLE[variant]}
      className={cn('wc-alert', `wc-alert--${variant}`, className)}
      {...props}
    >
      {icon && <span className="wc-alert__icon" aria-hidden="true">{icon}</span>}
      <div className="wc-alert__content">
        {title && <p className="wc-alert__title">{title}</p>}
        <div className="wc-alert__body">{children}</div>
        {actions && <div className="wc-alert__actions">{actions}</div>}
      </div>
      {onClose && (
        <button
          type="button"
          className="wc-alert__close"
          onClick={onClose}
          aria-label="Fermer l'alerte"
        >
          ×
        </button>
      )}
    </div>
  );
}
