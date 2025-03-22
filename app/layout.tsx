import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../app/components/Navbar/Navbar"; // Adjusted import path
import LoadingScreen from "../app/components/LoadingScreen/LoadingScreen"; // Import LoadingScreen

export const metadata: Metadata = {
  title: "VJC INFRA PROJECTS",
  description: "VJC Infra Project Private Limited is a construction and infrastructure development company specializing in high-quality residential, commercial, and industrial projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <title>Vjcinfra</title>
      </head>
      <body> {/* ✅ No need for montserrat.className */}
        <LoadingScreen>
          <Navbar />
          {children}
        </LoadingScreen>
      </body>
    </html>
  );
}
