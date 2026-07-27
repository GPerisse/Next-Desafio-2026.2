import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"; 
import Footer from "@/components/footer";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GeekPop",
  description: "O maior catálogo de cultura pop e colecionáveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased bg-[#171A1D] text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}