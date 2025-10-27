"use client";
import React, { useState } from "react";

export default function AddCustomerModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    balance: "",
    joinDate: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({
      name: "",
      email: "",
      phone: "",
      balance: "",
      joinDate: "",
      status: "Active",
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
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
        style={{
          maxWidth: "500px",
          height: "auto",
        }}
      >
        <div
          className="modal-content shadow-lg border-0 rounded-3"
          style={{
            maxHeight: "90vh",
            overflowY: "auto", // scrollable if too tall
          }}
        >
          <div className="modal-header bg-primary text-white sticky-top">
            <h5 className="modal-title">Add New Customer</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Balance</label>
                <input
                  type="text"
                  className="form-control"
                  name="balance"
                  value={form.balance}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Join Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="joinDate"
                  value={form.joinDate}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            <div className="modal-footer d-flex justify-content-between bg-light sticky-bottom">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Customer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
