import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free", price: "$0", period: "/forever", featured: false,
    features: ["Up to 100 users", "Basic analytics", "Email support", "1 GB storage", "Community access"],
  },
  {
    name: "Pro", price: "$49", period: "/month", featured: true, badge: "Most Popular",
    features: ["Unlimited users", "Advanced analytics", "Priority support", "100 GB storage", "Custom integrations", "API access", "Team collaboration"],
  },
  {
    name: "Enterprise", price: "$199", period: "/month", featured: false,
    features: ["Everything in Pro", "Dedicated account manager", "SSO & SAML", "Unlimited storage", "Custom contracts", "SLA guarantee", "24/7 phone support"],
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6 max-w-[1400px]">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Products</h2>
        <p className="text-sm text-muted-foreground">Subscription plans and pricing</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {plans.map((plan) => (
          <Card key={plan.name} className={`border-border bg-card flex flex-col ${plan.featured ? "border-primary bg-gradient-to-b from-primary/5 to-card" : ""}`}>
            <CardContent className="p-8 flex flex-col flex-1 gap-5">
              {plan.badge && <Badge className="w-fit text-xs">{plan.badge}</Badge>}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <div className="flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-emerald-400 min-w-4" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant={plan.featured ? "default" : "outline"} className="w-full">
                {plan.featured ? "Get Started" : "Contact Sales"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
