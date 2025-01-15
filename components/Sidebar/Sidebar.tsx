import React, { forwardRef } from "react";

const Sidebar = forwardRef<HTMLDivElement, { isOpen: boolean }>(({ isOpen }, ref) => {
  return (
    <div
      ref={ref} // Referencia al Sidebar
      className={`p-4 border-gray-300 w-64 transition-all duration-300 bg-gray-800 text-white fixed top-0 left-0 h-full z-10 ${
        isOpen ? "block" : "hidden"
      }`} // El Sidebar está oculto por defecto y visible solo cuando isOpen es true
    >
      <h2 className="text-lg font-bold mb-4">Menú</h2>
      <ul className="space-y-2">
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Inicio
          </a>
        </li>
        <li>
          <a href="/about" className="text-blue-500 hover:underline">
            Acerca de
          </a>
        </li>
        <li>
          <a href="/contact" className="text-blue-500 hover:underline">
            Contacto
          </a>
        </li>
      </ul>
      <button className="bg-slate-600 text-white hover:bg-slate-800 mt-4 w-full">
        Cerrar sesión
      </button>
    </div>
  );
});

Sidebar.displayName = "Sidebar"; // Necesario para forwardRef

export default Sidebar;
