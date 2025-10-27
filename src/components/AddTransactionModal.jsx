"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AddTransactionModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
    type: "Credit",
    status: "Pending",
  });

  const modalRef = useRef(null);

  useEffect(() => {
    // lock scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // animation
    gsap.from(modalRef.current, { y: 20, opacity: 0, duration: 0.35, ease: "power2.out" });

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.description || !formData.amount) {
      alert("Please fill in Date, Description, and Amount.");
      return;
    }

    onAdd(formData);

    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
      type: "Credit",
      status: "Pending",
    });
  };

  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      role="dialog"
      style={{
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 1050,
      }}
    >
      <div
        ref={modalRef}
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
        style={{ maxWidth: "500px", height: "auto" }}
      >
        <div
          className="modal-content shadow-lg border-0 rounded-3"
          style={{
            maxHeight: "90vh",
            overflowY: "auto", // scrollable if tall
          }}
        >
          {/* Header */}
          <div className="modal-header bg-primary text-white sticky-top">
            <h5 className="modal-title">Add New Transaction</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter transaction details"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Category</label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g. Office, Utilities, Sales"
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Amount</label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Type</label>
                  <select
                    className="form-select"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer d-flex justify-content-between bg-light sticky-bottom">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Transaction
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
