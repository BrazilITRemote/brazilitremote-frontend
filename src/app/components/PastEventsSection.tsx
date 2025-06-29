export default function PastEventsSection() {
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
    <section className="py-20 lg:py-24 bg-gray-100 dark:bg-slate-700">
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
