/**
 * Component tests for RecentSalesTable.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RecentSalesTable from '../../src/components/Tables/RecentSalesTable';

const mockSales = [
  {
    id: 'TXN-001',
    customer: 'Olivia Martin',
    email: 'olivia@example.com',
    plan: 'Pro',
    amount: 49.99,
    date: '2026-04-14T10:32:00Z',
    avatar: 'OM',
  },
  {
    id: 'TXN-002',
    customer: 'Jackson Lee',
    email: 'jackson@example.com',
    plan: 'Free',
    amount: 0.0,
    date: '2026-04-14T09:15:00Z',
    avatar: 'JL',
  },
];

describe('RecentSalesTable', () => {
  it('renders the section title', () => {
    render(<RecentSalesTable data={mockSales} />);
    expect(screen.getByText('Recent Sales')).toBeInTheDocument();
  });

  it('renders the transaction count subtitle', () => {
    render(<RecentSalesTable data={mockSales} />);
    expect(screen.getByText('Latest 2 transactions')).toBeInTheDocument();
  });

  it('renders customer names', () => {
    render(<RecentSalesTable data={mockSales} />);
    expect(screen.getByText('Olivia Martin')).toBeInTheDocument();
    expect(screen.getByText('Jackson Lee')).toBeInTheDocument();
  });

  it('renders customer emails', () => {
    render(<RecentSalesTable data={mockSales} />);
    expect(screen.getByText('olivia@example.com')).toBeInTheDocument();
    expect(screen.getByText('jackson@example.com')).toBeInTheDocument();
  });

  it('renders avatar initials', () => {
    render(<RecentSalesTable data={mockSales} />);
    expect(screen.getByText('OM')).toBeInTheDocument();
    expect(screen.getByText('JL')).toBeInTheDocument();
  });

  it('renders plan badges', () => {
    render(<RecentSalesTable data={mockSales} />);
    expect(screen.getByText('Pro')).toBeInTheDocument();
    // "Free" appears as both plan badge and amount display
    const freeElements = screen.getAllByText('Free');
    expect(freeElements.length).toBeGreaterThanOrEqual(1);
  });

  it('renders formatted amount for Pro plans', () => {
    render(<RecentSalesTable data={mockSales} />);
    expect(screen.getByText('+$49.99')).toBeInTheDocument();
  });

  it('renders "Free" for zero-amount transactions', () => {
    render(<RecentSalesTable data={mockSales} />);
    // Email "Free" (plan badge) plus the amount "Free"
    const freeElements = screen.getAllByText('Free');
    expect(freeElements.length).toBeGreaterThanOrEqual(2);
  });

  it('shows empty state when no data', () => {
    render(<RecentSalesTable data={[]} />);
    expect(screen.getByText('No recent sales to display.')).toBeInTheDocument();
  });

  it('has the correct id', () => {
    const { container } = render(<RecentSalesTable data={mockSales} />);
    expect(container.querySelector('#recent-sales')).toBeInTheDocument();
  });
});
