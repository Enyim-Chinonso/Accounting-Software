"use client";
import { useEffect } from "react";
import StatCard from "@/components/StatCard";
import { gsap } from "gsap";

export default function DashboardPage() {
  useEffect(() => {
    gsap.from(".stat-card", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  const stats = [
    { title: "Total Customers", value: "1,245" },
    { title: "Transactions", value: "3,478" },
    { title: "Revenue", value: "$12,560" },
    { title: "Expenses", value: "$8,320" },
  ];

  return (
    <div className="row g-4">
      {stats.map((stat, index) => (
        <div className="col-md-3" key={index}>
          <StatCard title={stat.title} value={stat.value} />
        </div>
      ))}
    </div>
  );
}
