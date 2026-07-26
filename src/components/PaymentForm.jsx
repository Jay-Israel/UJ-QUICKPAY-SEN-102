import { useEffect, useState } from "react";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

function PaymentForm({ gateways, onPaymentSubmit, paymentDefaults = null }) {
  const [selectedGatewayId, setSelectedGatewayId] = useState(
    gateways[0]?.id || ""
  );
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!paymentDefaults) {
      return;
    }

    setAmount(String(paymentDefaults.amount));
    setDescription(paymentDefaults.title);
  }, [paymentDefaults]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onPaymentSubmit({
      gatewayId: selectedGatewayId,
      amount,
      category: paymentDefaults?.category || "General",
      description: description.trim() || "Campus payment",
    });
    setAmount("");
    setDescription("");
  };

  return (
    <section className="card payment-card" aria-label="Make payment">
      <div className="section-heading">
        <div className="card-icon" aria-hidden="true">
          <FaCreditCard />
        </div>
        <div>
          <p className="card-label">Payment Gateway</p>
          <h2>Make a Payment</h2>
        </div>
      </div>

      <form className="payment-form" onSubmit={handleSubmit}>
        <label htmlFor="gateway">Choose Gateway</label>
        <select
          id="gateway"
          value={selectedGatewayId}
          onChange={(event) => setSelectedGatewayId(event.target.value)}
        >
          {gateways.map((gateway) => (
            <option key={gateway.id} value={gateway.id}>
              {gateway.name}
            </option>
          ))}
        </select>

        <label htmlFor="description">Payment For</label>
        <input
          id="description"
          placeholder="Tuition, hostel, clearance, or other fee"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          inputMode="decimal"
          min="1"
          placeholder="Enter amount in naira"
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <button type="submit" className="primary-button">
          <FaMoneyBillWave aria-hidden="true" />
          Make Payment
        </button>
      </form>
    </section>
  );
}

export default PaymentForm;
