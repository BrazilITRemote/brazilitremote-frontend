import React from "react";
import { workshops } from "../lib/workshops";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import Image from "next/image";
import Link from "next/link";

export default function WorkshopsSection() {
  return (
    <section id="workshops" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Algumas de nossas Oficinas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {workshops.slice(0, 4).map((ws) => (
            <Card key={ws.id} className="flex flex-col">
              {ws.image && (
                <Image
                  src={ws.image}
                  alt={ws.title}
                  width={600}
                  height={400}
                  className="w-full h-52 object-cover rounded mb-4"
                />
              )}

              <div className="p-4 pt-0 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {ws.title}
                </h3>
                <p className="text-gray-600 mb-2">{ws.description}</p>
                <p className="text-sm text-gray-500 mb-2">Data: {ws.date}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {ws.instructors.map((name) => (
                    <Badge key={name}>{name}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center mt-8">
          <Link
            href="/workshops"
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Ver todos os Workshops
          </Link>
        </div>
      </div>
    </section>
  );
}
