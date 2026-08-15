"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProdutoCard from "../produto-card";
interface Produto {
    id: number;
    nome: string;
    franquia: string;
    descricao: string;
    preco: number;
    imagem: string;
    vendas: number;
}

interface CarrosselProps {
    produtos: Produto[];
}

export default function Carrossel({ produtos }: CarrosselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);
    return (
        <section className="w-full bg-[#0D0F11] py-16 md:py-24 text-[#F5F5F5]">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-0">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Principais Produtos</h2>
                        <p className="text-[#C0C0C0] mt-2">Destaques e favoritos da comunidade</p>
                    </div>           
                    <div className="hidden md:flex gap-4">
                        <button onClick={scrollPrev} className="cursor-pointer w-10 h-10 rounded-full bg-[#1C1F22] hover:bg-[#2A2E33] flex items-center justify-center border border-[#3B3B40]">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={scrollNext} className="cursor-pointer w-10 h-10 rounded-full bg-[#1C1F22] hover:bg-[#2A2E33] flex items-center justify-center border border-[#3B3B40]">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex gap-6">
                        {produtos.map((produto) => (
                            <div key={produto.id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-6">
                                <ProdutoCard 
                                    id={produto.id}
                                    nome={produto.nome}
                                    franquia={produto.franquia}
                                    descricao={produto.descricao}
                                    preco={produto.preco}
                                    imagem={produto.imagem}
                                    minimalista={true}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex md:hidden justify-center gap-4 mt-10">
                    <button onClick={scrollPrev} className="cursor-pointer w-12 h-12 rounded-full bg-[#1C1F22] hover:bg-[#2A2E33] flex items-center justify-center border border-[#3B3B40]">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={scrollNext} className="cursor-pointer w-12 h-12 rounded-full bg-[#1C1F22] hover:bg-[#2A2E33] flex items-center justify-center border border-[#3B3B40]">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}