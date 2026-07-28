"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
export default function Carrossel(){
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

        const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);
    return(
        <section className="w-full bg-[#171A1D] py-16 md:py-24 text-white">
            <div className="mx-auto w-full px-6 md:w-10/12 md:px-0">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Principais Produtos</h1>
                        <p className="text-[#C0C0C0] mt-2">Destaques e favoritos da comunidade</p>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button onClick={scrollPrev} className="cursor-pointer w-10 h-10 rounded-full bg-[#1C1F22] hover:bg-[#2A2E33] flex items-center justify-center transition-colors border border-[#3B3B40]">
                        <ChevronLeft size={20} />
                        </button>
                        <button onClick={scrollNext} className="cursor-pointer w-10 h-10 rounded-full bg-[#1C1F22] hover:bg-[#2A2E33] flex items-center justify-center transition-colors border border-[#3B3B40]">
                        <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-6">
                        <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-6">
                            <div className="flex flex-col bg-[#1C1F22] rounded-xl overflow-hidden border border-[#2A2E33]">
                                <div className="bg-[#171A1D] w-full h-[250px] flex items-center justify-center p-6 relative">
                                    <Image 
                                        src="/batman.png" 
                                        alt="Funko Pop DC Batman"
                                        width={200}
                                        height={200}
                                        className="object-contain w-full h-full drop-shadow-xl"
                                    />
                                </div>
                                <div className="p-6 flex flex-col gap-3 items-start">
                                    <h2 className="font-bold text-[#F5F5F5]">DC - Batman</h2>
                                    <p className="text-xl font-black text-[#F5F5F5]">R$ 179,90</p>
                                    <Link href="/produtos/batman" className="mt-2 w-full flex items-center justify-center gap-2 bg-[#1473CD] hover:bg-[#105DA8] text-white font-bold py-3 rounded-lg transition-colors">
                                        <Eye size={20} />
                                        Ver Detalhes
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pr-6">
                            <div className="flex flex-col bg-[#1C1F22] rounded-xl overflow-hidden border border-[#2A2E33]">
                                <div className="bg-[#171A1D] w-full h-[250px] flex items-center justify-center p-6 relative">
                                    <Image 
                                        src="/gohan.png" 
                                        alt="Funko Pop DC Batman"
                                        width={200}
                                        height={200}
                                        className="object-contain w-full h-full drop-shadow-xl"
                                    />
                                </div>
                                <div className="p-6 flex flex-col gap-3 items-start">
                                    <h2 className="font-bold text-[#F5F5F5]">DBZ - Gohan</h2>
                                    <p className="text-xl font-black text-[#F5F5F5]">R$ 199,90</p>
                                    <Link href="/produtos/batman" className="mt-2 w-full flex items-center justify-center gap-2 bg-[#1473CD] hover:bg-[#105DA8] text-white font-bold py-3 rounded-lg transition-colors">
                                        <Eye size={20} />
                                        Ver Detalhes
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pr-6">
                            <div className="flex flex-col bg-[#1C1F22] rounded-xl overflow-hidden border border-[#2A2E33]">
                                <div className="bg-[#171A1D] w-full h-[250px] flex items-center justify-center p-6 relative">
                                    <Image 
                                        src="/max.png" 
                                        alt="Funko Pop DC Batman"
                                        width={200}
                                        height={200}
                                        className="object-contain w-full h-full drop-shadow-xl"
                                    />
                                </div>
                                <div className="p-6 flex flex-col gap-3 items-start">
                                    <h2 className="font-bold text-[#F5F5F5]">F1 - Max Verstappen</h2>
                                    <p className="text-xl font-black text-[#F5F5F5]">R$ 209,90</p>
                                    <Link href="/produtos/batman" className="mt-2 w-full flex items-center justify-center gap-2 bg-[#1473CD] hover:bg-[#105DA8] text-white font-bold py-3 rounded-lg transition-colors">
                                        <Eye size={20} />
                                        Ver Detalhes
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pr-6">
                            <div className="flex flex-col bg-[#1C1F22] rounded-xl overflow-hidden border border-[#2A2E33]">
                                <div className="bg-[#171A1D] w-full h-[250px] flex items-center justify-center p-6 relative">
                                    <Image 
                                        src="/ezio.png" 
                                        alt="Funko Pop DC Batman"
                                        width={200}
                                        height={200}
                                        className="object-contain w-full h-full drop-shadow-xl"
                                    />
                                </div>
                                <div className="p-6 flex flex-col gap-3 items-start">
                                    <h2 className="font-bold text-[#F5F5F5]">AC - Ezio Audiotore</h2>
                                    <p className="text-xl font-black text-[#F5F5F5]">R$ 229,90</p>
                                    <Link href="/produtos/ezio" className="mt-2 w-full flex items-center justify-center gap-2 bg-[#1473CD] hover:bg-[#105DA8] text-white font-bold py-3 rounded-lg transition-colors">
                                        <Eye size={20} />
                                        Ver Detalhes
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pr-6">
                            <div className="flex flex-col bg-[#1C1F22] rounded-xl overflow-hidden border border-[#2A2E33]">
                                <div className="bg-[#171A1D] w-full h-[250px] flex items-center justify-center p-6 relative">
                                    <Image 
                                        src="/darthvader.png" 
                                        alt="Funko Pop Star Wars Darth Vader"
                                        width={200}
                                        height={200}
                                        className="object-contain w-full h-full drop-shadow-xl"
                                    />
                                </div>
                                <div className="p-6 flex flex-col gap-3 items-start">
                                    <h2 className="font-bold text-[#F5F5F5]">Star Wars - Darth Vader</h2>
                                    <p className="text-xl font-black text-[#F5F5F5]">R$ 219,90</p>
                                    <Link href="/produtos/darthvader" className="mt-2 w-full flex items-center justify-center gap-2 bg-[#1473CD] hover:bg-[#105DA8] text-white font-bold py-3 rounded-lg transition-colors">
                                        <Eye size={20} />
                                        Ver Detalhes
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pr-6">
                            <div className="flex flex-col bg-[#1C1F22] rounded-xl overflow-hidden border border-[#2A2E33]">
                                <div className="bg-[#171A1D] w-full h-[250px] flex items-center justify-center p-6 relative">
                                    <Image 
                                        src="/hermione.png" 
                                        alt="Funko Pop Harry Potter Hermione"
                                        width={200}
                                        height={200}
                                        className="object-contain w-full h-full drop-shadow-xl"
                                    />
                                </div>
                                <div className="p-6 flex flex-col gap-3 items-start">
                                    <h2 className="font-bold text-[#F5F5F5]">Harry Potter - Hermione</h2>
                                    <p className="text-xl font-black text-[#F5F5F5]">R$ 189,90</p>
                                    <Link href="/produtos/hermione" className="mt-2 w-full flex items-center justify-center gap-2 bg-[#1473CD] hover:bg-[#105DA8] text-white font-bold py-3 rounded-lg transition-colors">
                                        <Eye size={20} />
                                        Ver Detalhes
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pr-6">
                            <div className="flex flex-col bg-[#1C1F22] rounded-xl overflow-hidden border border-[#2A2E33]">
                                <div className="bg-[#171A1D] w-full h-[250px] flex items-center justify-center p-6 relative">
                                    <Image 
                                        src="/homemaranha.png" 
                                        alt="Funko Pop Marvel Homem Aranha"
                                        width={200}
                                        height={200}
                                        className="object-contain w-full h-full drop-shadow-xl"
                                    />
                                </div>
                                <div className="p-6 flex flex-col gap-3 items-start">
                                    <h2 className="font-bold text-[#F5F5F5]">Marvel - Homem Aranha</h2>
                                    <p className="text-xl font-black text-[#F5F5F5]">R$ 199,90</p>
                                    <Link href="/produtos/homemaranha" className="mt-2 w-full flex items-center justify-center gap-2 bg-[#1473CD] hover:bg-[#105DA8] text-white font-bold py-3 rounded-lg transition-colors">
                                        <Eye size={20} />
                                        Ver Detalhes
                                    </Link>
                                </div>
                            </div>
                        </div>
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
    )
}