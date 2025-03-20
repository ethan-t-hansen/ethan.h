import { BizTag } from '@/components/project-pages/BizTag'
import { Blueprint } from '@/components/project-pages/Blueprint'
import { MembershipPortal } from '@/components/project-pages/MembershipPortal'
import TextScroll from '@/components/TextScroll'

export interface Project {
  id: string,
  title: string,
  role: string,
  description: string,
  tags: string[],
  image: string,
  route: string,
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
    company: "BizTech",
    title: "Design Director",
    type: "University Club",
    date: "May 2024 - Current",
    points: ["Sample"],
  },
  {
    id: 2,
    company: "UBC Marketing Association",
    title: "Software Developer",
    type: "University Club",
    date: "May 2024 - Current",
    points: ["Sample"],
  },
  {
    id: 3,
    company: "NSCC",
    title: "VP Marketing & Design",
    type: "University Club",
    date: "May 2023 - Dec 2023",
    points: ["Sample"],
  },
  {
    id: 4,
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
]

export const projects: Project[] = [
  {
    id: "blueprint",
    title: "Blueprint NFC Companion App",
    role: "Product Designer - 3D & UI/UX",
    description: "Networking is hard. Through NFC (Near Field Communication) and an integrated software platform, we made it easier for students to connect with professionals and each other at our flagship conference using personalized data and innovative technology.",
    tags: ["3D", "Branding", "Mobile", "Interface Design", "Prototyping"],
    image: "/projects/video/blueprint-video.webm",
    route: "/blueprint",
    content: Blueprint,
  },
  {
    id: "bt-web",
    title: "BizTech Web v2",
    role: "Product Designer - UI/UX",
    description: "Description",
    tags: ["Interface Design", "Prototyping"],
    image: "/projects/bt-web.png",
    route: "/bt-web",
    content: TextScroll,
  },
  {
    id: "van-dwelling",
    title: "Vancouver Dwelling",
    role: "Freelance Designer & Web Developer",
    description: "Description",
    tags: ["Web design", "Freelance"],
    image: "/projects/van-dwelling.png",
    route: "/van-dwelling",
    content: TextScroll,
  },

  {
    id: "membership-portal",
    title: "UBCMA Membership Portal",
    role: "Software Developer",
    description: "UBCMA stands as UBC's only marketing focused club. Each year, the club sells membership to students and hosts events through Showpass, which offers limited features to suit the club's needs.  Our team built a centralized web application to replace this process, ultimately decreasing costs, streamlining workflows, and fostering community",
    tags: ["React", "Next.js", "Firebase", "Stripe"],
    image: "/projects/video/ma-mockup.webm",
    route: "/membership-portal",
    content: MembershipPortal,
  },
  {
    id: "biztag",
    title: "BizTag - Nametag Generation Figma Plugin",
    role: "Plugin Developer",
    description: "Designers spend hours manually porting names from a spreadsheet into their designs to create nametags and other custom visual assets. Figma lacked the features to deal with variable data like Adobe, but their plugin API ecosystem left potential for an open source solution to this common problem.",
    tags: ["React", "Figma API", "Scripting"],
    image: "/projects/video/biztag-demo.webm",
    route: "/biztag",
    content: BizTag,
  },
];

export const sandbox_projects = [
  {
    id: "1",
    title: "Rive Subscribe Animation",
    description: "Recreating YouTube's Lottie web animation in Rive. An uncompressed Lottie file is JSON formatted, which is versatile but bloated compared to Rive’s optimized binary files, leading to a ~1500% decrease in file size (240kb -> 16kb)",
    image: "/projects/video/subscribe-animation.webm",
  },
  {
    id: "2",
    title: "MIS Night",
    description: "Branding for BizTech's kick-off networking event, MIS Night, inviting 80+ attendees and delegates for a night of good eats and casual conversation.",
    image: "/projects/mis-night.png",
  },
  {
    id: "3",
    title: "BluePrint 3D Logo animation",
    description: "Spinning 3D animation for BluePrint's promotional material. Used in event advertisement and as a static logo asset.",
    image: "/projects/video/blueprint-logo.webm",
  },
];
