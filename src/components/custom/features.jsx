import React from "react";
import {
  Building,
  TrendingUp,
  Shield,
  Users,
  Coins,
  BarChart3,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Proyectos validados",
      description:
        "Accede a oportunidades analizadas por expertos y con respaldo inmobiliario real.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Rendimiento constante",
      description:
        "Genera ingresos pasivos mes a mes desde tu primera inversión.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Seguridad legal",
      description:
        "Protección jurídica y transparencia total en cada operación.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Inversores como vos",
      description:
        "Comunidad activa que comparte estrategias, conocimientos y resultados.",
    },
    {
      icon: <Coins className="h-6 w-6" />,
      title: "Desde 50 U$D",
      description:
        "Invertí con montos bajos y aumentá tu patrimonio paso a paso.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Todo a la vista",
      description:
        "Panel de control con métricas en tiempo real y reportes detallados.",
    },
  ];

  return (
    <section className="flex justify-center py-24 bg-background dark:bg-gray-950 transition-colors">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            ¿Por qué invertir con Reental?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitás para empezar a invertir de forma segura, clara
            y rentable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 rounded-2xl border border-border bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all group">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
