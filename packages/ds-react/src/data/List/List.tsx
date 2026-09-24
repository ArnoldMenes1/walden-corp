import { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './List.css';

export interface ListProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'divided';
}

export function List({ children, className, variant = 'default' }: ListProps) {
  return (
    <ul className={cn('wc-list', `wc-list--${variant}`, className)} role="list">
      {children}
    </ul>
  );
}

export interface ListItemProps {
  leading?: ReactNode;
  trailing?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
}

export function ListItem({
  leading,
  trailing,
  title,
  description,
  onClick,
  selected,
  disabled,
  className,
}: ListItemProps) {
  const content = (
    <>
      {leading && <span className="wc-list__leading" aria-hidden="true">{leading}</span>}
      <span className="wc-list__content">
        <span className="wc-list__title">{title}</span>
        {description && <span className="wc-list__description">{description}</span>}
      </span>
      {trailing && <span className="wc-list__trailing">{trailing}</span>}
    </>
  );

  return (
    <li className={cn('wc-list__item', className)}>
      {onClick ? (
        <button
          type="button"
          className={cn(
            'wc-list__button',
            selected && 'wc-list__button--selected',
            disabled && 'wc-list__button--disabled'
          )}
          onClick={onClick}
          disabled={disabled}
          aria-pressed={selected}
        >
          {content}
        </button>
      ) : (
        <div className="wc-list__static">{content}</div>
      )}
    </li>
  );
}
