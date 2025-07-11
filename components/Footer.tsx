import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full text-xs flex flex-row justify-between items-center mt-32 mb-8 font-light">
      <Link
        href="#"
        className="flex flex-row gap-1 text-white hover:underline items-center"
      >
        BACK TO TOP
        <ArrowUp height={16} width={16}/>
      </Link>
      <p>© JULY 2025</p>
    </div>
  );
}
