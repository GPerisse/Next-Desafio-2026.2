"use server";
import prisma from "../../lib/db";
import { Prisma } from "../../../generated/prisma/client";
import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises"; 
import path from "path";
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
export async function criarProduto(formData: FormData) {
    const nome = formData.get("nome") as string;
    const franquia = formData.get("franquia") as string;
    const descricao = formData.get("descricao") as string;
    const preco = parseFloat(formData.get("preco") as string) || 0;
    const imagemFile = formData.get("imagem") as File | null;
    let caminhoImagem = "";
    if (imagemFile && imagemFile.size > 0) {
        const buffer = Buffer.from(await imagemFile.arrayBuffer());
        const nomeArquivo = `${Date.now()}-${imagemFile.name.replaceAll(" ", "_")}`;
        
        await writeFile(
            path.join(process.cwd(), "public", "uploads", nomeArquivo),
            buffer
        );
        caminhoImagem = `/uploads/${nomeArquivo}`;
    }
    await prisma.product.create({
        data: {
            nome,
            franquia,
            descricao,
            preco,
            imagem: caminhoImagem,
        }
    });
    
    revalidatePath("/gerenciamento");
}
export async function editarProduto(id: number, formData: FormData) {
    const nome = formData.get("nome") as string;
    const franquia = formData.get("franquia") as string;
    const descricao = formData.get("descricao") as string;
    const preco = parseFloat(formData.get("preco") as string) || 0;
    let caminhoImagem = formData.get("imagemAtual") as string;
    const novaImagemFile = formData.get("novaImagem") as File | null;
    if (novaImagemFile && novaImagemFile.size > 0) {
        const buffer = Buffer.from(await novaImagemFile.arrayBuffer());
        const nomeArquivo = `${Date.now()}-${novaImagemFile.name.replaceAll(" ", "_")}`;
        
        await writeFile(
            path.join(process.cwd(), "public", "uploads", nomeArquivo),
            buffer
        );
        caminhoImagem = `/uploads/${nomeArquivo}`;
    }
    await prisma.product.update({
        where: { id },
        data: {
            nome,
            franquia,
            descricao,
            preco,
            imagem: caminhoImagem,
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