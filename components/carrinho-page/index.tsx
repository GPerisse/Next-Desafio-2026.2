"use client";

import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";


export default function CarrinhoPage() {
    // Dados falsos só para conseguirmos montar a tela
    const { itens, removerDoCarrinho, atualizarQuantidade } = useCart();
    const subtotal = itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

    return (
        <div className="max-w-6xl mx-auto w-full">
            <h1 className="text-3xl font-black uppercase mb-8">Seu Carrinho</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* COLUNA ESQUERDA: LISTA DE PRODUTOS */}
                {/* COLUNA ESQUERDA: LISTA DE PRODUTOS */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    {itens.map((item) => (
                        <div key={item.id} className="bg-[#171A1D] border border-[#3B3B40] rounded-xl p-4 flex gap-4 w-full">
                            
                            {/* Caixa da Imagem (Ajustada para o tamanho do Figma) */}
                            <div className="w-24 h-24 bg-[#0D0F11] border border-[#3B3B40] rounded-lg flex justify-center items-center shrink-0">
                                <Image
                                    src={item.imagem || "/file.png"}
                                    alt={item.nome}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>

                            {/* Caixa do Texto e Botões (O flex-1 garante que ocupe o resto do espaço) */}
                            <div className="flex flex-col justify-between flex-1 py-1">
                                
                                {/* Linha de cima: Título e Lixeira */}
                                <div className="flex justify-between items-start w-full gap-4">
                                    <h3 className="text-base font-bold text-[#F5F5F5]">
                                        {item.nome}
                                    </h3>
                                    {/* Lixeira igual ao Figma: sem borda, só o hover vermelho */}
                                    <button onClick={() => removerDoCarrinho(item.id)} className="text-[#C0C0C0] hover:text-[#E11D48] cursor-pointer">
                                        <Trash2 size={20} />
                                    </button>
                                </div>

                                {/* Linha do Meio: Preço formatado */}
                                <p className="text-xl font-black text-[#F5F5F5] mt-1">
                                    R$ {item.preco.toFixed(2).replace('.', ',')}
                                </p>

                                {/* Linha de baixo: Seletor de Quantidade */}
                                <div className="mt-4 w-32 h-10 bg-[#0D0F11] border border-[#3B3B40] rounded-lg flex justify-between items-center px-4">
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

                {/* COLUNA DIREITA: RESUMO DO PEDIDO */}
                <div className="lg:col-span-1">
                    <div className="bg-[#171A1D] border border-[#3B3B40] rounded-xl p-6 flex flex-col gap-6">
                        
                        <h2 className="text-xl font-bold text-[#F5F5F5]">Resumo do Pedido</h2>
                        
                        {/* Bloco 1: Input de CEP */}
                        <div className="flex flex-col gap-4 pb-6 border-b border-[#3B3B40]">
                            <h3 className="text-sm text-[#C0C0C0]">Calcular Frete</h3>
                            <div className="flex gap-2">
                                <input type="text" placeholder="Digite seu CEP" className="w-full p-3 bg-[#0D0F11] rounded-lg border border-[#3B3B40] focus:outline-none focus:border-[#1473CD] text-[#F5F5F5]" />
                                <button className="px-6 py-3 rounded-lg bg-[#1473CD] hover:bg-[#105CA8] text-[#F5F5F5] font-bold cursor-pointer">
                                    OK
                                </button>
                            </div>
                        </div>

                        {/* Bloco 2: Subtotal e Frete */}
                        <div className="flex flex-col gap-4 pb-6 border-b border-[#3B3B40]">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[#C0C0C0]">Subtotal</h3>
                                <p className="text-[#F5F5F5]">R$ {subtotal.toFixed(2).replace('.', ',')}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-[#C0C0C0]">Frete</h3>
                                <p className="text-sm text-[#C0C0C0] italic">A calcular</p>
                            </div>
                        </div>

                        {/* Bloco 3: Total e Botões */}
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between items-end">
                                <h2 className="text-xl font-bold text-[#F5F5F5]">Valor total</h2>
                                <p className="text-3xl text-[#F5F5F5] font-black">
                                    R$ {subtotal.toFixed(2).replace('.', ',')}
                                </p>
                            </div>
                            
                            <div className="flex flex-col gap-3">
                                <button className="w-full bg-[#C0C0C0] hover:bg-[#A7A7A7] text-[#171A1D] font-bold py-4 rounded-xl cursor-pointer uppercase">
                                    Continuar Comprando
                                </button>
                                <button className="w-full bg-[#05AC4B] hover:bg-[#048B3C] text-white font-bold py-4 rounded-xl cursor-pointer uppercase">
                                    Comprar
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}