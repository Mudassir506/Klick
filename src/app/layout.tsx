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
  title: "Cheese Klick — Klick. Know. Win.",
  description:
    "Spot a player on TV, klick a pic and unlock instant stats, history and epic insights. One app. Six sports. Infinite bragging rights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${inter.variable}`}>
      <body
        className="min-h-screen bg-background text-foreground"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
