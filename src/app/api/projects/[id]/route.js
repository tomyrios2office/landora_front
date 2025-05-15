import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const project = await prisma.LandProject.findUnique({
      where: { id },
      include: {
        gallery: true,
        documents: true,
        features: true,
      },
    });

    if (!project) {
      return NextResponse.json(
        { error: `Proyecto con ID ${id} no encontrado.` },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error al obtener el proyecto:", error);

    return NextResponse.json(
      {
        error: `Error al obtener el proyecto: ${error.message}`,
      },
      { status: 500 }
    );
  }
}

export const mockProjects = [
  {
    id: "1",
    name: "Villas La Caleta",
    tokenName: "VLCT",
    image: "/projects/project1.jpg",
    location: "Playa La Caleta, Quintana Roo",
    content:
      "Conjunto residencial de lujo frente al mar, situado en una de las playas más exclusivas de la Riviera Maya. El proyecto incluye 24 villas independientes con acceso directo a la playa, cada una con piscina privada, jardín tropical y vistas panorámicas al mar Caribe.",
    totalProfit: 25,
    anualProfit: 6.25,
    investmentPeriod: 4,
    minPrice: 1000,
    price: 2500000,
    progress: 62,
    tag: "Villas",
    rentStart: "2024-10-01",
    rentEnd: "2028-10-01",
    documents: [
      { name: "Plan de inversión", url: "/docs/plan-inversion.pdf" },
      { name: "Contrato", url: "/docs/contrato.pdf" },
      { name: "Especificaciones técnicas", url: "/docs/especificaciones.pdf" },
    ],
    investors: 58,
    gallery: [
      "/projects/gallery1.jpg",
      "/projects/gallery2.jpg",
      "/projects/gallery3.jpg",
    ],
    features: [
      "Acceso directo a playa privada",
      "Piscina infinita",
      "Servicio de concierge 24/7",
      "Club de playa exclusivo",
      "Seguridad privada",
      "Estacionamiento subterráneo",
    ],
  },
  {
    id: "2",
    name: "Residencial Los Pinos",
    tokenName: "PINOS",
    image: "/projects/project2.jpg",
    location: "Valle de Bravo, Estado de México",
    content:
      "Desarrollo residencial de lujo en pleno bosque con vistas al lago. Compuesto por 18 residencias con arquitectura contemporánea que se integra perfectamente con el entorno natural. Cada propiedad cuenta con jardines privados, terrazas y acabados de alta calidad.",
    totalProfit: 18,
    anualProfit: 4.5,
    investmentPeriod: 4,
    minPrice: 800,
    price: 1800000,
    progress: 45,
    tag: "Residencial",
    rentStart: "2025-01-15",
    rentEnd: "2029-01-15",
    documents: [
      { name: "Plan de inversión", url: "/docs/plan-inversion-pinos.pdf" },
      { name: "Contrato", url: "/docs/contrato-pinos.pdf" },
    ],
    investors: 32,
    gallery: [
      "/projects/gallery4.jpg",
      "/projects/gallery5.jpg",
      "/projects/gallery6.jpg",
    ],
    features: [
      "Vistas panorámicas al lago",
      "Club house con amenidades",
      "Seguridad 24/7",
      "Senderos para caminata",
      "Área de conservación natural",
      "Acceso controlado",
    ],
  },
];
