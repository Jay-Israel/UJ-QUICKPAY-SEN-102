import { FaReceipt } from "react-icons/fa";

function TransactionList({ transactions }) {
  return (
    <section className="card transaction-card" aria-label="Transaction history">
      <div className="section-heading">
        <div className="card-icon" aria-hidden="true">
          <FaReceipt />
        </div>
        <div>
          <p className="card-label">History</p>
          <h2>Transactions</h2>
        </div>
      </div>

      {transactions.length === 0 ? (
        <p className="empty-state">No transactions yet.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((transaction) => (
            <li key={transaction.reference} className="transaction-item">
              <div>
                <strong>{transaction.description || transaction.gateway}</strong>
                <p>{transaction.category || transaction.gateway}</p>
                <p>{transaction.reference}</p>
              </div>
              <div className="transaction-meta">
                <span>
                  {new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN",
                    maximumFractionDigits: 0,
                  }).format(transaction.amount)}
                </span>
                <time dateTime={transaction.createdAt}>
                  {new Intl.DateTimeFormat("en-NG", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  }).format(new Date(transaction.createdAt))}
                </time>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TransactionList;
