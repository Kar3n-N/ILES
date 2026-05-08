function Crit({ label, score }) {
  return (
    <div className="rate-row">
      <b>{label}</b>
      <Bar pct={score * 20} kind="ok" />
      <span style={{ fontWeight: 700, color: "var(--color-text)", textAlign: "right" }}>
        {score}/5
      </span>
    </div>
  );
}
