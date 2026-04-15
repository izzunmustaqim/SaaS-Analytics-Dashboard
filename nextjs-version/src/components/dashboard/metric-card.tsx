"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { formatCurrency, formatNumber, formatPercentage } from "@/lib/formatters";
import type { Metric } from "@/lib/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  DollarSign,
  Users,
  CreditCard,
  Activity,
};

const accentMap: Record<string, string> = {
  emerald: "from-emerald-500/20 to-emerald-500/5 text-emerald-400",
  indigo: "from-indigo-500/20 to-indigo-500/5 text-indigo-400",
  violet: "from-violet-500/20 to-violet-500/5 text-violet-400",
  amber: "from-amber-500/20 to-amber-500/5 text-amber-400",
};

function formatValue(value: number, formatter: string): string {
  switch (formatter) {
    case "currency": return formatCurrency(value);
    case "number": return formatNumber(value);
    case "percentage": return `${value.toFixed(1)}%`;
    default: return String(value);
  }
}

export default function MetricCard({ metric }: { metric: Metric }) {
  const Icon = iconMap[metric.icon] || Activity;
  const accent = accentMap[metric.accentColor] || accentMap.indigo;

  return (
    <Card className="group relative overflow-hidden border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)]">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
            <p className="text-2xl font-bold tracking-tight">{formatValue(metric.value, metric.formatter)}</p>
          </div>
          <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-b", accent)}>
            <Icon size={20} />
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5">
          {metric.trend === "up" ? (
            <TrendingUp size={14} className="text-emerald-400" />
          ) : (
            <TrendingDown size={14} className="text-rose-400" />
          )}
          <span className={cn("text-sm font-medium", metric.trend === "up" ? "text-emerald-400" : "text-rose-400")}>
            {formatPercentage(metric.change)}
          </span>
          <span className="text-xs text-muted-foreground">vs last month</span>
        </div>
      </CardContent>

      {/* Subtle top accent line */}
      <div className={cn(
        "absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity",
        metric.accentColor === "emerald" ? "from-emerald-500 to-emerald-400" :
        metric.accentColor === "indigo" ? "from-indigo-500 to-indigo-400" :
        metric.accentColor === "violet" ? "from-violet-500 to-violet-400" :
        "from-amber-500 to-amber-400"
      )} />
    </Card>
  );
}
