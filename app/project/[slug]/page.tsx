import { ExternalLink } from "@/app/constants";
import Footer from "@/components/Footer";
import ProjectLinkButton from "@/components/ProjectLinkButton";
import { getMDXComponents } from "@/mdx-components";
import { MDXContent } from "mdx/types";
import type { Metadata } from "next/types";
import MediaPreview from "@/components/MediaPreview";
import { notFound } from "next/navigation";

export type PostMetadata = Metadata & {
  title: string;
  description: string;
  tags: string[];
  role: string;
  additionalLinks?: ExternalLink[];
  image: string;
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
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
    <main className="relative lg:justify-start justify-center min-h-screen w-full mt-32">
      <div className="flex flex-col gap-4 md:gap-8 w-full mb-24">
        <div className="flex flex-row justify-between items-end">
          <div className="uppercase tracking-tighter text-md md:text-xl font-regular">
            {metadata?.title}
            <div className="tracking-normal text-xs md:text-s font-regular text-gray-400">
              Role: {metadata?.role}
            </div>
          </div>

          <div className="flex flex-row gap-2">
            {metadata?.additionalLinks?.map((item, index) => (
              <ProjectLinkButton item={item} key={index} />
            ))}
          </div>
        </div>
        <MediaPreview src={metadata.image} />
        <div className="tracking-tight text-md md:text-xl font-regular">
          {metadata?.description}
        </div>
      </div>
      <Post components={components} />

      <Footer />
    </main>
  );
}

export const dynamicParams = false;
