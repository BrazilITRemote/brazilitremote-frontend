"use client";

import Link from "next/link";
import React from "react";
import { Card } from "./ui/Card";

export default function AboutSection() {
  return (
    <section id="hero" className="bg-gray-100 py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Brazil IT Remote
        </h1>

        <p className="text-gray-700 mb-6">
          Comunidade de profissionais de TI que promovem workshops e eventos
          online.
        </p>

        <p className="italic mb-6">
          Junte-se a nós e faça parte de uma comunidade vibrante e colaborativa!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Link
            href="https://www.facebook.com/groups/BrazilCanadaIT"
            className="block"
          >
            <Card className="group p-6 hover:shadow-md border border-gray-500/20 transition-shadow">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 group-hover:underline">
                  Facebook
                </h3>
                <p className="text-4xl font-bold text-green-600">6.9k+</p>
                <p className="text-gray-600">membros</p>
              </div>
            </Card>
          </Link>

          <Link
            href="https://www.linkedin.com/groups/8365824/"
            className="block"
          >
            <Card className="group p-6 hover:shadow-md border border-gray-500/20 transition-shadow">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 group-hover:underline">
                  Linkedin
                </h3>
                <p className="text-4xl font-bold text-green-600">360+</p>
                <p className="text-gray-600">membros</p>
              </div>
            </Card>
          </Link>

          <Link href="https://discord.gg/4AVYUCdF2P" className="block">
            <Card className="group p-6 hover:shadow-md border border-gray-500/20 transition-shadow">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 group-hover:underline">
                  Discord
                </h3>
                <p className="text-4xl font-bold text-green-600">110+</p>
                <p className="text-gray-600">membros</p>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
