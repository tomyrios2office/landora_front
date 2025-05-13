"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "María Rodríguez",
    role: "CEO & Fundadora",
    image: "/images/team/maria.jpg",
    bio: "Experta en mercado inmobiliario con más de 15 años de experiencia en PropTech.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Carlos Martínez",
    role: "CTO",
    image: "/images/team/carlos.jpg",
    bio: "Ingeniero blockchain con experiencia en tokenización de activos reales.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Ana García",
    role: "Directora de Operaciones",
    image: "/images/team/ana.jpg",
    bio: "Especialista en gestión de propiedades y optimización de rendimientos.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David López",
    role: "Director Legal",
    image: "/images/team/david.jpg",
    bio: "Abogado especializado en regulación de activos digitales y tokenización.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export function TeamSection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Un grupo de expertos comprometidos con la innovación en el sector
            inmobiliario y la tecnología blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {member.bio}
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="text-slate-400 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="text-slate-400 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
