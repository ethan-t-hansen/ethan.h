"use client";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const buttons = [
    { label: "light", icon: <Sun width={13} />, active: theme === "light" },
    { label: "dark", icon: <Moon width={13} />, active: theme === "dark" },
    {
        label: "system",
        icon: <Monitor width={13} />,
        active: theme === "system",
      },
  ];

  return (
    <span className="flex w-fit items-center gap-0.5 overflow-hidden rounded-[6px] bg-gray-2 p-[2px]">
      {buttons.map(({ label, icon, active }) => (
        <button
          type="button"
          key={label}
          onClick={() => setTheme(label)}
          className={cn(
            "transition-all flex h-6 w-6 items-center justify-center rounded-[4px] hover:opacity-50",
            active ? "bg-white bg-opacity-10 text-foreground" : "",
          )}
        >
          {icon}
        </button>
      ))}
    </span>
  );
}
