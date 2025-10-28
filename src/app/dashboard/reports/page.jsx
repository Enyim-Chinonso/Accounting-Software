"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      month: "July",
      revenue: 5000,
      expenses: 3200,
      profit: 1800,
    },
    {
      id: 2,
      month: "August",
      revenue: 6500,
      expenses: 4000,
      profit: 2500,
    },
    {
      id: 3,
      month: "September",
      revenue: 7200,
      expenses: 4100,
      profit: 3100,
    },
    {
      id: 4,
      month: "October",
      revenue: 8500,
      expenses: 5200,
      profit: 3300,
    },
  ];

  useEffect(() => {
    gsap.from(".report-card", {
      y: 20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.08,
      ease: "power2.out",
    });
  }, []);

  const totalRevenue = reports.reduce((a, b) => a + b.revenue, 0);
  const totalExpenses = reports.reduce((a, b) => a + b.expenses, 0);
  const totalProfit = reports.reduce((a, b) => a + b.profit, 0);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h3 className="fw-bold m-0">Reports Dashboard</h3>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-lg-3">
          <div className="card shadow-sm border-0 bg-primary text-white text-center report-card">
            <div className="card-body">
              <h6>Total Revenue</h6>
              <h4>${totalRevenue.toLocaleString()}</h4>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="card shadow-sm border-0 bg-danger text-white text-center report-card">
            <div className="card-body">
              <h6>Total Expenses</h6>
              <h4>${totalExpenses.toLocaleString()}</h4>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="card shadow-sm border-0 bg-success text-white text-center report-card">
            <div className="card-body">
              <h6>Net Profit</h6>
              <h4>${totalProfit.toLocaleString()}</h4>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="card shadow-sm border-0 bg-warning text-white text-center report-card">
            <div className="card-body">
              <h6>Reports Count</h6>
              <h4>{reports.length}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="d-none d-md-block">
        <div className="table-responsive shadow-sm rounded">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-primary">
              <tr>
                <th>Month</th>
                <th>Revenue</th>
                <th>Expenses</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r) => (
                <tr key={r.id} className="report-card">
                  <td className="fw-semibold">{r.month}</td>
                  <td>${r.revenue.toLocaleString()}</td>
                  <td>${r.expenses.toLocaleString()}</td>
                  <td className={r.profit >= 0 ? "text-success" : "text-danger"}>
                    ${r.profit.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="d-md-none mt-3">
        {reports.map((r) => (
          <div key={r.id} className="card mb-3 shadow-sm border-0 report-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1 fw-bold text-primary">{r.month}</h6>
                  <div className="small text-muted">
                    Revenue: ${r.revenue.toLocaleString()}
                  </div>
                  <div className="small text-muted">
                    Expenses: ${r.expenses.toLocaleString()}
                  </div>
                </div>
                <div className="text-end">
                  <div
                    className={`fw-semibold ${
                      r.profit >= 0 ? "text-success" : "text-danger"
                    }`}
                  >
                    ${r.profit.toLocaleString()}
                  </div>
                  <div className="small text-secondary">Profit</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
