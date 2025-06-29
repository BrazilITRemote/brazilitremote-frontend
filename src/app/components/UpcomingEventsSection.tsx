export default function UpcomingEventsSection() {
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
    <section
      id="eventos"
      className="py-20 lg:py-24 bg-gray-200 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Próximos Eventos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
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
