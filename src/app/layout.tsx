import type { Metadata } from "next";
import { Bebas_Neue, Poppins, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
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
    <html lang="en" className={`${bebasNeue.variable} ${poppins.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col overflow-x-hidden font-[family-name:var(--font-poppins)] text-[#2B161B] bg-white">
        {children}
      </body>
    </html>
  );
}
