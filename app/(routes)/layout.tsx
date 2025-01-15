"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "@/components/Sidebar/Sidebar"; // Importa Sidebar

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null); // Referencia al Sidebar

  // Cerrar el Sidebar si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false); // Cierra el Sidebar si clickeas fuera de él
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Agregar el listener

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Limpiar el listener
    };
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar - oculto por defecto */}
      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef} /> {/* Pasamos la referencia */}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <button
            className="text-xl lg:hidden" // Solo visible en pantallas pequeñas
            onClick={() => setSidebarOpen(!isSidebarOpen)} // Cambiar el estado de apertura del Sidebar
          >
            ☰
          </button>
          <div className="text-white">My Dashboard</div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

