import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros inversores
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre las experiencias de quienes ya están generando ingresos con
            Reental
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            content="Llevo 6 meses invirtiendo con Reental y ya he recibido mis primeros ingresos mensuales. El proceso es muy sencillo y transparente."
            author="Carlos Martínez"
            role="Inversor desde 2023"
            rating={5}
          />
          <TestimonialCard
            content="Me ha permitido diversificar mi cartera de inversiones con proyectos inmobiliarios de calidad. El equipo de Reental siempre está disponible para resolver dudas."
            author="Laura Gómez"
            role="Inversora desde 2022"
            rating={5}
          />
          <TestimonialCard
            content="Excelente plataforma para quienes queremos invertir en inmobiliario sin tener que gestionar propiedades. Los rendimientos son consistentes."
            author="Miguel Sánchez"
            role="Inversor desde 2023"
            rating={4}
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ content, author, role, rating }) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-6">{content}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-3">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt={author}
              width={40}
              height={40}
            />
          </div>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
