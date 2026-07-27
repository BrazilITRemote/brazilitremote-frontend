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
      <div className="container mx-auto px-4">
        <PageTitle
          title="Grupos de Estudos"
          description="Acreditamos que o aprendizado coletivo é a chave para construir conhecimento sólido. Por isso, criamos grupos de estudo focados em tecnologias de ponta."
        />
      </div>

      {/* Current Groups */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-emerald-600 dark:text-emerald-400 mb-6">
          Grupos Atuais
        </h2>
        {currentGroups.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {currentGroups.map((group, index) => (
              <GroupCard
                key={`group-${group.date}-${index}`}
                group={group}
                variant="current"
              />
            ))}
          </div>
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
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
          Próximos Grupos
        </h2>
        {upcomingGroups.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {upcomingGroups.map((group, index) => (
              <GroupCard
                key={`group-${group.date}-${index}`}
                group={group}
                variant="current"
              />
            ))}
          </div>
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
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-500 dark:text-slate-400 mb-6">
          Grupos Passados
        </h2>
        {pastGroups.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {pastGroups.map((group, index) => (
              <GroupCard
                key={`group-${group.date}-${index}`}
                group={group}
                variant="past"
              />
            ))}
          </div>
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
