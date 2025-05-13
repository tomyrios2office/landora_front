import { Hero } from "../components/custom/hero";
import { Features } from "../components/custom/features";
import { Testimonials } from "../components/custom/testimonials";
import { Cta } from "../components/custom/cta";
import { WhatsappButton } from "../components/custom/whatsapp-button";
import { WhatWeDoTimeline } from "../components/custom/whatwedo";
import Calendar from "../components/custom/calendar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatWeDoTimeline />
      <Features />
      <Testimonials />
      <Cta />
      <WhatsappButton />
      <Calendar />
    </main>
  );
}
