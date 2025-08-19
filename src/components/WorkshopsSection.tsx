import React from "react";
import { workshops } from "../lib/workshops";
import { Badge } from "./ui/Badge";
import Image from "next/image";
import Link from "next/link";

export default function WorkshopsSection() {
  const formatDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d, 12));
    return dt.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
  };

  return (
    <section
      id="workshops"
      className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/70"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Algumas de nossas Oficinas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.slice(0, 6).map((ws) => (
            <div
              key={ws.id}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {ws.image && (
                <Image
                  src={ws.image}
                  alt={ws.title}
                  width={600}
                  height={400}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}

              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {ws.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                  {ws.description}
                </p>
                <div className="mt-auto">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                    Data: {formatDate(ws.date)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ws.instructors.map((name) => (
                      <Badge
                        key={name}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        {name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/workshops"
            className="inline-flex items-center py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Ver todos os Workshops
          </Link>
        </div>
      </div>
    </section>
  );
}
