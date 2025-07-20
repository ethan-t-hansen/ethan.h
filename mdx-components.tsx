import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import ClientVideo from "./components/ClientVideo";
import { cn } from "./lib/utils";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    Image: (props: ImageProps) => <Image {...props} alt={props.alt || ""} />,

    Video: ({ src }: { src: string }) => <ClientVideo src={src} />,

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
          <div className="text-xs font-light">
            {body1}
          </div>
        </div>
        <div className="flex flex-col text-md font-medium gap-1 md:w-3/4">
          <h3>{h2}</h3>
          <div className="text-xs font-light">
            {body2}
          </div>
        </div>
      </div>
    ),

    h1: (props) => <h1 className="text-4xl font-bold mt-10 mb-6" {...props} />,
    h2: (props) => (
      <h2 className="text-3xl font-semibold mt-8 mb-4" {...props} />
    ),
    h3: ({ children, ...props }) => (
      <h3
        {...props}
        className={cn(
          "text-lg font-semibold tracking-wide text-muted-foreground uppercase",
          props.className
        )}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p {...props} className={cn(props.className)}>
        {children}
      </p>
    ),
    ul: (props) => <ul className="list-disc list-inside my-4" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside my-4" {...props} />,
    li: (props) => <li className="my-1" {...props} />,
    pre: (props) => (
      <pre
        className="bg-muted text-sm rounded-md p-4 overflow-x-auto my-4"
        {...props}
      />
    ),
    code: (props) => (
      <code className="bg-muted text-sm px-1 py-0.5 rounded" {...props} />
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
