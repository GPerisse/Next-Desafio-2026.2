import Link from "next/link";
import {Package} from "lucide-react";
import Image from "next/image";

export default function HeroSection(){
    return(
        <section className="w-full bg-[#0A243D] px-6 py-16 md:py-24">
            <div className="mx-auto w-full md:w-10/12 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-start gap-6 lg:w-1/2">
                    <div className="px-4 py-1 text-sm font-bold text-[#F5F5F5] bg-[#1473CD]/30 rounded-full">SUA COLEÇÃO COMEÇA AQUI</div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F5F5F5]">O MAIOR <br/> CATALOGO DE <br/> <span className="text-[#FFB612]">CULTURA POP</span></h1>
                    <h3 className="text-[#C0C0C0] max-w text-lg">Descubra milhares de colecionáveis, edições limitadas e os personagens que marcaram a sua vida. Encontre exatamente o que falta na sua estante.</h3>
                    <Link href="/produtos" className="w-full justify-center lg:w-fit mt-4 flex items-center gap-2 bg-[#05AC4B] hover:bg-[#059669] text-[#F5F5F5] font-bold py-4 px-8 rounded-md">
                        <Package size={25} />
                        Ver Catálogo Completo
                    </Link>
                    
                </div>
                <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
                    <Image
                    src="/hero.png" 
                    alt="Estante repleta de bonecos Funko Pop"
                    width={800}
                    height={600}
                    priority
                    className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl scale-125"
                    />
                </div>                
            </div>
        </section>
    )
}