import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../app/components/Navbar/Navbar"; 
import LoadingScreen from "../app/components/LoadingScreen/LoadingScreen"; 

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
      </head>
      <body>
        <LoadingScreen>
          <Navbar />
          {children}
        </LoadingScreen>
      </body>
    </html>
  );
}
