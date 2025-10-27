"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Lenis from "lenis";
import gsap from "gsap";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Lenis smooth scroll (global)
    const lenis = new Lenis({ smooth: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // page enter animation
    gsap.from(".dashboard-body", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  // toggle handler passed to Navbar (hamburger) to open/close sidebar on mobile
  const toggleSidebar = () => setIsSidebarOpen((s) => !s);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="dashboard-layout d-flex bg-light min-vh-100">
      {/* Sidebar: layout controls its visibility with class names */}
      <aside className={`sidebar-container ${isSidebarOpen ? "open" : "closed"}`}>
        <Sidebar onNavigate={closeSidebar} />
      </aside>

      {/* mobile overlay when sidebar is open */}
      {isSidebarOpen && (
        <div className="sidebar-overlay d-md-none" onClick={closeSidebar} />
      )}

      {/* Main content */}
      <div className="main-content flex-grow-1 d-flex flex-column">
        <Navbar onHamburgerClick={toggleSidebar} />
        <main className="dashboard-body flex-grow-1">{children}</main>
      </div>
    </div>
  );
}
