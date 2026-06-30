import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nusantara Paham AI | Inklusif. Adaptif. Menyeluruh.",
  description: "Platform AI Pertama yang menggabungkan kearifan lokal 38 Provinsi Indonesia dengan kecanggihan model kecerdasan buatan modern. Mendukung inklusivitas teknologi di Nusantara.",
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
