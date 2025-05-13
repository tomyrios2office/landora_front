"use client";

import { motion } from "framer-motion";
import { Target, Users, Shield, TrendingUp } from "lucide-react";

const missions = [
  {
    icon: Target,
    title: "Nuestra Misión",
    description:
      "Democratizar el acceso a inversiones inmobiliarias de calidad a través de la tecnología blockchain, permitiendo a cualquier persona invertir desde pequeñas cantidades.",
  },
  {
    icon: Users,
    title: "Nuestros Valores",
    description:
      "Transparencia, seguridad y accesibilidad son los pilares fundamentales que guían nuestras decisiones y operaciones diarias.",
  },
  {
    icon: Shield,
    title: "Compromiso",
    description:
      "Nos comprometemos a mantener los más altos estándares de seguridad y cumplimiento regulatorio en todas nuestras operaciones.",
  },
  {
    icon: TrendingUp,
    title: "Visión de Futuro",
    description:
      "Aspiramos a ser líderes globales en la tokenización de activos inmobiliarios, creando un mercado más accesible y eficiente.",
  },
];

export function MissionSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Construyendo el futuro de las inversiones inmobiliarias a través de
            la innovación y la tecnología blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {missions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
