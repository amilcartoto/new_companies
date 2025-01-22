"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Zap } from "lucide-react";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "dark":
        return <Moon className="h-5 w-5 text-yellow-500" />;
      case "solarized":
        return <Zap className="h-5 w-5 text-green-500" />;
      default:
        return <Sun className="h-5 w-5 text-yellow-500" />;
    }
  };

  return (
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : theme === "dark" ? "solarized" : "light")
      }
      className="m-2 left-8  rounded-full hover:bg-gray-400 dark:hover:bg-gray-500 transition"
      title="Cambiar tema"
    >
      {getIcon()}
    </button>
  );
};

export default ThemeToggleButton;
