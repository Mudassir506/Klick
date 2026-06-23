import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";

// Display font per Figma: Unbounded (variable, used at weight 900 / "Black")
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chesse Klick — Klick It. Know It. Win It.",
  description:
    "Spot a footballer on TV, klick a pic and unlock instant stats, history and epic insights. Be the first to play.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
