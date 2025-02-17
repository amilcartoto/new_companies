import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Validar que email y password no estén vacíos
    if (!email || !password) {
      return NextResponse.json(
        { error: "El email y la contraseña son requeridos" },
        { status: 400 }
      );
    }

    // Buscar usuario en la base de datos
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // Verificar que el usuario tenga una contraseña almacenada
    if (!user.password) {
      return NextResponse.json(
        { error: "El usuario no tiene contraseña" },
        { status: 500 }
      );
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Contraseña incorrecta" },
        { status: 401 }
      );
    }

    // Verificar que JWT_SECRET está definido en .env.local
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("❌ ERROR: JWT_SECRET no está definido en .env.local");
      return NextResponse.json(
        { error: "Error en el servidor" },
        { status: 500 }
      );
    }

    // Verificar que user.id no sea null o undefined
    if (!user.id) {
      console.error("❌ ERROR: user.id es null o undefined.");
      return NextResponse.json(
        { error: "Error interno del servidor" },
        { status: 500 }
      );
    }

    // Generar token JWT
    const token = jwt.sign({ userId: user.id }, secret, {
      expiresIn: "7d",
    });

    return NextResponse.json({ token, user }, { status: 200 });

  } catch (error) {
    console.error("❌ ERROR en el inicio de sesión:", error);
    return NextResponse.json(
      { error: "Error en el inicio de sesión" },
      { status: 500 }
    );
  }
}

