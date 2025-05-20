import type { Metadata } from "next";
import { dmSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solar quote",
  description: "An app for calculating customers savings for choosing solar energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
