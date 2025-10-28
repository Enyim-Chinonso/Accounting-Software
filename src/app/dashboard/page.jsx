"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import {
  FaUsers,
  FaExchangeAlt,
  FaDollarSign,
  FaMoneyBillWave,
} from "react-icons/fa";

// ===== Reusable StatCard Component =====
function StatCard({ title, value, icon, color = "primary" }) {
  return (
    <div
      className={`card border-0 shadow-sm stat-card text-${color}`}
      style={{
        borderLeft: `4px solid var(--bs-${color})`,
        transition: "transform 0.2s ease",
      }}
    >
      <div className="card-body d-flex align-items-center justify-content-between">
        <div>
          <h6 className="text-uppercase text-muted mb-1 small fw-semibold">
            {title}
          </h6>
          <h4 className="fw-bold mb-0 text-dark">{value}</h4>
        </div>
        <div
          className={`d-flex align-items-center justify-content-center rounded-circle bg-${color}-subtle`}
          style={{ width: "46px", height: "46px" }}
        >
          <span className={`text-${color}`}>{icon}</span>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();

  // Animate cards on mount
  useEffect(() => {
    gsap.from(".stat-card", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  const stats = [
    {
      title: "Total Customers",
      value: "1,245",
      icon: <FaUsers size={22} />,
      color: "primary",
    },
    {
      title: "Transactions",
      value: "3,478",
      icon: <FaExchangeAlt size={22} />,
      color: "info",
    },
    {
      title: "Revenue",
      value: "$979,560,000",
      icon: <FaDollarSign size={22} />,
      color: "success",
    },
    {
      title: "Expenses",
      value: "$500,320",
      icon: <FaMoneyBillWave size={22} />,
      color: "danger",
    },
  ];

  const recentTransactions = [
    { id: 1, name: "Enyim Chinonso", amount: "$200,000", status: "Completed", date: "2025-10-25" },
    { id: 2, name: "Elon Musk", amount: "$1,200,000", status: "Completed", date: "2025-10-24" },
    { id: 3, name: "Jeff Bezos", amount: "$500,000", status: "Pending", date: "2025-10-22" },
    { id: 4, name: "Mark Zuckerberg", amount: "$730,000", status: "Completed", date: "2025-10-22" },
  ];

  const handleNavigate = (path) => router.push(path);

  return (
    <div className="container-fluid py-4">
      {/* ===== Top Stat Cards ===== */}
      <div className="row g-3 mb-4">
        {stats.map((stat, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
            <StatCard
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          </div>
        ))}
      </div>

      {/* ===== Dashboard Body ===== */}
      <div className="row g-4">
        {/* === Recent Transactions === */}
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-3 text-center text-lg-start">
                Recent Transactions
              </h5>

              {/* Mobile Card Layout */}
              <div className="d-lg-none">
                {recentTransactions.map((t) => (
                  <div
                    className="card border-0 shadow-sm mb-3"
                    key={t.id}
                  >
                    <div className="card-body">
                      <h6 className="fw-bold mb-1">{t.name}</h6>
                      <p className="mb-1 small text-muted">{t.date}</p>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <span>{t.amount}</span>
                        <span
                          className={`badge ${
                            t.status === "Completed"
                              ? "bg-success"
                              : "bg-warning text-dark"
                          }`}
                        >
                          {t.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table Layout */}
              <div className="table-responsive d-none d-lg-block">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Customer</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((t) => (
                      <tr key={t.id}>
                        <td>{t.id}</td>
                        <td className="fw-semibold">{t.name}</td>
                        <td>{t.amount}</td>
                        <td>
                          <span
                            className={`badge ${
                              t.status === "Completed"
                                ? "bg-success"
                                : "bg-warning text-dark"
                            }`}
                          >
                            {t.status}
                          </span>
                        </td>
                        <td>{t.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* === Quick Actions === */}
        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold mb-3 text-center text-lg-start">
                Quick Actions
              </h5>

              <div className="d-grid gap-3 mt-auto">
                <button
                  className="btn btn-primary"
                  onClick={() => handleNavigate("/dashboard/transactions")}
                >
                  ➕ Add Transaction
                </button>

                <button
                  className="btn btn-success"
                  onClick={() => handleNavigate("/dashboard/customers")}
                >
                  👤 Add Customer
                </button>

                <button
                  className="btn btn-info text-white"
                  onClick={() => handleNavigate("/dashboard/reports")}
                >
                  📊 View Reports
                </button>

                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleNavigate("/dashboard/settings")}
                >
                  ⚙️ Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
