import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "PulseMetrics — SaaS Analytics Dashboard",
  description: "Production-quality SaaS analytics dashboard built with Next.js, Tailwind CSS, and Shadcn/ui",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 ml-[260px] flex flex-col">
            <Header />
            <main className="flex-1 overflow-y-auto p-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
