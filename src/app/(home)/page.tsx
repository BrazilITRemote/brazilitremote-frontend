import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import WorkshopsSection from "../components/WorkshopsSection";
import OrganizersSection from "../components/OrganizersSection";
import CalendarSection from "../components/CalendarSection";
import MetricsSection from "../components/MetricsSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkshopsSection />
      <div className="max-w-4xl mx-auto px-4 text-center mt-8">
        <Link
          href="/workshops"
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Ver todos os Workshops
        </Link>
      </div>
      <OrganizersSection />
      <CalendarSection />
      <MetricsSection />
    </>
  );
}
