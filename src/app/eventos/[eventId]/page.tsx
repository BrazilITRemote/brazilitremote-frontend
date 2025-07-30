import React, { use } from "react";
import PageTitle from "../../../components/ui/Title";
import { workshops } from "@/lib/workshops";
import Image from "next/image";

type WorkshopsPageProps = { params: Promise<{ eventId: string }> };

export default function WorkshopsPage({ params }: WorkshopsPageProps) {
  const { eventId } = use(params);
  const workshop = workshops.find((ws) => `${ws.id}` === `${eventId}`);

  if (!workshop) return null;

  return (
    <section id="workshops" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <PageTitle
          title={workshop?.title}
          description={workshop.shortDescription}
        />

        <div className="w-full flex flex-col">
          <Image
            src={workshop.image!}
            alt={workshop?.title}
            width={920}
            height={400}
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
