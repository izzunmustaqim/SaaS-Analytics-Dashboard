/**
 * Mock revenue data - daily revenue for the last 30 days.
 * Simulates a growing SaaS business with natural daily fluctuations.
 */
const generateRevenueData = () => {
  const data = [];
  const baseDate = new Date('2026-03-15');
  const baseRevenue = 980;

  for (let i = 0; i < 30; i++) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + i);

    // Simulate growth trend with daily variance
    const trend = i * 18;
    const dayOfWeek = date.getDay();
    const weekendDip = (dayOfWeek === 0 || dayOfWeek === 6) ? -120 : 0;
    const noise = Math.sin(i * 1.3) * 80 + Math.cos(i * 0.7) * 60;
    const revenue = Math.round(baseRevenue + trend + weekendDip + noise);

    data.push({
      date: date.toISOString().split('T')[0],
      revenue: Math.max(revenue, 600),
    });
  }

  return data;
};

export const revenueData = generateRevenueData();
