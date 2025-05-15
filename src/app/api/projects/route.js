import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req) {
  try {
    const projects = await prisma.LandProject.findMany();
    if (!projects) {
      return NextResponse.json(
        { error: "No se encontraron proyectos." },
        { status: 404 }
      );
    }
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Ocurrió un error inesperado al obtener los proyectos: " + error,
      },
      console.log(error),
      { status: 500 }
    );
  }
}
