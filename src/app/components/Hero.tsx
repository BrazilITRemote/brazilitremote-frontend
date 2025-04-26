"use client";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary-500 mb-4">
          Brazil IT Remote
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Comunidade de profissionais de TI que promovem workshops e eventos
          online.
        </p>
        <Link className="px-3 py-2" href="#">
          Participe Agora
        </Link>
      </div>
    </section>
  );
}
