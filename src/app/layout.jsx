import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmartBook - Accounting App",
  description: "A professional accounting dashboard inspired by Khatabook & Vyapar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
