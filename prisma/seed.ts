import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.product.deleteMany({});
  const produtos = [
        {
            nome: "Ezio Auditore",
            franquia: "Games",
            descricao: "Traga a lenda da Irmandade dos Assassinos para a sua coleção! O Funko Pop do Ezio Auditore captura com perfeição os detalhes do traje icônico visto no jogo!",
            preco: 289.90,
            imagem: "/ezio.png",
            vendas: 342
        },
        {
            nome: "Batman (The Dark Knight)",
            franquia: "DC Comics",
            descricao: "Boneco Funko Pop detalhado com a armadura clássica do Cavaleiro das Trevas!",
            preco: 279.90,
            imagem: "/batman.png",
            vendas: 220
        },
        {
            nome: "Darth Vader",
            franquia: "Star Wars",
            descricao: "O lorde sith mais temido da galáxia agora na sua coleção!",
            preco: 319.90,
            imagem: "/darthvader.png",
            vendas: 189
        },
        {
            nome: "Gohan Super Saiyajin",
            franquia: "Animes",
            descricao: "Eleve seu ki ao máximo com esta edição incrível do Gohan preparado para a batalha!",
            preco: 299.90,
            imagem: "/gohan.png",
            vendas: 170
        },
        {
            nome: "Hermione Granger",
            franquia: "Harry Potter",
            descricao: "Defenda o mundo bruxo com essa edição incrivel da Hermione Granger!",
            preco: 189.90,
            imagem: "/hermione.png",
            vendas: 80
        },
        {
            nome: "Homem Aranha",
            franquia: "Marvel",
            descricao: "Batalhe por Nova York com nosso herói da vizinhança!",
            preco: 269.90,
            imagem: "/homemaranha.png",
            vendas: 95
        },
        {
            nome: "Max Verstappen",
            franquia: "Esportes",
            descricao: "Vença corridas com nosso campeão mundial Max Verstappen!",
            preco: 259.90,
            imagem: "/max.png",
            vendas: 190
        },
        {
            nome: "Master Chief",
            franquia: "Games",
            descricao: "Ajude Cortana nas batalhas no espaço com John 117 - Master Chief!",
            preco: 229.90,
            imagem: "/chief.png",
            vendas: 187
        },
        {
            nome: "Capitão America",
            franquia: "Marvel",
            descricao: "Lidere batalhas com o nosso grande lider dos vingadores capitão america!",
            preco: 209.90,
            imagem: "/capitao.png",
            vendas: 170
        },
        {
            nome: "Lebron James",
            franquia: "Esportes",
            descricao: "Recrute LeBron James, do Los Angeles Lakers da NBA, para a sua coleção de basquete com este Boneco Funko POP!",
            preco: 209.90,
            imagem: "/lebron.png",
            vendas: 100
        },
        {
            nome: "Harry Potter",
            franquia: "Harry Potter",
            descricao: "Derrote aquele que nao deve ser nomeado para salvar o mundo bruxo com o exclusivo Harry Potter!",
            preco: 339.90,
            imagem: "/harry.png",
            vendas: 479
        },
        {
            nome: "Luke Skywalker",
            franquia: "Star Wars",
            descricao: "Adicione um ícone da galáxia à sua coleção com este herói lendário da Aliança Rebelde!",
            preco: 309.90,
            imagem: "/luke.png",
            vendas: 138
        },
        {
            nome: "Naruto Uzumaki",
            franquia: "Animes",
            descricao: "Defenda a vila da folha com o maior shinobe da atualidade, Naruto Uzumaki!",
            preco: 259.90,
            imagem: "/naruto.png",
            vendas: 229
        },
        {
            nome: "Superman",
            franquia: "DC Comics",
            descricao: "O grande Superman, herói da liga da justiça!",
            preco: 249.90,
            imagem: "/superman.png",
            vendas: 209
        },
        {
            nome: "Mestre Yoda",
            franquia: "Star Wars",
            descricao: "O lendário Mestre Jedi, pequeno no tamanho mas gigante na Força!",
            preco: 219.90,
            imagem: "/yoda.png",
            vendas: 310
        },
        {
            nome: "O Mandaloriano (Din Djarin)",
            franquia: "Star Wars",
            descricao: "O caçador de recompensas mais famoso da nova era da galáxia.",
            preco: 289.90,
            imagem: "/mandaloriano.png",
            vendas: 450
        },
        {
            nome: "Han Solo",
            franquia: "Star Wars",
            descricao: "O contrabandista e piloto da Millennium Falcon pronto para a aventura.",
            preco: 239.90,
            imagem: "/hansolo.png",
            vendas: 180
        },
        {
            nome: "Princesa Leia",
            franquia: "Star Wars",
            descricao: "A grande líder da Aliança Rebelde em seu traje clássico.",
            preco: 249.90,
            imagem: "/leia.png",
            vendas: 215
        },
        {
            nome: "Rony Weasley",
            franquia: "Harry Potter",
            descricao: "O melhor amigo de Harry, sempre pronto (ou quase) para enfrentar os perigos de Hogwarts.",
            preco: 179.90,
            imagem: "/rony.png",
            vendas: 280
        },
        {
            nome: "Alvo Dumbledore",
            franquia: "Harry Potter",
            descricao: "O sábio e poderoso diretor da Escola de Magia e Bruxaria de Hogwarts.",
            preco: 289.90,
            imagem: "/dumbledore.png",
            vendas: 320
        },
        {
            nome: "Lord Voldemort",
            franquia: "Harry Potter",
            descricao: "Aquele-Que-Não-Deve-Ser-Nomeado em uma edição aterrorizante e detalhada.",
            preco: 259.90,
            imagem: "/voldemort.png",
            vendas: 195
        },
        {
            nome: "Severo Snape",
            franquia: "Harry Potter",
            descricao: "O misterioso e complexo mestre de poções. Always.",
            preco: 239.90,
            imagem: "/snape.png",
            vendas: 210
        },
        {
            nome: "Mulher-Maravilha",
            franquia: "DC Comics",
            descricao: "A princesa amazona Diana de Themyscira com seu Laço da Verdade.",
            preco: 249.90,
            imagem: "/mulhermaravilha.png",
            vendas: 305
        },
        {
            nome: "O Coringa",
            franquia: "DC Comics",
            descricao: "O palhaço príncipe do crime, arqui-inimigo do Batman.",
            preco: 269.90,
            imagem: "/coringa.png",
            vendas: 410
        },
        {
            nome: "The Flash",
            franquia: "DC Comics",
            descricao: "O homem mais rápido do mundo, pronto para alterar a linha do tempo!",
            preco: 219.90,
            imagem: "/flash.png",
            vendas: 225
        },
        {
            nome: "Arlequina (Harley Quinn)",
            franquia: "DC Comics",
            descricao: "A anti-heroína mais caótica e carismática de Gotham City.",
            preco: 239.90,
            imagem: "/arlequina.png",
            vendas: 380
        },
        {
            nome: "Homem de Ferro",
            franquia: "Marvel",
            descricao: "Gênio, bilionário, playboy e filantropo com a icônica armadura Mark.",
            preco: 319.90,
            imagem: "/homemdeferro.png",
            vendas: 490
        },
        {
            nome: "Thor",
            franquia: "Marvel",
            descricao: "O Deus do Trovão empunhando o poderoso Mjolnir.",
            preco: 279.90,
            imagem: "/thor.png",
            vendas: 340
        },
        {
            nome: "Hulk",
            franquia: "Marvel",
            descricao: "O gigante esmeralda da Marvel. Hulk esmaga!",
            preco: 299.90,
            imagem: "/hulk.png",
            vendas: 285
        },
        {
            nome: "Thanos",
            franquia: "Marvel",
            descricao: "O Titã Louco com a Manopla do Infinito completa. Inevitável.",
            preco: 349.90,
            imagem: "/thanos.png",
            vendas: 415
        },
        {
            nome: "Goku (Instinto Superior)",
            franquia: "Animes",
            descricao: "Goku superando seus próprios limites na forma de Instinto Superior!",
            preco: 289.90,
            imagem: "/goku.png",
            vendas: 460
        },
        {
            nome: "Monkey D. Luffy",
            franquia: "Animes",
            descricao: "O futuro Rei dos Piratas pronto para zarpar para a Grand Line.",
            preco: 259.90,
            imagem: "/luffy.png",
            vendas: 390
        },
        {
            nome: "Levi Ackerman",
            franquia: "Animes",
            descricao: "O soldado mais forte da humanidade de Attack on Titan.",
            preco: 299.90,
            imagem: "/levi.png",
            vendas: 350
        },
        {
            nome: "Satoru Gojo",
            franquia: "Animes",
            descricao: "O feiticeiro jujutsu mais forte do mundo com seus clássicos óculos escuros.",
            preco: 279.90,
            imagem: "/gojo.png",
            vendas: 420
        },
        {
            nome: "Kratos",
            franquia: "Games",
            descricao: "O Fantasma de Esparta armado com seu Machado Leviatã.",
            preco: 299.90,
            imagem: "/kratos.png",
            vendas: 405
        },
        {
            nome: "Geralt de Rívia",
            franquia: "Games",
            descricao: "O Bruxo mais famoso do Continente pronto para caçar monstros.",
            preco: 279.90,
            imagem: "/geralt.png",
            vendas: 315
        },
        {
            nome: "Sonic the Hedgehog",
            franquia: "Games",
            descricao: "O ouriço azul mais rápido dos videogames com um anel de ouro.",
            preco: 199.90,
            imagem: "/sonic.png",
            vendas: 260
        },
        {
            nome: "Leon S. Kennedy",
            franquia: "Games",
            descricao: "Sobreviva ao terror e salve a filha do presidente com o agente especial mais amado de Resident Evil!",
            preco: 289.90,
            imagem: "/leon.png",
            vendas: 312
        },
        {
            nome: "Michael Jordan",
            franquia: "Esportes",
            descricao: "O lendário camisa 23 do Chicago Bulls imortalizado em vinil.",
            preco: 329.90,
            imagem: "/jordan.png",
            vendas: 455
        },
        {
            nome: "Lewis Hamilton",
            franquia: "Esportes",
            descricao: "O heptacampeão mundial de Fórmula 1 com seu traje de corrida.",
            preco: 269.90,
            imagem: "/lewis.png",
            vendas: 295
        },
        {
            nome: "Tom Brady",
            franquia: "Esportes",
            descricao: "O maior quarterback da história do futebol americano.",
            preco: 249.90,
            imagem: "/tombrady.png",
            vendas: 220
        },
        {
            nome: "Cristiano Ronaldo (CR7)",
            franquia: "Esportes",
            descricao: "Siuuu! O lendário artilheiro e camisa 7 imortalizado para a sua coleção de esportes.",
            preco: 299.90,
            imagem: "/cr7.png",
            vendas: 550
        }
  ];

  for (const p of produtos) {
    await prisma.product.create({
      data: p
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });