"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import TransactionTable from "@/components/TransactionTable";
import AddTransactionModal from "@/components/AddTransactionModal";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2025-10-01",
      description: "Office Rent",
      category: "Expense",
      amount: 500,
      type: "Debit",
      status: "Completed",
    },
    {
      id: 2,
      date: "2025-10-02",
      description: "Client Payment",
      category: "Income",
      amount: 1500,
      type: "Credit",
      status: "Completed",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    gsap.from(".transaction-row", {
      y: 15,
      opacity: 0,
      stagger: 0.08,
      duration: 0.4,
      ease: "power2.out",
    });
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    const normalized = {
      id: transactions.length + 1,
      ...newTransaction,
      amount: parseFloat(newTransaction.amount) || 0,
    };
    setTransactions((prev) => [...prev, normalized]);
    setShowModal(false);
  };

  return (
    <div className="container-fluid py-4 px-3">
      {/* Header */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-3">
        <h4 className="fw-bold text-primary m-0">Transactions</h4>

        <div className="d-flex flex-wrap gap-2 w-100 justify-content-start justify-content-sm-end">
          <button
            className="btn btn-outline-secondary"
            onClick={() => alert('Export not implemented yet')}
          >
            Export
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            + Add Transaction
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="shadow-sm rounded bg-white p-3 transaction-table-container">
        <TransactionTable transactions={transactions} />
      </div>

      {/* Modal */}
      {showModal && (
        <AddTransactionModal
          onClose={() => setShowModal(false)}
          onAdd={addTransaction}
        />
      )}
    </div>
  );
}
