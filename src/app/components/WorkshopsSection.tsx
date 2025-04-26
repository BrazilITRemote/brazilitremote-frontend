import React from "react";
import { workshops } from "../lib/workshops";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";

export default function WorkshopsSection() {
  return (
    <section id="workshops" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Oficinas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {workshops.map((ws) => (
            <Card key={ws.id} className="flex flex-col">
              {ws.image && (
                <img
                  src={ws.image}
                  alt={ws.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {ws.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {ws.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Data: {ws.date}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {ws.instructors.map((name) => (
                  <Badge key={name}>{name}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}