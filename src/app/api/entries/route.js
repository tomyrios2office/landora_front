import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Obtener la URL y extraer parámetros de búsqueda
    const { searchParams } = new URL(request.url);
    const latest = searchParams.get("latest");

    // Si se solicita solo el más reciente
    if (latest === "true") {
      const latestEntry = await prisma.BlogEntry.findFirst({
        orderBy: {
          date: "desc",
        },
      });

      return NextResponse.json(latestEntry || null);
    }

    // Si no, devolver todos
    const entries = await prisma.BlogEntry.findMany({
      orderBy: {
        date: "desc",
      },
    });

    return NextResponse.json(entries);
  } catch (error) {
    console.error("Error fetching blog entries:", error);
    return NextResponse.json(
      { error: "Error fetching entries: " + error.message },
      { status: 500 }
    );
  }
}
