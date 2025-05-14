import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hash } from "bcryptjs";

// POST REQUEST => LOCAL CREDENTIALS
export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, password } = await req.json();

    // VALIDATE REQUIRED FIELDS
    if (!firstName || !lastName || !email || !phone || !password) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    //  EXISTING ACCOUNT ERROR HANDLING
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "El email ya está registrado" },
        { status: 400 }
      );
    }

    // ENCRYPT PASSWORD FOR THE DATABASE
    const hashedPassword = await hash(password, 12);

    // NO ERROR => CREATE USER
    const user = await prisma.user.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        password: hashedPassword,
      },
    });

    // NO ERROR => SUCCESS & RETURN USER
    return NextResponse.json(
      {
        message: "Usuario registrado exitosamente",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    // ERROR => RETURN ERROR
    console.error("Error al registrar usuario:", error);
    return NextResponse.json(
      { error: "Error al crear la cuenta" },
      { status: 500 }
    );
  }
}
