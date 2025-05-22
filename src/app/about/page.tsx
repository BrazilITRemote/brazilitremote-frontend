import PageTitle from "../components/ui/Title";

export default function AboutPage() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <PageTitle
          title="Sobre"
          description="Conheça mais sobre a nossa comunidade."
        />
        <div className="flex flex-col items-center">
          <p className="w-full text-gray-700 mb-6">
            A Brazil IT Remote é uma comunidade de profissionais de TI dedicada
            a fortalecer redes de contatos, promover oportunidades de trabalho
            remoto e apoiar a imigração para outros países. Nosso objetivo é
            ajudar todos a expandirem suas possibilidades e alcançarem o sucesso
            na carreira de forma totalmente gratuita e coletiva. Não oferecemos
            cursos pagos; todos as nossas oficinas e redes sociais estão abertos
            para aqueles que precisam de assistência.
          </p>

          <h2 className="w-full text-left font-bold mb-1">
            Inclusão e Diversidade 🎓 🌈
          </h2>
          <p className="w-full text-gray-700 mb-6">
            Apoiamos especialmente estudantes e grupos minoritários,
            proporcionando um ambiente acolhedor e inclusivo para todos.
          </p>

          <h2 className="w-full text-left font-bold mb-1">
            Trabalho Remoto e Crescimento Profissional 🌐 🚀
          </h2>
          <p className="w-full text-gray-700 mb-6">
            Oferecemos um espaço seguro para quem procura oportunidades de
            trabalho remoto, imigração para outros países, e conexões valiosas
            para crescer na carreira.
          </p>

          <h2 className="w-full text-left font-bold mb-1">
            Impacto da Inteligência Artificial 🤖 📉
          </h2>
          <p className="w-full text-gray-700 mb-6">
            Acreditamos que, com o aumento da produtividade proporcionada pela
            IA, haverá cada vez menos vagas de trabalho disponíveis. Por isso,
            construir uma rede de contatos sólida é essencial para se destacar e
            encontrar oportunidades em um mercado de trabalho cada vez mais
            competitivo.
          </p>

          <h2 className="w-full text-left font-bold mb-1">
            Rede de Apoio e Colaboração 🤝 🌱
          </h2>
          <p className="w-full text-gray-700 mb-6">
            Organizamos oficinas, projetos colaborativos e iniciativas
            filantrópicas para desenvolver habilidades e melhorar nossos
            portfólios.
          </p>

          <h2 className="w-full text-left font-bold mb-1">
            Respeito e Convivência Saudável 🫂 ❤️
          </h2>
          <p className="w-full text-gray-700 mb-6">
            O respeito é fundamental para a nossa comunidade. Todos são
            bem-vindos e incentivamos a cordialidade e a empatia nas interações.
            Não toleramos discursos de extrema direita ou qualquer forma de
            discriminação.
          </p>

          <h2 className="w-full text-left font-bold mb-1">
            Visão de Futuro: Cooperativa de TI Remota 🏢 🌏
          </h2>
          <p className="w-full text-gray-700 mb-6">
            Sonhamos em, quem sabe um dia, nos tornarmos uma cooperativa de TI
            totalmente remota, com pessoas de todo o mundo trabalhando juntas
            sem exploração.
          </p>

          <p className="w-full text-gray-700 italic">
            Junte-se a nós, participe dos projetos e faça parte desse coletivo
            que busca crescer junto! 🚀💪
          </p>
        </div>
      </div>
    </section>
  );
}
