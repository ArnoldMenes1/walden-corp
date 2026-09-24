import { SVGAttributes } from 'react';
import { cn } from '../../utils/cn';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  /** Composant d'icône (ex: import { Search } from 'lucide-react'). */
  as: React.ComponentType<SVGAttributes<SVGSVGElement>>;
  size?: IconSize;
  /** Label accessible. Si absent, l'icône est décorative. */
  'aria-label'?: string;
}

const SIZE_MAP: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

/**
 * Icon — Wrapper standardisé pour les icônes Lucide.
 * Garantit une taille, une couleur et une sémantique cohérentes.
 *
 * Conforme au Document 13 — Iconography & Illustration.
 */
export function Icon({ as: Component, size = 'md', className, ...props }: IconProps) {
  const px = SIZE_MAP[size];
  const ariaHidden = props['aria-label'] ? undefined : true;

  return (
    <Component
      width={px}
      height={px}
      strokeWidth={px <= 24 ? 1.5 : 2}
      aria-hidden={ariaHidden}
      className={cn('wc-icon', className)}
      {...props}
    />
  );
}
