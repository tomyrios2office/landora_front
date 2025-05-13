import { Button } from "@/components/ui/button";
import { BenefitsSection } from "./components/benefits-section";
import { FaqSection } from "./components/faq-section";
import Link from "next/link";
import Image from "next/image";

export default function TokenPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Invierte en Inmuebles{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                  Token a Token
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Democratizamos la inversión inmobiliaria. Accede a propiedades
                premium desde 100€ y recibe beneficios mensuales.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/projects">Ver Proyectos Disponibles</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <Link href="#how-it-works">Cómo Funciona</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold">€2.5M+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Tokenizados
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold">1,500+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Inversores
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold">8.5%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Rentabilidad Media
                  </p>
                </div>
              </div>
            </div>
            <div className="relative lg:h-[600px]">
              <Image
                src="/images/token-hero.jpg"
                alt="Tokenización de inmuebles"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              {/* Overlay card */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Rentabilidad Anual</p>
                    <p className="text-2xl font-bold text-primary">8.5%</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Inversión mínima
                    </span>
                    <span className="font-semibold">100€</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Distribución
                    </span>
                    <span className="font-semibold">Mensual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="how-it-works"
        className="py-16 bg-slate-50 dark:bg-slate-900/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cómo Funciona la Tokenización
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                1
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl h-full">
                <h3 className="text-xl font-semibold mb-4">
                  Selecciona un Proyecto
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Explora nuestra selección de propiedades premium y elige en
                  cuál quieres invertir.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                2
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl h-full">
                <h3 className="text-xl font-semibold mb-4">Compra Tokens</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Decide cuánto quieres invertir y adquiere tus tokens de forma
                  segura.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                3
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl h-full">
                <h3 className="text-xl font-semibold mb-4">
                  Recibe Beneficios
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Obtén ingresos mensuales por alquiler y benefíciate de la
                  revalorización.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Projects CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Comienza tu Viaje de Inversión
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Explora nuestros proyectos disponibles y encuentra la oportunidad
            perfecta para ti.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/projects">Ver Todos los Proyectos</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </main>
  );
}
