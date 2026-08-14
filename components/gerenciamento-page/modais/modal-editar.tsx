import { X, Trash2 } from "lucide-react";
import Image from "next/image";

interface Produto {
    id: number;
    nome: string;
    franquia: string;
    descricao: string;
    preco: number;
    imagem: string;
}

interface ModalEditarProps {
    fecharModal: () => void;
    produto: Produto;
}

export default function ModalEditar({ fecharModal, produto }: ModalEditarProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={fecharModal}>
            <div className="bg-[#171A1D] border border-[#3B3B40] rounded-xl w-full max-w-lg flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()} >
                <div className="flex items-center justify-between p-6 border-b border-[#3B3B40]">
                    <h2 className="text-xl font-bold text-[#F5F5F5]">Editar Produto</h2>
                    <button onClick={fecharModal} className="text-[#C0C0C0] hover:text-white transition-colors cursor-pointer">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-[#C0C0C0]">Imagem do Produto</label>
                        <div className="flex items-center justify-between p-3 bg-[#0D0F11] border border-[#3B3B40] rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-16 relative bg-[#171A1D] rounded flex items-center justify-center overflow-hidden">
                                    <Image src={produto.imagem || "/file.svg"} alt="Imagem atual" width={70} height={70} className="object-contain" />
                                </div>
                                <span className="text-sm text-[#F5F5F5]">{produto.imagem || "Sem imagem"}</span>
                            </div>
                            <button className="text-[#C0C0C0] hover:text-[#E11D48] transition-colors cursor-pointer" title="Remover imagem">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-[#C0C0C0]">Nome do Produto</label>
                        <input type="text" defaultValue={`${produto.franquia} - ${produto.nome}`} className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] focus:outline-none focus:border-[#1473CD]" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-[#C0C0C0]">Preço</label>
                        <input type="text" defaultValue={`${produto.preco}`} className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] focus:outline-none focus:border-[#1473CD]"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-[#C0C0C0]">Descrição</label>
                        <textarea defaultValue={produto.descricao}placeholder="Descreva o produto..." rows={6} className="p-3 resize-none bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] focus:outline-none focus:border-[#1473CD]" />
                    </div>
                </div>
                <div className="flex items-center justify-end gap-4 p-6 border-t border-[#3B3B40]">
                    <button onClick={fecharModal} className="px-6 py-2 rounded-lg border border-[#3B3B40] text-[#C0C0C0] font-bold hover:bg-[#202428] transition-colors cursor-pointer">
                        Cancelar
                    </button>
                    <button className="px-6 py-2 rounded-lg bg-[#1473CD] hover:bg-[#105CA8] text-white font-bold transition-colors cursor-pointer">
                        Salvar Alterações
                    </button>
                </div>
            </div>
        </div>
    );
}