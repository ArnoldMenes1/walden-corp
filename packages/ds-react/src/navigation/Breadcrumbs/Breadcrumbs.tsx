import { Fragment, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Breadcrumbs.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  className?: string;
  'aria-label'?: string;
}

export function Breadcrumbs({
  items,
  separator = '/',
  className,
  'aria-label': ariaLabel = 'Fil d’Ariane',
}: BreadcrumbsProps) {
  return (
    <nav aria-label={ariaLabel} className={cn('wc-breadcrumbs', className)}>
      <ol className="wc-breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <Fragment key={`${item.label}-${index}`}>
              <li className="wc-breadcrumbs__item">
                {isLast || !item.href ? (
                  <span
                    className="wc-breadcrumbs__current"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.icon}
                    {item.label}
                  </span>
                ) : (
                  <a href={item.href} className="wc-breadcrumbs__link">
                    {item.icon}
                    {item.label}
                  </a>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="wc-breadcrumbs__separator">
                  {separator}
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
