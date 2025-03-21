import ComingSoon from '@/components/ComingSoon'
import { BizTag } from '@/components/project-pages/BizTag'
import { Blueprint } from '@/components/project-pages/Blueprint'
import { MembershipPortal } from '@/components/project-pages/MembershipPortal'

export enum LinkType {
  FIGMA = "Figma",
  GITHUB = "GitHub",
  WEBSITE = "Website",
}

export interface ExternalLink {
  url: string,
  linkType: LinkType,
  cta: string,
}

export interface Project {
  id: string,
  title: string,
  role: string,
  description: string,
  tags: string[],
  image: string,
  route: string,
  additionalLinks?: ExternalLink[]
  content: () => React.JSX.Element,
}

export interface Experience {
  id: number
  company: string
  title: string
  type: string
  date: string
  points: string[]
}

export const club_experience: Experience[] = [
  {
    id: 1,
    company: "Sauder JDC West",
    title: "VP Marketing & Design",
    type: "University Club",
    date: "May 2024 - Current",
    points: ["Sample"],
  },
  {
    id: 2,
    company: "BizTech",
    title: "Design Director",
    type: "University Club",
    date: "May 2024 - Current",
    points: ["Sample"],
  },
  {
    id: 3,
    company: "UBC Marketing Association",
    title: "Developer",
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
  {
    id: 5,
    company: "Commerce Undergraduate Society",
    title: "IT Director",
    type: "University Club",
    date: "Sept 2022 - May 2023",
    points: ["Sample"],
  },
]

export const work_experience: Experience[] = [
  {
    id: 1,
    company: "ICBC",
    title: "Design Engineer Intern",
    type: "Internship",
    date: "Jan 2025 - Present",
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
  {
    id: 5,
    company: "MYND Therapeutics",
    title: "Business Analyst",
    type: "Internship",
    date: "Jan 2022 - Feb 2022",
    points: ["Sample"],
  },
]

export const large_projects: Project[] = [
  {
    id: "blueprint",
    title: "Blueprint NFC Companion App",
    role: "Product Designer - 3D & UI/UX",
    description: "Networking is hard. Through NFC (Near Field Communication) and an integrated software platform, we made it easier for students to connect with professionals and each other at our flagship conference using personalized data and innovative technology.",
    tags: ["3D", "Branding", "Mobile", "Interface Design", "Prototyping"],
    image: "/projects/video/blueprint-video.webm",
    route: "blueprint",
    content: Blueprint,
  },
  {
    id: "membership-portal",
    title: "UBCMA Membership Portal",
    role: "Software Developer",
    description: "UBCMA stands as UBC's only marketing focused club. Each year, the club sells membership to students and hosts events through Showpass, which offers limited features to suit the club's needs.  Our team built a centralized web application to replace this process, ultimately decreasing costs, streamlining workflows, and fostering community",
    tags: ["React", "Next.js", "Firebase", "Stripe"],
    image: "/projects/video/ma-mockup.webm",
    route: "membership-portal",
    additionalLinks: [{url: "https://membership.ubcma.ca/login", linkType: LinkType.WEBSITE, cta: "View Webapp"}],
    content: MembershipPortal,
  },
]

export const small_projects: Project[] = [
  {
    id: "news-app",
    title: "Simple News App with LynxJS + GoLang",
    role: "Developer",
    description: "",
    tags: ["Lynx", "GoLang", "News API"],
    image: "/projects/video/news-app-demo.webm",
    route: "news-app",
    additionalLinks: [{url: "https://github.com/ethan-t-hansen/codex-frontend", linkType: LinkType.GITHUB, cta: "Frontend Repo"}, {url: "https://github.com/ethan-t-hansen/codex-frontend", linkType: LinkType.GITHUB, cta: "Backend Repo"}],
    content: ComingSoon,
  },
  {
    id: "flux-app",
    title: "Flux - Personal Wealth Management",
    role: "Developer",
    description: "",
    tags: ["React", "TypeScript", "Next", "Supabase"],
    image: "/projects/video/flux-app-demo.webm",
    route: "flux-app",
    additionalLinks: [{url: "https://github.com/ethan-t-hansen/rust-text-editor", linkType: LinkType.GITHUB, cta: "View on GitHub"}],
    content: ComingSoon,
  },
  {
    id: "iced-text-editor",
    title: "Lightweight Text Editor with Iced GUI",
    role: "Developer",
    description: "",
    tags: ["Rust", "Iced GUI", "Cargo"],
    image: "/projects/video/iced-text-editor.webm",
    route: "iced-text-editor",
    additionalLinks: [{url: "https://github.com/ethan-t-hansen/rust-text-editor", linkType: LinkType.GITHUB, cta: "View on GitHub"}],
    content: ComingSoon,
  },
  {
    id: "biztag",
    title: "BizTag - Nametag Generation Figma Plugin",
    role: "Plugin Developer",
    description: "Designers spend hours manually porting names from a spreadsheet into their designs to create nametags and other custom visual assets. Figma lacked the features to deal with variable data like Adobe, but their plugin API ecosystem left potential for an open source solution to this common problem.",
    tags: ["React", "Figma API", "Scripting"],
    image: "/projects/video/biztag-demo.webm",
    route: "biztag",
    additionalLinks: [{url: "https://www.figma.com/community/plugin/1429338330818806179/biztag-name-tag-generator", linkType: LinkType.FIGMA, cta: "View on Figma"}, {url: "https://github.com/ethan-t-hansen/biztag", linkType: LinkType.GITHUB, cta: "View on GitHub"}],
    content: BizTag,
  },
  {
    id: "bt-web",
    title: "BizTech Web v2 - Event Portal",
    role: "Product Designer - UI/UX",
    description: "",
    tags: ["Interface Design", "Prototyping"],
    image: "/projects/bt-web.png",
    route: "bt-web",
    additionalLinks: [{url: "https://www.figma.com/proto/LKaGHmvsS9iumFbQLDoXl6/Web-App-UI-Design---Redux?page-id=5110%3A329&node-id=5110-949&viewport=384%2C242%2C0.05&t=tlHV9l68hsUM9gku-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=5110%3A949", linkType: LinkType.FIGMA, cta: "View Figma Prototype"}],
    content: ComingSoon,
  },
  {
    id: "van-dwelling",
    title: "Vancouver Dwelling - Presale CMS Website",
    role: "Freelance Designer & Web Developer",
    description: "",
    tags: ["Web design", "Freelance"],
    image: "/projects/van-dwelling.png",
    route: "van-dwelling",
    additionalLinks: [{url: "https://vancouverdwelling.ca/", linkType: LinkType.WEBSITE, cta: "View Website"}],
    content: ComingSoon,
  },
];

export const sandbox_projects = [
  {
    id: "1",
    title: "BluePrint 3D Logo animation",
    description: "Spinning 3D animation for BluePrint's promotional material. Used in event advertisement and as a static logo asset.",
    image: "/projects/video/blueprint-logo.webm",
  },
  {
    id: "2",
    title: "Rive Subscribe Animation",
    description: "Recreating YouTube's Lottie web animation in Rive. An uncompressed Lottie file is JSON formatted, which is versatile but bloated compared to Rive’s optimized binary files, leading to a ~1500% decrease in file size (240kb -> 16kb)",
    image: "/projects/video/subscribe-animation.webm",
  },
  {
    id: "3",
    title: "MIS Night",
    description: "Branding for BizTech's kick-off networking event, MIS Night, inviting 80+ attendees and delegates for a night of good eats and casual conversation.",
    image: "/projects/mis-night.png",
  },
  {
    id: "4",
    title: "Tri-Mentorship",
    description: "Branding & visual asset design for BizTech's legacy tri-mentorship program.",
    image: "/projects/tri-mentorship.png",
  },
  {
    id: "5",
    title: "Dataverse",
    description: "Branding & visual asset design for BizTech's premier data conference.",
    image: "/projects/dataverse.png",
  },
  {
    id: "6",
    title: "NSCC",
    description: "Branding & social media management for UBC's largest consulting focused case competition and conference.",
    image: "/projects/nscc.png",
  },
  {
    id: "7",
    title: "LPL Merch Front",
    description: "Design exploration for league of legends e-sports digital storefront",
    image: "/projects/lpl.png",
  },
  
];
