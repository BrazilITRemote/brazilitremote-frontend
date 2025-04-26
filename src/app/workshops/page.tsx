import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { workshops } from "../lib/workshops";
import Image from "next/image";

export default function WorkshopsPage() {
  return (
    <section id="workshops" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-500 mb-4">Oficinas</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Encontre todos os workshops disponíveis e inscreva-se.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {workshops.map((ws) => (
            <Card key={ws.id} className="flex flex-col">
              {ws.image && (
                <Link href={`/workshops/${ws.id}`}>
                  <Image
                    src={ws.image}
                    alt={ws.title}
                    width={600}
                    height={400}
                    className="w-full h-52 object-cover rounded mb-4"
                  />
                </Link>
              )}

              <div className="p-4 pt-0">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {ws.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {ws.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Data: {ws.date}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {ws.instructors.map((name) => (
                    <Badge key={name}>{name}</Badge>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button variant="highlight">Inscreva-se</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
