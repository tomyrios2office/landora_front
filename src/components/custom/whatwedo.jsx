import { SearchCheck, Layers3, Hammer, Building2, Coins } from "lucide-react";

const steps = [
  {
    title: "Buscamos oportunidades",
    description:
      "Identificamos inmuebles rentables para reformarlos o reutilizarlos de manera eficiente.",
    icon: SearchCheck,
  },
  {
    title: "Tokenizamos",
    description:
      "Convertimos cada propiedad en tokens digitales para que puedas invertir desde cualquier lugar.",
    icon: Layers3,
  },
  {
    title: "Reformamos",
    description:
      "Realizamos mejoras en la propiedad para incrementar su valor y potencial de renta.",
    icon: Hammer,
  },
  {
    title: "Alquilamos y gestionamos",
    description:
      "Nos encargamos de alquilar y administrar cada inmueble para generar ingresos estables.",
    icon: Building2,
  },
  {
    title: "Distribuimos rendimientos",
    description:
      "Repartimos los beneficios mensualmente entre los inversores según su participación.",
    icon: Coins,
  },
];

export function WhatWeDoTimeline() {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-20">¿Qué hacemos?</h2>

        <div className="relative border-l-2 border-primary/30 dark:border-primary/50 ml-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`mb-16 flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:w-1/2 px-6 md:px-12 text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary/10 border-4 border-background dark:border-background rounded-full shadow-md mx-4">
                  <Icon className="w-7 h-7 text-primary" />
                  <span className="absolute w-2 h-2 bg-primary rounded-full -bottom-4"></span>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
