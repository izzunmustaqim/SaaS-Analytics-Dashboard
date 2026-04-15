"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { formatNumber } from "@/lib/formatters";
import type { SignupDataPoint } from "@/lib/types";

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="flex items-center gap-2 text-sm">
          <span className="h-2 w-2 rounded-full" style={{ background: entry.color }} />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-semibold">{formatNumber(entry.value)}</span>
        </p>
      ))}
    </div>
  );
}

export default function SignupsChart({ data }: { data: SignupDataPoint[] }) {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-base">User Signups</CardTitle>
        <CardDescription>Free vs Pro tier comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 8, right: 8, left: -10, bottom: 0 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: "#55556a", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#55556a", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
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
            <Bar dataKey="free" name="Free" fill="#8b5cf6" radius={[4, 4, 0, 0]} maxBarSize={24} />
            <Bar dataKey="pro" name="Pro" fill="#6366f1" radius={[4, 4, 0, 0]} maxBarSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
