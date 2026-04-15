// Types for the dashboard data layer

export interface RevenueDataPoint {
  date: string;
  revenue: number;
}

export interface SignupDataPoint {
  month: string;
  free: number;
  pro: number;
}

export interface DemographicDataPoint {
  name: string;
  value: number;
  color: string;
}

export interface Sale {
  id: string;
  customer: string;
  email: string;
  plan: "Free" | "Pro";
  amount: number;
  date: string;
  avatar: string;
}

export interface Metric {
  title: string;
  value: number;
  change: number;
  trend: "up" | "down";
  icon: string;
  formatter: "currency" | "number" | "percentage";
  accentColor: string;
}
