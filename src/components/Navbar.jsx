"use client";

import React from "react";
import { Menu } from "lucide-react";

export default function Navbar({ onHamburgerClick }) {
  return (
    <header className="navbar-custom d-flex align-items-center justify-content-between px-3">
      {/* Hamburger - visible only on mobile */}
      <button
        className="btn btn-outline-primary d-md-none"
        onClick={onHamburgerClick}
        aria-label="Toggle menu"
      >
        <Menu size={20} />
      </button>

      {/* Page title / left space */}
      <div className="d-flex align-items-center gap-3">
        <h5 className="mb-0 text-primary fw-bold">SmartBook</h5>
      </div>

      {/* Right side (placeholder: user / actions) */}
      <div className="d-flex align-items-center gap-3">
        <div className="d-none d-md-block small text-secondary">Admin</div>
        <img
          src="https://i.pravatar.cc/36"
          alt="avatar"
          className="rounded-circle"
          width="36"
          height="36"
        />
      </div>
    </header>
  );
}
