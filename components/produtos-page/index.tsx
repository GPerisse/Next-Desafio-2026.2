"use client";
import { Search, ChevronDown } from "lucide-react";
import ProdutoCard from "../produto-card";
import Paginacao from "../paginacao";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
interface Produto {
    id: number;
    nome: string;
    franquia: string;
    descricao: string;
    preco: number;
    imagem: string;
    vendas: number;
}

interface ProdutosPageProps {
    produtosIniciais: Produto[];
    totalPaginas: number;
    paginaAtual: number;
}

export default function ProdutosPage({ produtosIniciais, totalPaginas, paginaAtual }: ProdutosPageProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const buscaAtual = searchParams.get("busca") || "";
    const franquiaAtual = searchParams.get("franquia") || "Todas";
    const ordenacaoAtual = searchParams.get("ordenacao") || "Mais Vendidos";
    const handleFilterChange = (chave: string, valor: string | number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (valor && valor !== "Todas" && valor !== "") {
            params.set(chave, valor.toString());
        } else {
            params.delete(chave);
        }
        if (chave !== 'pagina') {
            params.set('pagina', '1');
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };
    return (
        <div className="w-full min-h-screen bg-[#0D0F11] text-[#F5F5F5] flex flex-col items-center py-12 px-6">
           <div className="w-full max-w-7xl flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h1 className="text-3xl md:text-4xl font-black">
                        TODOS OS PRODUTOS
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <div className="relative w-full md:w-64">
                            <input 
                                type="text" 
                                placeholder="Pesquisar Funko..." 
                                defaultValue={buscaAtual} 
                                onChange={(e) => handleFilterChange('busca', e.target.value)} 
                                className="w-full bg-[#171A1D] border border-[#3B3B40] rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#1473CD]"
                            />
                            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C0C0C0]" />
                        </div>
                        <div className="relative w-full md:w-auto">
                            <select 
                                value={franquiaAtual} 
                                onChange={(e) => handleFilterChange('franquia', e.target.value)} 
                                className="w-full bg-[#171A1D] border border-[#3B3B40] rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#1473CD] cursor-pointer appearance-none hover:bg-[#202428]"
                            >
                                <option value="Todas">Todas as Categorias</option>
                                <option value="Star Wars">Star Wars</option>
                                <option value="Harry Potter">Harry Potter</option>
                                <option value="DC Comics">DC Comics</option>
                                <option value="Marvel">Marvel</option>
                                <option value="Animes">Animes</option>
                                <option value="Games">Games</option>
                                <option value="Esportes">Esportes</option>
                            </select>
                            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C0C0C0] pointer-events-none" />
                        </div>
                        <div className="relative w-full md:w-auto">
                            <select 
                                value={ordenacaoAtual} 
                                onChange={(e) => handleFilterChange('ordenacao', e.target.value)} 
                                className="w-full bg-[#171A1D] border border-[#3B3B40] rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#1473CD] cursor-pointer appearance-none hover:bg-[#202428]"
                            >
                                <option value="Mais Vendidos">Mais Vendidos</option>
                                <option value="Menor Preço">Menor Preço</option>
                                <option value="Maior Preço">Maior Preço</option>
                                <option value="A-Z">Nome (A-Z)</option>
                            </select>
                            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C0C0C0] pointer-events-none" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-[#3B3B40] my-4"></div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {produtosIniciais.map((produto) => (
                        <ProdutoCard 
                            key={produto.id}
                            id={produto.id}
                            nome={produto.nome}
                            franquia={produto.franquia}
                            descricao={produto.descricao}
                            preco={produto.preco}
                            imagem={produto.imagem}
                        />
                    ))}
                    {produtosIniciais.length === 0 && (
                        <div className="col-span-full py-12 text-center text-[#C0C0C0]">
                            Nenhum produto encontrado.
                        </div>
                    )}
                </div>
                <Paginacao 
                    paginaAtual={paginaAtual} 
                    totalPaginas={totalPaginas} 
                    onPageChange={(novaPagina) => handleFilterChange('pagina', novaPagina)} 
                />
            </div>
        </div>
    );
}