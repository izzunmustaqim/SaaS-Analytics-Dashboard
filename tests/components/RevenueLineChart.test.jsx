/**
 * Component tests for RevenueLineChart.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RevenueLineChart from '../../src/components/Charts/RevenueLineChart';

const mockData = [
  { date: '2026-03-15', revenue: 1200 },
  { date: '2026-03-16', revenue: 1350 },
  { date: '2026-03-17', revenue: 1100 },
];

describe('RevenueLineChart', () => {
  it('renders the chart title', () => {
    render(<RevenueLineChart data={mockData} />);
    expect(screen.getByText('Revenue Growth')).toBeInTheDocument();
  });

  it('renders the chart subtitle', () => {
    render(<RevenueLineChart data={mockData} />);
    expect(screen.getByText('Daily revenue over the last 30 days')).toBeInTheDocument();
  });

  it('renders without crashing when data is empty', () => {
    const { container } = render(<RevenueLineChart data={[]} />);
    expect(container.querySelector('#chart-revenue')).toBeInTheDocument();
  });

  it('renders without crashing when data is not provided', () => {
    const { container } = render(<RevenueLineChart />);
    expect(container.querySelector('#chart-revenue')).toBeInTheDocument();
  });

  it('has the correct id for testing', () => {
    const { container } = render(<RevenueLineChart data={mockData} />);
    expect(container.querySelector('#chart-revenue')).toBeInTheDocument();
  });
});
