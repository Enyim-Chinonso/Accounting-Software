// "use client";

// export default function StatCard({ title, value }) {
//   return (
//     <div className="stat-card card border-0 shadow-sm p-3 rounded-4 text-center">
//       <h6 className="text-secondary mb-1">{title}</h6>
//       <h3 className="fw-bold text-dark">{value}</h3>
//     </div>
//   );
// }

"use client";

export default function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <h5>{title}</h5>
      <p>{value}</p>
    </div>
  );
}
