import { cn } from '../../utils/cn';
import './Pagination.css';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** Nombre de pages visibles autour de la page courante. */
  siblingCount?: number;
  className?: string;
  'aria-label'?: string;
}

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function getPages(
  current: number,
  total: number,
  sibling: number
): (number | '...')[] {
  const totalNumbers = sibling * 2 + 5;
  if (total <= totalNumbers) return range(1, total);

  const left = Math.max(current - sibling, 1);
  const right = Math.min(current + sibling, total);

  const showLeftDots = left > 2;
  const showRightDots = right < total - 1;

  if (!showLeftDots && showRightDots) {
    const leftRange = range(1, 3 + sibling * 2);
    return [...leftRange, '...', total];
  }
  if (showLeftDots && !showRightDots) {
    const rightRange = range(total - (2 + sibling * 2), total);
    return [1, '...', ...rightRange];
  }
  return [1, '...', ...range(left, right), '...', total];
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
  'aria-label': ariaLabel = 'Pagination',
}: PaginationProps) {
  if (totalPages <= 1) return null;
  const pages = getPages(currentPage, totalPages, siblingCount);

  return (
    <nav aria-label={ariaLabel} className={cn('wc-pagination', className)}>
      <button
        type="button"
        className="wc-pagination__btn"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Page précédente"
      >
        ‹
      </button>
      <ul className="wc-pagination__list">
        {pages.map((p, i) =>
          p === '...' ? (
            <li key={`dots-${i}`} className="wc-pagination__dots" aria-hidden="true">
              …
            </li>
          ) : (
            <li key={p}>
              <button
                type="button"
                className={cn('wc-pagination__page', p === currentPage && 'wc-pagination__page--active')}
                onClick={() => onPageChange(p)}
                aria-current={p === currentPage ? 'page' : undefined}
                aria-label={`Page ${p}`}
              >
                {p}
              </button>
            </li>
          )
        )}
      </ul>
      <button
        type="button"
        className="wc-pagination__btn"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Page suivante"
      >
        ›
      </button>
    </nav>
  );
}
