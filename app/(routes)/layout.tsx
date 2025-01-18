"use client";
import Navbar from "@/components/Navbar/Navbar"; // Importa Navbar

export default function Layout({ children }: { children: React.ReactNode }) {
 
  return (
    <div className="flex w-full h-full">
      <div className="hidden xl:block w-80 h-full xl:fixed">
        Sideber
      </div>
      <div className="w-full xl:ml-80">
        <Navbar/>
        <div className="p-6 bg-[#fafbfc darck:bg-secondary]">
          {children}
        </div>
      </div>
    </div>
  ) 
}   