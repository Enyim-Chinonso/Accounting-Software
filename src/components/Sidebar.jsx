"use client";

import { useRouter } from "next/navigation";
import { House, Wallet, Users, BarChart2, Settings, LogOut } from "lucide-react";

export default function Sidebar({ onNavigate = () => {} }) {
  const router = useRouter();

  const navItems = [
    { label: "Dashboard", icon: <House size={16} />, path: "/dashboard" },
    { label: "Transactions", icon: <Wallet size={16} />, path: "/dashboard/transactions" },
    { label: "Customers", icon: <Users size={16} />, path: "/dashboard/customers" },
    { label: "Reports", icon: <BarChart2 size={16} />, path: "/dashboard/reports" },
    { label: "Settings", icon: <Settings size={16} />, path: "/dashboard/settings" },
  ];

  const handleNav = (path) => {
    router.push(path);
    onNavigate(); // close sidebar on mobile
  };

  const handleLogout = () => {
    // replace with real logout when you add auth
    alert("Logout successful!");
    router.push("/login");
  };

  return (
    <nav className="sidebar d-flex flex-column justify-content-between h-100 p-3">
      <div>
        <h4 className="text-center mb-4 fw-bold text-light">SmartBook</h4>

        <ul className="nav flex-column">
          {navItems.map((item) => (
            <li key={item.path} className="mb-2">
              <button
                className="btn btn-dark text-start w-100 d-flex align-items-center"
                onClick={() => handleNav(item.path)}
                type="button"
              >
                {item.icon}
                <span className="ms-2">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button
          className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2"
          onClick={handleLogout}
          type="button"
        >
          <LogOut size={16} />
          Logout
        </button>
        <p className="text-center small text-secondary mt-2 mb-0">© {new Date().getFullYear()} SmartBook</p>
      </div>
    </nav>
  );
}
