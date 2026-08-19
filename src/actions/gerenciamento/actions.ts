"use server";
import prisma from "../../lib/db";
import { Prisma } from "../../../generated/prisma/client";
import { revalidatePath } from "next/cache";
export async function getProdutosAdmin(pagina:number) {
    const itensPorPagina = 8;
    const offset = (pagina - 1) * itensPorPagina;
    const whereClause: Prisma.ProductWhereInput = {};
    const produtos = await prisma.product.findMany({
        orderBy: { id: 'desc' },
        take: itensPorPagina,
        skip: offset,
    });
    const count = await prisma.product.count({
        where: whereClause,
    });
    const totalPaginas = Math.ceil(count / itensPorPagina);
    return {produtos,totalPaginas};
}
export async function criarProduto(data: { nome: string; franquia: string; descricao: string; preco: number; imagem: string }) {
    await prisma.product.create({
        data: {
            nome: data.nome,
            franquia: data.franquia,
            descricao: data.descricao,
            preco: data.preco,
            imagem: data.imagem,
        }
    });
    revalidatePath("/gerenciamento");
}
export async function editarProduto(id: number, data: { nome: string; franquia: string; descricao: string; preco: number; imagem: string }) {
    await prisma.product.update({
        where: { id: id },
        data: {
            nome: data.nome,
            franquia: data.franquia,
            descricao: data.descricao,
            preco: data.preco,
            imagem: data.imagem,
        }
    });
    revalidatePath("/gerenciamento");
}
export async function excluirProduto(id: number) {
    await prisma.product.delete({
        where: { id: id }
    });
    revalidatePath("/gerenciamento");
}