import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAMO | Castleton Avenue Merchant Organization",
  description:
    "A neighborhood merchant organization website for Castleton Avenue businesses, events, and resources.",
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
