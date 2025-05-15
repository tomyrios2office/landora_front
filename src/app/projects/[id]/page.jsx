"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Percent,
  Calendar,
  ArrowLeft,
  Clock,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function ProjectPage({ params }) {
  const { id } = params;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/projects/${id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setProject(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError(err.message || "Error al cargar el proyecto");
        setLoading(false);

        // Si estamos en desarrollo, cargar datos de muestra después de unos segundos
        if (process.env.NODE_ENV === "development") {
          console.log("Loading mock data for development...");
          setTimeout(() => {
            import("/src/app/api/projects/[id]/route.js")
              .then((module) => {
                const mockProject =
                  module.mockProjects.find((p) => p.id === id) ||
                  module.mockProjects[0];
                if (mockProject) {
                  setProject(mockProject);
                  setError(null);
                }
              })
              .catch((err) => {
                console.error("Error loading mock data:", err);
              });
          }, 1000);
        }
      }
    };

    fetchProjectData();
  }, [id]);

  // Formatear fecha
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("es-ES");
  };

  if (loading) {
    return (
      <div className="container mx-auto py-12 flex justify-center items-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
          <p>Cargando proyecto...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="container mx-auto py-12 flex justify-center items-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <p className="text-red-500">
            Error: {error || "Proyecto no encontrado"}
          </p>
          <Link href="/projects">
            <Button variant="outline" className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a proyectos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      {/* Botón de volver */}
      <Link href="/projects">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver a proyectos
        </Button>
      </Link>

      {/* Header del proyecto */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          className="object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="flex justify-between items-end">
            <div>
              <Badge className="mb-3 bg-primary text-white">
                {project.tag}
              </Badge>
              <h1 className="text-4xl font-bold text-white mb-2">
                {project.name}
              </h1>
              <p className="flex items-center text-white/90">
                <MapPin className="h-5 w-5 mr-2" /> {project.location}
              </p>
            </div>
            <Badge
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white text-lg px-4 py-2"
            >
              ${project.minPrice}
              <span className="text-xs ml-1">inversión mínima</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna principal */}
        <div className="lg:col-span-2 space-y-8">
          {/* Descripción */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Descripción del proyecto
              </h2>
              <p className="text-muted-foreground">{project.content}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Percent className="h-4 w-4 mr-1" /> Rentabilidad total
                  </span>
                  <span className="text-xl font-bold text-primary">
                    {project.totalProfit}%
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-1" /> Duración
                  </span>
                  <span className="text-xl font-bold">
                    {project.investmentPeriod} Año/s
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Users className="h-4 w-4 mr-1" /> Inversores
                  </span>
                  <span className="text-xl font-bold">{project.investors}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Características */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Características</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Galería */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Galería</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-[4/3] relative rounded-md overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${project.name} galería ${idx + 1}`}
                      className="object-cover hover:scale-105 transition-transform"
                      fill
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Columna lateral - datos de inversión */}
        <div>
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Detalles de la inversión
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progreso de financiación</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Inversión mínima
                    </span>
                    <span className="font-bold">${project.minPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Rentabilidad anual
                    </span>
                    <span className="font-bold text-primary">
                      {project.anualProfit}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Rentabilidad total
                    </span>
                    <span className="font-bold text-primary">
                      {project.totalProfit}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Periodo</span>
                    <span className="font-bold">
                      {project.investmentPeriod} años
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fecha inicio</span>
                    <span className="font-bold">
                      {formatDate(project.rentStart)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fecha fin</span>
                    <span className="font-bold">
                      {formatDate(project.rentEnd)}
                    </span>
                  </div>
                </div>

                <Separator />

                {/* Documentos */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Documentos</h3>
                  <div className="space-y-2">
                    {project.documents.map((doc, idx) => (
                      <Link
                        key={idx}
                        href={doc.url}
                        className="flex items-center p-2 hover:bg-muted rounded-md transition-colors"
                      >
                        <div className="mr-2 bg-primary/10 text-primary rounded p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                        </div>
                        <span>{doc.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6">
                  Invertir ahora
                </Button>

                <Button variant="outline" className="w-full">
                  Agendar una consulta
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
