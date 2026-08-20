import { X, Trash2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { editarProduto } from "../../../src/actions/gerenciamento/actions";

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
    const [nome, setNome] = useState(produto.nome);
    const [franquia, setFranquia] = useState(produto.franquia);
    const [descricao, setDescricao] = useState(produto.descricao);
    const [preco, setPreco] = useState(produto.preco.toString()); 
    
    const [imagemAtual, setImagemAtual] = useState(produto.imagem);
    const [novaImagemFile, setNovaImagemFile] = useState<File | null>(null);
    const [imagemPreview, setImagemPreview] = useState(produto.imagem);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setNovaImagemFile(file);
            setImagemPreview(URL.createObjectURL(file));
        }
    };
    const removerImagem = () => {
        setImagemAtual("");
        setNovaImagemFile(null);
        setImagemPreview("");
    };
    const handleSalvar = async () => {
        const precoFormatado = parseFloat(preco) || 0;
        const formData = new FormData();
        formData.append("nome", nome);
        formData.append("franquia", franquia);
        formData.append("descricao", descricao);
        formData.append("preco", precoFormatado.toString());
        formData.append("imagemAtual", imagemAtual);
        if (novaImagemFile) {
            formData.append("novaImagem", novaImagemFile);
        }
        await editarProduto(produto.id, formData);
        fecharModal();
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={fecharModal}>
            <div className="bg-[#171A1D] border border-[#3B3B40] rounded-xl w-full max-w-lg flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()} >
                <div className="flex items-center justify-between p-6 border-b border-[#3B3B40]">
                    <h2 className="text-xl font-bold text-[#F5F5F5]">Editar Produto</h2>
                    <button onClick={fecharModal} className="text-[#C0C0C0] hover:text-white cursor-pointer">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-[#F5F5F5]">Imagem do Produto</label>
                        {imagemPreview ? (
                            <div className="flex items-center justify-between p-3 bg-[#0D0F11] border border-[#3B3B40] rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 relative bg-[#171A1D] rounded flex items-center justify-center overflow-hidden">
                                        <Image src={imagemPreview} alt="Preview" width={300} height={300} className="w-auto h-auto max-w-full max-h-full object-contain" />
                                    </div>
                                    <span className="text-sm text-[#F5F5F5]">Imagem Atual</span>
                                </div>
                                <button onClick={removerImagem} className="text-[#C0C0C0] hover:text-[#E11D48] cursor-pointer" title="Remover imagem">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ) : (
                            <label className="w-full h-34 border border-[#3B3B40] rounded-lg flex flex-col items-center justify-center text-sm text-[#C0C0C0] bg-[#0D0F11] cursor-pointer hover:bg-[#171A1D] overflow-hidden">
                                <p><span className="text-[#1473CD] font-bold">Clique</span> para fazer upload</p>
                                <p className="text-xs mt-1">ou arraste a imagem aqui</p>
                                <input type="file" accept="image/png, image/jpeg" className="hidden" onChange={handleImageUpload} />
                            </label>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-[#C0C0C0]">Nome do Produto</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] focus:outline-none focus:border-[#1473CD]" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-[#C0C0C0]">Franquia do Produto</label>
                        <input type="text" value={franquia} onChange={(e) => setFranquia(e.target.value)} className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] focus:outline-none focus:border-[#1473CD]" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-[#C0C0C0]">Preço</label>
                        <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} className="p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] focus:outline-none focus:border-[#1473CD]" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-[#C0C0C0]">Descrição</label>
                        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descreva o produto..." rows={6} className="p-3 resize-none bg-[#0D0F11] rounded-lg border border-[#3B3B40] text-[#F5F5F5] focus:outline-none focus:border-[#1473CD]" />
                    </div>
                </div>
                <div className="flex items-center justify-end gap-4 p-6 border-t border-[#3B3B40]">
                    <button onClick={fecharModal} className="px-6 py-3 rounded-lg border border-[#3B3B40] text-[#C0C0C0] font-bold hover:bg-[#202428] cursor-pointer">
                        Cancelar
                    </button>
                    <button onClick={handleSalvar} className="px-6 py-3 rounded-lg bg-[#1473CD] hover:bg-[#105CA8] text-white font-bold cursor-pointer">
                        Salvar Alterações
                    </button>
                </div>
            </div>
        </div>
    );
}