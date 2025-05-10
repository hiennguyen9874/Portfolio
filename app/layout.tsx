import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import ScrollProgress from "@/components/navigation/ScrollProgress";
config.autoAddCss = false;

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Senior Software Developer | Backend, DevOps & Deep Learning",
  description: "Portfolio of a Senior Software Developer specializing in Backend, DevOps and Deep Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body 
        className={`${inter.variable} antialiased`}
        data-new-gr-c-s-check-loaded="14.1234.0"
        data-gr-ext-installed=""
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
