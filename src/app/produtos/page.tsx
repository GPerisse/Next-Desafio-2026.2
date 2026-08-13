import ProdutosPage from "../../../components/produtos-page"; 
import { getProdutosFiltrados } from "../../actions/produtos/actions";

export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
    const params = await searchParams;
    const busca = params.busca || "";
    const franquia = params.franquia || "Todas";
    const ordenacao = params.ordenacao || "Mais Vendidos";
    const paginaAtual = Number(params.pagina) || 1;
    const { produtos, totalPaginas } = await getProdutosFiltrados(busca, franquia, ordenacao, paginaAtual);
    return (
        <ProdutosPage 
            produtosIniciais={produtos} 
            totalPaginas={totalPaginas}
            paginaAtual={paginaAtual}
        />
    );
}