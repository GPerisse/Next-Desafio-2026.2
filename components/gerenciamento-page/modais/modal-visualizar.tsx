import { X } from "lucide-react";
import Image from "next/image";

interface Produto {
    id: number;
    nome: string;
    franquia: string;
    descricao: string;
    preco: number;
    imagem: string;
}

interface ModalVisualizarProps {
    fecharModal: () => void;
    produto: Produto;
}

export default function ModalVisualizar({ fecharModal, produto }: ModalVisualizarProps){
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={fecharModal}>
            <div className="bg-[#171A1D] border border-[#3B3B40] rounded-xl w-full max-w-md flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between gap-6 p-6 border-b border-[#3B3B40]">
                    <h2 className="text-xl font-bold text-[#F5F5F5]">Detalhes do produto</h2>
                    <button onClick={fecharModal} className="text-[#C0C0C0] hover:text-[#F5F5F5] cursor-pointer">
                        <X size={24}/>
                    </button>
                </div>
                <div className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="w-52 h-52 bg-[#0D0F11] border border-[#3B3B40] rounded-xl flex justify-center items-center mb-2">
                        <Image
                            src={produto.imagem|| "/file.png"}
                            alt={produto.nome}
                            width={180}
                            height={180}
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-xl text-[#F5F5F5] font-bold">
                        {produto.franquia} - {produto.nome}
                    </h2>
                    <p className="text-2xl text-[#F5F5F5] font-black">
                        R$ {produto.preco}
                    </p>
                    <p className="text-sm text-[#C0C0C0] ">
                        {produto.descricao}
                    </p>
                </div>
                <div className="border-t border-[#3B3B40] p-6">
                    <button onClick={fecharModal} className="bg-[#1473CD] hover:bg-[#105CA8] rounded-lg w-full py-3 text-[#F5F5F5] font-bold cursor-pointer">
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    )
}