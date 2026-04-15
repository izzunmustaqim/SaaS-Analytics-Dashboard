"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import MetricCard from "@/components/dashboard/metric-card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { formatCurrency } from "@/lib/formatters";
import type { Metric } from "@/lib/types";

const monthlyRevenue = [
  { month: "May", recurring: 18200, oneTime: 3200 },
  { month: "Jun", recurring: 20100, oneTime: 2800 },
  { month: "Jul", recurring: 22400, oneTime: 4100 },
  { month: "Aug", recurring: 21800, oneTime: 3600 },
  { month: "Sep", recurring: 25600, oneTime: 4800 },
  { month: "Oct", recurring: 28100, oneTime: 5200 },
  { month: "Nov", recurring: 30500, oneTime: 4400 },
  { month: "Dec", recurring: 29800, oneTime: 3900 },
  { month: "Jan", recurring: 33200, oneTime: 5800 },
  { month: "Feb", recurring: 36100, oneTime: 6200 },
  { month: "Mar", recurring: 39400, oneTime: 7100 },
  { month: "Apr", recurring: 42300, oneTime: 5900 },
];

const metrics: Metric[] = [
  { title: "MRR", value: 42300, change: 7.4, trend: "up", icon: "DollarSign", formatter: "currency", accentColor: "emerald" },
  { title: "ARR", value: 507600, change: 18.2, trend: "up", icon: "CreditCard", formatter: "currency", accentColor: "indigo" },
  { title: "ARPU", value: 33.92, change: 4.1, trend: "up", icon: "Users", formatter: "currency", accentColor: "violet" },
  { title: "LTV", value: 847, change: 12.8, trend: "up", icon: "Activity", formatter: "currency", accentColor: "amber" },
];

function RevenueTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="flex items-center gap-2 text-sm">
          <span className="h-2 w-2 rounded-full" style={{ background: entry.color }} />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-semibold">{formatCurrency(entry.value)}</span>
        </p>
      ))}
    </div>
  );
}

export default function RevenuePage() {
  return (
    <div className="space-y-6 max-w-[1400px]">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Revenue</h2>
        <p className="text-sm text-muted-foreground">Monthly revenue breakdown and key SaaS metrics</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} metric={metric} />
        ))}
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-base">Monthly Revenue</CardTitle>
          <CardDescription>Recurring vs one-time revenue (12 months)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={monthlyRevenue} margin={{ top: 8, right: 8, left: -10, bottom: 0 }} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#55556a", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={(v) => formatCurrency(v, true)} tick={{ fill: "#55556a", fontSize: 11 }} axisLine={false} tickLine={false} width={55} />
              <Tooltip content={<RevenueTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
              <Legend content={({ payload }) => (
                <div className="flex justify-center gap-6 mt-2">
                  {payload?.map((entry) => (
                    <div key={entry.value} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-2 w-2 rounded-full" style={{ background: entry.color }} />
                      {entry.value}
                    </div>
                  ))}
                </div>
              )} />
              <Bar dataKey="recurring" name="Recurring" fill="#6366f1" radius={[4, 4, 0, 0]} maxBarSize={28} />
              <Bar dataKey="oneTime" name="One-time" fill="#8b5cf6" radius={[4, 4, 0, 0]} maxBarSize={28} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
