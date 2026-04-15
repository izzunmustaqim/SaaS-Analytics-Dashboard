import type { Sale } from "@/lib/types";

export const salesData: Sale[] = [
  { id: "TXN-001", customer: "Olivia Martin", email: "olivia.martin@email.com", plan: "Pro", amount: 49.99, date: new Date(Date.now() - 5 * 60000).toISOString(), avatar: "OM" },
  { id: "TXN-002", customer: "Jackson Lee", email: "jackson.lee@email.com", plan: "Pro", amount: 39.99, date: new Date(Date.now() - 32 * 60000).toISOString(), avatar: "JL" },
  { id: "TXN-003", customer: "Isabella Nguyen", email: "isabella.n@email.com", plan: "Free", amount: 0, date: new Date(Date.now() - 2 * 3600000).toISOString(), avatar: "IN" },
  { id: "TXN-004", customer: "William Kim", email: "will.kim@email.com", plan: "Pro", amount: 49.99, date: new Date(Date.now() - 5 * 3600000).toISOString(), avatar: "WK" },
  { id: "TXN-005", customer: "Sofia Davis", email: "sofia.davis@email.com", plan: "Pro", amount: 39.99, date: new Date(Date.now() - 12 * 3600000).toISOString(), avatar: "SD" },
  { id: "TXN-006", customer: "Liam Johnson", email: "liam.j@email.com", plan: "Free", amount: 0, date: new Date(Date.now() - 86400000).toISOString(), avatar: "LJ" },
  { id: "TXN-007", customer: "Emma Wilson", email: "emma.w@email.com", plan: "Pro", amount: 49.99, date: new Date(Date.now() - 2 * 86400000).toISOString(), avatar: "EW" },
];
