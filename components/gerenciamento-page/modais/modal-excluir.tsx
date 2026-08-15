import { Trash2 } from "lucide-react";

interface Produto {
    id: number;
    nome: string;
    franquia: string;
    descricao: string;
    preco: number;
    imagem: string;
}

interface ModalExcluirProps {
    fecharModal: () => void;
    produto: Produto;
}

export default function ModalExcluir({ fecharModal, produto }: ModalExcluirProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={fecharModal}>
            <div className="bg-[#171A1D] border border-[#3B3B40] rounded-xl w-full max-w-lg flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#9217173e] flex justify-center items-center">
                        <Trash2 size={28} className="text-[#E11D48] "/>
                    </div>
                    <h2 className="text-xl font-bold text-[#F5F5F5] pt-4">Excluir Produto</h2>
                    <p className="text-sm text-[#C0C0C0] ">Tem certeza que deseja excluir permanentemente o produto <br/> <span className="font-bold text-white">{produto.franquia} - {produto.nome}</span>?</p> 
                </div>
                <div className="flex items-center justify-center gap-4 p-10">
                        <button onClick={fecharModal} className="w-full py-3 px-6 bg-[#0D0F11] border border-[#3B3B40] hover:bg-[#111315e2] rounded-xl cursor-pointer text-[#C0C0C0] font-bold">Cancelar</button>
                        <button className="w-full py-3 px-6 bg-[#FB2C36] border border-[#FB2C36] hover:bg-[#cf2f37] rounded-xl cursor-pointer text-[#F5F5F5] font-bold">Excluir</button>
                </div>
            </div>
        </div>
    );
}