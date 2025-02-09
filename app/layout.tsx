import type { Metadata } from "next";
import { IBM_Plex_Serif, Onest } from "next/font/google";
import "./globals.css";
import { SiteSidebar } from "@/components/site-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import type React from "react";
import { Background } from "@/components/scenes/background";
import CustomCursor from "@/components/custom-cursor";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "ethan.h",
  description:
    "Creative developer exploring digital experience through 3D, animation, and web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${onest.variable} ${ibmPlexSerif.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          themes={["light", "dark", "sky"]}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <SidebarProvider>
            <Background />

            <SiteSidebar />
            <SidebarTrigger className="dark:text-white text-black visible md:invisible p-4" />
            <div className="relative z-20">{children}</div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
