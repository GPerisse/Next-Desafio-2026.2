import ProdutoIndividual from "../../../../components/produto-individual";
import prisma from "../../../lib/db"; 
import { Product } from "../../../../generated/prisma/client";
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const produtoEncontrado = await prisma.product.findUnique({
        where: { id: Number(id) }
    });
    let listaRelacionados: Product[] = [];
    if (produtoEncontrado) {
        listaRelacionados = await prisma.product.findMany({
            where: { 
                franquia: produtoEncontrado.franquia,
                id: { not: produtoEncontrado.id } 
            },
            take: 4
        });
    }
    return (
        <main className="min-h-screen bg-[#0D0F11] text-[#F5F5F5] py-12 px-6">
            <ProdutoIndividual 
                produto={produtoEncontrado} 
                produtosRelacionados={listaRelacionados} 
            />
        </main>
    );
}