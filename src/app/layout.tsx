import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/footer";
import HeaderNavigation from "@/components/layout/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose what you need
  variable: "--font-poppins", // optional (for CSS variable use)
});

export const metadata: Metadata = {
  title: "Epic Global Digital Solutions Pvt. ltd. | Epic Global",
  description:
    "Epic Global delivers innovative IT solutions tailored to your business needs. From web development to advanced software systems, we empower your growth with cutting-edge technology and expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${inter.variable} ${poppins.className} antialiased`}
      >
        <HeaderNavigation />

        {children}

        <Footer />
      </body>
    </html>
  );
}
