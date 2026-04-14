import { useState, useEffect, useCallback } from 'react';
import { dashboardService } from '../services/dashboardService';

/**
 * Custom hook to fetch all dashboard data.
 * Encapsulates loading state, error handling, and data fetching logic.
 *
 * @returns {{
 *   metrics: Array,
 *   revenue: Array,
 *   signups: Array,
 *   demographics: Array,
 *   recentSales: Array,
 *   isLoading: boolean,
 *   error: string|null,
 *   refetch: Function
 * }}
 */
export function useDashboardData() {
  const [data, setData] = useState({
    metrics: [],
    revenue: [],
    signups: [],
    demographics: [],
    recentSales: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const [metrics, revenue, signups, demographics, recentSales] =
        await Promise.all([
          dashboardService.getMetrics(),
          dashboardService.getRevenueData(),
          dashboardService.getSignupsData(),
          dashboardService.getDemographicsData(),
          dashboardService.getRecentSales(),
        ]);

      setData({ metrics, revenue, signups, demographics, recentSales });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Failed to load dashboard data';
      setError(message);
      console.error('[useDashboardData] Error fetching data:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...data,
    isLoading,
    error,
    refetch: fetchData,
  };
}
