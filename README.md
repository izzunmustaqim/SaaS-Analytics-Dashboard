# PulseMetrics — SaaS Analytics Dashboard

A production-quality mock analytics dashboard for a fictional subscription business built with **React 18**, **Vite**, and **Recharts**. Features a sleek dark-mode design with glassmorphism effects, gradient accents, and smooth micro-animations.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-2-22B5BF)
![Tests](https://img.shields.io/badge/Tests-83%20passed-10B981)

## ✨ Features

- **4 KPI Metric Cards** — Total Revenue, Active Users, Subscriptions, Churn Rate with trend indicators
- **Revenue Growth Chart** — 30-day area chart with gradient fill and custom tooltips
- **User Signups Chart** — Bar chart comparing Free vs Pro tier signups (12 months)
- **Demographics Pie Chart** — Donut chart showing user distribution by country with inline legend
- **Recent Sales Table** — Latest transactions with avatar initials, plan badges, and relative timestamps
- **Collapsible Sidebar** — Navigation with active state indicators and smooth collapse animation
- **Glassmorphism Header** — Frosted glass effect with search bar and notification badge
- **Responsive Design** — Desktop-first with breakpoints at 1280px, 1024px, and 768px
- **Micro-animations** — Fade-in, scale, hover glow effects throughout the UI
- **Dark Mode** — Premium dark theme with curated indigo/violet/emerald accent palette

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Build | Vite 6 |
| UI | React 18 |
| Charts | Recharts 2 |
| Icons | Lucide React |
| Styling | Vanilla CSS (Custom Properties) |
| Fonts | Inter (Google Fonts) |
| Testing | Vitest + React Testing Library |

## 📁 Project Structure

```
src/
├── components/
│   ├── Cards/          # MetricCard KPI component
│   ├── Charts/         # RevenueLineChart, SignupsBarChart, DemographicsPieChart
│   ├── Layout/         # Sidebar, Header
│   └── Tables/         # RecentSalesTable
├── data/               # Mock JSON data (revenue, signups, demographics, sales)
├── hooks/              # useDashboardData custom hook
├── pages/              # Dashboard page
├── services/           # dashboardService (data abstraction layer)
├── utils/              # formatters, constants
├── App.jsx             # Root layout composition
├── App.css
├── index.css           # Design system tokens & global styles
└── main.jsx            # Entry point
tests/
├── components/         # Component render tests
├── hooks/              # Custom hook tests
├── services/           # Service layer tests
├── utils/              # Utility function tests
└── setup.js            # Test configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd sass-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`.

### Build for Production

```bash
npm run build
npm run preview
```

## 🧪 Testing

```bash
# Run all tests
npx vitest run

# Run tests in watch mode
npx vitest

# Run with coverage
npx vitest run --coverage
```

**Test Coverage:** 83 tests across 8 test suites covering:
- Utility functions (formatters) — 28 tests
- Service layer — 14 tests  
- Component rendering — 37 tests
- Custom hooks — 4 tests

## 🏗 Architecture

### Design Patterns
- **Service Layer** — `dashboardService.js` abstracts data access; swap mock → API with zero component changes
- **Custom Hooks** — `useDashboardData()` encapsulates async data fetching with loading/error states
- **Composition** — Layout composed via `Sidebar` + `Header` children, not inheritance
- **Container/Presentational** — Dashboard page orchestrates data; child components are purely presentational

### SOLID Principles
- **Single Responsibility** — Each component renders ONE thing
- **Open/Closed** — MetricCard extends via props, not modification
- **Liskov Substitution** — Chart components share consistent prop interfaces
- **Interface Segregation** — Components receive only the props they need
- **Dependency Inversion** — Components depend on service abstraction, not raw data imports

## 📄 License

MIT
