"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "¿Qué es la tokenización de inmuebles?",
    answer:
      "La tokenización de inmuebles es el proceso de convertir un activo inmobiliario en tokens digitales que representan la propiedad fraccionada del inmueble. Esto permite a los inversores participar en el mercado inmobiliario con inversiones más pequeñas y obtener beneficios proporcionales.",
  },
  {
    question: "¿Cuál es el monto mínimo de inversión?",
    answer:
      "El monto mínimo de inversión varía según el proyecto, pero generalmente comienza desde 100€, permitiendo así que más personas puedan acceder a inversiones inmobiliarias de calidad.",
  },
  {
    question: "¿Cómo recibo los beneficios de mi inversión?",
    answer:
      "Los beneficios se distribuyen mensualmente de forma proporcional a tu participación en el proyecto. Estos incluyen los ingresos por alquiler y la potencial apreciación del inmueble cuando se venda.",
  },
  {
    question: "¿Qué seguridad tienen mis inversiones?",
    answer:
      "Cada token está respaldado por un activo inmobiliario real y registrado legalmente. Además, utilizamos tecnología blockchain para garantizar la transparencia y seguridad de todas las transacciones.",
  },
  {
    question: "¿Puedo vender mis tokens cuando quiera?",
    answer:
      "Sí, ofrecemos un mercado secundario donde puedes vender tus tokens a otros inversores. La liquidez dependerá de la demanda del mercado en ese momento.",
  },
  {
    question: "¿Cómo se seleccionan los inmuebles para tokenizar?",
    answer:
      "Nuestro equipo de expertos analiza múltiples factores como ubicación, potencial de rentabilidad, estado del inmueble y tendencias del mercado. Solo los mejores proyectos son seleccionados para garantizar buenas oportunidades de inversión.",
  },
];

export function FaqSection() {
  return (
    <section className="w-full py-12 bg-slate-50 dark:bg-slate-900/50">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Preguntas Frecuentes
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"
            >
              <AccordionTrigger className="px-4 hover:no-underline">
                <span className="text-left">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 text-slate-600 dark:text-slate-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
