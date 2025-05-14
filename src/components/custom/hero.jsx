import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-background">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center text-center lg:text-left space-y-8 mx-8 pl-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gray-900 dark:text-white">Empieza a </span>
              <span className="text-primary">generar ingresos pasivos</span>
              <br />
              <span className="text-gray-900 dark:text-white">desde hoy.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Landora te conecta con proyectos inmobiliarios reales que generan
              rentabilidad mensual. Transparente, simple y accesible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={"/register"}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 border-2 rounded-lg p-1 dark:bg-black dark:border-b-blue-100"
              >
                Empieza con solo 50U$D
              </Link>
              <Link
                href={"/about"}
                className="border-primary text-primary hover:bg-primary/10 border-2 rounded-lg p-1"
              >
                Ver cómo funciona
              </Link>
            </div>
          </div>
          <div className="flex relative justify-end items-end ml-20">
            <div className="relative h-[400px] w-full">
              <div className="absolute -left-10 top-20 animate-float">
                <CoinIcon className="h-12 w-12 text-yellow-500" />
              </div>
              <div className="absolute right-55 top-10 animate-float animation-delay-300">
                <CoinIcon className="h-16 w-16 text-yellow-400" />
              </div>
              <div className="absolute bottom-20 animate-float animation-delay-700">
                <CoinIcon className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="absolute right-50 bottom-40 animate-float animation-delay-500">
                <CoinIcon className="h-14 w-14 text-yellow-500" />
              </div>

              <Image
                src="/chanchito.webp"
                alt="Inversión inmobiliaria"
                width={500}
                height={400}
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
    </section>
  );
}

function CoinIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="currentColor"
        stroke="white"
        strokeWidth="1"
      />
      <path
        d="M12 7V17M9 10H15M9 14H15"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
