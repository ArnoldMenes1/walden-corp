import {
  createContext,
  useContext,
  useId,
  useState,
  KeyboardEvent,
  ReactNode,
} from 'react';
import { cn } from '../../utils/cn';
import './Tabs.css';

interface TabsContextValue {
  activeValue: string;
  setActiveValue: (value: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs.* doit être utilisé dans <Tabs>');
  return ctx;
}

export interface TabsProps {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
  className?: string;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
}: TabsProps) {
  const [internal, setInternal] = useState(defaultValue);
  const activeValue = value ?? internal;
  const baseId = useId();

  const setActiveValue = (v: string) => {
    if (value === undefined) setInternal(v);
    onValueChange?.(v);
  };

  return (
    <TabsContext.Provider value={{ activeValue, setActiveValue, baseId }}>
      <div className={cn('wc-tabs', className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export interface TabsListProps {
  children: ReactNode;
  'aria-label'?: string;
}

export function TabsList({ children, 'aria-label': ariaLabel }: TabsListProps) {
  const { baseId } = useTabsContext();
  const listId = `${baseId}-list`;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (!target.matches('[role="tab"]')) return;

    const tabs = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    );
    const currentIndex = tabs.indexOf(target as HTMLButtonElement);
    let nextIndex: number | null = null;

    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = tabs.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      tabs[nextIndex]?.focus();
      tabs[nextIndex]?.click();
    }
  };

  return (
    <div
      role="tablist"
      id={listId}
      aria-label={ariaLabel}
      className="wc-tabs__list"
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}

export interface TabProps {
  value: string;
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
}

export function Tab({ value, children, disabled, icon }: TabProps) {
  const { activeValue, setActiveValue, baseId } = useTabsContext();
  const selected = activeValue === value;

  return (
    <button
      type="button"
      role="tab"
      id={`${baseId}-tab-${value}`}
      aria-selected={selected}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={selected ? 0 : -1}
      disabled={disabled}
      className={cn('wc-tab', selected && 'wc-tab--active')}
      onClick={() => !disabled && setActiveValue(value)}
    >
      {icon && <span className="wc-tab__icon" aria-hidden="true">{icon}</span>}
      <span className="wc-tab__label">{children}</span>
    </button>
  );
}

export interface TabPanelProps {
  value: string;
  children: ReactNode;
}

export function TabPanel({ value, children }: TabPanelProps) {
  const { activeValue, baseId } = useTabsContext();
  if (activeValue !== value) return null;

  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      tabIndex={0}
      className="wc-tabs__panel"
    >
      {children}
    </div>
  );
}
