"use client";

import { projects } from "@/app/constants";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Project() {
  const params = useParams();
  const project = projects.find((project) => project.id === params.id);

  return (
    <main className="relative lg:justify-start justify-center min-h-screen pt-40 w-full mb-32">
      <div className="flex flex-col gap-4 md:gap-8 w-full mb-24">
        <div className="uppercase tracking-tighter text-md md:text-xl font-regular">
          {project?.title}
          <div className="tracking-normal text-xs md:text-s font-regular text-gray-400">
            Role: {project?.role}
          </div>
        </div>
        {project?.image.includes("mp4") || project?.image.includes("webm") ? (
          <div className="flex h-48 md:h-[28rem] w-full">
            <video
              autoPlay
              muted
              loop
              disableRemotePlayback
              playsInline
              className="pointer-events-none touch-none select-none w-full h-auto object-cover group-hover:scale-105 transition-all duration-500"
              controlsList="noplaybackrate nodownload nofullscreen"
              disablePictureInPicture
            >
              <source src={project?.image} />
              <p>Your browser does not support HTML video</p>
            </video>
          </div>
        ) : (
          <div className="flex h-48 md:h-[28rem] w-full">
            <Image
              src={project?.image || "/placeholder.svg"}
              alt={"Preview Image"}
              width={500}
              height={500}
              className="group-hover:scale-105 w-full h-full object-cover transition-all duration-500"
            />
          </div>
        )}
        <div className="tracking-tight text-md md:text-xl font-regular">
          {project?.description}
        </div>
      </div>
      {project?.content && project.content()}

      <Footer/>
    </main>
  );
}
