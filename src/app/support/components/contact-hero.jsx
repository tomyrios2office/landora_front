"use client";

import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: MailIcon,
    title: "Email",
    description: "Nuestro equipo responderá en menos de 24 horas",
    contact: "soporte@landora.es",
    link: "mailto:soporte@landora.es",
  },
  {
    icon: PhoneIcon,
    title: "Teléfono",
    description: "Lunes a Viernes de 9:00 a 18:00",
    contact: "+34 900 123 456",
    link: "tel:+34900123456",
  },
  {
    icon: MessageCircle,
    title: "Chat en Vivo",
    description: "Disponible para usuarios registrados",
    contact: "Inicia sesión para chatear",
    link: "/login",
  },
];

export function ContactHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            ¿Necesitas{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
              Ayuda
            </span>
            ?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Estamos aquí para ayudarte. Elige el método de contacto que
            prefieras y nos pondremos en contacto contigo lo antes posible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              href={method.link}
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <method.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                {method.description}
              </p>
              <p className="font-medium text-primary">{method.contact}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
