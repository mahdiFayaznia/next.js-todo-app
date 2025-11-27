import { AppLayout } from "@/_components/layout";
import { fontAleo, fontNunito } from "@/_configs";
import { Providers } from "@/_contexts";
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
      suppressHydrationWarning
      className={`${fontNunito.variable} ${fontAleo.variable} antialiased`}
    >
      <body className="text-foreground bg-background">
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
