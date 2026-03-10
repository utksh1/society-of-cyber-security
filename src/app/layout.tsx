import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TerminalWindow from "@/components/ui/TerminalWindow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Society of Cyber Security",
  description: "Learn • Build • Secure. Hands-on cybersecurity community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-slate-900 text-slate-200 overflow-x-hidden">
        <Navbar />
        <main className="flex-grow flex flex-col pt-20">
          {children}
        </main>
        <Footer />
        <TerminalWindow />
      </body>
    </html>
  );
}
