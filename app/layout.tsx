import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import type React from "react";
import { NavBar } from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Ethan Hansen',
    default: 'Ethan Hansen',
  },
  description:
    "Ethan's Design Engineer Portfolio - showcasing design, engineering, and business projects with a focus on creativity and innovation.",
  keywords: ["Ethan", "Hansen", "Portfolio", "Design", "Engineering", "Business"],
  openGraph: {
    title: "Ethan's Portfolio",
    description:
      "Showcasing design, engineering, and business projects with creativity and innovation.",
    url: "https://www.ethanthansen.com",
    siteName: "Ethan's Portfolio",
    images: [
      {
        url: "https://rvkf0y9jdjpjjuzl.public.blob.vercel-storage.com/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Ethan's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan's Portfolio",
    description:
      "Design, engineering, and business projects by Ethan.",
    images: ["https://rvkf0y9jdjpjjuzl.public.blob.vercel-storage.com/portfolio-preview.png"],
  },
  alternates: {
    canonical: "https://www.ethanthansen.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${onest.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative z-20 mx-6 lg:mx-24">
            <NavBar />
            {children}
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
