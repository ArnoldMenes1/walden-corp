import { ReactNode, useId, useState } from 'react';
import { cn } from '../../utils/cn';
import './Tooltip.css';

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export function Tooltip({
  content,
  children,
  placement = 'top',
  delay = 300,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const id = useId();
  let timer: ReturnType<typeof setTimeout> | null = null;

  const show = () => {
    timer = setTimeout(() => setVisible(true), delay);
  };
  const hide = () => {
    if (timer) clearTimeout(timer);
    setVisible(false);
  };

  return (
    <span
      className={cn('wc-tooltip-wrapper', className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <span aria-describedby={visible ? id : undefined} className="wc-tooltip-wrapper__child">
        {children}
      </span>
      {visible && (
        <span
          role="tooltip"
          id={id}
          className={cn('wc-tooltip', `wc-tooltip--${placement}`)}
        >
          {content}
        </span>
      )}
    </span>
  );
}
