

      import { FaWallet } from "react-icons/fa";

function WalletCard({ balance }) {
  const formattedBalance = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(balance);

  return (
    <section className="card wallet-card" aria-label="Wallet balance">
      <div className="card-icon" aria-hidden="true">
        <FaWallet />
      </div>
      <div>
        <p className="card-label">Wallet Balance</p>
        <h2>{formattedBalance}</h2>
        <p className="muted-text">Available for tuition and campus payments</p>
      </div>
    </section>
  );
}

export default WalletCard;
