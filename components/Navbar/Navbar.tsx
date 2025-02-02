import { Menu, Search } from "lucide-react"
import { UserButton } from "@clerk/nextjs"

import { Input } from "../ui/input"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

import SidebarRoutes from "../SidebarRoutes/SidebarRoutes"
import { ToggleTheme } from "../ToggleTheme"

// export default function Navbar() {
//   return (
//     <nav className="flex items-center px-2 gap-x-4 md:px-6 justify-between bg-background 
//     border-b h-20 sticky top-0 z-50">
//         <div className="block xl:hidden">
//             <Sheet>
//                 <SheetTrigger className="flex items-center">
//                     <Menu />
//                 </SheetTrigger>
//                 <SheetContent side="left">
//                     <SidebarRoutes />
//                 </SheetContent>
//             </Sheet>
//         </div>
//         <div className="relative w-[300px]">
//             <Input placeholder="Search..." className="rounded-lg" />
//             <Search strokeWidth={1} className="absolute top-2 right-2 " />
//         </div>
//         <div className="flex gap-x-2 items-center">
//             <ToggleTheme />
//             <UserButton />
//         </div>
//     </nav>
//   )
// }

import { useClerk } from "@clerk/nextjs";


export default function Navbar() {
    const { signOut } = useClerk();
  
    return (
      <nav className="flex items-center px-2 gap-x-4 md:px-6 justify-between bg-background 
      border-b h-20 sticky top-0 z-50">
        <div className="block xl:hidden">
          <Sheet>
            <SheetTrigger className="flex items-center">
              <Menu />
            </SheetTrigger>
            <SheetContent side="left">
              <SidebarRoutes />
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="relative w-[300px]">
          <Input placeholder="Search..." className="rounded-lg" />
          <Search strokeWidth={1} className="absolute top-2 right-2 " />
        </div>
        
        <div className="flex gap-x-2 items-center">
          <ToggleTheme />
          <UserButton />
          
          {/* 🔴 Botón para cerrar sesión */}
          <button 
            onClick={() => signOut()} 
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>
    );
  }
  







