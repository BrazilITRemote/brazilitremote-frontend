import {
  HiOutlineUsers,
  HiOutlineBookOpen,
  HiOutlineBolt,
} from "react-icons/hi2";

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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
          {/* Feature 1: Networking */}
          <div className="bg-white/10 p-6 rounded-lg">
            <div className="flex items-center justify-center bg-white/20 rounded-full w-12 h-12 mb-4">
              <HiOutlineUsers className="mx-auto w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Networking</h3>
            <p className="text-blue-200">
              Conheça outros profissionais, compartilhe experiências e encontre
              novas oportunidades.
            </p>
          </div>

          {/* Feature 2: Reading Club */}
          <div className="bg-white/10 p-6 rounded-lg">
            <div className="flex items-center justify-center bg-white/20 rounded-full w-12 h-12 mb-4">
              <HiOutlineBookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Clube de Leitura
            </h3>
            <p className="text-blue-200">
              Discuta artigos e tendências com líderes de mercado em sessões
              focadas e enriquecedoras.
            </p>
          </div>

          {/* Feature 3: Short Workshops */}
          <div className="bg-white/10 p-6 rounded-lg">
            <div className="flex items-center justify-center bg-white/20 rounded-full w-12 h-12 mb-4">
              <HiOutlineBolt className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Oficinas Curtas
            </h3>
            <p className="text-blue-200">
              Aprenda algo novo em minutos. Oficinas práticas e direto ao ponto
              sobre ferramentas e técnicas do dia a dia.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="https://discord.gg/4AVYUCdF2P"
            className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-full hover:bg-slate-100 transition-colors text-lg shadow-lg transform hover:scale-105"
          >
            Entrar no Discord agora
          </a>
        </div>
      </div>
    </section>
  );
}
