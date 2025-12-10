// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital KYC Dashboard",
  description: "Digital KYC funnel analysis and solution to reduce drop-off and lift conversion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
