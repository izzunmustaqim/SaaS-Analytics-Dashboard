/**
 * Component tests for SignupsBarChart.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SignupsBarChart from '../../src/components/Charts/SignupsBarChart';

const mockData = [
  { month: 'Jan', free: 560, pro: 132 },
  { month: 'Feb', free: 610, pro: 145 },
];

describe('SignupsBarChart', () => {
  it('renders the chart title', () => {
    render(<SignupsBarChart data={mockData} />);
    expect(screen.getByText('User Signups')).toBeInTheDocument();
  });

  it('renders the chart subtitle', () => {
    render(<SignupsBarChart data={mockData} />);
    expect(screen.getByText('Free vs Pro tier comparison')).toBeInTheDocument();
  });

  it('renders without crashing when data is empty', () => {
    const { container } = render(<SignupsBarChart data={[]} />);
    expect(container.querySelector('#chart-signups')).toBeInTheDocument();
  });

  it('renders without crashing when data is not provided', () => {
    const { container } = render(<SignupsBarChart />);
    expect(container.querySelector('#chart-signups')).toBeInTheDocument();
  });

  it('has the correct id', () => {
    const { container } = render(<SignupsBarChart data={mockData} />);
    expect(container.querySelector('#chart-signups')).toBeInTheDocument();
  });
});
