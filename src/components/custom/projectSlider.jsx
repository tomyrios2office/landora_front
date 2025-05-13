import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { MapPin, Percent, Calendar } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-20" id="proyectos">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explora nuestros proyectos inmobiliarios actuales y comienza a
            generar ingresos mensuales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            image="/placeholder.svg?height=200&width=400"
            title="Residencial Los Álamos"
            location="Madrid, España"
            returnRate={8.5}
            duration="12 meses"
            progress={75}
            status="Financiando"
          />
          <ProjectCard
            image="/placeholder.svg?height=200&width=400"
            title="Edificio Meridiano"
            location="Barcelona, España"
            returnRate={9.2}
            duration="18 meses"
            progress={45}
            status="Financiando"
          />
          <ProjectCard
            image="/placeholder.svg?height=200&width=400"
            title="Torres del Parque"
            location="Valencia, España"
            returnRate={7.8}
            duration="24 meses"
            progress={90}
            status="Casi completo"
          />
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Ver todos los proyectos
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  image,
  title,
  location,
  returnRate,
  duration,
  progress,
  status,
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-white">
          {status}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" /> {location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground flex items-center">
              <Percent className="h-4 w-4 mr-1" /> Rentabilidad
            </span>
            <span className="text-xl font-bold text-primary">
              {returnRate}%
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground flex items-center">
              <Calendar className="h-4 w-4 mr-1" /> Duración
            </span>
            <span className="text-xl font-bold">{duration}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progreso</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          Invertir ahora
        </Button>
      </CardFooter>
    </Card>
  );
}
