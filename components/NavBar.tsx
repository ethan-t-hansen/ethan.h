import Link from "next/link";
import { NavItem } from "./NavItem";

export function NavBar() {
  return (
    <header className="left-0 right-0 top-0">
      <nav className="flex h-16 items-center justify-between">
        <Link href="/">
          <div className="text-lg font-regular">ethan.h</div>
        </Link>
        <div className="flex items-center gap-2">
          <NavItem href="/about">ABOUT</NavItem>
          <NavItem href="/experience">EXPERIENCE</NavItem>
          <NavItem href="/contact">GITHUB</NavItem>
        </div>
      </nav>
    </header>
  );
}
