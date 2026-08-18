import {Eye, Gem, Shell} from "lucide-react";
interface Identity {
    id: number;
    title: string;
    text: string;
}

export default async function QuemSomos(){
    const resposta = await fetch("https://treinamentoapi.codejr.com.br/api/identities");
    const dados = await resposta.json();
    const getEstiloCard = (titulo: string) => {
        if (titulo === 'Missão') return { icone: <Shell size={32} className="text-[#1473CD]" />, corFundo: 'bg-[#1473CD]/10' };
        if (titulo === 'Visão') return { icone: <Eye size={32} className="text-[#FFB612]" />, corFundo: 'bg-[#FFB612]/10' };
        return { icone: <Gem size={32} className="text-[#05AC4B]" />, corFundo: 'bg-[#05AC4B]/10' };
    };
    return(
        <section className="w-full bg-[#0D0F11] border-t border-[#3B3B40] py-16 md:py-24 text-[#F5F5F5]">
            <div className="mx-auto w-full px-6 md:w-10/12 md:px-0 flex flex-col items-center">
                <div className="text-center max-w-3xl mb-16">
                    <h2 className="text-[#FBBF24] text-2xl md:text-3xl font-black uppercase mb-4r">
                    Quem Somos
                    </h2>
                    <p className="text-[#C0C0C0]">
                    A GeekPop é o lugar perfeito para quem ama cultura pop! Com uma enorme variedade de bonecos Funko Pop!, nosso objetivo é trazer seus personagens favoritos para perto de você, garantindo qualidade, originalidade e muita diversão em cada compra.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {dados.identities.map((item: Identity) => {
                        const estilo = getEstiloCard(item.title);
                        return (
                            <div key={item.id} className="bg-[#171A1D] border border-[#3B3B40] rounded-2xl p-8 flex flex-col items-center text-center">
                                <div className={`w-16 h-16 rounded-full flex justify-center items-center mb-6 ${estilo.corFundo}`}>
                                    {estilo.icone}
                                </div>
                                <h3 className="text-[#F5F5F5] font-bold text-xl mb-4 uppercase">
                                     {item.title}
                                </h3>
                                <p className="text-[#C0C0C0] text-sm">
                                     {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>            
            </div>
        </section>
    )
}