import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full text-xs flex flex-row justify-between items-center mt-32 mb-8 font-light">
      <a
        href="#"
        className="flex flex-row gap-1 text-white hover:underline items-center"
      >
        BACK TO TOP
        <ArrowUp height={16} width={16}/>
      </a>
      <p>© MAY 2025</p>
    </div>
  );
}
