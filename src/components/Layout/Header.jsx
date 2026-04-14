import { useLocation } from 'react-router-dom';
import { Search, Bell, ChevronDown } from 'lucide-react';
import './Header.css';

/** Map routes to page titles */
const routeTitles = {
  '/': 'Overview',
  '/analytics': 'Analytics',
  '/customers': 'Customers',
  '/products': 'Products',
  '/revenue': 'Revenue',
  '/settings': 'Settings',
};

/**
 * Header bar component.
 * Automatically shows the current page title based on route.
 */
export default function Header() {
  const location = useLocation();
  const title = routeTitles[location.pathname] || 'Overview';

  return (
    <header className="header" id="main-header">
      <div className="header__left">
        <div className="header__breadcrumb">
          <span className="header__breadcrumb-parent">Dashboard</span>
          <span className="header__breadcrumb-sep">/</span>
          <span className="header__breadcrumb-current">{title}</span>
        </div>
        <h1 className="header__title">{title}</h1>
      </div>

      <div className="header__right">
        {/* Search */}
        <div className="header__search" id="header-search">
          <Search size={16} className="header__search-icon" />
          <input
            type="text"
            className="header__search-input"
            placeholder="Search..."
            aria-label="Search dashboard"
          />
          <kbd className="header__search-kbd">⌘K</kbd>
        </div>

        {/* Notifications */}
        <button className="header__icon-btn" id="header-notifications" aria-label="Notifications">
          <Bell size={18} />
          <span className="header__notification-dot" />
        </button>

        {/* User Avatar */}
        <button className="header__user" id="header-user-menu" aria-label="User menu">
          <div className="header__avatar">
            <span>JD</span>
          </div>
          <ChevronDown size={14} className="header__user-chevron" />
        </button>
      </div>
    </header>
  );
}
