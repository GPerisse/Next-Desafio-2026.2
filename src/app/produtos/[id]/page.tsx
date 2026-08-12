import ProdutoIndividual from "../../../../components/produto-individual";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <main className="min-h-screen bg-[#0D0F11] text-[#F5F5F5] py-12 px-6">
            <ProdutoIndividual id={id} />
        </main>
    );
}