import AboutSection from "../components/AboutSection";
import OrganizersSection from "../components/OrganizersSection";

function UpcomingEventsSection() {
  const upcomingEvents = [
    {
      id: "1",
      date: "12 de AGOSTO de 2025",
      title: "Introdução ao Next.js 15",
      description:
        "Aprenda os conceitos fundamentais do App Router, Server Components e como construir aplicações modernas.",
      instructor: {
        name: "João Silva",
        role: "Engenheiro de Software",
        avatar: "https://placehold.co/48x48/EBF4FF/7F9CF5?text=JS",
      },
    },
    {
      id: "2",
      date: "25 de AGOSTO de 2025",
      title: "DevOps para Desenvolvedores",
      description:
        "Uma imersão prática em Docker, CI/CD com GitHub Actions e automação para acelerar seus deploys.",
      instructor: {
        name: "Maria Santos",
        role: "Especialista em Cloud",
        avatar: "https://placehold.co/48x48/EBF4FF/7F9CF5?text=MS",
      },
    },
    {
      id: "3",
      date: "05 de SETEMBRO de 2025",
      title: "Design Systems com Figma",
      description:
        "Como planejar, construir e manter um Design System escalável que une designers e desenvolvedores.",
      instructor: {
        name: "Ana Paula",
        role: "Product Designer",
        avatar: "https://placehold.co/48x48/EBF4FF/7F9CF5?text=AP",
      },
    },
  ];

  return (
    <section id="eventos" className="py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Próximos Eventos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="mb-4">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {event.date}
                </p>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1">
                  {event.title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                {event.description}
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold text-sm border border-blue-200 dark:border-blue-700">
                  {event.instructor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">
                    {event.instructor.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {event.instructor.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PastEventsSection() {
  const pastEvents = [
    {
      id: "4",
      date: "10 de MAIO de 2024",
      title: "Backend com NestJS",
      description:
        "Construindo APIs robustas, escaláveis e com Typescript do começo ao fim.",
      instructor: {
        name: "Bruno Reis",
        role: "Arquiteto de Software",
        avatar: "https://placehold.co/48x48/E2E8F0/4A5568?text=BR",
      },
    },
    {
      id: "5",
      date: "18 de MARÇO de 2024",
      title: "Gerenciamento de Estado no React",
      description:
        "Uma análise comparativa entre Redux, Zustand e a Context API para aplicações complexas.",
      instructor: {
        name: "Carla Melo",
        role: "Engenheira Frontend",
        avatar: "https://placehold.co/48x48/E2E8F0/4A5568?text=CM",
      },
    },
    {
      id: "6",
      date: "22 de JANEIRO de 2024",
      title: "Fundamentos de Web Security",
      description:
        "Proteja suas aplicações! Aprenda sobre XSS, CSRF, CORS e as melhores práticas de segurança.",
      instructor: {
        name: "Tiago Lopes",
        role: "Especialista em Segurança",
        avatar: "https://placehold.co/48x48/E2E8F0/4A5568?text=TL",
      },
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/70">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Eventos que já rolaram
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col opacity-80 hover:opacity-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {event.date}
                </p>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1">
                  {event.title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                {event.description}
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 font-semibold text-sm">
                  {event.instructor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">
                    {event.instructor.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {event.instructor.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Ver arquivo completo de eventos &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

function DiscordSection() {
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
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

export default function Home() {
  return (
    <>
      <AboutSection />
      <UpcomingEventsSection />
      <PastEventsSection />
      <OrganizersSection />
      <DiscordSection />
    </>
  );
}
