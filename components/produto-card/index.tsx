import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

interface ProdutoCardProps {
    id: number;
    nome: string;
    franquia: string;
    descricao: string;
    preco: number;
    imagem: string;
    minimalista?: boolean;
}

export default function ProdutoCard({ id, nome, franquia, descricao, preco, imagem, minimalista = false }: ProdutoCardProps) {
    return (
        <div className="w-full bg-[#171A1D] border border-[#3B3B40] rounded-2xl overflow-hidden flex flex-col group hover:border-[#1473CD] transition-colors duration-300">
            
            <div className="relative w-full h-64 bg-[#202428] flex items-center justify-center p-4">
                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                    <Image 
                        src={imagem} 
                        alt={nome} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-contain" 
                    />
                </div>
            </div>

            <div className="p-6 flex flex-col grow">
                <h2 className="text-xl font-bold text-[#F5F5F5] mb-2 truncate">
                    {franquia} - {nome}
                </h2>
                
                {!minimalista && (
                    <p className="text-sm text-[#C0C0C0] mb-6 line-clamp-3">
                        {descricao}
                    </p>
                )}

                <div className="mt-auto flex flex-col gap-4">
                    <span className="text-2xl font-black text-[#F5F5F5]">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)}
                    </span>

                    <Link 
                        href={`/produtos/${id}`}
                        className="w-full bg-[#1473CD] hover:bg-[#105DA8] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                        <Eye size={20} />
                        {minimalista ? "Ver Detalhes" : "Ver Mais"}
                    </Link>
                </div>
            </div>
            
        </div>
    );
}