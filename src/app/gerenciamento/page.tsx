import GerenciamentoPage from "../../../components/gerenciamento-page";
import { getProdutosAdmin } from "../../actions/gerenciamento/actions";

export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
    const params = await searchParams;
    const paginaAtual = Number(params.pagina) || 1;
        const { produtos, totalPaginas } = await getProdutosAdmin(paginaAtual);
    return (
        <main className="min-h-screen bg-[#0D0F11] text-[#F5F5F5] py-12 px-6">
            <GerenciamentoPage 
                produtos={produtos} 
                totalPaginas={totalPaginas}
                paginaAtual={paginaAtual}/>
        </main>
    );
}