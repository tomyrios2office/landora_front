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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import {
  MapPin,
  Percent,
  Calendar,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=600",
      title: "Residencial Los Álamos",
      location: "Madrid, España",
      returnRate: 8.5,
      duration: "12 meses",
      progress: 75,
      status: "Financiando",
      description:
        "Proyecto residencial de lujo ubicado en una de las zonas más exclusivas de Madrid. Incluye 24 apartamentos con acabados de primera calidad.",
      minInvestment: "5.000€",
      totalFunding: "1.200.000€",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=600",
      title: "Edificio Meridiano",
      location: "Barcelona, España",
      returnRate: 9.2,
      duration: "18 meses",
      progress: 45,
      status: "Financiando",
      description:
        "Desarrollo de uso mixto que combina espacios comerciales y residenciales en el corazón de Barcelona.",
      minInvestment: "10.000€",
      totalFunding: "2.500.000€",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=600",
      title: "Torres del Parque",
      location: "Valencia, España",
      returnRate: 7.8,
      duration: "24 meses",
      progress: 90,
      status: "Casi completo",
      description:
        "Complejo residencial con vistas al parque central de Valencia, diseñado con los más altos estándares de sostenibilidad.",
      minInvestment: "7.500€",
      totalFunding: "1.800.000€",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=300&width=600",
      title: "Residencial Marina",
      location: "Málaga, España",
      returnRate: 8.8,
      duration: "15 meses",
      progress: 30,
      status: "Financiando",
      description:
        "Exclusivo desarrollo frente al mar con acceso directo a la playa y amenidades de primer nivel.",
      minInvestment: "15.000€",
      totalFunding: "3.000.000€",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=300&width=600",
      title: "Residencial Los Álamos",
      location: "Madrid, España",
      returnRate: 8.5,
      duration: "12 meses",
      progress: 75,
      status: "Financiando",
      description:
        "Proyecto residencial de lujo ubicado en una de las zonas más exclusivas de Madrid. Incluye 24 apartamentos con acabados de primera calidad.",
      minInvestment: "5.000€",
      totalFunding: "1.200.000€",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=300&width=600",
      title: "Edificio Meridiano",
      location: "Barcelona, España",
      returnRate: 9.2,
      duration: "18 meses",
      progress: 45,
      status: "Financiando",
      description:
        "Desarrollo de uso mixto que combina espacios comerciales y residenciales en el corazón de Barcelona.",
      minInvestment: "10.000€",
      totalFunding: "2.500.000€",
    },
    {
      id: 7,
      image: "/placeholder.svg?height=300&width=600",
      title: "Torres del Parque",
      location: "Valencia, España",
      returnRate: 7.8,
      duration: "24 meses",
      progress: 90,
      status: "Casi completo",
      description:
        "Complejo residencial con vistas al parque central de Valencia, diseñado con los más altos estándares de sostenibilidad.",
      minInvestment: "7.500€",
      totalFunding: "1.800.000€",
    },
    {
      id: 8,
      image: "/placeholder.svg?height=300&width=600",
      title: "Residencial Marina",
      location: "Málaga, España",
      returnRate: 8.8,
      duration: "15 meses",
      progress: 30,
      status: "Financiando",
      description:
        "Exclusivo desarrollo frente al mar con acceso directo a la playa y amenidades de primer nivel.",
      minInvestment: "15.000€",
      totalFunding: "3.000.000€",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-18">
      <div className=" container py-10">
        <div className=" space-y-6">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col mb-4 h-56 items-center justify-center">
              <h1 className="text-4xl font-bold mb-2">
                Proyectos Inmobiliarios
              </h1>
              <p className="text-lg text-muted-foreground">
                Explora y encuentra las mejores oportunidades de inversión
                inmobiliaria
              </p>
            </div>
            <div className="flex gap-4">
              <div className="relative flex-1 md:min-w-[300px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Buscar proyectos..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrar por estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los estados</SelectItem>
                  <SelectItem value="funding">Financiando</SelectItem>
                  <SelectItem value="almost">Casi completo</SelectItem>
                  <SelectItem value="completed">Completado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center ml-14">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
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
  description,
  minInvestment,
  totalFunding,
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-[500px]">
      <div className="relative h-64 w-full">
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
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="flex items-center mt-2">
              <MapPin className="h-4 w-4 mr-1" /> {location}
            </CardDescription>
          </div>
          <Badge variant="outline" className="text-lg px-4 py-1">
            {minInvestment}
            <span className="text-xs ml-1">min.</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
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
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">
              Financiación total
            </span>
            <span className="text-xl font-bold">{totalFunding}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progreso de financiación</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
          Invertir ahora
        </Button>
        <Button variant="outline" className="flex-1">
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
}
