"use client";

import React, { createContext, useContext, useState } from "react";

// Definimos el contexto
const SidebarContext = createContext<{
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}>({
  isOpen: false,
  toggleSidebar: () => {},
  closeSidebar: () => {},
});

// Proveedor del contexto
export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Hook para usar el contexto
export const useSidebar = () => useContext(SidebarContext);
