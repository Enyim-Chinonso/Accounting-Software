"use client";

import React from "react";

const TransactionTable = ({ transactions = [] }) => {
  return (
    <>
      {/* Desktop Table */}
      <div className="table-responsive d-none d-md-block">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th className="text-end">Amount ($)</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={t.id} className="transaction-row">
                <td>{i + 1}</td>
                <td>{t.date}</td>
                <td>{t.description}</td>
                <td>{t.category}</td>
                <td
                  className={`text-end fw-semibold ${
                    t.type === "Credit" ? "text-success" : "text-danger"
                  }`}
                >
                  {t.amount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td>
                  <span
                    className={`badge ${
                      t.type === "Credit" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {t.type}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      t.status === "Completed"
                        ? "bg-primary"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="d-md-none">
        {transactions.map((t, i) => (
          <div
            key={t.id}
            className="transaction-row border rounded p-3 mb-3 shadow-sm"
          >
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-bold text-primary">{t.description}</span>
              <span
                className={`badge ${
                  t.type === "Credit" ? "bg-success" : "bg-danger"
                }`}
              >
                {t.type}
              </span>
            </div>
            <div className="small text-muted mb-2">
              <strong>Date:</strong> {t.date}
            </div>
            <div className="small text-muted mb-2">
              <strong>Category:</strong> {t.category}
            </div>
            <div className="small text-muted mb-2">
              <strong>Status:</strong>{" "}
              <span
                className={`badge ${
                  t.status === "Completed"
                    ? "bg-primary"
                    : "bg-warning text-dark"
                }`}
              >
                {t.status}
              </span>
            </div>
            <div
              className={`fw-bold ${
                t.type === "Credit" ? "text-success" : "text-danger"
              }`}
            >
              ${t.amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TransactionTable;
