import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "GG7 Universe | Nusantara Paham AI",
  description: "Pembantu Pintar Level Doktor Didukung Penuh oleh Agent GG7. Menyatukan kearifan lokal Nusantara dengan kecerdasan AI modern. No Tulalit Anymore!",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className="bg-background text-white min-h-screen antialiased selection:bg-primary/30 selection:text-white flex flex-col">
        {/* Ambient Grid overlay */}
        <div className="fixed inset-0 bg-noise pointer-events-none z-50" />
        
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
