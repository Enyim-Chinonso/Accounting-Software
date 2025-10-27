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
    // lock body scroll while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // entrance animation
    const ctx = gsap.context(() => {
      gsap.from(modalRef.current, { y: 20, opacity: 0, duration: 0.35, ease: "power2.out" });
    }, modalRef);

    return () => {
      document.body.style.overflow = originalOverflow;
      ctx.revert();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.date || !formData.description || !formData.amount) {
      alert("Please fill date, description and amount.");
      return;
    }
    onAdd(formData);
    // reset (optional)
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
      className="transaction-modal-wrapper position-fixed inset-0 d-flex align-items-center justify-content-center"
      style={{ zIndex: 1400 }}
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className="modal-backdrop-custom position-absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal box */}
      <div
        ref={modalRef}
        className="modal-dialog modal-dialog-centered modal-lg"
        style={{ maxWidth: 720, zIndex: 1500 }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Transaction</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Amount</label>
                  <input
                    type="number"
                    step="0.01"
                    name="amount"
                    className="form-control"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Category</label>
                  <input
                    type="text"
                    name="category"
                    className="form-control"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="e.g. Office, Sales, Utilities"
                  />
                </div>

                <div className="col-6 col-md-3">
                  <label className="form-label">Type</label>
                  <select name="type" className="form-select" value={formData.type} onChange={handleChange}>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                  </select>
                </div>

                <div className="col-6 col-md-3">
                  <label className="form-label">Status</label>
                  <select name="status" className="form-select" value={formData.status} onChange={handleChange}>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
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
