import AboutSection from "../../components/AboutSection";
import OrganizersSection from "../../components/OrganizersSection";
import UpcomingEventsSection from "../../components/UpcomingEventsSection";
import PastEventsSection from "../../components/PastEventsSection";
import DiscordSection from "../../components/DiscordSection";

export default function Home() {
  return (
    <>
      <AboutSection />
      <UpcomingEventsSection />
      <PastEventsSection />
      <OrganizersSection />
      <DiscordSection />
    </>
  );
}
