"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart, Package, Menu, X, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { quantidadeTotal } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);
  useEffect(() => {
        const token = localStorage.getItem("token-geekpop");
        const nome = localStorage.getItem("nome-geekpop");
        
        if (token) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsLoggedIn(true);
            setUserName(nome || "Admin");
        } else {
            setIsLoggedIn(false);
        }
    }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token-geekpop");
    localStorage.removeItem("nome-geekpop");
    setIsLoggedIn(false);
    setMenuAberto(false);
    setIsNavOpen(false);
    router.push("/");
  };
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
  ];

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
          {navLinks.map((link, index) => {
            if (link.label === "Login" && isLoggedIn) {
                return (
                    <div key={index} className="relative">
                        <button onClick={() => setMenuAberto(!menuAberto)} className="flex items-center justify-center p-2 text-[#F5F5F5] hover:text-[#1473CD] cursor-pointer transition-colors">
                            <User size={22} />
                        </button>
                        {menuAberto && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setMenuAberto(false)}></div>
                                <div className="absolute right-0 top-12 w-48 bg-[#171A1D] border border-[#3B3B40] rounded-xl shadow-2xl py-3 px-4 flex flex-col gap-3 z-50">
                                    <div className="flex flex-col border-b border-[#3B3B40] pb-3 mb-1">
                                        <span className="text-[10px] text-[#C0C0C0] uppercase tracking-wider">Bem-vindo(a)</span>
                                        <span className="text-sm font-bold text-[#F5F5F5] truncate">
                                            {userName}
                                        </span>
                                    </div>
                                    <button onClick={handleLogout} className="text-sm text-left text-[#E11D48] hover:text-[#BE123C] font-bold cursor-pointer transition-colors relative z-50">
                                        Sair
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                );
            }
            return (
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
            );
          })}
        </div>
        <button className="md:hidden text-[#1473CD]" onClick={toggleNav}>
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
            {navLinks.map((link, index) => {
              if (link.label === "Login" && isLoggedIn) {
                  return (
                      <div key={index} className="flex flex-col items-center gap-8">
                          <button onClick={handleLogout} className="text-[#E11D48] hover:text-[#BE123C] font-bold">
                              Sair
                          </button>
                      </div>
                  );
              }
              return (
                <Link 
                  key={index} 
                  href={link.href} 
                  onClick={toggleNav}
                  className={`${pathname === link.href ? "text-[#1473CD]" : "text-[#C0C0C0] hover:text-[#F5F5F5]"}`}
                >
                  {link.label} 
                </Link>
              );
            })}
          </div>
          <button onClick={toggleNav} className="mt-auto text-[#C0C0C0] hover:text-[#F5F5F5]">
            <X size={45} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </nav>
  );
}