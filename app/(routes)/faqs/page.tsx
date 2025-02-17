"use client";

import { useState, useEffect } from "react";
import { FaqItem } from "./faq-item";

const faqs = [
  { question: "¿Qué es este producto?", answer: "Este es un producto..." },
  { question: "¿Cómo puedo crear una cuenta?", answer: "Para crear una cuenta..." },
  { question: "¿Cómo puedo cambiar mi contraseña?", answer: "Para cambiar..." },
  // Agregar más preguntas aquí
];

export default function FaqPage() {
  const [theme, setTheme] = useState("light");

  // Obtener el tema de localStorage o por defecto "light"
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);

    // Escuchar los cambios en el tema del sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      setTheme(e.matches ? "dark" : "light");
    });

    // Limpiar el evento al desmontar el componente
    return () => {
      mediaQuery.removeEventListener("change", () => {});
    };
  }, []);

  // Asegurarse de que el tema se guarda y persiste
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`faq-container p-6 ${theme === "dark" ? "bg-gray-800 text-black" : "bg-white text-gray-800"}`}>
      <h1 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h1>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
