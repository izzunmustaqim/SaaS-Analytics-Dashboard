"use client";

import { usePathname } from "next/navigation";
import { Search, Bell, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const routeTitles: Record<string, string> = {
  "/": "Overview",
  "/analytics": "Analytics",
  "/customers": "Customers",
  "/products": "Products",
  "/revenue": "Revenue",
  "/settings": "Settings",
};

export default function Header() {
  const pathname = usePathname();
  const title = routeTitles[pathname] || "Overview";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 backdrop-blur-xl px-8">
      <div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-foreground">{title}</span>
        </div>
        <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search..."
            className="w-64 pl-9 pr-12 bg-secondary border-border"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded font-mono">
            ⌘K
          </kbd>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500" />
        </button>

        {/* User */}
        <button className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-xs font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <ChevronDown size={14} className="text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
