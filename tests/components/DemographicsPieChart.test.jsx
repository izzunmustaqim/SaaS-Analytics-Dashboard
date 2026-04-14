/**
 * Component tests for DemographicsPieChart.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DemographicsPieChart from '../../src/components/Charts/DemographicsPieChart';

const mockData = [
  { name: 'United States', value: 35, color: '#6366f1' },
  { name: 'United Kingdom', value: 18, color: '#8b5cf6' },
  { name: 'Germany', value: 14, color: '#10b981' },
];

describe('DemographicsPieChart', () => {
  it('renders the chart title', () => {
    render(<DemographicsPieChart data={mockData} />);
    expect(screen.getByText('User Demographics')).toBeInTheDocument();
  });

  it('renders the chart subtitle', () => {
    render(<DemographicsPieChart data={mockData} />);
    expect(screen.getByText('Distribution by country')).toBeInTheDocument();
  });

  it('renders the center label with country count', () => {
    render(<DemographicsPieChart data={mockData} />);
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('Countries')).toBeInTheDocument();
  });

  it('renders legend items', () => {
    render(<DemographicsPieChart data={mockData} />);
    expect(screen.getByText('United States')).toBeInTheDocument();
    expect(screen.getByText('United Kingdom')).toBeInTheDocument();
    expect(screen.getByText('Germany')).toBeInTheDocument();
  });

  it('renders percentage values in legend', () => {
    render(<DemographicsPieChart data={mockData} />);
    expect(screen.getByText('35%')).toBeInTheDocument();
    expect(screen.getByText('18%')).toBeInTheDocument();
    expect(screen.getByText('14%')).toBeInTheDocument();
  });

  it('renders without crashing when data is empty', () => {
    const { container } = render(<DemographicsPieChart data={[]} />);
    expect(container.querySelector('#chart-demographics')).toBeInTheDocument();
  });

  it('has the correct id', () => {
    const { container } = render(<DemographicsPieChart data={mockData} />);
    expect(container.querySelector('#chart-demographics')).toBeInTheDocument();
  });
});
