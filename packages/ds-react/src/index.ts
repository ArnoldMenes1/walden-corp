// =========================================================
// Walden Corp Design System — Point d'entrée React v1.0.1
// =========================================================

// Tokens (variables CSS globales)
import './tokens/variables.css';

// Utils
export { cn } from './utils/cn';
export { useReducedMotion } from './utils/useReducedMotion';
export { useFocusTrap } from './utils/useFocusTrap';

// Primitives
export { Button } from './primitives/Button/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './primitives/Button/Button';

export { Input } from './primitives/Input/Input';
export type { InputProps } from './primitives/Input/Input';

// Surfaces
export { Card } from './surfaces/Card/Card';
export type { CardProps } from './surfaces/Card/Card';

// Overlays
export { Modal } from './overlays/Modal/Modal';
export type { ModalProps } from './overlays/Modal/Modal';

// Feedback (déclaré, à implémenter en Partie 2)
// export { Spinner } from './feedback/Spinner/Spinner';
// export { Toast } from './feedback/Toast/Toast';

// Navigation (à implémenter en Partie 3)
// export { Tabs } from './navigation/Tabs/Tabs';

// Data (à implémenter en Partie 4)
// export { Table } from './data/Table/Table';
