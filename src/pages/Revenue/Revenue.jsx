import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import MetricCard from '../../components/Cards/MetricCard';
import { formatCurrency } from '../../utils/formatters';
import '../../components/Charts/Charts.css';
import '../Pages.css';

/** Mock monthly revenue data */
const monthlyRevenue = [
  { month: 'May',  recurring: 18200, oneTime: 3200 },
  { month: 'Jun',  recurring: 20100, oneTime: 2800 },
  { month: 'Jul',  recurring: 22400, oneTime: 4100 },
  { month: 'Aug',  recurring: 21800, oneTime: 3600 },
  { month: 'Sep',  recurring: 25600, oneTime: 4800 },
  { month: 'Oct',  recurring: 28100, oneTime: 5200 },
  { month: 'Nov',  recurring: 30500, oneTime: 4400 },
  { month: 'Dec',  recurring: 29800, oneTime: 3900 },
  { month: 'Jan',  recurring: 33200, oneTime: 5800 },
  { month: 'Feb',  recurring: 36100, oneTime: 6200 },
  { month: 'Mar',  recurring: 39400, oneTime: 7100 },
  { month: 'Apr',  recurring: 42300, oneTime: 5900 },
];

function RevenueTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="chart-tooltip__value">
          <span className="chart-tooltip__dot" style={{ background: entry.color }} />
          {entry.name}: {formatCurrency(entry.value)}
        </p>
      ))}
    </div>
  );
}

/** Revenue metrics */
const metrics = [
  { title: 'MRR', value: 42300, change: 7.4, trend: 'up', icon: 'DollarSign', formatter: 'currency', accentColor: 'emerald' },
  { title: 'ARR', value: 507600, change: 18.2, trend: 'up', icon: 'CreditCard', formatter: 'currency', accentColor: 'indigo' },
  { title: 'ARPU', value: 33.92, change: 4.1, trend: 'up', icon: 'Users', formatter: 'currency', accentColor: 'violet' },
  { title: 'LTV', value: 847, change: 12.8, trend: 'up', icon: 'Activity', formatter: 'currency', accentColor: 'amber' },
];

/**
 * Revenue page — breakdown of recurring vs one-time revenue.
 */
export default function Revenue() {
  return (
    <div className="page" id="revenue-page">
      <div className="page__header">
        <h2 className="page__title">Revenue</h2>
        <p className="page__subtitle">Monthly revenue breakdown and key SaaS metrics</p>
      </div>

      {/* Revenue KPIs */}
      <div className="dashboard__metrics" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
        {metrics.map((metric, i) => (
          <MetricCard key={metric.title} {...metric} animationDelay={i * 80} />
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="chart-container" id="chart-monthly-revenue">
        <div className="chart-header">
          <div>
            <h3 className="chart-title">Monthly Revenue</h3>
            <p className="chart-subtitle">Recurring vs one-time revenue (12 months)</p>
          </div>
        </div>
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={monthlyRevenue} margin={{ top: 8, right: 8, left: -10, bottom: 0 }} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: '#55556a', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={(v) => formatCurrency(v, true)} tick={{ fill: '#55556a', fontSize: 11 }} axisLine={false} tickLine={false} width={55} />
              <Tooltip content={<RevenueTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Legend
                content={({ payload }) => (
                  <div className="chart-legend">
                    {payload?.map((entry) => (
                      <div key={entry.value} className="chart-legend__item">
                        <span className="chart-legend__dot" style={{ background: entry.color }} />
                        <span className="chart-legend__label">{entry.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              />
              <Bar dataKey="recurring" name="Recurring" fill="#6366f1" radius={[4, 4, 0, 0]} maxBarSize={28} />
              <Bar dataKey="oneTime" name="One-time" fill="#8b5cf6" radius={[4, 4, 0, 0]} maxBarSize={28} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
