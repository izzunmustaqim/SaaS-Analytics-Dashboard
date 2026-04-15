"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true, push: true, weekly: false, marketing: false,
  });

  const toggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 max-w-[800px]">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Settings</h2>
        <p className="text-sm text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Profile */}
      <Card className="border-border bg-card">
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-base font-semibold">Profile</h3>
            <p className="text-sm text-muted-foreground">Update your personal information</p>
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input defaultValue="Doe" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" defaultValue="john.doe@company.com" />
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Input defaultValue="Admin" readOnly className="opacity-60" />
            </div>
            <div className="space-y-2 col-span-2">
              <Label>Company</Label>
              <Input defaultValue="PulseMetrics Inc." />
            </div>
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="border-border bg-card">
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-base font-semibold">Notifications</h3>
            <p className="text-sm text-muted-foreground">Choose what notifications you receive</p>
          </div>
          <Separator />
          <div className="space-y-0.5">
            {[
              { key: "email" as const, label: "Email notifications", desc: "Receive alerts via email" },
              { key: "push" as const, label: "Push notifications", desc: "Receive push notifications in browser" },
              { key: "weekly" as const, label: "Weekly digest", desc: "Get a weekly summary of your metrics" },
              { key: "marketing" as const, label: "Marketing emails", desc: "Receive product updates and offers" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <Switch checked={notifications[item.key]} onCheckedChange={() => toggle(item.key)} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
