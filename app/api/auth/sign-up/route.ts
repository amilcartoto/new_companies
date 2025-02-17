import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Validar que el email y la contraseña sean proporcionados
    if (!email || !password) {
      return NextResponse.json(
        { error: "El email y la contraseña son requeridos" },
        { status: 400 }
      );
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "El usuario ya existe" },
        { status: 400 }
      );
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    // Obtener el JWT_SECRET de las variables de entorno
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET no está definido");

    // Generar el token JWT
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      secret,
      { expiresIn: "7d" }
    );

    return NextResponse.json({ token });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error en el registro:", error.message);
    } else {
      console.error("Error en el registro:", error);
    }
    return NextResponse.json({ error: "Error en el registro" }, { status: 500 });
  }
}

