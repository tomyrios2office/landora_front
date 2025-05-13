"use client";

import { motion } from "framer-motion";
import { Building2, Users2, LineChart, Wallet } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "€50M+",
    label: "Activos Tokenizados",
    description: "En propiedades premium"
  },
  {
    icon: Users2,
    value: "5,000+",
    label: "Inversores Activos",
    description: "En nuestra plataforma"
  },
  {
    icon: LineChart,
    value: "8.5%",
    label: "Rentabilidad Media",
    description: "Anual histórica"
  },
  {
    icon: Wallet,
    value: "100€",
    label: "Inversión Mínima",
    description: "Accesible para todos"
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="font-medium text-primary mb-1">{stat.label}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 