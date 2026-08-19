import { X } from "lucide-react";
import { useState } from "react";
import { criarProduto } from "../../../src/actions/gerenciamento/actions";
import Image from "next/image";
interface ModalCriarProps {
    fecharModal: () => void;
}

export default function ModalCriar({ fecharModal }: ModalCriarProps) {
    const [nome, setNome] = useState("");
    const [franquia, setFranquia] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [imagemBase64, setImagemBase64] = useState<string>("");
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagemBase64(reader.result as string);
            };
            reader.readAsDataURL(file); 
        }
    };
    const handleSalvar = async () => {
        const precoFormatado = parseFloat(preco.replace(",", "."));
        await criarProduto({
            nome,
            franquia,
            descricao,
            preco: precoFormatado || 0,
            imagem: imagemBase64
        });
        fecharModal();
    };
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
                        <label className="w-full h-34 border border-[#3B3B40] rounded-lg flex flex-col items-center justify-center text-sm text-[#C0C0C0] bg-[#0D0F11] cursor-pointer hover:bg-[#171A1D] overflow-hidden">
                            {imagemBase64 ? (
                                <Image src={imagemBase64} alt="Preview" width={300} height={300} className="w-full h-full object-contain" />
                            ) : (
                                <>
                                    <p><span className="text-[#1473CD] font-bold">Clique</span> para fazer upload</p>
                                    <p className="text-xs mt-1">ou arraste a imagem aqui</p>
                                </>
                            )}
                            <input type="file" accept="image/png, image/jpeg" className="hidden" onChange={handleImageUpload} />
                        </label>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[#F5F5F5]">Nome do Produto</label>
                        <input type="text" placeholder="Nome do Produto" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40]" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[#F5F5F5]">Franquia</label>
                        <input type="text" placeholder="Ex: Star Wars" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] focus:outline-none focus:border-[#1473CD]" value={franquia} onChange={(e) => setFranquia(e.target.value)}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[#F5F5F5]">Preço</label>
                        <input type="text" placeholder="0,00" className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40]" value={preco} onChange={(e) => setPreco(e.target.value)}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[#F5F5F5]">Descrição</label>
                        <textarea placeholder="Descreva o produto..." rows={6} className="p-3 resize-none bg-[#0D0F11] rounded-lg border border-[#3B3B40]" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-4 p-6 border-t border-[#3B3B40]">
                    <button onClick={fecharModal} className="px-6 py-3 rounded-lg border border-[#3B3B40] text-[#C0C0C0] font-bold hover:bg-[#202428] cursor-pointer">
                        Cancelar
                    </button>
                    <button onClick={handleSalvar} className="px-6 py-3 rounded-lg bg-[#1473CD] hover:bg-[#105CA8] text-white font-bold cursor-pointer">
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}