import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import ClientVideo from "./components/ClientVideo";
import { cn } from "./lib/utils";
import {
  DynamicSectionHeader,
  Section,
} from "./components/DynamicSectionHeader";
import ImageMarquee from "./components/ImageMarquee";

interface MDXImageProps extends ImageProps {
  caption?: string;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    Image: (props: MDXImageProps) => (
      <div className="my-12 rounded-lg">
        <Image {...props} alt={props.alt || ""} />{" "}
        {props.caption && (
          <p className="text-xs text-muted-foreground mt-2">
            {" "}
            {props.caption}{" "}
          </p>
        )}
      </div>
    ),

    Video: ({ src, caption }: { src: string; caption?: string }) => (
      <div className="my-12">
        <div className="rounded-xl overflow-hidden">
          <ClientVideo src={src} className="w-full" />
        </div>
        {caption && (
          <p className="text-xs text-muted-foreground mt-2"> {caption} </p>
        )}
      </div>
    ),

    DynamicSectionHeader: ({ sections }: { sections: Section[] }) => (
      <DynamicSectionHeader sections={sections} />
    ),

    ImageMarquee: ({
      folder,
      direction,
    }: {
      folder: string;
      direction?: "left" | "right";
    }) => <ImageMarquee folder={folder} direction={direction} />,
    SectionColumns: ({
      h1,
      h2,
      body1,
      body2,
    }: {
      h1: string;
      h2: string;
      body1: string;
      body2: string;
    }) => (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col text-md font-medium gap-1 md:w-3/4">
          <h3>{h1}</h3>
          <div className="text-sm font-light">{body1}</div>
        </div>
        <div className="flex flex-col text-md font-medium gap-1 md:w-3/4">
          <h3>{h2}</h3>
          <div className="text-sm font-light">{body2}</div>
        </div>
      </div>
    ),

    h1: (props) => (
      <h1
        className="text-2xl font-medium mt-10 mb-6 tracking-tight"
        {...props}
      />
    ),
    h2: (props) => (
      <h2 className="text-xl font-medium tracking-tight mb-4 mt-8" {...props} />
    ),
    h3: ({ children, ...props }) => (
      <h3
        {...props}
        className={cn(
          "text-lg font-medium tracking-tight mb-2 mt-8",
          props.className
        )}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p
        {...props}
        className={cn(
          props.className,
          "whitespace-pre-line mb-4 text-zinc-900 dark:text-zinc-300"
        )}
      >
        {children}
      </p>
    ),
    strong: ({ children, ...props }) => (
      <strong
        {...props}
        // className={cn(
        //   props.className,
        //   "relative font-semibold bg-gradient-to-t from-sky-300 to-zinc-50 bg-clip-text text-transparent",
        //   "shadow-white shadow-lg"
        //   // "before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-300 before:via-purple-400 before:to-pink-400 before:blur-sm before:opacity-10 before:content-[''] before:rounded-sm"
        // )}
        className="font-semibold bg-gradient-to-tr from-sky-600 dark:from-sky-300 dark:to-sky-100 to-sky-400 bg-clip-text text-transparent 
             [text-shadow:0_0_6px_rgba(223,233,235,0.4),0_0_12px_rgba(223,233,235,0.3)] overflow-visible pr-[2px]"
      >
        {children}
      </strong>
    ),
    ul: (props) => (
      <ul
        className="list-disc list-inside my-4 text-zinc-900 dark:text-zinc-300"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="list-decimal list-inside my-4 text-zinc-900 dark:text-zinc-300"
        {...props}
      />
    ),
    li: (props) => (
      <li className="my-1 text-zinc-900 dark:text-zinc-300" {...props} />
    ),
    a: (props) => (
      <a
        {...props}
        target="_blank"
        className={cn(
          "relative inline-block text-blue-400 transition-colors duration-200 ease-in-out hover:text-blue-300",
          "after:absolute after:left-0 after:bottom-[3px] after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-300 after:transition-transform after:duration-200 after:ease-out",
          "hover:after:scale-x-100"
        )}
      />
    ),
    pre: (props) => (
      <pre
        className="bg-muted text-sm rounded-md p-4 overflow-x-auto my-4"
        {...props}
      />
    ),
    code: (props) => (
      <code className="bg-muted text-sm px-1 py-0.5 rounded" {...props} />
    ),
    hr: (props) => (
      <div className="my-10">
        <hr
          {...props}
          className={cn("border-t border-muted", props.className)}
        />
      </div>
    ),
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-muted pl-4 italic text-muted-foreground my-4"
        {...props}
      />
    ),

    ...components,
  };
}

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return getMDXComponents(components);
}
