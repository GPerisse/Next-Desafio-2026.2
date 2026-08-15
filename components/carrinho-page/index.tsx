"use client";
import { useState } from "react";
import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";


export default function CarrinhoPage() {
    const { itens, removerDoCarrinho, atualizarQuantidade } = useCart();
    const [cep, setCep] = useState("");
    const [valorFrete, setValorFrete] = useState<number | null>(null);
    const [loadingFrete, setLoadingFrete] = useState(false);
    const [erroFrete, setErroFrete] = useState("");
    const subtotal = itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    const valorTotal = subtotal + (valorFrete || 0);

    const calcularFrete = async () => {
        // Tira o traço e deixa só os números
        const cepLimpo = cep.replace(/\D/g, ''); 
        
        if (cepLimpo.length !== 8) {
            setErroFrete("CEP inválido. Digite 8 números.");
            return;
        }

        setLoadingFrete(true);
        setErroFrete("");

        try {
            // Batendo na API pública do ViaCEP
            const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            const data = await response.json();

            if (data.erro) {
                setErroFrete("CEP não encontrado.");
                setValorFrete(null);
            } else {
                // Regra de negócio (Tabela de preços fake)
                if (data.uf === 'MG') {
                    setValorFrete(15.00); // Mais barato para Minas
                } else if (data.uf === 'SP' || data.uf === 'RJ' || data.uf === 'ES') {
                    setValorFrete(25.00); // Sudeste
                } else {
                    setValorFrete(40.00); // Resto do Brasil
                }
            }
        } catch (error) {
            setErroFrete("Erro ao consultar o CEP.");
        } finally {
            setLoadingFrete(false);
        }
    };
    
    return (
        <div className="max-w-6xl mx-auto w-full">
            <h1 className="text-3xl font-black uppercase mb-8">Seu Carrinho</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-4">
                    {itens.map((item) => (
                        <div key={item.id} className="bg-[#171A1D] border border-[#3B3B40] rounded-xl p-4 flex gap-4 w-full">
                            <div className="w-32 h-32 bg-[#0D0F11] border border-[#3B3B40] rounded-lg flex justify-center items-center shrink-0 p-2">
                                <Image
                                    src={item.imagem || "/file.png"}
                                    alt={item.nome}
                                    width={120}
                                    height={120}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col justify-between flex-1 py-1">
                                <div className="flex justify-between items-start w-full gap-4">
                                    <h3 className="text-base font-bold text-[#F5F5F5]">
                                        {item.franquia} - {item.nome}
                                    </h3>
                                    <button onClick={() => removerDoCarrinho(item.id)} className="text-[#C0C0C0] hover:text-[#E11D48] cursor-pointer">
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                                <p className="text-xl font-black text-[#F5F5F5] mt-1">
                                    R$ {item.preco.toFixed(2)}
                                </p>
                                <div className="mt-4 w-32 h-10 bg-[#0D0F11] border border-[#3B3B40] rounded-lg flex justify-between items-center px-4 py-2">
                                    <button onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)} className="text-[#C0C0C0] hover:text-white cursor-pointer">
                                        <Minus size={16} />
                                    </button>
                                    <span className="text-[#F5F5F5] font-bold text-sm">
                                        {item.quantidade}
                                    </span>
                                    <button onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)} className="text-[#C0C0C0] hover:text-white cursor-pointer">
                                        <Plus size={16} />
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-[#171A1D] border border-[#3B3B40] rounded-xl p-6 flex flex-col gap-6">
                        <h2 className="text-xl font-bold text-[#F5F5F5]">Resumo do Pedido</h2>
                        <div className="flex flex-col gap-4 pb-6 border-b border-[#3B3B40]">
                            <h3 className="text-sm text-[#C0C0C0]">Calcular Frete</h3>
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <input 
                                        type="text" 
                                        placeholder="Digite seu CEP" 
                                        value={cep}
                                        onChange={(e) => setCep(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                calcularFrete();
                                            }
                                        }}
                                        maxLength={9}
                                        className="w-full p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] focus:outline-none focus:border-[#1473CD] text-[#F5F5F5]" 
                                    />
                                    <button onClick={calcularFrete} disabled={loadingFrete} className="px-6 py-3 rounded-lg bg-[#1473CD] hover:bg-[#105CA8] text-[#F5F5F5] font-bold cursor-pointer disabled:opacity-50">
                                        {loadingFrete ? "..." : "OK"}
                                    </button>
                                </div>
                                {erroFrete && <p className="text-sm text-[#E11D48]">{erroFrete}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 pb-6 border-b border-[#3B3B40]">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[#C0C0C0]">Subtotal</h3>
                                <p className="text-[#F5F5F5]">R$ {subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-[#C0C0C0]">Frete</h3>
                                <p className={`text-sm ${valorFrete === null ? 'text-[#C0C0C0] italic' : 'text-[#F5F5F5] font-bold text-base'}`}>
                                    {valorFrete === null ? "A calcular" : `R$ ${valorFrete.toFixed(2)}`}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between items-end">
                                <h2 className="text-xl font-bold text-[#F5F5F5]">Valor total</h2>
                                <p className="text-3xl text-[#F5F5F5] font-black">
                                    R$ {valorTotal.toFixed(2)}
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Link href="/produtos" className="w-full bg-[#C0C0C0] hover:bg-[#A7A7A7] text-[#171A1D] font-bold py-4 rounded-xl cursor-pointer flex justify-center items-center">
                                    CONTINUAR COMPRANDO
                                </Link>
                                <button onClick={() => alert("Compra finalizada com sucesso! (Integração de pagamento em breve)")} className="w-full bg-[#05AC4B] hover:bg-[#048B3C] text-white font-bold py-4 rounded-xl cursor-pointer">
                                    FINALIZAR COMPRA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}