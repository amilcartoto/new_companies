import { Search, LogOut } from "lucide-react";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";
import { ToggleTheme } from "../ToggleTheme";

export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/sign-in";
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-6 bg-background border-b h-16 sticky top-0 z-50 w-full">
      
      {/* Contenedor del menú (Sidebar en pantallas chicas) */}
      <div className="flex items-center xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            {/* Aquí puedes agregar el icono del menú si lo necesitas */}
          </SheetTrigger>
          <SheetContent side="left">
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>

      {/* Contenedor de la barra de búsqueda (siempre centrada) */}
      <div className="flex-1 flex justify-center px-4">
        <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
          <Input placeholder="Search..." className="w-full rounded-lg" />
          <Search strokeWidth={1} className="absolute right-2 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Contenedor de los botones (siempre a la derecha y separados) */}
      <div className="flex items-center gap-x-6 sm:gap-x-8">
        <ToggleTheme />
        <button
          onClick={handleLogout}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          title="Cerrar sesión"
        >
          <LogOut className="h-6 w-6 text-red-500" />
        </button>
      </div>

    </nav>
  );
}
