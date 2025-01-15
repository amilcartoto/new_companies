import React, { forwardRef } from "react";
import { useClerk } from "@clerk/clerk-react";

const Sidebar = forwardRef<HTMLDivElement, { isOpen: boolean }>(({ isOpen }, ref) => {
  const { signOut } = useClerk(); // Obtener la función de cierre de sesión de Clerk

  const handleLogout = () => {
    signOut(); // Cierra la sesión
  };

  return (
    <div
      ref={ref}
      className={`p-4 border-gray-300 w-64 transition-all duration-300 bg-gray-800 text-white fixed top-0 left-0 h-full z-10 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <h2 className="text-lg font-bold mb-4">Menú</h2>
      <ul className="space-y-2">
        <li>
          <a href="/" className="text-blue-400 hover:underline">
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
      <button
        onClick={handleLogout} // Se ejecuta la función de cierre de sesión
        className="bg-slate-600 text-white hover:bg-slate-800 mt-4 w-full"
      >
        Cerrar sesión
      </button>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
