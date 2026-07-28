import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
export default function Carrossel(){
    return(
        <section className="w-full bg-[#171A1D] py-16 md:py-24 text-white">
            <div className="mx-auto w-full px-6 md:w-10/12 md:px-0">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Principais Produtos</h1>
                        <p className="text-[#C0C0C0] mt-2">Destaques e favoritos da comunidade</p>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button className="w-10 h-10 rounded-full bg-[#1C1F22] hover:bg-[#2A2E33] flex items-center justify-center transition-colors border border-[#3B3B40]">
                        <ChevronLeft size={20} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-[#1C1F22] hover:bg-[#2A2E33] flex items-center justify-center transition-colors border border-[#3B3B40]">
                        <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
                <div>
                    Carrossel aqui!!
                </div>
                <div className="flex md:hidden justify-center gap-4 mt-10">
                    <button className="w-12 h-12 rounded-full bg-[#1C1F22] flex items-center justify-center border border-[#3B3B40]">
                    <ChevronLeft size={24} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-[#1C1F22] flex items-center justify-center border border-[#3B3B40]">
                    <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    )
}