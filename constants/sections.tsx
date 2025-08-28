"use client";

import { Section } from "@/components/DynamicSectionHeader";
import Image from "next/image";
import { FaGithub, FaStripeS } from "react-icons/fa";
import { SiLetsencrypt, SiLinear } from "react-icons/si";

export const maSections: Section[] = [
  {
    category: "Project Management",
    title: "Streamlining Workflows with Linear",
    icon: SiLinear,
    content: (
      <div className="text-sm">
        <p className="mb-16 text-muted-foreground text-base">
          To build our Membership Portal, I led development using Linear to
          manage sprints, coordinate tasks across teams, and track
          implementation progress in real time. Linear gave us the visibility
          and structure to move from idea to implementation with speed and
          confidence. As an engineer and team lead, it was a powerful way to
          drive cross-functional collaboration, scope clarity, and shippable
          outcomes.
        </p>
        <div className="grid grid-cols-2 grid-rows-3 gap-16">
          <div className="w-3/4">
            <h3 className="text-base font-medium mb-1">
              Task Management & Documentation
            </h3>
            <p className="text-muted-foreground">
              Our issue board tracked work across all of our devs in a
              traditional kanban board style. We used tags for frontend/backend,
              features, and infrastructure to filter issues by area of
              responsibility. Set up status-based workflows to visualize
              progress Used custom labels for ownership and tech stack
              Implemented PR-linked automation to reduce manual tracking This
              allowed us to move fast while keeping overhead low—every engineer
              knew exactly what to work on next.
            </p>
          </div>
          <Image
            src={"/projects/membership-portal/kanban.png"}
            alt="Linear Board"
            height={640}
            width={1280}
            className="self-center rounded-xl"
          />
          <div className="w-3/4">
            <h3 className="text-base font-medium mb-1">
              Timeline & Project Forecasting
            </h3>
            <p className="text-muted-foreground">
              We used Linear’s timeline view to define clear development
              phases—starting with onboarding and authentication, and
              progressing through Stripe integration, email automation, and the
              alumni network. This gave our team a shared mental model of what
              needed to ship, when, and why. It helped align engineering,
              design, and product goals into a single roadmap. Defined key epics
              and dependencies Prioritized tasks based on launch impact
              Maintained a clear execution timeline
            </p>
          </div>
          <Image
            src={"/projects/membership-portal/timeline.png"}
            alt="Linear Project Timelines"
            height={640}
            width={1280}
            className="self-center rounded-xl"
          />
          <div className="w-3/4">
            <h3 className="text-base font-medium mb-1">
              Integration & Workflows
            </h3>
            <p className="text-muted-foreground">
              We integrated GitHub, Slack, and Notion with Linear to keep
              discussions, documentation, and code reviews in sync. Synced
              comments and context from Slack threads into Linear issues Linked
              Linear tickets to pull requests for accountability Used a
              Documentation Archive board to centralize product decisions and
              architecture references By consolidating these tools, we reduced
              handoff friction and kept the whole team aligned asynchronously.
            </p>
          </div>
          <Image
            src={"/projects/membership-portal/slack.png"}
            alt="Linear Slack Integration"
            height={640}
            width={1280}
            className="self-center rounded-xl opacity-80"
          />
        </div>
      </div>
    ),
  },
  {
    category: "Development Workflow",
    title: "Clean Version Control and CI/CD with GitHub & Vercel",
    icon: FaGithub,
    content: (
      <div className="grid grid-cols-2 gap-16">
        <p className="mb-16 text-muted-foreground text-base w-3/4">
          We used a standard version control strategy to manage releases, test
          in preview, and isolate features. Combined with Linear's Github
          integrations, our developers were able to work in parallel and in
          isolation without me losing visibility on feature progress.
        </p>
        <Image
          src={"/projects/membership-portal/versioning-strategy.png"}
          alt="Versioning Strategy"
          height={640}
          width={1280}
          className="self-center rounded-xl"
        />
      </div>
    ),
  },
  {
    category: "Secure Transactions",
    title: "Seamless Payments with Stripe",
    icon: FaStripeS,
    content: <>Coming Soon</>,
  },
  {
    category: "Authentication",
    title: "Simplifying Auth Management with Better-Auth",
    icon: SiLetsencrypt,
    content: <>Coming Soon</>,
  },
];
