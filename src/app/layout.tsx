import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nusantara Paham AI - AI Pintar yang Paham Budaya Nusantara",
  description: "Platform AI dengan karakter Punokawan. Bijak, lucu, dan siap membantu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-background text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
