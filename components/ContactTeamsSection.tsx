"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const contactLinks = [
  { label: "GitHub", href: "https://github.com/ethan-t-hansen" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ethanth/" },
  { label: "Twitter", href: "https://twitter.com/ethanthansen" },
];

const experience = [
  // {
  //   company: "AthenaHQ (YC25)",
  //   title: "Design Engineer",
  //   website: "https://www.athenahq.ai/",
  //   period: "2025",
  //   colors: "from-[#4f39f6] to-[#aea7ee]",
  // },
  {
    company: "OnDeck AI (YC S25)",
    website: "https://ondeckai.com/",
    period: "2026 -",
    colors: "bg-[#3b3b3b]",
  },
  {
    company: "ICBC",
    website: "https://icbc.com/",
    period: "2025",
    colors: "bg-[#56ddff]",
  },
  {
    company: "Moment Energy",
    website: "https://www.momentenergy.com/",
    period: "2024",
    colors: "bg-[#c26297]",
  },
];

export default function ContactTeamsSection() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Contact Section */}
        <div>
          <div className="flex items-center mb-2">
            <h2 className="text-sm font-medium">Contact</h2>
          </div>
          <div className="-space-y-0.5">
            {contactLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                className="flex items-center justify-between group hover:text-muted-foreground text-sm"
              >
                <span className="flex flex-row items-start justify-start gap-0.5">
                  <span className="text-muted-foreground text-[8px] w-2 text-center -mt-0.5">
                    {index + 1}
                  </span>
                  <span>{link.label}</span>
                </span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <h2 className="text-sm font-medium">Experience</h2>
          </div>
          <div className="-space-y-0.5">
            {experience.map((exp) => (
              <a
                key={exp.company}
                href={exp.website}
                target="_blank"
                className="flex items-start justify-between gap-2 text-sm group"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-1.5 h-1.5 mt-0.5 aspect-square ${exp.colors} group-hover:opacity-80`}
                  />
                  <span className="group-hover:text-muted-foreground">
                    {exp.company}
                  </span>
                </div>
                <span className="group-hover:text-muted-foreground">{exp.period}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
