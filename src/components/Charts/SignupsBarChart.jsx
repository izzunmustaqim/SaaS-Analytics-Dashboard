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
import { formatNumber } from '../../utils/formatters';

/**
 * Custom tooltip for the signups bar chart.
 */
function SignupsTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="chart-tooltip__value">
          <span
            className="chart-tooltip__dot"
            style={{ background: entry.color }}
          />
          {entry.name}: {formatNumber(entry.value)}
        </p>
      ))}
    </div>
  );
}

/**
 * Custom legend renderer.
 */
function SignupsLegend({ payload }) {
  return (
    <div className="chart-legend">
      {payload?.map((entry) => (
        <div key={entry.value} className="chart-legend__item">
          <span
            className="chart-legend__dot"
            style={{ background: entry.color }}
          />
          <span className="chart-legend__label">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * Signups Bar Chart — compares Free vs Pro tier signups by month.
 *
 * @param {{ data: Array<{month: string, free: number, pro: number}> }} props
 */
export default function SignupsBarChart({ data = [] }) {
  return (
    <div className="chart-container animate-fade-in-up stagger-6" id="chart-signups">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">User Signups</h3>
          <p className="chart-subtitle">Free vs Pro tier comparison</p>
        </div>
      </div>
      <div className="chart-body">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 8, right: 8, left: -10, bottom: 0 }} barGap={4}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.04)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tick={{ fill: '#55556a', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#55556a', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip content={<SignupsTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
            <Legend content={<SignupsLegend />} />
            <Bar
              dataKey="free"
              name="Free"
              fill="#8b5cf6"
              radius={[4, 4, 0, 0]}
              maxBarSize={28}
            />
            <Bar
              dataKey="pro"
              name="Pro"
              fill="#6366f1"
              radius={[4, 4, 0, 0]}
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
