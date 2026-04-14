/**
 * Unit tests for formatting utility functions.
 */
import { describe, it, expect } from 'vitest';
import {
  formatCurrency,
  formatNumber,
  formatPercentage,
  formatDateShort,
  formatRelativeTime,
  formatChartDate,
} from '../../src/utils/formatters';

describe('formatCurrency', () => {
  it('formats a positive number as USD', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  it('formats zero', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  it('formats a large number in compact mode', () => {
    const result = formatCurrency(45231.89, true);
    expect(result).toMatch(/\$45/);
    expect(result).toMatch(/K/);
  });

  it('handles null gracefully', () => {
    expect(formatCurrency(null)).toBe('$0.00');
  });

  it('handles undefined gracefully', () => {
    expect(formatCurrency(undefined)).toBe('$0.00');
  });

  it('handles NaN gracefully', () => {
    expect(formatCurrency(NaN)).toBe('$0.00');
  });

  it('does not use compact for small numbers even when compact=true', () => {
    const result = formatCurrency(50, true);
    expect(result).toBe('$50.00');
  });
});

describe('formatNumber', () => {
  it('formats a number with commas', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('formats zero', () => {
    expect(formatNumber(0)).toBe('0');
  });

  it('handles null gracefully', () => {
    expect(formatNumber(null)).toBe('0');
  });

  it('handles NaN gracefully', () => {
    expect(formatNumber(NaN)).toBe('0');
  });
});

describe('formatPercentage', () => {
  it('formats positive percentage with + sign', () => {
    expect(formatPercentage(20.1)).toBe('+20.1%');
  });

  it('formats negative percentage with - sign', () => {
    expect(formatPercentage(-5.3)).toBe('-5.3%');
  });

  it('formats zero percentage', () => {
    expect(formatPercentage(0)).toBe('0.0%');
  });

  it('hides sign when showSign is false', () => {
    expect(formatPercentage(20.1, false)).toBe('20.1%');
  });

  it('handles null gracefully', () => {
    expect(formatPercentage(null)).toBe('0%');
  });

  it('handles NaN gracefully', () => {
    expect(formatPercentage(NaN)).toBe('0%');
  });
});

describe('formatDateShort', () => {
  it('formats an ISO date string', () => {
    const result = formatDateShort('2026-04-14');
    expect(result).toMatch(/Apr/);
    expect(result).toMatch(/14/);
  });

  it('returns empty string for empty input', () => {
    expect(formatDateShort('')).toBe('');
  });

  it('returns empty string for null', () => {
    expect(formatDateShort(null)).toBe('');
  });
});

describe('formatRelativeTime', () => {
  it('returns empty string for empty input', () => {
    expect(formatRelativeTime('')).toBe('');
  });

  it('returns empty string for null', () => {
    expect(formatRelativeTime(null)).toBe('');
  });

  it('returns "Just now" for very recent dates', () => {
    const now = new Date().toISOString();
    expect(formatRelativeTime(now)).toBe('Just now');
  });

  it('returns minutes ago for recent dates', () => {
    const fiveMinAgo = new Date(Date.now() - 5 * 60000).toISOString();
    expect(formatRelativeTime(fiveMinAgo)).toBe('5m ago');
  });

  it('returns hours ago for older dates', () => {
    const threeHoursAgo = new Date(Date.now() - 3 * 3600000).toISOString();
    expect(formatRelativeTime(threeHoursAgo)).toBe('3h ago');
  });

  it('returns days ago for multi-day gaps', () => {
    const twoDaysAgo = new Date(Date.now() - 2 * 86400000).toISOString();
    expect(formatRelativeTime(twoDaysAgo)).toBe('2d ago');
  });
});

describe('formatChartDate', () => {
  it('formats a date for chart labels', () => {
    const result = formatChartDate('2026-03-15');
    expect(result).toMatch(/Mar/);
    expect(result).toMatch(/15/);
  });

  it('returns empty string for empty input', () => {
    expect(formatChartDate('')).toBe('');
  });
});
