import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata: Metadata = {
  title: "Portfolio - Mohammed Fayas",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
