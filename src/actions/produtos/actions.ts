"use server";
import prisma from "../../lib/db";
import { Prisma } from "../../../generated/prisma/client";

export async function getProdutosFiltrados(busca: string, franquia: string, ordenacao: string, pagina: number) {
    const itensPorPagina = 8;
    const offset = (pagina - 1) * itensPorPagina;
    const whereClause: Prisma.ProductWhereInput = {};
    
    if (franquia !== "Todas") {
        whereClause.franquia = franquia;
    }
    if (busca) {
        whereClause.OR = [
            { nome: { contains: busca, mode: 'insensitive' } },
            { franquia: { contains: busca, mode: 'insensitive' } }
        ];
    }
    let orderByClause: Prisma.ProductOrderByWithRelationInput = {};
    if (ordenacao === "Mais Vendidos") orderByClause = { vendas: 'desc' };
    else if (ordenacao === "Menor Preço") orderByClause = { preco: 'asc' };
    else if (ordenacao === "Maior Preço") orderByClause = { preco: 'desc' };
    else if (ordenacao === "A-Z") orderByClause = { nome: 'asc' };
    const produtos = await prisma.product.findMany({
        where: whereClause,
        orderBy: orderByClause,
        take: itensPorPagina,
        skip: offset,
    });
    const count = await prisma.product.count({
        where: whereClause,
    });
    const totalPaginas = Math.ceil(count / itensPorPagina);
    return { produtos, totalPaginas };
}