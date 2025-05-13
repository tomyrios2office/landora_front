import { HeroSection } from "./components/hero-section";
import { TeamSection } from "./components/team-section";
import { MissionSection } from "./components/mission-section";
import { StatsSection } from "./components/stats-section";

export const metadata = {
  title: "Sobre Nosotros | Landora - Tokenización Inmobiliaria",
  description:
    "Conoce al equipo detrás de Landora y nuestra misión de democratizar la inversión inmobiliaria a través de la tokenización.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <TeamSection />
    </main>
  );
}
