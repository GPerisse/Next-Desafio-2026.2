"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ChevronLeft } from "lucide-react";
import ProdutoCard from "../produto-card";
import { useCart } from "@/contexts/CartContext";

interface Produto {
    id: number;
    nome: string;
    franquia: string;
    descricao: string;
    preco: number;
    imagem: string;
    vendas: number;
}
interface ProdutoIndividualProps {
    produto: Produto | null;
    produtosRelacionados: Produto[];
}

export default function ProdutoIndividual({ produto, produtosRelacionados }: ProdutoIndividualProps) {
    const { adicionarAoCarrinho } = useCart();
    if (!produto) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
                <p className="mb-4 text-[#C0C0C0]">O sistema não encontrou este ID.</p>
                <Link href="/produtos" className="text-[#1473CD] hover:underline">Voltar para a loja</Link>
            </div>
        );
    }
    const handleAdicionar = () => {
        adicionarAoCarrinho({
            id: produto.id,
            nome: produto.nome,
            franquia: produto.franquia,
            preco: produto.preco,
            imagem: produto.imagem
        });
        alert("Produto adicionado ao carrinho!"); 
    };

    return (
        <div className="max-w-6xl mx-auto">
            <Link href="/produtos" className="inline-flex items-center gap-2 text-[#C0C0C0] hover:text-[#F5F5F5] mb-10">
                <ChevronLeft size={20} />
                Voltar para produtos
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <div className="bg-[#1C1F22] border border-[#2A2E33] rounded-2xl w-full h-100 md:h-125 flex items-center justify-center p-8 relative">
                    <Image 
                        src={produto.imagem} 
                        alt={produto.nome}
                        width={400}
                        height={400}
                        className="object-contain w-full h-full drop-shadow-2xl"
                    />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-3xl md:text-5xl font-black uppercase mb-4">
                        {produto.franquia} - {produto.nome}
                    </h1>                   
                    <p className="text-4xl md:text-5xl font-black text-[#F5F5F5] mb-2">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}
                    </p>                   
                    <p className="text-sm text-[#C0C0C0] mb-8">
                        Em até 3x de {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco / 3)} sem juros
                    </p>
                    <button onClick={handleAdicionar} className="w-full bg-[#05AC4B] hover:bg-[#059669] text-[#F5F5F5] font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-3 cursor-pointer shadow-lg mb-8">
                        <ShoppingCart size={24} />
                        ADICIONAR AO CARRINHO
                    </button>
                    <div className="w-full h-px bg-[#2A2E33] mb-8"></div>
                    <h3 className="text-lg font-bold text-[#F5F5F5] mb-3">Descrição do Produto</h3>
                    <p className="text-[#C0C0C0] mb-10">
                        {produto.descricao}! Celebre sua paixão pela cultura pop com os Bonecos Funko Pop! Ícones do colecionismo, os Bonecos Funko Pop! conquistaram fãs no mundo todo com seu visual marcante de cabeça grande e corpo pequeno. Feitos em vinil de alta qualidade, eles trazem à vida personagens de filmes, séries, quadrinhos, animes, games e muito mais. Seja qual for o seu universo favorito, existe um Funko perfeito para expressar sua personalidade e paixão pela cultura pop. Comece ou expanda sua coleção agora mesmo!
                    </p>
                </div>
            </div>
            {produtosRelacionados.length > 0 && (
                <section className="mt-20 pt-10 border-t border-[#2A2E33]">
                    <h2 className="text-2xl md:text-3xl font-black uppercase mb-8">
                        Produtos Relacionados
                    </h2>                   
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {produtosRelacionados.map((relacionado) => (
                            <ProdutoCard 
                                key={relacionado.id}
                                id={relacionado.id}
                                nome={relacionado.nome}
                                franquia={relacionado.franquia}
                                descricao={relacionado.descricao}
                                preco={relacionado.preco}
                                imagem={relacionado.imagem}
                                minimalista={true}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}