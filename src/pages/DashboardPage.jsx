import { FaCalendarCheck, FaClipboardList, FaReceipt } from "react-icons/fa";
import Notification from "../components/Notification.jsx";
import PaymentForm from "../components/PaymentForm.jsx";
import StatCard from "../components/StatCard.jsx";
import TransactionList from "../components/TransactionList.jsx";
import WalletCard from "../components/WalletCard.jsx";

function DashboardPage({
  balance,
  gatewayOptions,
  notification,
  onPaymentSubmit,
  transactions,
}) {
  const totalPaid = transactions.reduce(
    (sum, transaction) => sum + Number(transaction.amount),
    0
  );

  return (
    <section className="page-layout" aria-label="QuickPay dashboard">
      <div className="stats-grid">
        <StatCard
          icon={<FaReceipt />}
          label="Total Paid"
          value={new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            maximumFractionDigits: 0,
          }).format(totalPaid)}
          tone="green"
        />
        <StatCard
          icon={<FaClipboardList />}
          label="Receipts"
          value={transactions.length}
          tone="blue"
        />
        <StatCard
          icon={<FaCalendarCheck />}
          label="Session"
          value="2025/2026"
          tone="gold"
        />
      </div>

      <section className="dashboard-grid">
        <div className="dashboard-main">
          <WalletCard balance={balance} />
          <PaymentForm
            gateways={gatewayOptions}
            onPaymentSubmit={onPaymentSubmit}
          />
        </div>

        <aside className="dashboard-side" aria-label="Payment status">
          <Notification notification={notification} />
          <TransactionList transactions={transactions.slice(0, 5)} />
        </aside>
      </section>
    </section>
  );
}

export default DashboardPage;
