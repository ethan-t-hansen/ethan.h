"use client";

import { ArrowUpRight, Copy } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

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
    company: "ICBC",
    title: "Software Developer",
    website: "https://icbc.com/",
    period: "2025",
    colors: "from-sky-400 to-sky-300",
  },
  {
    company: "Moment Energy",
    title: "UI/UX Engineer",
    website: "https://www.momentenergy.com/",
    period: "2024",
    colors: "from-[#a23263] to-[#c25d89]",
  },
  {
    company: "Ministry of Finance",
    title: "UX Strategy",
    website:
      "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/central-government-agencies/crown-agencies-secretariat",
    period: "2023",
    colors: "from-[#013367] to-[#2d6caf]",
  },
  {
    company: "Ibbaka",
    title: "Data Analytics",
    website: "https://www.ibbaka.com/",
    period: "2025",
    colors: "from-yellow-500 to-yellow-400",
  },
];

const extracurriculars = [
  {
    company: "UBCMA",
    title: "Software Lead",
    website: "https://www.ubcma.ca/",
    period: "2025",
    colors: "from-[#ef3050] to-[#ffa7b5]",
  },
  {
    company: "Sauder JDC West",
    title: "VP Marketing",
    website: "https://www.instagram.com/sauder.jdcwest/",
    period: "2025",
    colors: "from-[#ffe9ab] to-[#ffdd81]",
  },
  {
    company: "BizTech",
    title: "Sr. Dev & Designer",
    website: "https://www.ubcbiztech.com/",
    period: "2025",
    colors: "from-[#4CC8BD] to-[#00081c]",
  },
  {
    company: "NSCC",
    title: "VP Marketing",
    website: "https://www.thenscc.com/",
    period: "2023",
    colors: "from-[#013367] to-[#2d6caf]",
  },
];

export default function ContactTeamsSection() {
  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    toast.success("Copied email to your clipboard.");
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
      {/* Contact Section */}
      <div className="">
        <div className="flex items-center mb-2">
          <h2 className="text-sm font-semibold">Contact</h2>
        </div>
        <div className="space-y-1">
          {contactLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              className="flex items-center justify-between group hover:text-muted-foreground"
            >
              <span className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground text-[12px]">
                  {index + 1}
                </span>
                <span>{link.label}</span>
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          ))}
          <div
            className="flex items-center justify-between group hover:text-muted-foreground cursor-pointer"
            onClick={() => handleCopyEmail("ethan.t.hansen@gmail.com")}
          >
            <span className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground text-[12px]">4</span>
              <span>Mail</span>
            </span>
            <Copy className="w-3 h-3 m-0.5" />
          </div>
        </div>
      </div>

      {/* Teams Section */}
      <div className="">
        <div className="flex items-center mb-2">
          <h2 className="text-sm font-semibold">Experience</h2>
        </div>
        <div className="space-y-1">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="flex items-start justify-between gap-2 group text-sm"
            >
              <div className="flex gap-3">
                <div
                  className={`w-2 h-2 mt-1.5 bg-gradient-to-br aspect-square ${exp.colors}`}
                />
                <span>
                  <a
                    href={exp.website}
                    className="hover:text-muted-foreground"
                    target="_blank"
                  >
                    {exp.company}
                  </a>{" "}
                  - {exp.title}
                </span>
              </div>
              <span className="text-muted-foreground">{exp.period}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Teams Section */}
      <div className="">
        <div className="flex items-center mb-2">
          <h2 className="text-sm font-semibold">Extracurriculars</h2>
        </div>
        <div className="space-y-1">
          {extracurriculars.map((exp) => (
            <div
              key={exp.company}
              className="flex items-start justify-between gap-2 group text-sm"
            >
              <div className="flex gap-3">
                <div
                  className={`w-2 h-2 mt-1.5 bg-gradient-to-br aspect-square ${exp.colors}`}
                />
                <span>
                  <a
                    href={exp.website}
                    className="hover:text-muted-foreground"
                    target="_blank"
                  >
                    {exp.company}
                  </a>{" "}
                  - {exp.title}
                </span>
              </div>
              <span className="text-muted-foreground">{exp.period}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
