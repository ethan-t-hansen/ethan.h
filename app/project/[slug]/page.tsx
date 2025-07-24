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

export type PostMetadata = Metadata & {
  title: string;
  description: string;
  tags: string[];
  role: string;
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

  return (
    <>
      <ScrollToTop />
      <main className="relative lg:justify-start justify-center min-h-screen h-screen w-full mt-32">
        <div className="flex flex-col gap-4 w-full mb-16">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:items-end">
            <div className="uppercase tracking-tighter text-md md:text-xl font-regular">
              {metadata?.title}
              <div className="tracking-normal text-xs md:text-s font-regular text-zinc-400">
                Role: {metadata?.role}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {metadata?.additionalLinks?.map((item, index) => (
                <ProjectLinkButton item={item} key={index} />
              ))}
            </div>
          </div>
          <MediaPreview src={metadata.image} />
          <div className="tracking-tight text-md md:text-xl font-regular">
            {metadata?.description}
          </div>
          <div className="flex flex-wrap gap-1">
            {metadata?.tags.map((tag, index) => (
              <ProjectTag key={index} tagKey={tag} />
            ))}
          </div>
        </div>
        <Post components={components} />

        <Footer />
      </main>
    </>
  );
}

export const dynamicParams = false;
