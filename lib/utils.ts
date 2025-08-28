import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function darkenColor(hex: string, amount: number): string {
  let col = hex.replace("#", "");
  if (col.length === 3) {
    col = col.split("").map(c => c + c).join("");
  }
  const num = parseInt(col, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  r = Math.max(0, Math.min(255, Math.floor(r * (1 - amount))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - amount))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - amount))));

  return `rgb(${r}, ${g}, ${b})`;
}