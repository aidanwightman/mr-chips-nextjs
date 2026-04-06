import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mr Chips | Notting Hill's Finest Chips",
  description:
    "Crispy golden chips, halloumi fries & sweet potato straight from Portobello Market. Wedding, festival & event catering across London.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${poppins.variable}`}>
      <body className="min-h-full flex flex-col overflow-x-hidden font-[family-name:var(--font-poppins)] text-[#1A1A1A] bg-white">
        {children}
      </body>
    </html>
  );
}
