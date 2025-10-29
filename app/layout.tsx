import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StyleHub - Premium Fashion Store",
  description: "Shop the latest trends in fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
