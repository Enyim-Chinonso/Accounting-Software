"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import Lenis from "lenis";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";


export default function Home() {
const router = useRouter();

 const handleDashboardClick = () => {
    const isLoggedIn = document.cookie.includes("isLoggedIn=true");
    if (isLoggedIn) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    // Smooth scroll
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // GSAP animations
    gsap.from(".fade-up", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-light text-dark">
      {/* ===== Navbar ===== */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary fs-4" href="#">
            SmartBook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reviews">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/login" className="btn btn-primary px-3 ms-lg-3">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="container text-center py-5 mt-5 min-vh-100 d-flex flex-column justify-content-center align-items-center fade-up">
        <h1 className="display-4 fw-bold text-primary mb-3">
          Simplify Your Accounting with SmartBook
        </h1>
        <p className="lead text-secondary mb-4">
          Manage your customers, transactions, and reports — all in one modern dashboard.
        </p>

        <button
          onClick={handleDashboardClick}
          className="btn btn-lg btn-primary px-5 py-2"
        >
          Go to Dashboard
        </button>
       
      </section>

      {/* ===== Features Section ===== */}
      <section id="features" className="container py-5 fade-up">
        <h2 className="text-center fw-bold mb-5 text-primary">Features</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <div className="mb-3 fs-2 text-primary">📊</div>
                <h5 className="fw-bold mb-2">Smart Dashboard</h5>
                <p className="text-secondary">
                  Access powerful analytics and monitor your financial performance in real time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <div className="mb-3 fs-2 text-success">👥</div>
                <h5 className="fw-bold mb-2">Customer Management</h5>
                <p className="text-secondary">
                  Keep track of all your clients, balances, and activities in one place.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <div className="mb-3 fs-2 text-warning">💰</div>
                <h5 className="fw-bold mb-2">Transaction Tracking</h5>
                <p className="text-secondary">
                  Easily record and manage income, expenses, and financial transactions seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Reviews Section ===== */}
      <section id="reviews" className="bg-white py-5 fade-up">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-primary">What Our Clients Say</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <p className="fst-italic text-secondary mb-3">
                    “SmartBook has completely transformed how I manage my small business accounts.”
                  </p>
                  <h6 className="fw-bold mb-0">— Jane Doe</h6>
                  <small className="text-muted">Entrepreneur</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <p className="fst-italic text-secondary mb-3">
                    “An intuitive dashboard and smooth experience. I love how easy it is to track reports.”
                  </p>
                  <h6 className="fw-bold mb-0">— Michael Lee</h6>
                  <small className="text-muted">Financial Consultant</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <p className="fst-italic text-secondary mb-3">
                    “Excellent tool for managing clients and keeping my records organized.”
                  </p>
                  <h6 className="fw-bold mb-0">— Chinonso Enyim</h6>
                  <small className="text-muted">Business Owner</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="container py-5 fade-up">
        <div className="text-center">
          <h2 className="fw-bold text-primary mb-3">About SmartBook</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            SmartBook is a modern accounting and business management tool designed to simplify 
            your daily financial operations. Our mission is to empower entrepreneurs, accountants, 
            and business owners with clear insights and automation.
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}

      <footer className="bg-dark text-light py-5 text-center fade-up">
        <div className="container">
          <div className="mb-3 d-flex justify-content-center gap-3 fs-4">
            <a href="https://github.com" target="_blank" className="text-light"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" className="text-light"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" className="text-light"><FaFacebook /></a>
            <a href="https://wa.me/2348108111761" target="_blank" className="text-light"><FaWhatsapp /></a>
          </div>

          <p className="mb-1">© {new Date().getFullYear()} SmartBook. All rights reserved.</p>
        </div>
      </footer>

      
      </main>
  );
}
