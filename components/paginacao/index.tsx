import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginacaoProps {
    paginaAtual: number;
    totalPaginas: number;
    onPageChange: (pagina: number) => void;
}

export default function Paginacao({ paginaAtual, totalPaginas, onPageChange }: PaginacaoProps) {
    if (totalPaginas <= 1) return null;
    const paginas = Array.from({ length: totalPaginas }, (_, index) => index + 1);

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            <button onClick={() => onPageChange(paginaAtual - 1)} disabled={paginaAtual === 1} className="p-2 rounded-lg bg-[#171A1D] border border-[#3B3B40] text-[#C0C0C0] hover:bg-[#202428] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer">
                <ChevronLeft size={20} />
            </button>
            {paginas.map((pagina) => (
                <button key={pagina} onClick={() => onPageChange(pagina)} className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${paginaAtual === pagina ? "bg-[#1473CD] text-[#F5F5F5] border border-[#1473CD]" : "bg-[#171A1D] border border-[#3B3B40] text-[#C0C0C0] hover:bg-[#202428] cursor-pointer"}`}>
                    {pagina}
                </button>
            ))}
            <button onClick={() => onPageChange(paginaAtual + 1)} disabled={paginaAtual === totalPaginas} className="p-2 rounded-lg bg-[#171A1D] border border-[#3B3B40] text-[#C0C0C0] hover:bg-[#202428] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer">
                <ChevronRight size={20} />
            </button>
        </div>
    );
}