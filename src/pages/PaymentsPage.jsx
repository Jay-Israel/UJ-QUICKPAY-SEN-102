import { FaCreditCard, FaListAlt } from "react-icons/fa";
import Notification from "../components/Notification.jsx";
import PaymentForm from "../components/PaymentForm.jsx";

function PaymentsPage({
  feeItems,
  gatewayOptions,
  notification,
  onPaymentSubmit,
  onSelectFee,
  selectedFee,
}) {
  return (
    <section className="page-layout two-column-page" aria-label="Payments">
      <div className="page-main">
        <div className="page-heading">
          <p className="eyebrow">Payments</p>
          <h2>Pay tuition, hostel, and campus charges</h2>
        </div>

        <PaymentForm
          gateways={gatewayOptions}
          onPaymentSubmit={onPaymentSubmit}
          paymentDefaults={selectedFee}
        />
      </div>

      <aside className="page-side">
        <Notification notification={notification} />
        <section className="card">
          <div className="section-heading">
            <div className="card-icon" aria-hidden="true">
              <FaListAlt />
            </div>
            <div>
              <p className="card-label">Outstanding</p>
              <h2>Fee Items</h2>
            </div>
          </div>

          <div className="fee-stack">
            {feeItems.map((fee) => (
              <button
                className="fee-row"
                key={fee.id}
                type="button"
                onClick={() => onSelectFee(fee)}
              >
                <span>
                  <strong>{fee.title}</strong>
                  <small>{fee.category}</small>
                </span>
                <b>
                  {new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN",
                    maximumFractionDigits: 0,
                  }).format(fee.amount)}
                </b>
              </button>
            ))}
          </div>
        </section>

        <section className="security-note">
          <FaCreditCard aria-hidden="true" />
          <span>Demo gateways generate secure-looking references locally.</span>
        </section>
      </aside>
    </section>
  );
}

export default PaymentsPage;
