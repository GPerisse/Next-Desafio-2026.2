"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { Box } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/gerenciamento") {
    return null;
  }
  if (pathname === "/login") {
    return null;
  }

  return (
    <nav className="bg-[#171A1D] border-b border-[#3B3B40] text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex col gap-2">
        <Link href="/carrinho" className="flex items-center gap-1 text-[#1473CD]">
            <Box size={25} />
          </Link>
        <Link href="/" className="text-xl font-bold ">
          GEEK
        </Link>
        <Link href="/" className="text-xl font-bold text-[#1473CD]">
          POP
        </Link>
        </div>
        

        <div className="flex gap-8">
          <Link href="/" className="hover:text-[#1473CD] transition-colors">Home</Link>
          <Link href="/produtos" className="hover:text-[#1473CD] transition-colors">Produtos</Link>
          <Link href="/contato" className="hover:text-[#1473CD] transition-colors">Contato</Link>
          <Link href="/gerenciamento" className="hover:text-[#1473CD] transition-colors">Gerenciamento</Link>
          <Link href="/carrinho" className="hover:text-[#1473CD] transition-colors flex items-center gap-1">
            <ShoppingCart size={20} />
          </Link>
          <Link href="/login" className="hover:text-[#1473CD] transition-colors">Login</Link>
        </div>
      </div>
    </nav>
  );
}