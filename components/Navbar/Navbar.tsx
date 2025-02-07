import { Search } from "lucide-react"
// import { UserButton } from "@clerk/nextjs"

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
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 md:px-6 bg-background border-b h-16 sticky top-0 z-50">
      <div className="flex items-center justify-center flex-1 gap-x-2 sm:gap-x-4 md:gap-x-8">
        <div className="block xl:hidden">
          <Sheet>
            <SheetTrigger className="flex items-center">
              {/* Add your hamburger icon here if needed */}
            </SheetTrigger>
            <SheetContent side="left">
              <SidebarRoutes />
            </SheetContent>
          </Sheet>
        </div>
        <div className="relative flex items-center w-full max-w-md justify-center">
          <Input placeholder="Search..." className="w-full rounded-lg" />
          <Search strokeWidth={1} className="absolute right-2" />
        </div>
      </div>
      <div className="flex items-center gap-x-4 sm:gap-x-6">
        <ToggleTheme />
        {/* <UserButton /> */}
      </div>
    </nav>
  );
}
  







