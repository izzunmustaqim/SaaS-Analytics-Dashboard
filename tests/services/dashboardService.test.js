/**
 * Unit tests for the dashboard service layer.
 */
import { describe, it, expect } from 'vitest';
import { dashboardService } from '../../src/services/dashboardService';

describe('dashboardService', () => {
  describe('getRevenueData', () => {
    it('returns an array of revenue data points', async () => {
      const data = await dashboardService.getRevenueData();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBe(30);
    });

    it('each data point has date and revenue properties', async () => {
      const data = await dashboardService.getRevenueData();
      data.forEach((point) => {
        expect(point).toHaveProperty('date');
        expect(point).toHaveProperty('revenue');
        expect(typeof point.date).toBe('string');
        expect(typeof point.revenue).toBe('number');
      });
    });

    it('returns a new array each time (not a reference)', async () => {
      const data1 = await dashboardService.getRevenueData();
      const data2 = await dashboardService.getRevenueData();
      expect(data1).not.toBe(data2);
      expect(data1).toEqual(data2);
    });
  });

  describe('getSignupsData', () => {
    it('returns 12 months of signup data', async () => {
      const data = await dashboardService.getSignupsData();
      expect(data).toHaveLength(12);
    });

    it('each data point has month, free, and pro properties', async () => {
      const data = await dashboardService.getSignupsData();
      data.forEach((point) => {
        expect(point).toHaveProperty('month');
        expect(point).toHaveProperty('free');
        expect(point).toHaveProperty('pro');
        expect(typeof point.free).toBe('number');
        expect(typeof point.pro).toBe('number');
      });
    });
  });

  describe('getDemographicsData', () => {
    it('returns an array of demographics data', async () => {
      const data = await dashboardService.getDemographicsData();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
    });

    it('each data point has name, value, and color', async () => {
      const data = await dashboardService.getDemographicsData();
      data.forEach((point) => {
        expect(point).toHaveProperty('name');
        expect(point).toHaveProperty('value');
        expect(point).toHaveProperty('color');
        expect(typeof point.value).toBe('number');
      });
    });

    it('values sum to 100%', async () => {
      const data = await dashboardService.getDemographicsData();
      const total = data.reduce((sum, d) => sum + d.value, 0);
      expect(total).toBe(100);
    });
  });

  describe('getRecentSales', () => {
    it('returns an array of sales records', async () => {
      const data = await dashboardService.getRecentSales();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
    });

    it('each sale has required fields', async () => {
      const data = await dashboardService.getRecentSales();
      data.forEach((sale) => {
        expect(sale).toHaveProperty('id');
        expect(sale).toHaveProperty('customer');
        expect(sale).toHaveProperty('email');
        expect(sale).toHaveProperty('plan');
        expect(sale).toHaveProperty('amount');
        expect(sale).toHaveProperty('date');
        expect(sale).toHaveProperty('avatar');
      });
    });

    it('plan is either Free or Pro', async () => {
      const data = await dashboardService.getRecentSales();
      data.forEach((sale) => {
        expect(['Free', 'Pro']).toContain(sale.plan);
      });
    });
  });

  describe('getMetrics', () => {
    it('returns merged metric data with config', async () => {
      const data = await dashboardService.getMetrics();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBe(4);
    });

    it('each metric has both data and config fields', async () => {
      const data = await dashboardService.getMetrics();
      data.forEach((metric) => {
        // Data fields
        expect(metric).toHaveProperty('value');
        expect(metric).toHaveProperty('change');
        expect(metric).toHaveProperty('trend');
        // Config fields
        expect(metric).toHaveProperty('title');
        expect(metric).toHaveProperty('icon');
        expect(metric).toHaveProperty('formatter');
        expect(metric).toHaveProperty('accentColor');
      });
    });

    it('trend is either up or down', async () => {
      const data = await dashboardService.getMetrics();
      data.forEach((metric) => {
        expect(['up', 'down']).toContain(metric.trend);
      });
    });
  });
});
