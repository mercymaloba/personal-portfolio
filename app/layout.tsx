import type { Metadata } from "next";
import PortfolioTheme from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mercy Maloba | Software Engineer",
  description:
    "Mercy Maloba is a software engineer in Nairobi building thoughtful web applications with React, TypeScript, Node.js, and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PortfolioTheme>{children}</PortfolioTheme>
      </body>
    </html>
  );
}
