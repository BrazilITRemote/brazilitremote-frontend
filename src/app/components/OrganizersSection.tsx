import React from "react";
import { organizers } from "../lib/organizers";
import { Card } from "./ui/Card";
import { Avatar } from "./ui/Avatar";

export default function OrganizersSection() {
  return (
    <section id="organizers" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Organizadores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizers.map((org) => (
            <Card key={org.id} className="flex items-center space-x-4">
              <Avatar src={org.avatar} alt={org.name} size={64} />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {org.name}
                </h3>
                <p className="text-gray-600">{org.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
