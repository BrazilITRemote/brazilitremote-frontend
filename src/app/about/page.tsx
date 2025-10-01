import PageTitle from "../../components/ui/Title";

export default function AboutPage() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <PageTitle
          title="Sobre"
          description="Conheça mais sobre a nossa comunidade."
        />
        <div className="flex flex-col items-center">
          <p className="w-full text-gray-700 mb-6 dark:text-[#cad5e2]">
            BrazilITRemote.com é uma comunidade de profissionais de TI dedicada
            à promoção da inclusão, diversidade e colaboração. Nossa missão é
            apoiar profissionais na construção de redes de contatos, no acesso a
            oportunidades de trabalho remoto, imigração para outros países e
            preparação para os desafios do futuro.
          </p>

          <p className="w-full text-gray-700 mb-6 dark:text-[#cad5e2]">
            Nosso objetivo é ajudar todos a expandirem suas possibilidades e
            alcançarem o sucesso na carreira de forma coletiva. Não vendemos
            cursos; todos os nossos eventos são gratuitos e acessíveis a quem
            precisa de apoio e deseja evoluir em conjunto.
          </p>

          <h2 className="w-full text-left font-bold mb-1 dark:text-white">
            Respeito e Convivência Saudável 🫂 ❤️
          </h2>
          <p className="w-full text-gray-700 mb-6 dark:text-[#cad5e2]">
            <span>
              O respeito é fundamental para a nossa comunidade. Todos são
              bem-vindos e incentivamos a cordialidade e a empatia nas
              interações.
            </span>{" "}
            <b>
              Não toleramos discursos de extrema direita ou qualquer forma de
              discriminação.
            </b>
          </p>

          <h2 className="w-full text-left font-bold mb-1 dark:text-white">
            Inclusão e Diversidade 🎓 🌈
          </h2>
          <p className="w-full text-gray-700 mb-6 dark:text-[#cad5e2]">
            Apoiamos especialmente estudantes, grupos racializados, LGBTQIA+ e
            pessoas com necessidades especiais.
          </p>

          <h2 className="w-full text-left font-bold mb-1 dark:text-white">
            Trabalho Remoto e Crescimento Profissional 🌐 🚀
          </h2>
          <p className="w-full text-gray-700 mb-6 dark:text-[#cad5e2]">
            Oferecemos um espaço seguro para quem procura oportunidades de
            trabalho remoto, imigração para outros países, e conexões valiosas
            para crescer na carreira.
          </p>

          <h2 className="w-full text-left font-bold mb-1 dark:text-white">
            Impacto da Inteligência Artificial 🤖 📉
          </h2>
          <p className="w-full text-gray-700 mb-6 dark:text-[#cad5e2]">
            Acreditamos que, com o aumento da produtividade proporcionada pela
            IA, haverá cada vez menos vagas de trabalho disponíveis. Por isso,
            construir uma rede de contatos sólida é essencial para se destacar e
            encontrar oportunidades em um mercado de trabalho cada vez mais
            competitivo.
          </p>

          <h2 className="w-full text-left font-bold mb-1 dark:text-white">
            Rede de Apoio e Colaboração 🤝 🌱
          </h2>
          <p className="w-full text-gray-700 mb-6 dark:text-[#cad5e2]">
            Organizamos oficinas, projetos colaborativos e iniciativas
            filantrópicas para desenvolver habilidades e melhorar nossos
            portfólios.
          </p>

          <h2 className="w-full text-left font-bold mb-1 dark:text-white">
            Visão de Futuro: Cooperativa de TI Remota 🏢 🌏
          </h2>
          <p className="w-full text-gray-700 mb-6 dark:text-[#cad5e2]">
            Sonhamos em, quem sabe um dia, nos tornarmos uma cooperativa de TI
            totalmente remota, com pessoas de todo o mundo trabalhando juntas
            sem exploração.
          </p>

          <p className="w-full text-gray-700 dark:text-white italic">Junte-se a nós! 🚀💪</p>
        </div>
      </div>
    </section>
  );
}
