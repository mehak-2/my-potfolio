import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehak | Software Developer & Full Stack Engineer",
  description:
    "Portfolio of Mehak — Software Developer at Maxtron Innovations. Building scalable, modern web applications with Next.js, React, Node.js and more.",
  keywords: ["Software Developer", "Full Stack Engineer", "Next.js", "React", "Portfolio", "Mehak"],
  authors: [{ name: "Mehak" }],
  creator: "Mehak",
  openGraph: {
    title: "Mehak | Software Developer",
    description: "Building scalable, high-performance web products — from concept to production.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehak | Software Developer",
    description: "Building scalable, high-performance web products — from concept to production.",
    creator: "@mehak_codes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth dark`}>
      <body className="bg-background text-foreground min-h-screen antialiased selection:bg-accent selection:text-background">
        {children}
      </body>
    </html>
  );
}
