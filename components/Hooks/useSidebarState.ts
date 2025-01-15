 "use cleien"// Directiva para marcar este archivo como cliente

import { useState } from "react";

export function useSidebarState() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return { isSidebarOpen, openSidebar, closeSidebar };
}


// "use client"; // Directiva para marcar este archivo como cliente

// import { useState } from "react";

// export function useSidebarState() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const openSidebar = () => setIsSidebarOpen(true);
//   const closeSidebar = () => setIsSidebarOpen(false);

//   return { isSidebarOpen, openSidebar, closeSidebar };
// }
