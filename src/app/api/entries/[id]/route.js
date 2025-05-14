import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "ID de entrada no proporcionado" },
        { status: 400 }
      );
    }

    const entry = await prisma.BlogEntry.findUnique({
      where: { id },
    });

    if (!entry) {
      return NextResponse.json(
        { error: "Entrada de blog no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(entry);
  } catch (error) {
    console.error("Error fetching blog entry:", error);
    return NextResponse.json(
      { error: "Error al obtener la entrada del blog" },
      { status: 500 }
    );
  }
}
