/**
 * Formatting utility functions.
 * All display-related transformations live here — components stay clean.
 */

/**
 * Format a number as USD currency.
 * @param {number} value - The numeric value to format.
 * @param {boolean} [compact=false] - If true, use compact notation (e.g., $45.2K).
 * @returns {string} Formatted currency string.
 */
export function formatCurrency(value, compact = false) {
  if (value == null || isNaN(value)) return '$0.00';

  if (compact && Math.abs(value) >= 1000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value);
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Format a number with commas.
 * @param {number} value - The numeric value.
 * @returns {string} Formatted number string.
 */
export function formatNumber(value) {
  if (value == null || isNaN(value)) return '0';
  return new Intl.NumberFormat('en-US').format(value);
}

/**
 * Format a percentage value.
 * @param {number} value - The percentage (e.g., 20.1 for 20.1%).
 * @param {boolean} [showSign=true] - Whether to show +/- sign.
 * @returns {string} Formatted percentage string.
 */
export function formatPercentage(value, showSign = true) {
  if (value == null || isNaN(value)) return '0%';
  const sign = showSign && value > 0 ? '+' : '';
  return `${sign}${value.toFixed(1)}%`;
}

/**
 * Format an ISO date string to a readable short format.
 * @param {string} dateString - ISO date string.
 * @returns {string} Formatted date (e.g., "Apr 14").
 */
export function formatDateShort(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/**
 * Format an ISO date string to a relative time (e.g., "2h ago").
 * @param {string} dateString - ISO date string.
 * @returns {string} Relative time string.
 */
export function formatRelativeTime(dateString) {
  if (!dateString) return '';

  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDateShort(dateString);
}

/**
 * Format a chart date label (abbreviated).
 * @param {string} dateString - ISO date string.
 * @returns {string} Abbreviated date (e.g., "Mar 15").
 */
export function formatChartDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
