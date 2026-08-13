import Carrossel from "@/components/carrossel";
import HeroSection from "@/components/herosection";
import QuemSomos from "@/components/quemsomos";
import prisma from "../lib/db";
export default async function Home() {
  const destaques = await prisma.product.findMany({
        orderBy: { vendas: 'desc' },
        take: 10
    });
  return (
    <div>
      <HeroSection/>
      <Carrossel produtos={destaques}/>
      <QuemSomos/>
    </div>
  );
}
