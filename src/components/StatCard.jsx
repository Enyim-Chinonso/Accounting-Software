"use client";

export default function StatCard({ title, value }) {
  return (
    <div className="card shadow-sm border-0 p-3 stat-card" style={{ borderRadius: "12px" }}>
      <h6 className="text-muted">{title}</h6>
      <h4 className="fw-bold mt-2">{value}</h4>
    </div>
  );
}
