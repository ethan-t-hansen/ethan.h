import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import ClientVideo from "./components/ClientVideo";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    Image: (props: ImageProps) => (
      <Image
        {...props}
        alt={props.alt || ""}
      />
    ),
    Video: ({ src }: { src: string }) => (
      <ClientVideo src={src} />
    ),
    ...components,
  };
}

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return getMDXComponents(components);
}
