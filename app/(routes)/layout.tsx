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
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block lg:w-64`}
      />

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : "lg:ml-0"
        }`}
      >
        {/* Navbar */}
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center lg:justify-end">
          <button
            className="text-xl lg:hidden" // Solo visible en pantallas pequeñas
            onClick={() => setSidebarOpen(!isSidebarOpen)} // Cambiar el estado de apertura del Sidebar
          >
            ☰
          </button>
          <div className="text-white text-lg font-bold lg:ml-auto">My Dashboard</div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
