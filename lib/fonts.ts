import {
  Nanum_Pen_Script,
  Rethink_Sans,
  Sometype_Mono,
} from "next/font/google";

export const nanumPenScript = Nanum_Pen_Script({
  variable: "--font-nanum-pen-script",
  weight: ["400"],
  subsets: ["latin"],
});

export const sometypeMono = Sometype_Mono({
  variable: "--font-sometype-mono",
  subsets: ["latin"],
});

export const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});
