// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     gsap.from(".login-card", { opacity: 0, y: 50, duration: 1 });
//   }, []);

//   return (
//     <main className="d-flex align-items-center justify-content-center vh-100 bg-light">
//       <div className="card shadow-lg p-5 text-center login-card" style={{ width: "350px", borderRadius: "15px" }}>
//         <h3 className="mb-3 fw-bold text-primary">SmartBook</h3>
//         <p className="text-muted">Manage your business accounts easily.</p>
//         <button
//           onClick={() => router.push("/dashboard")}
//           className="btn btn-primary w-100 mt-4"
//         >
//           Login / Enter Dashboard
//         </button>
//       </div>
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="fw-bold display-4 text-primary">Welcome to SmartBook</h1>
      <p className="text-secondary">Your modern accounting dashboard</p>
      <a href="/dashboard" className="btn btn-primary px-4 mt-3">Go to Dashboard</a>
    </main>
  );
}
