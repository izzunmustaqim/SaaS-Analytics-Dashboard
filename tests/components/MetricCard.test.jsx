/**
 * Component tests for MetricCard.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MetricCard from '../../src/components/Cards/MetricCard';

describe('MetricCard', () => {
  const defaultProps = {
    title: 'Total Revenue',
    value: 45231.89,
    change: 20.1,
    trend: 'up',
    icon: 'DollarSign',
    formatter: 'currency',
    accentColor: 'emerald',
  };

  it('renders the title', () => {
    render(<MetricCard {...defaultProps} />);
    expect(screen.getByText('Total Revenue')).toBeInTheDocument();
  });

  it('renders formatted currency value', () => {
    render(<MetricCard {...defaultProps} />);
    expect(screen.getByText('$45,231.89')).toBeInTheDocument();
  });

  it('renders percentage change', () => {
    render(<MetricCard {...defaultProps} />);
    expect(screen.getByText('+20.1%')).toBeInTheDocument();
  });

  it('renders "vs last month" label', () => {
    render(<MetricCard {...defaultProps} />);
    expect(screen.getByText('vs last month')).toBeInTheDocument();
  });

  it('applies the correct accent class', () => {
    const { container } = render(<MetricCard {...defaultProps} />);
    const card = container.querySelector('.metric-card');
    expect(card).toHaveClass('metric-card--emerald');
  });

  it('renders with number formatter', () => {
    render(<MetricCard {...defaultProps} value={2350} formatter="number" />);
    expect(screen.getByText('2,350')).toBeInTheDocument();
  });

  it('renders with percentage formatter', () => {
    render(<MetricCard {...defaultProps} value={2.4} formatter="percentage" />);
    expect(screen.getByText('2.4%')).toBeInTheDocument();
  });

  it('shows downward trend for negative change', () => {
    const { container } = render(
      <MetricCard {...defaultProps} change={-0.3} trend="down" />
    );
    const trendEl = container.querySelector('.metric-card__trend');
    expect(trendEl).toHaveClass('metric-card__trend--down');
  });

  it('has a unique id based on title', () => {
    const { container } = render(<MetricCard {...defaultProps} />);
    const card = container.querySelector('#metric-total-revenue');
    expect(card).toBeInTheDocument();
  });

  it('applies animation delay', () => {
    const { container } = render(<MetricCard {...defaultProps} animationDelay={200} />);
    const card = container.querySelector('.metric-card');
    expect(card.style.animationDelay).toBe('200ms');
  });
});
