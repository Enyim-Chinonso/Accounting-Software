"use client";

import StatCard from "@/components/StatCard";
import gsap from "gsap";
import { useEffect } from "react";

export default function DashboardHome() {
  useEffect(() => {
    gsap.from(".stat-card", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 });
  }, []);

  return (
    <div>
      <h4 className="fw-bold mb-4">Dashboard Overview</h4>
      <div className="row g-3">
        <div className="col-md-3">
          <StatCard title="Total Sales" value="₦1,240,000" />
        </div>
        <div className="col-md-3">
          <StatCard title="Total Customers" value="325" />
        </div>
        <div className="col-md-3">
          <StatCard title="Total Expenses" value="₦540,000" />
        </div>
        <div className="col-md-3">
          <StatCard title="Net Profit" value="₦700,000" />
        </div>
      </div>
    </div>
  );
}
