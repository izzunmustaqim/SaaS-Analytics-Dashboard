/**
 * Tests for the useDashboardData custom hook.
 */
import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useDashboardData } from '../../src/hooks/useDashboardData';

describe('useDashboardData', () => {
  it('starts in loading state', () => {
    const { result } = renderHook(() => useDashboardData());
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('loads all data successfully', async () => {
    const { result } = renderHook(() => useDashboardData());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBeNull();
    expect(result.current.metrics.length).toBe(4);
    expect(result.current.revenue.length).toBe(30);
    expect(result.current.signups.length).toBe(12);
    expect(result.current.demographics.length).toBeGreaterThan(0);
    expect(result.current.recentSales.length).toBeGreaterThan(0);
  });

  it('provides a refetch function', async () => {
    const { result } = renderHook(() => useDashboardData());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(typeof result.current.refetch).toBe('function');
  });

  it('handles errors gracefully', async () => {
    // Mock the service to throw an error
    const mockModule = await import('../../src/services/dashboardService');
    const originalGetMetrics = mockModule.dashboardService.getMetrics;
    mockModule.dashboardService.getMetrics = vi.fn().mockRejectedValueOnce(
      new Error('Network error')
    );

    const { result } = renderHook(() => useDashboardData());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBe('Network error');

    // Restore
    mockModule.dashboardService.getMetrics = originalGetMetrics;
  });
});
