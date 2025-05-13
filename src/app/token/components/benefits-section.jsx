import { Building2, LineChart, Lock, Coins } from "lucide-react";

const benefits = [
  {
    icon: Building2,
    title: "Inversión Fraccionada",
    description:
      "Invierte en propiedades premium desde pequeñas cantidades. Democratizamos el acceso al mercado inmobiliario.",
  },
  {
    icon: LineChart,
    title: "Rentabilidad Mensual",
    description:
      "Recibe ingresos mensuales por alquileres y benefíciate de la revalorización del inmueble.",
  },
  {
    icon: Lock,
    title: "Máxima Seguridad",
    description:
      "Tokens respaldados por activos reales y registrados. Tecnología blockchain para total transparencia.",
  },
  {
    icon: Coins,
    title: "Liquidez Inmediata",
    description:
      "Vende tus tokens en cualquier momento a través de nuestro mercado secundario.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Beneficios de la Tokenización
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
