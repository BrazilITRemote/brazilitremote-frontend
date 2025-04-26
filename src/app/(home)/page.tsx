import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import WorkshopsSection from "../components/WorkshopsSection";
import OrganizersSection from "../components/OrganizersSection";
import CalendarSection from "../components/CalendarSection";
import MetricsSection from "../components/MetricsSection";
import Link from "next/link";
import { Button } from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkshopsSection />
      <div className="max-w-4xl mx-auto px-4 text-center mt-8">
        <Link href="/workshops">
          <Button variant="highlight">Ver todos os Workshops</Button>
        </Link>
      </div>
      <OrganizersSection />
      <CalendarSection />
      <MetricsSection />
    </>
  );
}
