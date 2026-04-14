import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';
import { formatCurrency, formatNumber, formatPercentage } from '../../utils/formatters';
import './MetricCard.css';

/** Map icon names to Lucide components */
const iconMap = {
  DollarSign,
  Users,
  CreditCard,
  Activity,
};

/** Map formatter name to function */
const formatterMap = {
  currency: (v) => formatCurrency(v, false),
  number: (v) => formatNumber(v),
  percentage: (v) => `${v}%`,
};

/**
 * Metric KPI card component.
 * Displays a single dashboard metric with trend indicator.
 *
 * @param {{ title, value, change, trend, icon, formatter, accentColor, animationDelay }} props
 */
export default function MetricCard({
  title,
  value,
  change,
  trend,
  icon,
  formatter = 'number',
  accentColor = 'indigo',
  animationDelay = 0,
}) {
  const Icon = iconMap[icon];
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;
  const displayValue = formatterMap[formatter]
    ? formatterMap[formatter](value)
    : value;
  const trendClass = trend === 'up' ? 'metric-card__trend--up' : 'metric-card__trend--down';

  return (
    <article
      className={`metric-card metric-card--${accentColor} animate-fade-in-up`}
      style={{ animationDelay: `${animationDelay}ms` }}
      id={`metric-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="metric-card__header">
        <span className="metric-card__title">{title}</span>
        {Icon && (
          <div className={`metric-card__icon-wrapper metric-card__icon-wrapper--${accentColor}`}>
            <Icon size={16} />
          </div>
        )}
      </div>

      <div className="metric-card__body">
        <span className="metric-card__value">{displayValue}</span>
        <div className={`metric-card__trend ${trendClass}`}>
          <TrendIcon size={14} />
          <span>{formatPercentage(Math.abs(change))}</span>
          <span className="metric-card__trend-label">vs last month</span>
        </div>
      </div>

      {/* Decorative glow */}
      <div className={`metric-card__glow metric-card__glow--${accentColor}`} />
    </article>
  );
}
