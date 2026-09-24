import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';
import './Toast.css';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';

export interface ToastItem {
  id: string;
  variant: ToastVariant;
  title: string;
  description?: string;
  /** Durée en millisecondes. 0 = permanent. */
  duration?: number;
}

interface ToastContextValue {
  toast: (item: Omit<ToastItem, 'id'>) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast doit être utilisé dans <ToastProvider>');
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (item: Omit<ToastItem, 'id'>) => {
      const id = Math.random().toString(36).slice(2);
      const full: ToastItem = { id, duration: 5000, ...item };
      setToasts((prev) => [...prev, full]);
      if (full.duration && full.duration > 0) {
        setTimeout(() => dismiss(id), full.duration);
      }
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      {createPortal(
        <div className="wc-toast-container" role="region" aria-label="Notifications">
          {toasts.map((t) => (
            <div
              key={t.id}
              className={cn('wc-toast', `wc-toast--${t.variant}`)}
              role={t.variant === 'error' ? 'alert' : 'status'}
              aria-live={t.variant === 'error' ? 'assertive' : 'polite'}
            >
              <div className="wc-toast__content">
                <p className="wc-toast__title">{t.title}</p>
                {t.description && <p className="wc-toast__desc">{t.description}</p>}
              </div>
              <button
                type="button"
                className="wc-toast__close"
                onClick={() => dismiss(t.id)}
                aria-label="Fermer la notification"
              >
                ×
              </button>
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}
