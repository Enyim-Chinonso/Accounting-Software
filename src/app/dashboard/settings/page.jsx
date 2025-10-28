"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: "Chinonso Admin",
    email: "Chinonso@gmail.com",
    phone: "+234 810 811 1761",
    currency: "USD",
    theme: "Light",
    notifications: true,
  });

  useEffect(() => {
    gsap.from(".settings-card", {
      y: 25,
      opacity: 0,
      duration: 0.4,
      stagger: 0.08,
      ease: "power2.out",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h3 className="fw-bold m-0">Settings</h3>
      </div>

      <form onSubmit={handleSubmit} className="row g-3">
        {/* Profile Information */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm border-0 settings-card">
            <div className="card-header bg-primary text-white fw-semibold">
              Profile Information
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm border-0 settings-card">
            <div className="card-header bg-success text-white fw-semibold">
              App Preferences
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Currency</label>
                <select
                  name="currency"
                  className="form-select"
                  value={formData.currency}
                  onChange={handleChange}
                >
                  <option value="USD">USD ($)</option>
                  <option value="NGN">NGN (₦)</option>
                  <option value="EUR">EUR (€)</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Theme</label>
                <select
                  name="theme"
                  className="form-select"
                  value={formData.theme}
                  onChange={handleChange}
                >
                  <option value="Light">Light</option>
                  <option value="Dark">Dark</option>
                </select>
              </div>

              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="notifications"
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="notifications"
                >
                  Enable Email Notifications
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="col-12 text-end mt-3">
          <button type="submit" className="btn btn-primary px-4 fw-semibold">
            Save Settings
          </button>
        </div>
      </form>

      {/* Mobile View Note */}
      <div className="d-md-none text-center mt-3 small text-secondary">
        ⚙️ Settings are auto-adjusted for mobile layout
      </div>
    </div>
  );
}
