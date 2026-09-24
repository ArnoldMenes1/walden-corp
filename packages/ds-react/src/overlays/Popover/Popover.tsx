import {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';
import './Popover.css';

export interface PopoverProps {
  trigger: ReactElement;
  children: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function Popover({
  trigger,
  children,
  placement = 'bottom',
  open: controlledOpen,
  onOpenChange,
  className,
}: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const setOpen = (v: boolean) => {
    if (controlledOpen === undefined) setInternalOpen(v);
    onOpenChange?.(v);
  };

  useEffect(() => {
    if (!open || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const gap = 8;
    let top = 0;
    let left = 0;
    switch (placement) {
      case 'bottom': top = rect.bottom + gap; left = rect.left; break;
      case 'top':    top = rect.top - gap;    left = rect.left; break;
      case 'left':   top = rect.top;          left = rect.left - gap; break;
      case 'right':  top = rect.top;          left = rect.right + gap; break;
    }
    setCoords({ top, left });
  }, [open, placement]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        popoverRef.current?.contains(e.target as Node) ||
        triggerRef.current?.contains(e.target as Node)
      ) return;
      setOpen(false);
    };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('keydown', esc);
    };
  }, [open]);

  if (!isValidElement(trigger)) return null;

  const triggerWithProps = cloneElement(trigger, {
    ref: triggerRef,
    onClick: (e: React.MouseEvent) => {
      trigger.props.onClick?.(e);
      setOpen(!open);
    },
    'aria-haspopup': 'dialog',
    'aria-expanded': open,
  } as any);

  return (
    <>
      {triggerWithProps}
      {open &&
        createPortal(
          <div
            ref={popoverRef}
            role="dialog"
            className={cn('wc-popover', `wc-popover--${placement}`, className)}
            style={{ top: coords.top, left: coords.left }}
          >
            {children}
          </div>,
          document.body
        )}
    </>
  );
}
