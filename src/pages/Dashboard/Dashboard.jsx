import MetricCard from '../../components/Cards/MetricCard';
import RevenueLineChart from '../../components/Charts/RevenueLineChart';
import SignupsBarChart from '../../components/Charts/SignupsBarChart';
import DemographicsPieChart from '../../components/Charts/DemographicsPieChart';
import RecentSalesTable from '../../components/Tables/RecentSalesTable';
import { useDashboardData } from '../../hooks/useDashboardData';
import '../../components/Charts/Charts.css';
import './Dashboard.css';

/**
 * Dashboard page — the main overview page.
 * Orchestrates data fetching and renders all dashboard sections.
 */
export default function Dashboard() {
  const { metrics, revenue, signups, demographics, recentSales, isLoading, error, refetch } =
    useDashboardData();

  if (error) {
    return (
      <div className="dashboard-error" id="dashboard-error">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button className="dashboard-error__retry" onClick={refetch}>
          Try Again
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="dashboard-loading" id="dashboard-loading">
        <div className="dashboard-loading__spinner" />
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard" id="dashboard-page">
      {/* Metric Cards */}
      <section className="dashboard__metrics" aria-label="Key metrics">
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
            icon={metric.icon}
            formatter={metric.formatter}
            accentColor={metric.accentColor}
            animationDelay={index * 80}
          />
        ))}
      </section>

      {/* Charts Row 1: Revenue + Signups */}
      <section className="dashboard__charts-row" aria-label="Revenue and signups charts">
        <div className="dashboard__chart-wide">
          <RevenueLineChart data={revenue} />
        </div>
        <div className="dashboard__chart-narrow">
          <SignupsBarChart data={signups} />
        </div>
      </section>

      {/* Charts Row 2: Demographics + Recent Sales */}
      <section className="dashboard__charts-row" aria-label="Demographics and recent sales">
        <div className="dashboard__chart-narrow">
          <DemographicsPieChart data={demographics} />
        </div>
        <div className="dashboard__chart-wide">
          <RecentSalesTable data={recentSales} />
        </div>
      </section>
    </div>
  );
}
