// "use client";

// import React, { useState, useEffect } from "react";
// import { gsap } from "gsap";
// import TransactionTable from "@/components/TransactionTable";
// import AddTransactionModal from "@/components/AddTransactionModal";

// export default function TransactionsPage() {
//   const [transactions, setTransactions] = useState([
//     {
//       id: 1,
//       date: "2025-10-01",
//       description: "Office Rent",
//       category: "Expense",
//       amount: 500,
//       type: "Debit",
//       status: "Completed",
//     },
//     {
//       id: 2,
//       date: "2025-10-02",
//       description: "Client Payment",
//       category: "Income",
//       amount: 1500,
//       type: "Credit",
//       status: "Completed",
//     },
//   ]);

//   const [showModal, setShowModal] = useState(false);

//   // animate rows when transactions change (client-side only)
//   useEffect(() => {
//     gsap.from(".transaction-row", {
//       y: 20,
//       opacity: 0,
//       stagger: 0.06,
//       duration: 0.45,
//       ease: "power2.out",
//     });
//   }, [transactions]);

//   const addTransaction = (newTransaction) => {
//     // sanitize/normalize incoming data
//     const amountNum = Number(newTransaction.amount) || 0;
//     const normalized = {
//       id: transactions.length + 1,
//       date: newTransaction.date,
//       description: newTransaction.description,
//       category: newTransaction.category || "General",
//       amount: amountNum,
//       type: newTransaction.type || "Credit",
//       status: newTransaction.status || "Pending",
//     };

//     setTransactions((prev) => [...prev, normalized]);
//     setShowModal(false);
//   };

//   return (
//     <div className="container-fluid py-4">
//       {/* Header */}
//       <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
//         <h4 className="fw-bold text-primary mb-2 mb-md-0">Transactions</h4>
//         <div className="d-flex gap-2">
//           <button
//             className="btn btn-outline-secondary d-none d-md-inline"
//             onClick={() => {
//               // placeholder: you can add CSV export later
//               alert("Export not implemented yet");
//             }}
//           >
//             Export
//           </button>

//           <button
//             className="btn btn-primary shadow-sm"
//             onClick={() => setShowModal(true)}
//           >
//             + Add Transaction
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="table-responsive shadow-sm rounded bg-white p-2">
//         <TransactionTable transactions={transactions} />
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <AddTransactionModal
//           onClose={() => setShowModal(false)}
//           onAdd={addTransaction}
//         />
//       )}
//     </div>
//   );
// }



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
