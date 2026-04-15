import MetricCard from "@/components/dashboard/metric-card";
import RevenueChart from "@/components/dashboard/revenue-chart";
import SignupsChart from "@/components/dashboard/signups-chart";
import DemographicsChart from "@/components/dashboard/demographics-chart";
import RecentSales from "@/components/dashboard/recent-sales";
import { metricsData } from "@/lib/data/metrics";
import { revenueData } from "@/lib/data/revenue";
import { signupsData } from "@/lib/data/signups";
import { demographicsData } from "@/lib/data/demographics";
import { salesData } from "@/lib/data/sales";

export default function OverviewPage() {
  return (
    <div className="space-y-6 max-w-[1400px]">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metricsData.map((metric) => (
          <MetricCard key={metric.title} metric={metric} />
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-5">
        <div className="lg:col-span-4">
          <RevenueChart data={revenueData} />
        </div>
        <div className="lg:col-span-3">
          <SignupsChart data={signupsData} />
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-5">
        <div className="lg:col-span-3">
          <DemographicsChart data={demographicsData} />
        </div>
        <div className="lg:col-span-4">
          <RecentSales data={salesData} />
        </div>
      </div>
    </div>
  );
}
