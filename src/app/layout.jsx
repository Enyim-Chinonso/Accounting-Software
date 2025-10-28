"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Dynamically import Bootstrap JS to enable navbar toggle, modals, etc.
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
