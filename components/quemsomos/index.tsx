import {Eye, Gem, Shell} from "lucide-react";

export default function QuemSomos(){
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full ">
                    <div className="bg-[#171A1D] border border-[#3B3B40] rounded-2xl p-8 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-[#1473CD]/10 flex justify-center items-center mb-6">
                            <Shell size={32} className="text-[#1473CD]" />
                        </div>
                        <h3 className="text-[#F5F5F5] font-bold text-xl mb-4">MISSÃO</h3>
                        <p className="text-[#C0C0C0] text-sm">Nossa missão é proporcionar serviços e produtos de qualidade, buscando sempre a satisfação dos nossos clientes. Comprometemo-nos a agir com responsabilidade, integridade e inovação, garantindo um impacto positivo na vida das pessoas e na sociedade.</p>
                    </div>
                    <div className="bg-[#171A1D] border border-[#3B3B40] rounded-2xl p-8 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-[#FFB612]/10 flex justify-center items-center mb-6">
                            <Eye size={32} className="text-[#FFB612]" />
                        </div>
                        <h3 className="text-[#F5F5F5] font-bold text-xl mb-4">VISÃO</h3>
                        <p className="text-[#C0C0C0] text-sm">Nossa visão é ser referência no nosso segmento, reconhecida pela excelência, inovação e compromisso com a sustentabilidade. Aspiramos a crescer de forma contínua e responsável, adaptando-nos às necessidades e expectativas dos nossos clientes e colaboradores.</p>
                    </div>
                    <div className="bg-[#171A1D] border border-[#3B3B40] rounded-2xl p-8 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-[#05AC4B]/10 flex justify-center items-center mb-6">
                            <Gem size={32} className="text-[#05AC4B]" />
                        </div>
                        <h3 className="text-[#F5F5F5] font-bold text-xl mb-4">VALORES</h3>
                        <p className="text-[#C0C0C0] text-sm">Nossos valores são a base de todas as nossas ações e decisões. Buscamos a excelência em tudo o que fazemos, desde a qualidade dos nossos produtos e serviços até o atendimento ao cliente. Atuamos com integridade, sempre de maneira ética e transparente.</p>
                    </div>
                </div>
                    
            </div>
        </section>
    )
}