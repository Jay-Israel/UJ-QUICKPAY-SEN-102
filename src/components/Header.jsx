import {
  FaChartLine,
  FaCreditCard,
  FaHeadset,
  FaReceipt,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: <FaChartLine /> },
  { id: "payments", label: "Payments", icon: <FaCreditCard /> },
  { id: "fees", label: "Fees", icon: <FaReceipt /> },
  { id: "transactions", label: "History", icon: <FaReceipt /> },
  { id: "profile", label: "Profile", icon: <FaUserGraduate /> },
  { id: "support", label: "Support", icon: <FaHeadset /> },
];

function Header({ activePage, onNavigate }) {
  return (
    <header className="header">
      <div className="brand-block">
        <div className="brand-mark" aria-hidden="true">
          <FaUniversity />
        </div>
        <div>
          <p className="eyebrow">University of Jos</p>
          <h1>QuickPay UNIJOS</h1>
        </div>
      </div>

      <nav className="app-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            aria-current={activePage === item.id ? "page" : undefined}
            className={activePage === item.id ? "nav-button active" : "nav-button"}
            key={item.id}
            onClick={() => onNavigate(item.id)}
            title={item.label}
            type="button"
          >
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
