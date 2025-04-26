import React from "react";
import { workshops } from "../lib/workshops";
import { Card } from "./ui/Card";

export default function CalendarSection() {
  return (
    <section id="calendar" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Calendário
        </h2>
        <div className="space-y-4">
          {workshops.map((ws) => (
            <Card key={ws.id}>
              <div className="flex justify-between items-center">
                <span className="font-mono text-gray-700 dark:text-gray-300">
                  {ws.date}
                </span>
                <span className="text-gray-800 dark:text-gray-100">
                  {ws.title}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}