"use client";
import Image from "next/image";
import { Eye, Edit2, Trash2, Plus} from "lucide-react";
import Paginacao from "../paginacao";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import ModalCriar from "./modais/modal-criar";
import ModalEditar from "./modais/modal-editar";
import ModalVisualizar from "./modais/modal-visualizar";
import ModalExlcuir from "./modais/modal-excluir";
import Sidebar from "../sidebar";
interface Produto {
    id: number;
    nome: string;
    franquia: string;
    descricao: string;
    preco: number;
    imagem: string;
}

interface GerenciamentoPageProps {
    produtos: Produto[];
    totalPaginas: number;
    paginaAtual: number;
}

export default function GerenciamentoPage({ produtos, totalPaginas, paginaAtual }: GerenciamentoPageProps) {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token-geekpop");
        if (!token) {
            router.push("/login");
        }
    }, [router]);
    const [modalAberto, setModalAberto] = useState<'criar' | 'editar' | 'visualizar' | 'excluir' | null>(null);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
    const handleAbrirEditar = (produto: Produto) => {
        setProdutoSelecionado(produto);
        setModalAberto('editar');
    };
    const handleFecharModal = () => {
        setModalAberto(null);
        setProdutoSelecionado(null);
    };
    const handleAbrirVisualizar = (produto: Produto) => {
    setProdutoSelecionado(produto);
    setModalAberto('visualizar');
    };
    const handleAbrirExcluir = (produto: Produto) => {
    setProdutoSelecionado(produto);
    setModalAberto('excluir');
    };
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const handlePageChange = (novaPagina: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('pagina', novaPagina.toString());
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-[#0D0F11]">
            <Sidebar/>
            <div className="flex-1 py-8 px-4 md:py-11 md:px-8 w-full max-w-7xl mx-auto min-w-0">
                <div className="flex items-center justify-between gap-4 mb-4">
                    <h1 className="text-lg md:text-3xl font-black tracking-tight">GERENCIAMENTO DE PRODUTOS</h1>
                    <button onClick={() => setModalAberto('criar')} className="bg-[#05AC4B] hover:bg-[#048b3c] text-[#F5F5F5] font-bold p-2 md:py-3 md:px-6 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
                        <Plus size={24} />
                        <span className="hidden md:block">Criar Produto</span>
                    </button>
                </div>
                <div className="w-full overflow-x-auto bg-[#171A1D] border border-[#3B3B40] rounded-lg mb-8">
                    <table className="w-full text-left text-sm text-[#C0C0C0]">
                        <thead className="text-xs uppercase bg-[#202428] border-b border-[#3B3B40] text-[#F5F5F5]">
                            <tr>
                                <th className="px-6 py-4">Imagem</th>
                                <th className="px-6 py-4">Nome</th>
                                <th className="px-6 py-4">Preço</th>
                                <th className="px-6 py-4">Descrição</th>
                                <th className="px-6 py-4 text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map((produto) => (
                                <tr key={produto.id} className="border-b border-[#3B3B40] hover:bg-[#202428]">
                                    <td className="px-6 py-4">
                                        <div className="w-12 h-12 relative bg-[#0D0F11] border border-[#3B3B40] rounded-md overflow-hidden flex items-center justify-center">
                                            <Image src={produto.imagem || "/file.svg"} alt={produto.nome} width={40} height={40} className="w-auto h-auto max-w-full max-h-full object-contain" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-[#F5F5F5] max-w-50 truncate" title={`${produto.franquia} - ${produto.nome}`}>
                                        {produto.franquia} - {produto.nome}
                                    </td>
                                    <td className="px-6 py-4 font-bold text-[#F5F5F5]">
                                        R$ {produto.preco.toFixed(2).replace('.', ',')}
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="line-clamp-1 max-w-50">{produto.descricao || "Sem descrição"}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-3">
                                            <button onClick={() => handleAbrirVisualizar(produto)} className="p-2 border border-[#3B3B40] rounded-md text-[#C0C0C0] hover:text-[#F5F5F5] hover:bg-[#3B3B40] cursor-pointer" title="Visualizar">
                                                <Eye size={16} />
                                            </button>
                                            <button onClick={() => handleAbrirEditar(produto)} className="p-2 border border-[#3B3B40] rounded-md text-[#1473CD] hover:text-[#F5F5F5] hover:bg-[#1473CD] cursor-pointer" title="Editar">
                                                <Edit2 size={16} />
                                            </button>
                                            <button onClick={() => handleAbrirExcluir(produto)} className="p-2 border border-[#3B3B40] rounded-md text-[#E11D48] hover:text-[#F5F5F5] hover:bg-[#E11D48] cursor-pointer" title="Excluir">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            <Paginacao 
                    paginaAtual={paginaAtual} 
                    totalPaginas={totalPaginas} 
                    onPageChange={handlePageChange} 
                />
                {modalAberto === 'criar' && (
                    <ModalCriar fecharModal={handleFecharModal} />
                )}

                {modalAberto === 'editar' && produtoSelecionado && (
                    <ModalEditar fecharModal={handleFecharModal} produto={produtoSelecionado} />
                )}    
                {modalAberto === 'visualizar' && produtoSelecionado && (
                    <ModalVisualizar fecharModal={handleFecharModal} produto={produtoSelecionado} />
                )}
                {modalAberto === 'excluir' && produtoSelecionado && (
                    <ModalExlcuir fecharModal={handleFecharModal} produto={produtoSelecionado} />
                )}
            </div>
        </div>
    );
}