import Image from "next/image";

export function AuthSideContent() {
  return (
    <div className="hidden md:flex md:w-1/2 relative">
      <div className="absolute inset-0">
        <Image
          src="/images/login-bg.jpg"
          alt="Login background"
          fill
          className="object-cover mix-blend-overlay opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent dark:from-primary/10 dark:via-primary/5 dark:to-transparent" />
      </div>
      <div className="relative z-10 w-full flex flex-col justify-center items-center p-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Invierte en el futuro inmobiliario
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-200">
            Accede a las mejores oportunidades de inversión en propiedades
            seleccionadas cuidadosamente para ti.
          </p>
        </div>
      </div>
    </div>
  );
}
