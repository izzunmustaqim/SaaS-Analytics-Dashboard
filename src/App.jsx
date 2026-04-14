import { HashRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Analytics from './pages/Analytics/Analytics';
import Customers from './pages/Customers/Customers';
import Products from './pages/Products/Products';
import Revenue from './pages/Revenue/Revenue';
import Settings from './pages/Settings/Settings';
import './App.css';

/** Map nav IDs to page titles for the header */
const pageTitles = {
  overview: 'Overview',
  analytics: 'Analytics',
  customers: 'Customers',
  products: 'Products',
  revenue: 'Revenue',
  settings: 'Settings',
};

/**
 * Root application component.
 * Uses HashRouter for GitHub Pages compatibility.
 */
function App() {
  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  );
}

function AppLayout() {
  // Get current page from URL hash
  const path = window.location.hash.replace('#/', '') || 'overview';
  const activeNav = Object.keys(pageTitles).includes(path) ? path : 'overview';
  const title = pageTitles[activeNav] || 'Overview';

  return (
    <div className="app" id="app-root">
      <Sidebar activeItem={activeNav} />
      <div className="app__main">
        <Header title={title} subtitle="Dashboard" />
        <main className="app__content" role="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
