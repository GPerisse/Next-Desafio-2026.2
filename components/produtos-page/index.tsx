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
            preco: 179.90,
            imagem: "/ezio.png" 
        },
        {
            id: 2,
            nome: "Batman (The Dark Knight)",
            franquia: "DC Comics",
            descricao: "Boneco Funko Pop detalhado com a armadura clássica do Cavaleiro das Trevas.",
            preco: 149.90,
            imagem: "/batman.png"
        },
        {
            id: 3,
            nome: "Darth Vader",
            franquia: "Star Wars",
            descricao: "O lorde sith mais temido da galáxia agora na sua coleção.",
            preco: 219.90,
            imagem: "/darthvader.png"
        },
        {
            id: 4,
            nome: "Gohan Super Saiyajin",
            franquia: "Animes",
            descricao: "Eleve seu ki ao máximo com esta edição incrível do Gohan preparado para a batalha.",
            preco: 199.90,
            imagem: "/gohan.png"
        },
        {
            id: 5,
            nome: "Gohan Super Saiyajin",
            franquia: "Animes",
            descricao: "Eleve seu ki ao máximo com esta edição incrível do Gohan preparado para a batalha.",
            preco: 199.90,
            imagem: "/gohan.png"
        },
        {
            id: 6,
            nome: "Gohan Super Saiyajin",
            franquia: "Animes",
            descricao: "Eleve seu ki ao máximo com esta edição incrível do Gohan preparado para a batalha.",
            preco: 199.90,
            imagem: "/gohan.png"
        },
        {
            id: 7,
            nome: "Gohan Super Saiyajin",
            franquia: "Animes",
            descricao: "Eleve seu ki ao máximo com esta edição incrível do Gohan preparado para a batalha.",
            preco: 199.90,
            imagem: "/gohan.png"
        },
        {
            id: 8,
            nome: "Gohan Super Saiyajin",
            franquia: "Animes",
            descricao: "Eleve seu ki ao máximo com esta edição incrível do Gohan preparado para a batalha.",
            preco: 199.90,
            imagem: "/gohan.png"
        },
        {
            id: 9,
            nome: "Gohan Super Saiyajin",
            franquia: "Animes",
            descricao: "Eleve seu ki ao máximo com esta edição incrível do Gohan preparado para a batalha.",
            preco: 199.90,
            imagem: "/gohan.png"
        },
    ];
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
                                <option value="DC">DC Comics</option>
                                <option value="Marvel">Marvel</option>
                                <option value="Animes">Animes</option>
                                <option value="Games">Games</option>
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
                    {MOCK_PRODUTOS.map((produto) => (
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