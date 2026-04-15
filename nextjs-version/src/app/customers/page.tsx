import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const customers = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", avatar: "OM", plan: "Pro", status: "Active", spent: "$1,249.00" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", avatar: "JL", plan: "Pro", status: "Active", spent: "$899.00" },
  { name: "Isabella Nguyen", email: "isabella.n@email.com", avatar: "IN", plan: "Free", status: "Active", spent: "$0.00" },
  { name: "William Kim", email: "will.kim@email.com", avatar: "WK", plan: "Pro", status: "Active", spent: "$1,499.00" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", avatar: "SD", plan: "Free", status: "Inactive", spent: "$0.00" },
  { name: "Liam Johnson", email: "liam.j@email.com", avatar: "LJ", plan: "Pro", status: "Active", spent: "$649.00" },
  { name: "Emma Wilson", email: "emma.w@email.com", avatar: "EW", plan: "Pro", status: "Active", spent: "$999.00" },
  { name: "Noah Brown", email: "noah.b@email.com", avatar: "NB", plan: "Free", status: "Active", spent: "$0.00" },
  { name: "Ava Garcia", email: "ava.g@email.com", avatar: "AG", plan: "Pro", status: "Inactive", spent: "$449.00" },
  { name: "Ethan Martinez", email: "ethan.m@email.com", avatar: "EM", plan: "Free", status: "Active", spent: "$0.00" },
];

const avatarColors = [
  "from-indigo-500 to-violet-500", "from-emerald-500 to-cyan-500",
  "from-rose-500 to-amber-500", "from-violet-500 to-cyan-500",
  "from-amber-500 to-emerald-500",
];

export default function CustomersPage() {
  return (
    <div className="space-y-6 max-w-[1400px]">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Customers</h2>
        <p className="text-sm text-muted-foreground">Manage your {customers.length} registered users</p>
      </div>

      <Card className="border-border bg-card">
        <CardContent className="p-0">
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr] px-6 py-3 border-b border-border bg-secondary/50">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</span>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</span>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Plan</span>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</span>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Spent</span>
          </div>

          {/* Rows */}
          {customers.map((customer, i) => (
            <div key={customer.email} className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr] items-center px-6 py-4 border-b border-border last:border-0 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className={`bg-gradient-to-br text-white text-xs font-semibold ${avatarColors[i % 5]}`}>
                    {customer.avatar}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{customer.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{customer.email}</span>
              <Badge variant={customer.plan === "Pro" ? "default" : "secondary"} className="w-fit text-xs">
                {customer.plan}
              </Badge>
              <Badge variant={customer.status === "Active" ? "outline" : "secondary"} className={`w-fit text-xs ${customer.status === "Active" ? "text-emerald-400 border-emerald-400/30" : ""}`}>
                {customer.status}
              </Badge>
              <span className="text-sm font-medium">{customer.spent}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
