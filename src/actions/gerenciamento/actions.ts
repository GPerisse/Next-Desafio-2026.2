"use server";
import prisma from "../../lib/db";
import { Prisma } from "../../../generated/prisma/client";
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