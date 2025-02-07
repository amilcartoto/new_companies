"use client";
import Navbar from "@/components/Navbar/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div className={`
        fixed inset-0 z-50 bg-background/80 backdrop-blur-sm
        lg:hidden ${sidebarOpen ? "block" : "hidden"}
      `} onClick={() => setSidebarOpen(false)} />
      
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-background
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:w-80
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 w-full">
        <div className="sticky top-0 z-40 flex items-center justify-between px-4 h-16 border-b bg-background lg:px-8">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Navbar />
        </div>

        <main className="flex-1 p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}   