"use client";

import { useState, useEffect } from "react";
import { CustomIconProps } from "./CustomIcon.type";

export function CustomIcon(props: CustomIconProps) {
  const { icon: Icon } = props;

  // Estado para manejar el tema
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      setTheme(e.matches ? "dark" : "light");
    });

    return () => {
      mediaQuery.removeEventListener("change", () => {});
    };
  }, []);

  return (
    <div
      className={`p-2 rounded-lg ${theme === "dark" ? "bg-slate-600/50" : "bg-slate-600/20"}`}
    >
      <Icon
        strokeWidth={1}
        className={`w-4 h-4 ${theme === "dark" ? "text-white" : "text-black"}`}
      />
    </div>
  );
}
