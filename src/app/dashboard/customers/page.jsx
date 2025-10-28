"use client";

import React, { useState, useEffect } from "react";
import AddCustomerModal from "@/components/AddCustomerModal";
import { gsap } from "gsap";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Chinonso Enyim",
      email: "enyimchinonso23@gmail.com",
      phone: "+234 810 811 1761",
      balance: "$150,000",
      joinDate: "2025-11-01",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+234 809 555 9999",
      balance: "$750.00",
      joinDate: "2025-08-10",
      status: "Inactive",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    gsap.from(".customer-row", {
      y: 18,
      opacity: 0,
      stagger: 0.08,
      duration: 0.45,
      ease: "power2.out",
    });
  }, [customers]);

  const handleAddCustomer = (data) => {
    const normalized = {
      id: customers.length + 1,
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      balance: data.balance || "$0.00",
      joinDate: data.joinDate || new Date().toISOString().slice(0, 10),
      status: data.status || "Active",
    };
    setCustomers((prev) => [...prev, normalized]);
    setShowModal(false);
  };

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h3 className="fw-bold m-0 text-primary">Customers</h3>
        <button className="btn btn-primary shadow-sm" onClick={() => setShowModal(true)}>
          + Add New Customer
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="d-none d-md-block">
        <div className="table-responsive shadow-sm rounded-3 border">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Balance</th>
                <th>Joined</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="customer-row">
                  <td>{c.id}</td>
                  <td className="fw-semibold text-dark">{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td className="fw-semibold text-success">{c.balance}</td>
                  <td>{c.joinDate}</td>
                  <td>
                    <span className={`badge ${c.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="d-md-none mt-3">
        {customers.map((c) => (
          <div
            key={c.id}
            className="card mb-3 border-0 shadow-sm rounded-3 customer-row bg-light"
          >
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1 fw-bold text-primary">{c.name}</h6>
                  <div className="small text-muted">{c.email}</div>
                </div>
                <div className="text-end">
                  <span className="fw-bold text-success">{c.balance}</span>
                  <div className="small text-secondary">{c.joinDate}</div>
                </div>
              </div>

              <hr className="my-2" />

              <div className="d-flex justify-content-between align-items-center">
                <div className="small text-muted">
                  📞 {c.phone || <em>No number</em>}
                </div>
                <span className={`badge ${c.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                  {c.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <AddCustomerModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddCustomer}
        />
      )}
    </div>
  );
}
