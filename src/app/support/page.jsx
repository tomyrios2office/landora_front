import { ContactHero } from "./components/contact-hero";
import { ContactForm } from "./components/contact-form";
import { FaqSupport } from "./components/faq-support";

export const metadata = {
  title: "Soporte | Landora - Tokenización Inmobiliaria",
  description:
    "Centro de soporte de Landora. Contacta con nuestro equipo, consulta las preguntas frecuentes o envíanos un mensaje.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <FaqSupport />
    </main>
  );
}
