import {
  HiOutlineUsers,
  HiOutlineBookOpen,
  HiOutlineBolt,
} from "react-icons/hi2";

const discordFeatures = [
  {
    id: 1,
    icon: HiOutlineUsers,
    title: "Rede de Contatos",
    description:
      "Conecte-se com outros profissionais da área e fortaleça sua rede de contatos. Oportunidades reais para impulsionar sua carreira e facilitar sua realocação no mercado.",
  },
  {
    id: 2,
    icon: HiOutlineBookOpen,
    title: "Clubes de Leitura",
    description:
      "Participe da leitura e discussão de artigos selecionados em diversas trilhas, como DevOps, desenvolvimento backend, segurança da informação e muito mais.",
  },
  {
    id: 3,
    icon: HiOutlineBolt,
    title: "Oficinas",
    description:
      "Participe das nossas oficinas práticas e gratuitas, com orientações passo a passo de facilitadores experientes. Seu aprendizado será eternizado em nossa comunidade, no YouTube e em nosso site e poderá ser incluído no seu currículo!",
  },
];

export default function DiscordSection() {
  return (
    <section
      id="comunidade"
      className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900"
    >
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Nossa casa é o Discord
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-blue-100 dark:text-blue-200 text-lg">
          Onde as conversas acontecem, as dúvidas são resolvidas e as conexões
          são criadas. Participe dos nossos canais e cresça com a gente.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 max-w-4xl mx-auto text-left">
          {discordFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white/10 border border-white/10 p-3 lg:p-6 rounded-lg"
              >
                <div className="mx-auto flex items-center justify-center bg-white/20 rounded-full w-12 h-12 mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold w-full text-center text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <a
            href="https://discord.com/invite/MrgMFzcjnQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-full hover:bg-slate-100 transition-all text-lg shadow-lg transform hover:scale-105"
          >
            Entrar no Discord agora
          </a>
        </div>
      </div>
    </section>
  );
}
