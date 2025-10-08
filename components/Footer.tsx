import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full text-xs flex flex-row justify-between items-center mt-32 font-light pb-16">
      <p>© OCT 2025</p>
      <Link
        href="#"
        className="flex flex-row gap-1 text-foreground hover:underline items-center"
      >
        BACK TO TOP
        <ArrowUp height={16} width={16} />
      </Link>
    </div>
  );
}
