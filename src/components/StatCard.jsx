function StatCard({ icon, label, value, tone = "blue" }) {
  return (
    <section className={`stat-card stat-${tone}`} aria-label={label}>
      <div className="stat-icon" aria-hidden="true">
        {icon}
      </div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
    </section>
  );
}

export default StatCard;
