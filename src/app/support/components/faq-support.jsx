"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "¿Cuál es el tiempo de respuesta típico?",
    answer:
      "Normalmente respondemos a todas las consultas en menos de 24 horas hábiles. Para casos urgentes, recomendamos usar nuestro chat en vivo o línea telefónica.",
  },
  {
    question: "¿Cómo puedo reportar un problema técnico?",
    answer:
      "Puedes reportar problemas técnicos a través del formulario de contacto, seleccionando 'Soporte Técnico' como asunto. Por favor, incluye capturas de pantalla y detalles específicos del problema.",
  },
  {
    question: "¿Ofrecen soporte fuera del horario laboral?",
    answer:
      "Sí, contamos con un equipo de guardia para emergencias fuera del horario laboral. Sin embargo, para consultas no urgentes, te recomendamos contactarnos durante el horario regular.",
  },
  {
    question: "¿Qué información debo proporcionar al contactar soporte?",
    answer:
      "Para ayudarte mejor, incluye tu nombre completo, email, número de cuenta (si aplica), y una descripción detallada de tu consulta o problema. Cuanta más información proporciones, más rápido podremos ayudarte.",
  },
  {
    question: "¿Tienen un programa de soporte prioritario?",
    answer:
      "Sí, los inversores con carteras superiores a €50,000 tienen acceso a nuestro servicio de soporte VIP con tiempos de respuesta garantizados y un gestor personal dedicado.",
  },
];

export function FaqSupport() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Preguntas Frecuentes de Soporte
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
              >
                <AccordionTrigger className="px-4 hover:no-underline">
                  <span className="text-left">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 text-slate-600 dark:text-slate-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
