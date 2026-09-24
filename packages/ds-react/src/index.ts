// =========================================================
// Walden Corp Design System — Point d'entrée React v1.0.1
// =========================================================

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

export { Textarea } from './primitives/Textarea/Textarea';
export type { TextareaProps } from './primitives/Textarea/Textarea';

export { Checkbox } from './primitives/Checkbox/Checkbox';
export type { CheckboxProps } from './primitives/Checkbox/Checkbox';

export { Radio } from './primitives/Radio/Radio';
export type { RadioProps } from './primitives/Radio/Radio';

export { Switch } from './primitives/Switch/Switch';
export type { SwitchProps } from './primitives/Switch/Switch';

export { Select } from './primitives/Select/Select';
export type { SelectProps, SelectOption } from './primitives/Select/Select';

export { Icon } from './primitives/Icon/Icon';
export type { IconProps, IconSize } from './primitives/Icon/Icon';

// Surfaces
export { Card } from './surfaces/Card/Card';
export type { CardProps } from './surfaces/Card/Card';

// Feedback
export { Spinner } from './feedback/Spinner/Spinner';
export type { SpinnerProps } from './feedback/Spinner/Spinner';

export { ProgressBar } from './feedback/ProgressBar/ProgressBar';
export type { ProgressBarProps } from './feedback/ProgressBar/ProgressBar';

export { Alert } from './feedback/Alert/Alert';
export type { AlertProps, AlertVariant } from './feedback/Alert/Alert';

export { ToastProvider, useToast } from './feedback/Toast/ToastProvider';
export type { ToastItem, ToastVariant } from './feedback/Toast/ToastProvider';

// Overlays
export { Modal } from './overlays/Modal/Modal';
export type { ModalProps } from './overlays/Modal/Modal';

// Navigation (Partie 3)
// Data (Partie 4)
