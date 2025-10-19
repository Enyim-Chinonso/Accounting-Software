"use client";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4">
      <span className="navbar-brand mb-0 h5">Welcome, Admin</span>
      <div className="d-flex align-items-center">
        <img
          src="https://via.placeholder.com/35"
          className="rounded-circle me-2"
          alt="User"
        />
      </div>
    </nav>
  );
}
