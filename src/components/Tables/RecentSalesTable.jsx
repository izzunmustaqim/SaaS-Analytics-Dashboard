import { formatCurrency, formatRelativeTime } from '../../utils/formatters';
import './RecentSalesTable.css';

/**
 * Recent Sales Table component.
 * Displays the latest transactions with customer info, plan badge, and amount.
 *
 * @param {{ data: Array<object> }} props
 */
export default function RecentSalesTable({ data = [] }) {
  return (
    <div className="sales-table-container animate-fade-in-up stagger-8" id="recent-sales">
      <div className="sales-table__header">
        <div>
          <h3 className="chart-title">Recent Sales</h3>
          <p className="chart-subtitle">Latest {data.length} transactions</p>
        </div>
      </div>

      <div className="sales-table__body">
        {data.length === 0 ? (
          <p className="sales-table__empty">No recent sales to display.</p>
        ) : (
          <ul className="sales-list">
            {data.map((sale, index) => (
              <li
                key={sale.id}
                className="sales-list__item"
                style={{ animationDelay: `${400 + index * 60}ms` }}
              >
                <div className="sales-list__left">
                  <div className={`sales-list__avatar sales-list__avatar--${index % 5}`}>
                    {sale.avatar}
                  </div>
                  <div className="sales-list__info">
                    <span className="sales-list__name">{sale.customer}</span>
                    <span className="sales-list__email">{sale.email}</span>
                  </div>
                </div>

                <div className="sales-list__right">
                  <span className={`sales-list__plan sales-list__plan--${sale.plan.toLowerCase()}`}>
                    {sale.plan}
                  </span>
                  <span className="sales-list__amount">
                    {sale.amount > 0 ? `+${formatCurrency(sale.amount)}` : 'Free'}
                  </span>
                  <span className="sales-list__time">{formatRelativeTime(sale.date)}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
