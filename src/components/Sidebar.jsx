"use client";

import Link from "next/link";
import { FaChartBar, FaUsers, FaExchangeAlt, FaCog, FaHome } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white vh-100 p-3 d-flex flex-column"
      style={{ width: "230px" }}
    >
      <h4 className="text-center fw-bold mb-4">SmartBook</h4>

      <nav className="nav flex-column gap-2">
        <Link href="/dashboard" className="nav-link text-white">
          <FaHome className="me-2" /> Dashboard
        </Link>
        <Link href="/dashboard/customers" className="nav-link text-white">
          <FaUsers className="me-2" /> Customers
        </Link>
        <Link href="/dashboard/transactions" className="nav-link text-white">
          <FaExchangeAlt className="me-2" /> Transactions
        </Link>
        <Link href="/dashboard/reports" className="nav-link text-white">
          <FaChartBar className="me-2" /> Reports
        </Link>
        <Link href="/dashboard/settings" className="nav-link text-white">
          <FaCog className="me-2" /> Settings
        </Link>
      </nav>
    </div>
  );
}
