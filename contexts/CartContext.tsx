"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// 1. A tipagem do nosso Item
interface ItemCarrinho {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    imagem: string;
}

// 2. O que a nossa "Caixa d'água" vai fornecer para as páginas
interface CartContextData {
    itens: ItemCarrinho[];
    adicionarAoCarrinho: (item: Omit<ItemCarrinho, 'quantidade'>) => void;
    removerDoCarrinho: (id: number) => void;
    atualizarQuantidade: (id: number, novaQuantidade: number) => void;
    quantidadeTotal: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

// 3. O Componente Provedor (Quem guarda os dados de verdade)
export function CartProvider({ children }: { children: ReactNode }) {
    const [itens, setItens] = useState<ItemCarrinho[]>([]);

    // Quando o site abre, ele busca os itens que estavam salvos no computador do usuário
    useEffect(() => {
        const carrinhoSalvo = localStorage.getItem("carrinho-rastros");
        if (carrinhoSalvo) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setItens(JSON.parse(carrinhoSalvo));
        }
    }, []);

    // Toda vez que a lista de 'itens' mudar, ele salva silenciosamente no computador do usuário
    useEffect(() => {
        // O if (itens.length > 0) evita dele apagar o storage logo na primeira renderização
        if (itens.length > 0) {
            localStorage.setItem("carrinho-rastros", JSON.stringify(itens));
        } else {
            // Se esvaziou, a gente limpa o storage
            localStorage.removeItem("carrinho-rastros");
        }
    }, [itens]);

    // Função para adicionar (se já existir, ele só aumenta a quantidade)
    const adicionarAoCarrinho = (novoItem: Omit<ItemCarrinho, 'quantidade'>) => {
        setItens((prev) => {
            const itemExiste = prev.find((item) => item.id === novoItem.id);
            if (itemExiste) {
                return prev.map((item) =>
                    item.id === novoItem.id ? { ...item, quantidade: item.quantidade + 1 } : item
                );
            }
            return [...prev, { ...novoItem, quantidade: 1 }];
        });
    };

    // Função para remover a linha toda (Lixeira)
    const removerDoCarrinho = (id: number) => {
        setItens((prev) => prev.filter((item) => item.id !== id));
    };

    // Função para os botões de + e - (Não deixa ficar menor que 1)
    const atualizarQuantidade = (id: number, novaQuantidade: number) => {
        if (novaQuantidade < 1) return;
        setItens((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantidade: novaQuantidade } : item
            )
        );
    };

    // Já calcula quantos itens tem no total para a Navbar usar
    const quantidadeTotal = itens.reduce((acc, item) => acc + item.quantidade, 0);

    return (
        <CartContext.Provider value={{ itens, adicionarAoCarrinho, removerDoCarrinho, atualizarQuantidade, quantidadeTotal }}>
            {children}
        </CartContext.Provider>
    );
}

// 4. Um atalho para as páginas usarem o contexto mais fácil
export function useCart() {
    return useContext(CartContext);
}