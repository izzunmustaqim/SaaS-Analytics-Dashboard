import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from 'recharts';
import { formatCurrency, formatChartDate } from '../../utils/formatters';

/**
 * Custom tooltip for the revenue chart.
 */
function RevenueTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{formatChartDate(label)}</p>
      <p className="chart-tooltip__value">
        <span className="chart-tooltip__dot chart-tooltip__dot--indigo" />
        {formatCurrency(payload[0].value)}
      </p>
    </div>
  );
}

/**
 * Revenue Line/Area Chart — shows daily revenue over the last 30 days.
 *
 * @param {{ data: Array<{date: string, revenue: number}> }} props
 */
export default function RevenueLineChart({ data = [] }) {
  return (
    <div className="chart-container animate-fade-in-up stagger-5" id="chart-revenue">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Revenue Growth</h3>
          <p className="chart-subtitle">Daily revenue over the last 30 days</p>
        </div>
      </div>
      <div className="chart-body">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.04)"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tickFormatter={formatChartDate}
              tick={{ fill: '#55556a', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
              tickCount={6}
            />
            <YAxis
              tickFormatter={(v) => formatCurrency(v, true)}
              tick={{ fill: '#55556a', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={55}
            />
            <Tooltip content={<RevenueTooltip />} cursor={{ stroke: 'rgba(99,102,241,0.2)' }} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              strokeWidth={2.5}
              fill="url(#revenueGradient)"
              dot={false}
              activeDot={{
                r: 5,
                fill: '#6366f1',
                stroke: '#111118',
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
