"use client";
import { Cloud, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const buttons = [
    { label: "light", icon: <Sun width={13} />, active: theme === "light" },
    { label: "dark", icon: <Moon width={13} />, active: theme === "dark" },
    { label: "sky", icon: <Cloud width={13} />, active: theme === "sky" },
  ];
  
  return (
    <span className="flex w-fit items-center gap-0.5 overflow-hidden px-1">
      {buttons.map(({ label, icon }) => (
        <button
          type="button"
          key={label}
          onClick={() => setTheme(label)}
          className={
            "transition-all flex h-8 w-8 items-center justify-center rounded-[4px] hover:opacity-50"
          }
        >
          {icon}
        </button>
      ))}
    </span>
  );
}
