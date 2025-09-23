import { Nanum_Pen_Script, Onest, Sometype_Mono } from "next/font/google";

export const nanumPenScript = Nanum_Pen_Script({
  variable: "--font-nanum-pen-script",
  weight: ["400"],
  subsets: ["latin"],
});

export const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const sometypeMono = Sometype_Mono({
  variable: "--font-sometype-mono",
  subsets: ["latin"],
});