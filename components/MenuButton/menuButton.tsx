"use client";

import React from "react";

type MenuButtonProps = {
  onClick: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="p-2 bg-blue-500 text-white rounded-lg md:hidden">
      {/* Icono del menú, por ejemplo, usando Lucide */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
};

export default MenuButton;
