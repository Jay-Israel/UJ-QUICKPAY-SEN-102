import { FaCheckCircle, FaFileInvoiceDollar, FaInfoCircle } from "react-icons/fa";

function LoansPage({ loanPlans }) {
  return (
    <section className="page-layout" aria-label="Student loans">
      <div className="page-heading">
        <p className="eyebrow">Loans</p>
        <h2>Student Payment Plans</h2>
        <p className="muted-text">
          Review demo loan products for fee support, installments, and academic
          payment planning.
        </p>
      </div>

      <div className="loan-grid">
        {loanPlans.map((plan) => (
          <article className="card loan-card" key={plan.id}>
            <div className="loan-card-top">
              <div className="card-icon" aria-hidden="true">
                <FaFileInvoiceDollar />
              </div>
              <span className="status-badge">{plan.status}</span>
            </div>
            <h3>{plan.title}</h3>
            <p>{plan.detail}</p>
            <strong>
              {new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
                maximumFractionDigits: 0,
              }).format(plan.amount)}
            </strong>
            <dl className="loan-terms">
              <div>
                <dt>Tenor</dt>
                <dd>{plan.tenor}</dd>
              </div>
              <div>
                <dt>Rate</dt>
                <dd>{plan.rate}</dd>
              </div>
            </dl>
            <button className="secondary-button" type="button">
              Check Eligibility
            </button>
          </article>
        ))}
      </div>

      <section className="security-note">
        <FaInfoCircle aria-hidden="true" />
        <span>
          Loan applications are demo-only and would require official university
          approval in a real deployment.
        </span>
      </section>

      <section className="card checklist-card">
        <div className="section-heading">
          <div className="card-icon" aria-hidden="true">
            <FaCheckCircle />
          </div>
          <div>
            <p className="card-label">Requirements</p>
            <h2>Eligibility Checklist</h2>
          </div>
        </div>
        <ul className="checklist">
          <li>Active student profile and matric number</li>
          <li>No unresolved failed payment dispute</li>
          <li>Verified fee item or approved academic expense</li>
          <li>Department or bursary approval for disbursement</li>
        </ul>
      </section>
    </section>
  );
}

export default LoansPage;
