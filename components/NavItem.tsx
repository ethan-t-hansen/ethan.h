import { cn } from "@/lib/utils"
import Link from "next/link"
import type React from "react" // Added import for React

interface NavItemProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode
}

export function NavItem({ children, className, ...props }: NavItemProps) {
  return (
    <Link
      className={cn("group relative px-2 py-1 text-[10px] text-foreground/90 hover:text-foreground flex justify-end w-fit font-sans opacity-60 hover:opacity-100 transition-all duration-300", className)}
      {...props}
      prefetch={true}
    >
      {children}
    </Link>
  )
}

