import { cn } from "@/lib/utils"
import Link from "next/link"
import type React from "react" // Added import for React

interface NavItemProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode
}

export function NavItem({ children, className, ...props }: NavItemProps) {
  return (
    <Link
      className={cn("group relative px-4 py-2 text-xl md:text-sm font-medium text-foreground/90 hover:text-foreground font-mono", className)}
      {...props}
    >
      {children}
      <span className="absolute left-0 top-0 h-2 w-2 opacity-0 group-hover:opacity-100">
        <span className="absolute left-0 top-0 h-[1px] w-2 bg-foreground" />
        <span className="absolute left-0 top-0 h-2 w-[1px] bg-foreground" />
      </span>
      <span className="absolute right-0 top-0 h-2 w-2 opacity-0 group-hover:opacity-100">
        <span className="absolute right-0 top-0 h-[1px] w-2 bg-foreground" />
        <span className="absolute right-0 top-0 h-2 w-[1px] bg-foreground" />
      </span>
      <span className="absolute bottom-0 left-0 h-2 w-2 opacity-0 group-hover:opacity-100">
        <span className="absolute bottom-0 left-0 h-[1px] w-2 bg-foreground" />
        <span className="absolute left-0 bottom-0 h-2 w-[1px] bg-foreground" />
      </span>
      <span className="absolute bottom-0 right-0 h-2 w-2 opacity-0 group-hover:opacity-100">
        <span className="absolute bottom-0 right-0 h-[1px] w-2 bg-foreground" />
        <span className="absolute right-0 bottom-0 h-2 w-[1px] bg-foreground" />
      </span>
    </Link>
  )
}

