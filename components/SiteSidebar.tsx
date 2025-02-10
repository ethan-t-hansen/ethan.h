"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

const navigation = [
  { name: "projects", href: "/" },
  { name: "about", href: "/about" },
  { name: "github", href: "https://github.com/ethan-t-hansen" },
];

export function SiteSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="pl-8 pt-8 bg-none border-none z-10">
      <SidebarHeader className="mb-4 p-0">
        <Link href="/" className="flex items-center ">
          <span className="text-xl font-medium">ethan.h</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm transition-colors 
                ${pathname === item.href ? "" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
