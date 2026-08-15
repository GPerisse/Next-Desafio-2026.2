import { X } from "lucide-react";

interface ModalCriarProps {
    fecharModal: () => void;
}

export default function ModalCriar({ fecharModal }: ModalCriarProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={fecharModal}>
            <div className="bg-[#171A1D] border border-[#3B3B40] rounded-xl w-full max-w-lg flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between p-6 border-b border-[#3B3B40]">
                    <h2 className="text-xl font-bold text-[#F5F5F5]">Criar Novo Produto</h2>
                    <button onClick={fecharModal} className="text-[#C0C0C0] hover:text-white cursor-pointer">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6 flex flex-col gap-4">       
                   <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[#F5F5F5]">Imagem do Produto</label>
                        <label className="w-full h-24 border border-[#3B3B40] rounded-lg flex flex-col items-center justify-center text-sm text-[#C0C0C0] bg-[#0D0F11] cursor-pointer hover:bg-[#171A1D]">
                            <p><span className="text-[#1473CD] font-bold">Clique</span> para fazer upload</p>
                            <p className="text-xs mt-1">ou arraste a imagem aqui</p>
                            <input type="file" accept="image/png" className="hidden" />
                        </label>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[#F5F5F5]">Nome do Produto</label>
                        <input type="text" placeholder="Nome do Produto" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40]" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[#F5F5F5]">Preço</label>
                        <input type="text" placeholder="0,00" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40]" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[#F5F5F5]">Descrição</label>
                        <textarea placeholder="Descreva o produto..." rows={6} className="p-3 resize-none bg-[#0D0F11] rounded-lg border border-[#3B3B40]" />
                    </div>
                </div>
                <div className="flex items-center justify-end gap-4 p-6 border-t border-[#3B3B40]">
                    <button onClick={fecharModal} className="px-6 py-3 rounded-lg border border-[#3B3B40] text-[#C0C0C0] font-bold hover:bg-[#202428] cursor-pointer">
                        Cancelar
                    </button>
                    <button className="px-6 py-3 rounded-lg bg-[#1473CD] hover:bg-[#105CA8] text-white font-bold cursor-pointer">
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}