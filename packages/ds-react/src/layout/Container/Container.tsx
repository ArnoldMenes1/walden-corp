import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Container.css';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  center?: boolean;
  children: ReactNode;
}

export function Container({
  size = 'lg',
  padding = 'md',
  center = true,
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'wc-container',
        `wc-container--${size}`,
        `wc-container--padding-${padding}`,
        center && 'wc-container--center',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
