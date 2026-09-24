import { ReactNode, ThHTMLAttributes, TdHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Table.css';

export interface TableColumn<T> {
  key: string;
  header: ReactNode;
  accessor: (row: T) => ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: string;
  sortable?: boolean;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  rowKey: (row: T, index: number) => string;
  onRowClick?: (row: T) => void;
  emptyState?: ReactNode;
  caption?: string;
  density?: 'comfortable' | 'compact';
  className?: string;
}

export function Table<T>({
  columns,
  data,
  rowKey,
  onRowClick,
  emptyState,
  caption,
  density = 'comfortable',
  className,
}: TableProps<T>) {
  return (
    <div className={cn('wc-table-wrapper', className)}>
      <table className={cn('wc-table', `wc-table--${density}`)}>
        {caption && <caption className="wc-table__caption">{caption}</caption>}
        <thead className="wc-table__head">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                style={{ width: col.width, textAlign: col.align ?? 'left' }}
                className="wc-table__th"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="wc-table__body">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="wc-table__empty">
                {emptyState ?? 'Aucune donnée.'}
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={rowKey(row, i)}
                className={cn('wc-table__row', onRowClick && 'wc-table__row--clickable')}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
                tabIndex={onRowClick ? 0 : undefined}
                onKeyDown={
                  onRowClick
                    ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onRowClick(row);
                        }
                      }
                    : undefined
                }
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    style={{ textAlign: col.align ?? 'left' }}
                    className="wc-table__td"
                  >
                    {col.accessor(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
