# PulseMetrics — SaaS Analytics Dashboard

A production-quality mock analytics dashboard for a fictional subscription business built with **React 18**, **Vite**, and **Recharts**. Features a sleek dark-mode design with glassmorphism effects, gradient accents, and smooth micro-animations.

🔗 **Live Demo:** [https://izzunmustaqim.github.io/SaaS-Analytics-Dashboard](https://izzunmustaqim.github.io/SaaS-Analytics-Dashboard)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-2-22B5BF)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Tests](https://img.shields.io/badge/Tests-83%20passed-10B981)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)

## ✨ Features

### 6 Fully Functional Pages
- **Overview** — 4 KPI metric cards, 3 interactive charts, recent sales table
- **Analytics** — Weekly active users area chart, conversion funnel bar chart
- **Customers** — Data table with 10 users, plan badges, and status indicators
- **Products** — 3 pricing cards (Free, Pro, Enterprise) with feature comparison
- **Revenue** — MRR/ARR/ARPU/LTV metrics, monthly recurring vs one-time revenue chart
- **Settings** — Profile form with editable fields, interactive notification toggles

### UI/UX
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
| Routing | React Router DOM (HashRouter) |
| Charts | Recharts 2 |
| Icons | Lucide React |
| Styling | Vanilla CSS (Custom Properties) |
| Fonts | Inter (Google Fonts) |
| Testing | Vitest + React Testing Library |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |

## 📁 Project Structure

```
src/
├── components/
│   ├── Cards/          # MetricCard KPI component
│   ├── Charts/         # RevenueLineChart, SignupsBarChart, DemographicsPieChart
│   ├── Layout/         # Sidebar, Header
│   └── Tables/         # RecentSalesTable
├── data/               # Mock data (revenue, signups, demographics, sales)
├── hooks/              # useDashboardData custom hook
├── pages/
│   ├── Dashboard/      # Overview page
│   ├── Analytics/      # Weekly users + conversion funnel
│   ├── Customers/      # User directory table
│   ├── Products/       # Pricing plans
│   ├── Revenue/        # Revenue breakdown
│   └── Settings/       # Profile & notifications
├── services/           # dashboardService (data abstraction layer)
├── utils/              # formatters, constants
├── App.jsx             # Root layout + React Router
├── App.css
├── index.css           # Design system tokens & global styles
└── main.jsx            # Entry point
tests/
├── components/         # Component render tests
├── hooks/              # Custom hook tests
├── services/           # Service layer tests
├── utils/              # Utility function tests
└── setup.js            # Test configuration
.github/
└── workflows/
    └── ci.yml          # CI/CD pipeline (test → build → deploy)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone git@github.com:izzunmustaqim/SaaS-Analytics-Dashboard.git
cd SaaS-Analytics-Dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/SaaS-Analytics-Dashboard/`.

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
