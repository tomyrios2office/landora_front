import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Buscar la entrada más reciente
    const latestEntry = await prisma.BlogEntry.findFirst({
      orderBy: {
        date: "desc",
      },
    });

    if (!latestEntry) {
      return NextResponse.json(
        { error: "No se encontraron entradas de blog" },
        { status: 404 }
      );
    }

    return NextResponse.json(latestEntry);
  } catch (error) {
    console.error("Error fetching latest blog entry:", error);
    return NextResponse.json(
      { error: "Error obteniendo la entrada más reciente" },
      { status: 500 }
    );
  }
}
