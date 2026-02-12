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
    id: "jdc-west",
    title: "Sauder JDC West",
    description: "Brand & social media design for Sauder's Jeux du Commerce West team.",
    image: "/projects/sandbox/jdc-west/varsity-patch.jpg",
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
      "Branding & marketing strategy for western Canada's largest strategy consulting case competition and conference.",
    image: "/projects/sandbox/nscc/merch-logo.jpg",
  },
];

export const sandbox_projects: SandboxProject[] = baseSandboxProjects.map(
  (project) => ({
    ...project,
    galleryFolder: `/projects/sandbox/${project.id}`,
  }),
);
