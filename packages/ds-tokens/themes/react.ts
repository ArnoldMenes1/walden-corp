// =========================================================
// Walden Corp Design System — Theme React v1.0.1
// =========================================================

import type { CSSProperties } from 'react';

export const colors = {
  primary: {
    default: '#0F2052',
    light:   '#1E3A8A',
    dark:    '#081331',
  },
  secondary: {
    default: '#C0C0C0',
    light:   '#E4E4E7',
    dark:    '#A1A1AA',
  },
  neutral: {
    black: '#1C1C1E',
    white: '#FFFFFF',
  },
  gray: {
    50:  '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    400: '#A1A1AA',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
    950: '#0F0F11',
  },
  success: { default: '#15803D', light: '#DCFCE7', dark: '#166534' },
  warning: { default: '#B45309', light: '#FEF3C7', dark: '#92400E' },
  error:   { default: '#B91C1C', light: '#FEE2E2', dark: '#991B1B' },
  info:    { default: '#1D4ED8', light: '#DBEAFE', dark: '#1E40AF' },
} as const;

export const spacing = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

export const radius = {
  none: '0',
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
} as const;

export const typography = {
  family: {
    base: "'Inter', 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  size: {
    'display-xl': '48px',
    'display-lg': '40px',
    'heading-1': '32px',
    'heading-2': '24px',
    'heading-3': '20px',
    'heading-4': '18px',
    'body-lg': '18px',
    'body-md': '16px',
    'body-sm': '14px',
    label: '14px',
    caption: '13px',
    micro: '12px',
    code: '14px',
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },
  lineHeight: {
    display: 1.2,
    heading: 1.3,
    body: 1.55,
    caption: 1.4,
  },
} as const;

export const elevation = {
  0: 'none',
  1: '0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.10)',
  2: '0 2px 4px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.08)',
  3: '0 4px 8px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.10)',
  4: '0 8px 16px rgba(0,0,0,0.10), 0 16px 32px rgba(0,0,0,0.12)',
} as const;

export const zIndex = {
  base: 0,
  sticky: 100,
  dropdown: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
  tooltip: 600,
  debug: 9999,
} as const;

export const motion = {
  duration: {
    instant: '0ms',
    fast: '100ms',
    base: '150ms',
    medium: '200ms',
    slow: '300ms',
    long: '400ms',
  },
  easing: {
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    entrance: 'cubic-bezier(0, 0, 0.2, 1)',
    exit: 'cubic-bezier(0.4, 0, 1, 1)',
    linear: 'linear',
  },
} as const;

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1440,
  '2xl': 1920,
} as const;

export const theme = {
  colors,
  spacing,
  radius,
  typography,
  elevation,
  zIndex,
  motion,
  breakpoints,
} as const;

export type Theme = typeof theme;

// Exemple d'utilisation dans un composant :
// const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
//   background: ${({ variant }) =>
//     variant === 'primary' ? theme.colors.primary.default : theme.colors.neutral.white};
//   color: ${({ variant }) =>
//     variant === 'primary' ? theme.colors.neutral.white : theme.colors.neutral.black};
//   padding: ${theme.spacing[3]} ${theme.spacing[4]};
//   border-radius: ${theme.radius.md};
//   box-shadow: ${theme.elevation[1]};
// `;
