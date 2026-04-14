/**
 * Dashboard Service Layer
 *
 * Abstracts data access behind async methods. Currently returns mock data.
 * To switch to a real API, update these methods to fetch() calls — zero
 * component changes required (Dependency Inversion Principle).
 */
import { revenueData } from '../data/revenue';
import { signupsData } from '../data/signups';
import { demographicsData } from '../data/demographics';
import { salesData } from '../data/sales';
import { METRICS_DATA, METRIC_CONFIGS } from '../utils/constants';

/**
 * Simulates an async delay to mimic network latency.
 * @param {number} ms - Delay in milliseconds.
 * @returns {Promise<void>}
 */
const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export const dashboardService = {
  /**
   * Fetch revenue time-series data (last 30 days).
   * @returns {Promise<Array<{date: string, revenue: number}>>}
   */
  async getRevenueData() {
    await delay(200);
    return [...revenueData];
  },

  /**
   * Fetch monthly signup breakdown (Free vs Pro).
   * @returns {Promise<Array<{month: string, free: number, pro: number}>>}
   */
  async getSignupsData() {
    await delay(250);
    return [...signupsData];
  },

  /**
   * Fetch user demographics by country.
   * @returns {Promise<Array<{name: string, value: number, color: string}>>}
   */
  async getDemographicsData() {
    await delay(180);
    return [...demographicsData];
  },

  /**
   * Fetch recent sales/transactions.
   * @returns {Promise<Array<object>>}
   */
  async getRecentSales() {
    await delay(220);
    return [...salesData];
  },

  /**
   * Fetch dashboard KPI metrics with config merged in.
   * @returns {Promise<Array<object>>}
   */
  async getMetrics() {
    await delay(150);
    return METRICS_DATA.map((metric) => {
      const config = METRIC_CONFIGS.find((c) => c.id === metric.id);
      return { ...metric, ...config };
    });
  },
};
