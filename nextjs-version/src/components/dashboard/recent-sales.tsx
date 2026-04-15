"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatCurrency, formatRelativeTime } from "@/lib/formatters";
import type { Sale } from "@/lib/types";
import { cn } from "@/lib/utils";

const avatarColors = [
  "from-indigo-500 to-violet-500",
  "from-emerald-500 to-cyan-500",
  "from-rose-500 to-amber-500",
  "from-violet-500 to-cyan-500",
  "from-amber-500 to-emerald-500",
];

export default function RecentSales({ data }: { data: Sale[] }) {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-base">Recent Sales</CardTitle>
        <CardDescription>Latest {data.length} transactions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-0">
        {data.length === 0 ? (
          <p className="text-sm text-muted-foreground py-4 text-center">No recent sales to display.</p>
        ) : (
          <ul className="space-y-0">
            {data.map((sale, i) => (
              <li key={sale.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className={cn("bg-gradient-to-br text-white text-xs font-semibold", avatarColors[i % avatarColors.length])}>
                      {sale.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{sale.customer}</p>
                    <p className="text-xs text-muted-foreground">{sale.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <Badge variant={sale.plan === "Pro" ? "default" : "secondary"} className="text-xs">
                    {sale.plan}
                  </Badge>
                  <span className="text-sm font-medium min-w-[70px] text-right">
                    {sale.amount > 0 ? `+${formatCurrency(sale.amount)}` : "Free"}
                  </span>
                  <span className="text-xs text-muted-foreground min-w-[60px] text-right">
                    {formatRelativeTime(sale.date)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
