import PolaroidGallery from "@/components/PolaroidGallery";
import { cn } from "@/lib/utils";

export default function Page() {

  type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

  const CustomLink = (props: CustomLinkProps) => (
    <a
      {...props}
      target="_blank"
      className={cn(
        "relative inline-block text-blue-400 transition-colors duration-200 ease-in-out hover:text-blue-300",
        "after:absolute after:left-0 after:bottom-[3px] after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-300 after:transition-transform after:duration-300 after:ease-out",
        "hover:after:scale-x-100"
      )}
    />
  );

  return (
    <main className="relative lg:pr-48 lg:justify-start justify-center max-w-[900px] min-h-screen py-32">
      <h3 className="text-3xl font-regular mb-8 font-sans tracking-tight">
        {" "}
        About{" "}
      </h3>
      <div className="font-light space-y-8 text-zinc-900 dark:text-zinc-200">
        <p>
          I&apos;m exploring and building at the intersection of product design
          and fullstack app development. Currently studying Business + Computer
          Science at the University of British Columbia.
        </p>
        <p>
          Previously developed enterprise Frontend applications for{" "}
          <CustomLink href="https://icbc.com/" target="_blank">
            ICBC
          </CustomLink>{" "}
          and established design systems for{" "}
          <CustomLink href="https://www.momentenergy.com/" target="_blank">
            Moment Energy
          </CustomLink>
          . Studied abroad at the National University of Singapore{" "}
          <CustomLink href="https://nus.edu.sg/" target="_blank">
            (NUS)
          </CustomLink>{" "}
          in 2024.
        </p>

        <p> Here&apos;s a few of my adventures from my undergrad! </p>
        <PolaroidGallery />
      </div>
    </main>
  );
}
