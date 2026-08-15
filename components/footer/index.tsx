"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {Package} from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
export default function Footer() {
    const pathname = usePathname();
    if (pathname === "/login") {
    return null;
    }
    const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    alert(`${label} copiado para a área de transferência!`);
    }; 
    return (
        <footer className="bg-[#0D0F11] border-t border-[#3B3B40] p-8 text-[#F5F5F5] mt-auto">
        <div className="mx-auto w-full px-6 md:w-10/12 md:px-0 py-12">
            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
                <div className="flex flex-col gap-2 max-w-xs">
                    <div className="flex items-center gap-2 mb-4">
                        <Link href="/" className="flex items-center text-[#1473CD]">
                            <Package size={30} />
                        </Link>
                        <Link href="/" className="text-2xl font-black flex">
                            GEEK <span className="text-[#1473CD]">POP</span>
                        </Link>        
                    </div>
                    <p className="font-regular text-[#C0C0C0]">A sua loja definitiva de cultura pop e colecionáveis.</p>       
                </div>
                <div className="flex flex-col gap-4 font-regular text-[#C0C0C0]">
                    <h3 className="font-bold text-[#F5F5F5] pb-3">SOBRE NÓS</h3>
                    <Link href="/contato" className="hover:text-[#F5F5F5]">Fale Conosco</Link>
                    <Link href="/" className="hover:text-[#F5F5F5]">Política de Privacidade</Link>
                    <Link href="/" className="hover:text-[#F5F5F5]">Termos de Uso</Link>
                </div>
                <div className="flex flex-col gap-4 font-regular text-[#C0C0C0]">
                    <h3 className="font-bold text-[#F5F5F5] pb-3">CONTATO</h3>
                    <div onClick={() => handleCopy("(32) 99999-9999", "Telefone")} className="cursor-pointer hover:text-[#F5F5F5] group">
                        <p className="font-bold text-[#F5F5F5]">Telefone</p>
                        <p>(32) 99999-9999</p>
                    </div>
                    <div onClick={() => handleCopy("contato@geekpop.com.br", "E-mail")} className="cursor-pointer hover:text-[#F5F5F5] group">
                        <p className="font-bold text-[#F5F5F5] ">E-mail</p>
                        <p>contato@geekpop.com.br</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 font-regular text-[#C0C0C0]">
                    <h3 className="font-bold text-[#F5F5F5] pb-3 uppercase">SIGA-NOS</h3>
                    <div className="flex gap-4">
                        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#3B3B40] rounded-full hover:bg-[#1473CD] hover:text-[#F5F5F5] flex items-center justify-center">
                            <FaInstagram size={25} />
                        </Link>
                        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#3B3B40] rounded-full hover:bg-[#1473CD] hover:text-[#F5F5F5] flex items-center justify-center">
                            <FaFacebookF size={25} />
                        </Link>
                        <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#3B3B40] rounded-full hover:bg-[#1473CD] hover:text-[#F5F5F5] flex items-center justify-center">
                            <FaXTwitter size={25} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-12 pt-4 border-t border-[#3B3B40] text-center text-[#C0C0C0] text-sm">
            © 2026 GEEKPOP Colecionáveis. Todos os direitos reservados.
        </div>
        </footer>
    );
}