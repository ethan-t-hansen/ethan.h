import { CustomLink } from "@/app/about/page";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-start text-[#3b3b3b]">
      <div className="flex flex-col gap-2 text-xl font-medium tracking-tight mb-4 w-full">
        {"Ethan’s creative archive."}
      </div>
      <div className="w-full space-y-4 text-sm tracking-tight">
        <p>
          {
            "I’m a designer with a foundation in software engineering and a passion for human interaction design. I enjoy tackling creative problems and discovering solutions that inspire others."
          }
        </p>
        <p>
          {"Currently leading visual design at "}
          <Link href="https://ondeckai.com/" target="_blank" className="hover:underline hover:text-muted-foreground text-muted-foreground/80">
            {"OnDeck AI (YC S25)."}
          </Link>
        </p>
      </div>
    </div>
  );
}
