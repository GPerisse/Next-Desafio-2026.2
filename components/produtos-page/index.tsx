"use client";
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import ProdutoCard from "../produto-card";
import Paginacao from "../paginacao";
import { MOCK_PRODUTOS } from "../../src/lib/mock";
export default function ProdutosPage() {
    const [busca, setBusca] = useState("");
    const [franquia, setFranquia] = useState("Todas");
    const [ordenacao, setOrdenacao] = useState("Mais Vendidos");
    const [paginaAtual, setPaginaAtual] = useState(1);
        const produtosFiltrados = MOCK_PRODUTOS.filter((produto) => {
        const bateComBusca = produto.nome.toLowerCase().includes(busca.toLowerCase()) || produto.franquia.toLowerCase().includes(busca.toLowerCase());
        const bateComFranquia = franquia === "Todas" || produto.franquia === franquia;    
        return bateComBusca && bateComFranquia;
    });

    produtosFiltrados.sort((a, b) => {
        if (ordenacao === "Mais Vendidos") return b.vendas - a.vendas;
        if (ordenacao === "Menor Preço") return a.preco - b.preco;
        if (ordenacao === "Maior Preço") return b.preco - a.preco;
        if (ordenacao === "A-Z") return a.nome.localeCompare(b.nome);
        return 0;
    })

    const itensPorPagina = 8;
    const totalPaginas = Math.ceil(produtosFiltrados.length / itensPorPagina);
    const indexInicial = (paginaAtual - 1) * itensPorPagina;
    const indexFinal = indexInicial + itensPorPagina;
    const produtosPaginados = produtosFiltrados.slice(indexInicial, indexFinal);
    return (
        <div className="w-full min-h-screen bg-[#0D0F11] text-[#F5F5F5] flex flex-col items-center py-12 px-6">
           <div className="w-full max-w-7xl flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                        TODOS OS PRODUTOS
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <div className="relative w-full md:w-64">
                            <input type="text" placeholder="Pesquisar Funko..." value={busca} onChange={(e) => {setBusca(e.target.value); setPaginaAtual(1);}} className="w-full bg-[#171A1D] border border-[#3B3B40] rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#1473CD] transition-colors"/>
                            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C0C0C0]" />
                        </div>
                        <div className="relative w-full md:w-auto">
                            <select value={franquia} onChange={(e) => {setFranquia(e.target.value); setPaginaAtual(1); }} className="w-full bg-[#171A1D] border border-[#3B3B40] rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#1473CD] cursor-pointer appearance-none hover:bg-[#202428]">
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
                            <select value={ordenacao} onChange={(e) => {setOrdenacao(e.target.value); setPaginaAtual(1);}} className="w-full bg-[#171A1D] border border-[#3B3B40] rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#1473CD] cursor-pointer appearance-none hover:bg-[#202428]">
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
                    {produtosPaginados.map((produto) => (
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
                </div>
                <Paginacao 
                    paginaAtual={paginaAtual} 
                    totalPaginas={totalPaginas} 
                    onPageChange={(novaPagina) => setPaginaAtual(novaPagina)} 
                />
            </div>
        </div>
    );
}