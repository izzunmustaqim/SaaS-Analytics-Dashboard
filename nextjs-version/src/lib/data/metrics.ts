import type { Metric } from "@/lib/types";

export const metricsData: Metric[] = [
  { title: "Total Revenue", value: 45231.89, change: 20.1, trend: "up", icon: "DollarSign", formatter: "currency", accentColor: "emerald" },
  { title: "Active Users", value: 2350, change: 12.5, trend: "up", icon: "Users", formatter: "number", accentColor: "indigo" },
  { title: "Subscriptions", value: 1247, change: 8.2, trend: "up", icon: "CreditCard", formatter: "number", accentColor: "violet" },
  { title: "Churn Rate", value: 2.4, change: -0.3, trend: "down", icon: "Activity", formatter: "percentage", accentColor: "amber" },
];
