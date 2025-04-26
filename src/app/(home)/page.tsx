import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import WorkshopsSection from "../components/WorkshopsSection";
import OrganizersSection from "../components/OrganizersSection";
import CalendarSection from "../components/CalendarSection";
import MetricsSection from "../components/MetricsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkshopsSection />
      <OrganizersSection />
      <CalendarSection />
      <MetricsSection />
    </>
  );
}
