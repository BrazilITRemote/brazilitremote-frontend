import React from "react";
import { metrics } from "../lib/metrics";

export default function MetricsSection() {
  return (
    <section id="metrics" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Métricas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div key={m.id} className="text-center">
              <p className="text-4xl font-bold text-primary-500">{m.value}</p>
              <p className="text-gray-700 dark:text-gray-300">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}