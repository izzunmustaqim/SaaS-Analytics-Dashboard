import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  DollarSign,
  Settings,
  ChevronLeft,
  ChevronRight,
  Activity,
  Zap,
} from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';
import './Sidebar.css';

/** Map icon names from constants to Lucide components */
const iconMap = {
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  DollarSign,
  Settings,
  Activity,
};

/** Map nav IDs to routes */
const routeMap = {
  overview: '/',
  analytics: '/analytics',
  customers: '/customers',
  products: '/products',
  revenue: '/revenue',
  settings: '/settings',
};

/** Map routes back to nav IDs */
const reverseRouteMap = Object.fromEntries(
  Object.entries(routeMap).map(([k, v]) => [v, k])
);

/**
 * Sidebar navigation component.
 * Uses React Router for page navigation.
 */
export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeItem = reverseRouteMap[location.pathname] || 'overview';
  const [collapsed, setCollapsed] = useState(false);

  const handleNavigate = (id) => {
    const route = routeMap[id] || '/';
    navigate(route);
  };

  return (
    <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`} id="main-sidebar">
      {/* Brand */}
      <div className="sidebar__brand">
        <div className="sidebar__logo">
          <Zap size={22} className="sidebar__logo-icon" />
        </div>
        {!collapsed && <span className="sidebar__brand-text">PulseMetrics</span>}
      </div>

      {/* Navigation */}
      <nav className="sidebar__nav" aria-label="Main navigation">
        <ul className="sidebar__nav-list">
          {NAV_ITEMS.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = activeItem === item.id;

            return (
              <li key={item.id}>
                <button
                  id={`nav-${item.id}`}
                  className={`sidebar__nav-item ${isActive ? 'sidebar__nav-item--active' : ''}`}
                  onClick={() => handleNavigate(item.id)}
                  title={collapsed ? item.label : undefined}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {Icon && <Icon size={20} className="sidebar__nav-icon" />}
                  {!collapsed && <span className="sidebar__nav-label">{item.label}</span>}
                  {isActive && <span className="sidebar__nav-indicator" />}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Collapse toggle */}
      <button
        className="sidebar__toggle"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        id="sidebar-toggle"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Footer */}
      {!collapsed && (
        <div className="sidebar__footer">
          <div className="sidebar__plan-badge">
            <span className="sidebar__plan-dot" />
            Pro Plan
          </div>
        </div>
      )}
    </aside>
  );
}
