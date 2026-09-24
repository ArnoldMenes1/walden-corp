import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Panel.css';

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  footer?: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'sunken' | 'elevated';
  children: ReactNode;
}

export function Panel({
  header,
  footer,
  padding = 'md',
  variant = 'default',
  children,
  className,
  ...props
}: PanelProps) {
  return (
    <section
      className={cn(
        'wc-panel',
        `wc-panel--${variant}`,
        `wc-panel--padding-${padding}`,
        className
      )}
      {...props}
    >
      {header && <header className="wc-panel__header">{header}</header>}
      <div className="wc-panel__body">{children}</div>
      {footer && <footer className="wc-panel__footer">{footer}</footer>}
    </section>
  );
}
