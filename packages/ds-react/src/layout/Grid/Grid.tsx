import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Grid.css';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  children: ReactNode;
}

export function Grid({ columns = 12, gap = 4, children, className, ...props }: GridProps) {
  const style: CSSProperties = {};
  if (typeof columns === 'number') {
    style.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;
  }
  return (
    <div
      className={cn('wc-grid', `wc-grid--gap-${gap}`, className)}
      style={style}
      data-columns={typeof columns === 'object' ? JSON.stringify(columns) : undefined}
      {...props}
    >
      {children}
    </div>
  );
}
