import ProdutosPage from "../../../components/produtos-page"; 
import prisma  from "../../lib/db"; 
export default async function Page() {
    const produtosDoBanco = await prisma.product.findMany();

    return (
        <ProdutosPage produtosIniciais={produtosDoBanco} />
    );
}