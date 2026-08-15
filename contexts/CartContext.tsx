"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ItemCarrinho {
    id: number;
    nome: string;
    franquia: string;
    preco: number;
    quantidade: number;
    imagem: string;
}
interface CartContextData {
    itens: ItemCarrinho[];
    adicionarAoCarrinho: (item: Omit<ItemCarrinho, 'quantidade'>) => void;
    removerDoCarrinho: (id: number) => void;
    atualizarQuantidade: (id: number, novaQuantidade: number) => void;
    quantidadeTotal: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);
export function CartProvider({ children }: { children: ReactNode }) {
    const [itens, setItens] = useState<ItemCarrinho[]>([]);
    useEffect(() => {
        const carrinhoSalvo = localStorage.getItem("carrinho-rastros");
        if (carrinhoSalvo) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setItens(JSON.parse(carrinhoSalvo));
        }
    }, []);
    useEffect(() => {
        if (itens.length > 0) {
            localStorage.setItem("carrinho-rastros", JSON.stringify(itens));
        } else {
            localStorage.removeItem("carrinho-rastros");
        }
    }, [itens]);
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
    const removerDoCarrinho = (id: number) => {
        setItens((prev) => prev.filter((item) => item.id !== id));
    };
    const atualizarQuantidade = (id: number, novaQuantidade: number) => {
        if (novaQuantidade < 1) return;
        setItens((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantidade: novaQuantidade } : item
            )
        );
    };
    const quantidadeTotal = itens.reduce((acc, item) => acc + item.quantidade, 0);

    return (
        <CartContext.Provider value={{ itens, adicionarAoCarrinho, removerDoCarrinho, atualizarQuantidade, quantidadeTotal }}>
            {children}
        </CartContext.Provider>
    );
}
export function useCart() {
    return useContext(CartContext);
}