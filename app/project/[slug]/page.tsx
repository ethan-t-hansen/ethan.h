import { ExternalLink } from "@/app/constants";
import Footer from "@/components/Footer";
import ProjectLinkButton from "@/components/ProjectLinkButton";
import { getMDXComponents } from "@/mdx-components";
import { MDXContent } from "mdx/types";
import type { Metadata } from "next/types";
import MediaPreview from "@/components/MediaPreview";
import { notFound } from "next/navigation";
import { ProjectTag } from "@/components/ProjectTag";
import ScrollToTop from "@/components/ScrollToTop";
import { Link } from "lucide-react";

export type PostMetadata = Metadata & {
  title: string;
  description: string;
  tags: string[];
  role: string;
  team: string[];
  date?: string;
  additionalLinks?: ExternalLink[];
  image: string;
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let Post: MDXContent;
  let metadata: PostMetadata;

  try {
    const mod = await import(`@/content/${slug}.mdx`);
    Post = mod.default;
    metadata = mod.metadata;
  } catch (err) {
    console.error(`MDX file for slug "${slug}" not found`, err);
    notFound();
  }

  const components = getMDXComponents();
  const parsedYear = metadata.date
    ? new Date(metadata.date).getFullYear()
    : undefined;
  const projectYear =
    parsedYear && !Number.isNaN(parsedYear) ? String(parsedYear) : null;

  const projectRole = metadata.role;

  return (
    <>
      <ScrollToTop />
      <main className="relative mx-auto min-h-screen w-full justify-center lg:justify-start">
        <div className="flex flex-col gap-1 w-full mb-8">
          <MediaPreview
            src={metadata.image}
            className="flex h-64 md:h-[24rem] w-full my-4"
          />

          <p className="text-2xl font-regular tracking-tight mb-4">
              {metadata.description}
            </p>

          <div className="flex flex-row gap-16 border-b border-border border-dashed pb-10">

          <div className="">
              <p className="text-xs text-muted-foreground">Title</p>
              <p className="text-sm">{metadata.title ?? "—"}</p>
            </div>

          <div className="">
              <p className="text-xs text-muted-foreground">Role</p>
              <p className="text-sm">{projectRole ?? "—"}</p>
            </div>


            <div className="">
              <p className="text-xs text-muted-foreground">Year</p>
              <p className="text-sm">{projectYear ?? "—"}</p>
            </div>
          </div>
        </div>

        <Post components={components} />

        {metadata?.additionalLinks && metadata?.additionalLinks?.length > 0 && (
          <>
            <div className="flex flex-row gap-2 items-center text-sm text-muted-foreground mb-2 mt-12">
              {" "}
              <Link size={12} /> ADDITIONAL LINKS{" "}
            </div>
            <div className="flex flex-wrap gap-2">
              {metadata?.additionalLinks?.map((item, index) => (
                <ProjectLinkButton item={item} key={index} />
              ))}
            </div>
          </>
        )}

        <Footer />
      </main>
    </>
  );
}

export const dynamicParams = false;
