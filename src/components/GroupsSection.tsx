import PageTitle from "@/components/ui/Title";
import GroupCard from "@/components/GroupCard";
import {
  getCurrentGroups,
  getUpcomingGroups,
  getPastGroups,
} from "@/lib/functions/groups";
import { groups } from "@/lib/groups";

export default function GroupsSection() {
  const currentGroups = getCurrentGroups(groups);
  const upcomingGroups = getUpcomingGroups(groups);
  const pastGroups = getPastGroups(groups);

  return (
    <section
      id="grupos-estudos"
      className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle
          title="Grupos de Estudos"
          description="Acreditamos que o aprendizado coletivo é a chave para construir conhecimento sólido. Por isso, criamos grupos de estudo focados em tecnologias de ponta."
        />
      </div>

      {/* Current Groups */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-emerald-600 dark:text-emerald-400 mb-6">
          Grupos Atuais
        </h2>
        {currentGroups.length > 0 ? (
          <ul role="list" className="grid gap-6 grid-cols-1">
            {currentGroups.map((group, index) => (
              <li key={`group-${group.date}-${index}`} role="listitem" className="text-gray-900 text-base">
                <GroupCard
                  group={group}
                  variant="current"
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Nenhum grupo atual no momento. Fique ligado nas nossas redes
              sociais!
            </p>
          </div>
        )}
      </div>

      {/* Upcoming Groups */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
          Próximos Grupos
        </h2>
        {upcomingGroups.length > 0 ? (
          <ul role="list" className="grid gap-6 grid-cols-1">
            {upcomingGroups.map((group, index) => (
              <li key={`group-${group.date}-${index}`} role="listitem" className="text-gray-900 text-base">
                <GroupCard
                  group={group}
                  variant="current"
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Nenhum grupo próximo programado. Fique ligado nas nossas redes
              sociais!
            </p>
          </div>
        )}
      </div>

      {/* Past Groups */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-500 dark:text-slate-400 mb-6">
          Grupos Passados
        </h2>
        {pastGroups.length > 0 ? (
          <ul role="list" className="grid gap-6 grid-cols-1">
            {pastGroups.map((group, index) => (
              <li key={`group-${group.date}-${index}`} role="listitem" className="text-gray-900 text-base">
                <GroupCard
                  group={group}
                  variant="past"
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Nenhum grupo passado disponível.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
