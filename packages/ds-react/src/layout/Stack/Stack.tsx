import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Stack.css';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  children: ReactNode;
}

export function Stack({
  direction = 'column',
  gap = 4,
  align,
  justify,
  wrap = false,
  children,
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        'wc-stack',
        `wc-stack--${direction}`,
        `wc-stack--gap-${gap}`,
        align && `wc-stack--align-${align}`,
        justify && `wc-stack--justify-${justify}`,
        wrap && 'wc-stack--wrap',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
