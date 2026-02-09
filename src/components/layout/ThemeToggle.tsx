"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />; 

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300"
      title="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-400 animate-in spin-in-90 duration-500" />
      ) : (
        <Moon size={20} className="text-slate-600 animate-in spin-in-90 duration-500" />
      )}
    </button>
  );
}