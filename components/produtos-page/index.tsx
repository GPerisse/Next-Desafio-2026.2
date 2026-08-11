"use client";
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import ProdutoCard from "../produto-card";
export default function ProdutosPage() {
    const [busca, setBusca] = useState("");
    const [franquia, setFranquia] = useState("Todas");
    const [ordenacao, setOrdenacao] = useState("Relevância");
    const MOCK_PRODUTOS = [
        {
            id: 1,
            nome: "Ezio Auditore",
            franquia: "Games",
            descricao: "Traga a lenda da Irmandade dos Assassinos para a sua coleção! O Funko Pop do Ezio Auditore captura com perfeição os detalhes do traje icônico visto no jogo.",
            preco: 229.90,
            imagem: "/ezio.png",
            vendas: 342
        },
        {
            id: 2,
            nome: "Batman (The Dark Knight)",
            franquia: "DC Comics",
            descricao: "Boneco Funko Pop detalhado com a armadura clássica do Cavaleiro das Trevas.",
            preco: 179.90,
            imagem: "/batman.png",
            vendas: 220
        },
        {
            id: 3,
            nome: "Darth Vader",
            franquia: "Star Wars",
            descricao: "O lorde sith mais temido da galáxia agora na sua coleção.",
            preco: 219.90,
            imagem: "/darthvader.png",
            vendas: 189
        },
        {
            id: 4,
            nome: "Gohan Super Saiyajin",
            franquia: "Animes",
            descricao: "Eleve seu ki ao máximo com esta edição incrível do Gohan preparado para a batalha.",
            preco: 199.90,
            imagem: "/gohan.png",
            vendas: 170
        },
        {
            id: 5,
            nome: "Hermione",
            franquia: "Harry Potter",
            descricao: "Defenda o mundo bruxo com essa edição incrivel da Hermione Granger",
            preco: 159.90,
            imagem: "/hermione.png",
            vendas: 80
        },
        {
            id: 6,
            nome: "Homem Aranha",
            franquia: "Marvel",
            descricao: "Batalhe por Nova York com nosso herói da vizinhança",
            preco: 169.90,
            imagem: "/homemaranha.png",
            vendas: 95
        },
        {
            id: 7,
            nome: "Max Verstappen",
            franquia: "Esportes",
            descricao: "Vança corridas com nosso campeão mundial Max Verstappen",
            preco: 209.90,
            imagem: "/max.png",
            vendas: 190
        },
        {
            id: 8,
            nome: "Gohan Super Saiyajin",
            franquia: "Animes",
            descricao: "Eleve seu ki ao máximo com esta edição incrível do Gohan preparado para a batalha.",
            preco: 199.90,
            imagem: "/gohan.png",
            vendas: 170
        },
        {
            id: 9,
            nome: "Gohan Super Saiyajin",
            franquia: "Animes",
            descricao: "Eleve seu ki ao máximo com esta edição incrível do Gohan preparado para a batalha.",
            preco: 199.90,
            imagem: "/gohan.png",
            vendas: 170
        },
    ];
        const produtosFiltrados = MOCK_PRODUTOS.filter((produto) => {
        const bateComBusca = produto.nome.toLowerCase().includes(busca.toLowerCase()) || produto.franquia.toLowerCase().includes(busca.toLowerCase());
        const bateComFranquia = franquia === "Todas" || produto.franquia === franquia;    
        return bateComBusca && bateComFranquia;
    });

    produtosFiltrados.sort((a, b) => {
        if (ordenacao === "Relevância") return b.vendas - a.vendas;
        if (ordenacao === "Menor Preço") return a.preco - b.preco;
        if (ordenacao === "Maior Preço") return b.preco - a.preco;
        if (ordenacao === "A-Z") return a.nome.localeCompare(b.nome);
        return 0;
    });
    const produtosPaginados = produtosFiltrados.slice(0, 8);
    return (
        <div className="w-full min-h-screen bg-[#0D0F11] text-[#F5F5F5] flex flex-col items-center py-12 px-6">
           <div className="w-full max-w-7xl flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                        TODOS OS PRODUTOS
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <div className="relative w-full md:w-64">
                            <input type="text" placeholder="Pesquisar Funko..." value={busca} onChange={(e) => setBusca(e.target.value)} className="w-full bg-[#171A1D] border border-[#3B3B40] rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#1473CD] transition-colors"/>
                            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C0C0C0]" />
                        </div>
                        <div className="relative w-full md:w-auto">
                            <select value={franquia} onChange={(e) => setFranquia(e.target.value)} className="w-full bg-[#171A1D] border border-[#3B3B40] rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#1473CD] cursor-pointer appearance-none hover:bg-[#202428]">
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
                            <select value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)} className="w-full bg-[#171A1D] border border-[#3B3B40] rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#1473CD] cursor-pointer appearance-none hover:bg-[#202428]">
                                <option value="Relevância">Relevância</option>
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
            </div>
        </div>
    );
}