"use client";

import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Calendar, Copy } from "lucide-react"; // Import Lucide icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    icon: <Phone className="h-4 w-4" />,
    href: "",
    text: "(604) 440-3277",
    type: "tel",
  },
  {
    icon: <Mail className="h-4 w-4" />,
    href: "mailto:ethan.t.hansen@gmail.com",
    text: "ethan.t.hansen@gmail.com",
    type: "email",
  },
  {
    icon: <Calendar className="h-4 w-4" />, // Calendly Icon (Lucide has a Calendar icon)
    href: "https://calendly.com/ethanth", // Replace with your Calendly link
    text: "Schedule a Meeting",
    type: "link",
  },
  {
    icon: <FaGithub className="h-4 w-4" />,
    href: "https://github.com/ethan-t-hansen", // Replace with your GitHub username
    text: "github.com/ethan-t-hansen",
    type: "link",
  },
  {
    icon: <FaLinkedin className="h-4 w-4" />, // LinkedIn Icon
    href: "https://www.linkedin.com/in/ethanth", // Replace with your LinkedIn profile
    text: "linkedin.com/ethanth", // Customize link text
    type: "link",
  },
];

export default function Page() {
  const { toast } = useToast()


  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Thanks!",
      description: "Email copied to clipboard."
    })

  };

  return (
    <main className="relative pr-8 lg:pr-48 lg:justify-start justify-center max-w-[900px] min-h-screen pt-48">
      <h3 className="text-3xl font-regular mb-8 font-sans tracking-tight">
        {" "}
        Contact{" "}
      </h3>
      <div className="font-light space-y-8">
        <div className="space-y-6">
          <p className="text-md opacity-80">
            Thanks for visiting my site! If you have any questions or would like
            to connect, feel free to reach out at the links below.
          </p>
        </div>
        <div className="space-y-4 text-md">
          {contactLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-3 mb-2">
              {link.icon}
              {link.type === "email" ? (
                <span
                  className="hover:opacity-60 transition-all duration-200 cursor-pointer flex flex-row gap-2 items-center"
                  onClick={() => handleCopyEmail(link.text)}
                >
                  {link.text}
                  <Copy className="h-4 w-4" />
                </span>
              ) : (
                <a
                  href={link.href}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
