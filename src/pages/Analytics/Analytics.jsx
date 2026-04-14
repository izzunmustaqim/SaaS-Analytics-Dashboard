import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { formatCurrency, formatNumber } from '../../utils/formatters';
import '../../components/Charts/Charts.css';
import '../Pages.css';

/** Mock weekly active users data */
const weeklyData = [
  { week: 'W1', users: 1820, sessions: 4200 },
  { week: 'W2', users: 1950, sessions: 4580 },
  { week: 'W3', users: 2100, sessions: 4920 },
  { week: 'W4', users: 1980, sessions: 4700 },
  { week: 'W5', users: 2200, sessions: 5100 },
  { week: 'W6', users: 2350, sessions: 5450 },
  { week: 'W7', users: 2280, sessions: 5300 },
  { week: 'W8', users: 2500, sessions: 5800 },
];

/** Mock conversion funnel */
const funnelData = [
  { stage: 'Visitors', count: 12500 },
  { stage: 'Sign-ups', count: 3200 },
  { stage: 'Activated', count: 1800 },
  { stage: 'Subscribed', count: 720 },
  { stage: 'Retained', count: 580 },
];

function AnalyticsTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="chart-tooltip__value">
          <span className="chart-tooltip__dot" style={{ background: entry.color }} />
          {entry.name}: {formatNumber(entry.value)}
        </p>
      ))}
    </div>
  );
}

/**
 * Analytics page — deeper dive into user engagement metrics.
 */
export default function Analytics() {
  return (
    <div className="page" id="analytics-page">
      <div className="page__header">
        <h2 className="page__title">Analytics</h2>
        <p className="page__subtitle">Deep dive into user engagement and conversion metrics</p>
      </div>

      <div className="page__grid page__grid--2">
        {/* Weekly Active Users */}
        <div className="chart-container" id="chart-weekly-users">
          <div className="chart-header">
            <div>
              <h3 className="chart-title">Weekly Active Users</h3>
              <p className="chart-subtitle">Users and sessions over 8 weeks</p>
            </div>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={weeklyData} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="sessionsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="week" tick={{ fill: '#55556a', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#55556a', fontSize: 11 }} axisLine={false} tickLine={false} width={45} />
                <Tooltip content={<AnalyticsTooltip />} />
                <Area type="monotone" dataKey="sessions" stroke="#10b981" strokeWidth={2} fill="url(#sessionsGrad)" dot={false} name="Sessions" />
                <Area type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={2} fill="url(#usersGrad)" dot={false} name="Users" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="chart-container" id="chart-funnel">
          <div className="chart-header">
            <div>
              <h3 className="chart-title">Conversion Funnel</h3>
              <p className="chart-subtitle">From visitors to retained customers</p>
            </div>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={funnelData} layout="vertical" margin={{ top: 8, right: 20, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
                <XAxis type="number" tick={{ fill: '#55556a', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="stage" tick={{ fill: '#8585a0', fontSize: 12 }} axisLine={false} tickLine={false} width={85} />
                <Tooltip content={<AnalyticsTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar dataKey="count" name="Users" fill="#6366f1" radius={[0, 6, 6, 0]} maxBarSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
