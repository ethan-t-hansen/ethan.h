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
    id: 2,
    company: "OnDeck (YCW25)",
    title: "Designer",
    type: "Part-time",
    date: "Jan 2026 - Current",
    points: ["Sample"],
  },
  {
    id: 2,
    company: "ICBC",
    title: "Design Engineer Intern",
    type: "Internship",
    date: "Jan 2025 - Aug 2025",
    points: ["Sample"],
  },
  {
    id: 3,
    company: "Moment Energy",
    title: "UI / UX Engineer Intern",
    type: "Internship",
    date: "Sept 2024 - Dec 2024",
    points: ["Sample"],
  },
  {
    id: 4,
    company: "Crown Agencies Secretariat (Government)",
    title: "UX & Digital Strategy Intern",
    type: "Internship",
    date: "Sept 2023 - Dec 2023",
    points: ["Sample"],
  },
  // {
  //   id: 4,
  //   company: "Ibbaka",
  //   title: "Data Analytics Intern",
  //   type: "Internship",
  //   date: "May 2022 - Aug 2022",
  //   points: ["Sample"],
  // },
];

export type SandboxProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  galleryFolder: string;
  gallery?: string[];
};

const baseSandboxProjects = [
  {
    id: "rive-cloud",
    title: "Interactive Cloud Avatar Animation",
    description:
      "Timelines, state machines, and mouse interaction with rive runtime (2kb file size)",
    image: "/projects/sandbox/rive-cloud/video.webm",
  },
  {
    id: "rive-subscribe",
    title: "Rive Subscribe Animation",
    description:
      "Recreating YouTube's Lottie web animation in Rive (240kb -> 16kb file size reduction).",
    image: "/projects/sandbox/rive-subscribe/video.webm",
  },
  {
    id: "mis-night",
    title: "MIS Night",
    description:
      "Branding for BizTech's kick-off networking event, MIS Night, inviting 100+ attendees and delegates for a night of good eats and casual conversation.",
    image: "/projects/sandbox/mis-night/cover.jpg",
  },
  {
    id: "blueprint",
    title: "BluePrint 3D Logo animation",
    description:
      "Spinning 3D animation for BluePrint's promotional material. Used in event advertisement and as a static logo asset.",
    image: "/projects/sandbox/blueprint/logo-video.webm",
  },
  {
    id: "tri-mentorship",
    title: "Tri-Mentorship",
    description:
      "Branding & visual asset design for BizTech's legacy tri-mentorship program.",
    image: "/projects/sandbox/tri-mentorship/cover.jpg",
  },
  {
    id: "dataverse",
    title: "Dataverse",
    description:
      "Branding & visual asset design for BizTech's premier data conference.",
    image: "/projects/sandbox/dataverse/cover.jpg",
  },
  {
    id: "rive-feather",
    title: "Fluted Glass Feathering with Rive",
    description:
      "Design exploration for Rive's feathering capabilities (13kb file size)",
    image: "/projects/sandbox/rive-feather/video.webm",
  },
  {
    id: "nscc",
    title: "NSCC",
    description:
      "Branding & social media management for UBC's largest consulting focused case competition and conference.",
    image: "/projects/sandbox/nscc/cover.png",
  },
];

export const sandbox_projects: SandboxProject[] = baseSandboxProjects.map(
  (project) => ({
    ...project,
    galleryFolder: `/projects/sandbox/${project.id}`,
  })
);
