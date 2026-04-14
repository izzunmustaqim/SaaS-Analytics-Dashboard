/**
 * Application-wide constants.
 */

/** Navigation menu items for the sidebar. */
export const NAV_ITEMS = [
  { id: 'overview',  label: 'Overview',      icon: 'LayoutDashboard', active: true },
  { id: 'analytics', label: 'Analytics',     icon: 'BarChart3' },
  { id: 'customers', label: 'Customers',     icon: 'Users' },
  { id: 'products',  label: 'Products',      icon: 'Package' },
  { id: 'revenue',   label: 'Revenue',       icon: 'DollarSign' },
  { id: 'settings',  label: 'Settings',      icon: 'Settings' },
];

/** Metric card configurations. */
export const METRIC_CONFIGS = [
  {
    id: 'total-revenue',
    title: 'Total Revenue',
    icon: 'DollarSign',
    formatter: 'currency',
    accentColor: 'emerald',
  },
  {
    id: 'active-users',
    title: 'Active Users',
    icon: 'Users',
    formatter: 'number',
    accentColor: 'indigo',
  },
  {
    id: 'subscriptions',
    title: 'Subscriptions',
    icon: 'CreditCard',
    formatter: 'number',
    accentColor: 'violet',
  },
  {
    id: 'churn-rate',
    title: 'Churn Rate',
    icon: 'Activity',
    formatter: 'percentage',
    accentColor: 'amber',
  },
];

/** Dashboard metric raw values. */
export const METRICS_DATA = [
  {
    id: 'total-revenue',
    value: 45231.89,
    change: 20.1,
    trend: 'up',
  },
  {
    id: 'active-users',
    value: 2350,
    change: 12.5,
    trend: 'up',
  },
  {
    id: 'subscriptions',
    value: 1247,
    change: 8.2,
    trend: 'up',
  },
  {
    id: 'churn-rate',
    value: 2.4,
    change: -0.3,
    trend: 'down',
  },
];
