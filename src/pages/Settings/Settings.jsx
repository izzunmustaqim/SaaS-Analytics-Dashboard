import { useState } from 'react';
import '../Pages.css';

/**
 * Settings page — user profile and notification preferences.
 */
export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    weekly: false,
    marketing: false,
  });

  const toggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="page" id="settings-page">
      <div className="page__header">
        <h2 className="page__title">Settings</h2>
        <p className="page__subtitle">Manage your account and preferences</p>
      </div>

      {/* Profile Section */}
      <div className="settings-section">
        <h3 className="settings-section__title">Profile</h3>
        <p className="settings-section__desc">Update your personal information</p>

        <div className="settings-form">
          <div className="settings-field">
            <label className="settings-label">First Name</label>
            <input className="settings-input" type="text" defaultValue="John" />
          </div>
          <div className="settings-field">
            <label className="settings-label">Last Name</label>
            <input className="settings-input" type="text" defaultValue="Doe" />
          </div>
          <div className="settings-field">
            <label className="settings-label">Email</label>
            <input className="settings-input" type="email" defaultValue="john.doe@company.com" />
          </div>
          <div className="settings-field">
            <label className="settings-label">Role</label>
            <input className="settings-input" type="text" defaultValue="Admin" readOnly />
          </div>
          <div className="settings-field settings-field--full">
            <label className="settings-label">Company</label>
            <input className="settings-input" type="text" defaultValue="PulseMetrics Inc." />
          </div>
        </div>

        <button className="settings-btn">Save Changes</button>
      </div>

      {/* Notifications Section */}
      <div className="settings-section">
        <h3 className="settings-section__title">Notifications</h3>
        <p className="settings-section__desc">Choose what notifications you receive</p>

        <div className="settings-toggle">
          <div className="settings-toggle__info">
            <span className="settings-toggle__label">Email notifications</span>
            <span className="settings-toggle__desc">Receive alerts via email</span>
          </div>
          <div
            className={`settings-toggle__switch ${notifications.email ? 'settings-toggle__switch--on' : ''}`}
            onClick={() => toggle('email')}
            role="switch"
            aria-checked={notifications.email}
          />
        </div>

        <div className="settings-toggle">
          <div className="settings-toggle__info">
            <span className="settings-toggle__label">Push notifications</span>
            <span className="settings-toggle__desc">Receive push notifications in browser</span>
          </div>
          <div
            className={`settings-toggle__switch ${notifications.push ? 'settings-toggle__switch--on' : ''}`}
            onClick={() => toggle('push')}
            role="switch"
            aria-checked={notifications.push}
          />
        </div>

        <div className="settings-toggle">
          <div className="settings-toggle__info">
            <span className="settings-toggle__label">Weekly digest</span>
            <span className="settings-toggle__desc">Get a weekly summary of your metrics</span>
          </div>
          <div
            className={`settings-toggle__switch ${notifications.weekly ? 'settings-toggle__switch--on' : ''}`}
            onClick={() => toggle('weekly')}
            role="switch"
            aria-checked={notifications.weekly}
          />
        </div>

        <div className="settings-toggle">
          <div className="settings-toggle__info">
            <span className="settings-toggle__label">Marketing emails</span>
            <span className="settings-toggle__desc">Receive product updates and offers</span>
          </div>
          <div
            className={`settings-toggle__switch ${notifications.marketing ? 'settings-toggle__switch--on' : ''}`}
            onClick={() => toggle('marketing')}
            role="switch"
            aria-checked={notifications.marketing}
          />
        </div>
      </div>
    </div>
  );
}
