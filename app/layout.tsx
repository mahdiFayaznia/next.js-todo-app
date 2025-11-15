import { fontAleo, fontNunito } from "@/_configs";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Next.js Todo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontNunito.variable} ${fontAleo.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
