export enum LinkType {
  FIGMA = "Figma",
  GITHUB = "GitHub",
  WEBSITE = "Website",
  APPLE = "Apple",
}

export interface ExternalLink {
  url: string;
  linkType?: LinkType;
  icon?: React.JSX.Element;
  cta: string;
}

export interface Experience {
  id: number;
  company: string;
  title: string;
  type: string;
  date: string;
  points: string[];
}

export const club_experience: Experience[] = [
  {
    id: 1,
    company: "BizTech",
    title: "Senior Developer",
    type: "University Club",
    date: "May 2025 - Current",
    points: ["Sample"],
  },
  {
    id: 2,
    company: "UBC Marketing Association",
    title: "VP Technology & Development",
    type: "University Club",
    date: "May 2024 - Current",
    points: ["Sample"],
  },
  {
    id: 3,
    company: "Sauder JDC West",
    title: "VP Marketing & Design",
    type: "University Club",
    date: "May 2024 - Current",
    points: ["Sample"],
  },
  {
    id: 4,
    company: "NSCC",
    title: "VP Marketing & Design",
    type: "University Club",
    date: "May 2023 - Dec 2023",
    points: ["Sample"],
  },
];

export const work_experience: Experience[] = [
  {
    id: 1,
    company: "ICBC",
    title: "Design Engineer Intern",
    type: "Internship",
    date: "Jan 2025 - Aug 2025",
    points: ["Sample"],
  },
  {
    id: 2,
    company: "Moment Energy",
    title: "UI / UX Engineer Intern",
    type: "Internship",
    date: "Sept 2024 - Dec 2024",
    points: ["Sample"],
  },
  {
    id: 3,
    company: "Crown Agencies Secretariat (Government)",
    title: "UX & Digital Strategy Intern",
    type: "Internship",
    date: "Sept 2023 - Dec 2023",
    points: ["Sample"],
  },
  {
    id: 4,
    company: "Ibbaka",
    title: "Data Analytics Intern",
    type: "Internship",
    date: "May 2022 - Aug 2022",
    points: ["Sample"],
  },
];

export const sandbox_projects = [
  {
    id: "8",
    title: "Interactive Cloud Avatar Animation",
    description:
      "Timelines, state machines, and mouse interaction with rive runtime (2kb file size)",
    image: "/projects/video/rive-cloud-demo.webm",
  },
  {
    id: "2",
    title: "Rive Subscribe Animation",
    description:
      "Recreating YouTube's Lottie web animation in Rive. An uncompressed Lottie file is JSON formatted, which is versatile but bloated compared to Rive’s optimized binary files, leading to a ~1500% decrease in file size (240kb -> 16kb)",
    image: "/projects/video/subscribe-animation.webm",
  },
  {
    id: "3",
    title: "MIS Night",
    description:
      "Branding for BizTech's kick-off networking event, MIS Night, inviting 80+ attendees and delegates for a night of good eats and casual conversation.",
    image: "/projects/mis-night.png",
  },
  {
    id: "1",
    title: "BluePrint 3D Logo animation",
    description:
      "Spinning 3D animation for BluePrint's promotional material. Used in event advertisement and as a static logo asset.",
    image: "/projects/video/blueprint-logo.webm",
  },
  {
    id: "4",
    title: "Tri-Mentorship",
    description:
      "Branding & visual asset design for BizTech's legacy tri-mentorship program.",
    image: "/projects/tri-mentorship.png",
  },
  {
    id: "5",
    title: "Dataverse",
    description:
      "Branding & visual asset design for BizTech's premier data conference.",
    image: "/projects/dataverse.png",
  },
  {
    id: "9",
    title: "Fluted Glass Feathering with Rive",
    description:
      "Design exploration for Rive's feathering capabilities (13kb file size)",
    image: "/projects/video/rive-feathering-glass-demo.webm",
  },
  {
    id: "6",
    title: "NSCC",
    description:
      "Branding & social media management for UBC's largest consulting focused case competition and conference.",
    image: "/projects/nscc.png",
  },
  {
    id: "7",
    title: "LPL Merch Front",
    description:
      "Design exploration for league of legends e-sports digital storefront",
    image: "/projects/lpl.png",
  },
];
