import type { RevenueDataPoint } from "@/lib/types";

/** Generate 30 days of revenue data with realistic growth, noise, and weekend dips */
function generateRevenueData(): RevenueDataPoint[] {
  const data: RevenueDataPoint[] = [];
  const baseRevenue = 1200;
  const growthRate = 1.015;

  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const dayOfWeek = date.getDay();
    const weekendDip = dayOfWeek === 0 || dayOfWeek === 6 ? 0.7 : 1;
    const noise = 0.85 + Math.random() * 0.3;
    const growth = Math.pow(growthRate, 30 - i);
    const revenue = Math.round(baseRevenue * growth * weekendDip * noise * 100) / 100;

    data.push({
      date: date.toISOString().split("T")[0],
      revenue,
    });
  }
  return data;
}

export const revenueData: RevenueDataPoint[] = generateRevenueData();
