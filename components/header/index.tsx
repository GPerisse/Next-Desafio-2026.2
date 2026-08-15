"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Package, Menu, X} from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { quantidadeTotal } = useCart();

  if (pathname === "/gerenciamento" || pathname === "/login") {
    return null;
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/produtos", label: "Produtos" },
    { href: "/contato", label: "Contato" },
    { href: "/gerenciamento", label: "Gerenciamento" },
    { href: "/carrinho", label: "Carrinho", isCart: true }, 
    { href: "/login", label: "Login" },
  ]

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-[#0D0F11] border-b border-[#3B3B40] text-white p-4 relative z-50">
      <div className="mx-auto flex justify-between items-center w-full px-6 md:w-10/12 md:px-0">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center text-[#1473CD]">
            <Package size={30} />
          </Link>
          <Link href="/" className="text-2xl font-black flex">
            GEEK <span className="text-[#1473CD]">POP</span>
          </Link>        
        </div>
        
        <div className="hidden md:flex gap-8 items-center font-medium">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className={`hover:text-[#1473CD] ${pathname === link.href ? "text-[#1473CD]" : ""}`}
            >
              {link.isCart ? (
              <div className="relative flex items-center justify-center">
                  <ShoppingCart size={22} />
                  {quantidadeTotal > 0 && (
                      <span className="absolute -top-1.5 -right-2 bg-[#1473CD] text-[#F5F5F5] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                          {quantidadeTotal}
                      </span>
                  )}
              </div>
          ) : (
              link.label
          )}
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden text-[#1473CD]" 
          onClick={toggleNav}
        >
          <Menu size={35} />
        </button>
      </div>

      {isNavOpen && (
        <div className="fixed inset-0 bg-[#171A1D] flex flex-col items-center pt-8 pb-12 z-50 md:hidden">
          <div className="flex items-center gap-2 mb-12">
            <div className="text-[#1473CD]">
              <Package size={35} />
            </div>
            <div className="text-3xl font-black tracking-tight">
              GEEK<span className="text-[#1473CD]">POP</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 text-2xl font-semibold grow justify-center">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                onClick={toggleNav}
                className={`${pathname === link.href ? "text-[#1473CD]" : "text-[#C0C0C0] hover:text-[#F5F5F5]"}`}
              >
                {link.label} 
              </Link>
            ))}
          </div>
          <button 
            onClick={toggleNav} 
            className="mt-auto text-[#C0C0C0] hover:text-[#F5F5F5]"
          >
            <X size={45} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </nav>
  );
}