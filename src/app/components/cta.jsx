import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Cta() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background dark:from-primary/10 dark:to-background transition-colors">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight">
            Empieza a construir tu patrimonio hoy
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Invertí en proyectos inmobiliarios desde 50 U$D y genera ingresos
            pasivos mensuales con total transparencia y seguridad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              className="h-12 bg-background border border-border dark:border-muted-foreground/30 focus:ring-primary"
            />
            <Button className="h-12 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-medium whitespace-nowrap">
              Comenzar gratis
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-5">
            Sin comisiones ocultas. Al registrarte, aceptás nuestros{" "}
            <a href="/terminos" className="underline hover:text-primary">
              términos y condiciones
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
