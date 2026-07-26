import {
  FaBars,
  FaChartLine,
  FaCreditCard,
  FaHeadset,
  FaHandHoldingUsd,
  FaReceipt,
  FaTimes,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";
import { useState } from "react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: <FaChartLine /> },
  { id: "payments", label: "Payments", icon: <FaCreditCard /> },
  { id: "fees", label: "Fees", icon: <FaReceipt /> },
  { id: "loans", label: "Loans", icon: <FaHandHoldingUsd /> },
  { id: "transactions", label: "History", icon: <FaReceipt /> },
  { id: "profile", label: "Profile", icon: <FaUserGraduate /> },
  { id: "support", label: "Support", icon: <FaHeadset /> },
];

function Header({ activePage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (pageId) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="brand-block">
          <div className="brand-mark" aria-hidden="true">
            <FaUniversity />
          </div>
          <div>
            <p className="eyebrow">University of Jos</p>
            <h1>QuickPay UNIJOS</h1>
          </div>
        </div>

        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          className="menu-toggle"
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
          type="button"
        >
          <span aria-hidden="true">{isMenuOpen ? <FaTimes /> : <FaBars />}</span>
          Menu
        </button>
      </div>

      <nav
        className={isMenuOpen ? "app-nav open" : "app-nav"}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        <div className="nav-menu-heading">
          <p className="card-label">Navigate</p>
          <strong>QuickPay Menu</strong>
        </div>
        <div>
          {navItems.map((item) => (
            <button
              aria-current={activePage === item.id ? "page" : undefined}
              className={
                activePage === item.id ? "nav-button active" : "nav-button"
              }
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              title={item.label}
              type="button"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
