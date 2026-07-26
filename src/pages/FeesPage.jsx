import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

function FeesPage({ feeItems, onSelectFee, onNavigate }) {
  return (
    <section className="page-layout" aria-label="Fee schedule">
      <div className="page-heading">
        <p className="eyebrow">Schedule</p>
        <h2>Current Fee Items</h2>
      </div>

      <div className="fee-grid">
        {feeItems.map((fee) => (
          <article className="card fee-card" key={fee.id}>
            <div className="fee-card-top">
              <span className="status-badge">{fee.status}</span>
              <FaCheckCircle aria-hidden="true" />
            </div>
            <h3>{fee.title}</h3>
            <p>{fee.category}</p>
            <strong>
              {new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
                maximumFractionDigits: 0,
              }).format(fee.amount)}
            </strong>
            <span className="due-date">
              <FaCalendarAlt aria-hidden="true" />
              Due {new Intl.DateTimeFormat("en-NG", { dateStyle: "medium" }).format(new Date(fee.dueDate))}
            </span>
            <button
              className="secondary-button"
              type="button"
              onClick={() => {
                onSelectFee(fee);
                onNavigate("payments");
              }}
            >
              Pay Item
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeesPage;
