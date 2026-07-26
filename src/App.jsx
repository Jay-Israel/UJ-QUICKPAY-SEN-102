import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import {
  feeItems,
  loanPlans,
  studentProfile,
  supportChannels,
} from "./data/studentData.js";
import WalletService from "./services/WalletService.js";
import PaymentService from "./services/PaymentService.js";
import ProfileService from "./services/ProfileService.js";
import NotificationService from "./services/NotificationService.js";
import PaystackGateway from "./gateways/PaystackGateway.js";
import FlutterwaveGateway from "./gateways/FlutterwaveGateway.js";
import RemitaGateway from "./gateways/RemitaGateway.js";
import DashboardPage from "./pages/DashboardPage.jsx";
import FeesPage from "./pages/FeesPage.jsx";
import LoansPage from "./pages/LoansPage.jsx";
import PaymentsPage from "./pages/PaymentsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import TransactionsPage from "./pages/TransactionsPage.jsx";

const walletService = new WalletService();
const notificationService = new NotificationService();
const profileService = new ProfileService(studentProfile);

const paymentGateways = {
  paystack: new PaystackGateway(),
  flutterwave: new FlutterwaveGateway(),
  remita: new RemitaGateway(),
};

function App() {
  const paymentService = useMemo(
    () => new PaymentService(walletService),
    []
  );

  const [balance, setBalance] = useState(walletService.getBalance());
  const [transactions, setTransactions] = useState(
    paymentService.getTransactions()
  );
  const [notification, setNotification] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");
  const [selectedFee, setSelectedFee] = useState(null);
  const [currentStudentProfile, setCurrentStudentProfile] = useState(
    profileService.getProfile()
  );

  const gatewayOptions = Object.entries(paymentGateways).map(
    ([id, gateway]) => ({
      id,
      name: gateway.name,
    })
  );

  const handlePaymentSubmit = ({ gatewayId, amount, description, category }) => {
    const selectedGateway = paymentGateways[gatewayId];
    const result = paymentService.makePayment({
      amount,
      category,
      description,
      gateway: selectedGateway,
    });

    if (result.success) {
      setNotification(notificationService.success(result.message));
      setBalance(walletService.getBalance());
      setTransactions(paymentService.getTransactions());
      setSelectedFee(null);
      return;
    }

    setNotification(notificationService.error(result.message));
  };

  const handleSelectFee = (fee) => {
    setSelectedFee(fee);
  };

  const handleProfileUpdate = (profileUpdates) => {
    setCurrentStudentProfile(
      profileService.saveProfile({
        ...currentStudentProfile,
        ...profileUpdates,
      })
    );
  };

  const renderPage = () => {
    const sharedPaymentProps = {
      gatewayOptions,
      notification,
      onPaymentSubmit: handlePaymentSubmit,
      transactions,
    };

    switch (activePage) {
      case "payments":
        return (
          <PaymentsPage
            feeItems={feeItems}
            onSelectFee={handleSelectFee}
            selectedFee={selectedFee}
            {...sharedPaymentProps}
          />
        );
      case "fees":
        return (
          <FeesPage
            feeItems={feeItems}
            onNavigate={setActivePage}
            onSelectFee={handleSelectFee}
          />
        );
      case "loans":
        return <LoansPage loanPlans={loanPlans} />;
      case "transactions":
        return <TransactionsPage transactions={transactions} />;
      case "profile":
        return (
          <ProfilePage
            onProfileUpdate={handleProfileUpdate}
            studentProfile={currentStudentProfile}
          />
        );
      case "support":
        return <SupportPage supportChannels={supportChannels} />;
      default:
        return <DashboardPage balance={balance} {...sharedPaymentProps} />;
    }
  };

  return (
    <main className="app-shell">
      <Header activePage={activePage} onNavigate={setActivePage} />
      {renderPage()}
    </main>
  );
}

export default App;
