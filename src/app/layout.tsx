import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Castleton Avenue Merchant Organization",
  description: "Castleton Avenue Merchant Organization website scaffold",
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
