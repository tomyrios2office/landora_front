import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { Testimonials } from "./components/testimonials";
import { Cta } from "./components/cta";
import { WhatsappButton } from "./components/whatsapp-button";
import { WhatWeDoTimeline } from "./components/whatwedo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatWeDoTimeline />
      <Features />
      <Testimonials />
      <Cta />
      <WhatsappButton />
    </main>
  );
}
