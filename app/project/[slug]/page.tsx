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
      <main className="relative lg:justify-start justify-center min-h-screen h-screen w-full mt-32 md:px-[16vw]">
        <div className="flex flex-col gap-4 w-full mb-16">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:items-end">
            <div className="tracking-tighter">
              <h1 className="uppercase text-2xl md:text-3xl">
                {metadata?.title}
              </h1>

              <div className="flex flex-col md:flex-row gap-2 text-muted-foreground capitalize tracking-normal mt-1 text-xs md:text-s font-regular">
                <p>Role: {metadata?.role}</p>
                {metadata?.team && <p className="md:block hidden"> | </p>}
                {metadata?.team && (
                  <div>
                    Team:{" "}
                    {metadata?.team?.map((name, idx) => (
                      <p className="inline gap-2" key={idx}>
                        {name}
                        {idx !== metadata?.team?.length - 1 && <>,</>}{" "}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {metadata?.tags.map((tag, index) => (
              <ProjectTag key={index} tagKey={tag} />
            ))}
          </div>

          <MediaPreview
            src={metadata.image}
            className="rounded-lg flex h-64 md:h-[24rem] w-full my-4"
          />

          <div className="tracking-tight text-md md:text-xl font-regular">
            {metadata?.description}
          </div>

          <div className="flex flex-wrap gap-2">
            {metadata?.additionalLinks?.map((item, index) => (
              <ProjectLinkButton item={item} key={index} />
            ))}
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
