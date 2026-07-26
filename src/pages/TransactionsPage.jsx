import TransactionList from "../components/TransactionList.jsx";

function TransactionsPage({ transactions }) {
  return (
    <section className="page-layout" aria-label="Transactions">
      <div className="page-heading">
        <p className="eyebrow">Records</p>
        <h2>Payment History</h2>
      </div>

      <TransactionList transactions={transactions} />
    </section>
  );
}

export default TransactionsPage;
