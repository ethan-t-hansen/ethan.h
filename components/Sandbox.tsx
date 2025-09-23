import { sandbox_projects } from "@/app/constants";
import Image from "next/image";

export default function Sandbox() {
  return (
    <div className="columns-1 md:columns-3 gap-x-8 space-y-16 justify-items-center">
      {sandbox_projects.map((project) => (
        <div key={project.title}>
          <div className="block hover:rotate-1 group transition-all duration-300 break-inside-avoid">
            <div className="relative overflow-hidden">
              {project.image.includes("mp4") ||
              project.image.includes("webm") ? (
                <div className="flex md:h-auto">
                  <video
                    autoPlay
                    muted
                    loop
                    disableRemotePlayback
                    playsInline
                    className="pointer-events-none touch-none select-none w-full h-auto object-cover group-hover:scale-[102%] transition-all duration-300"
                    controlsList="noplaybackrate nodownload nofullscreen"
                    disablePictureInPicture
                  >
                    <source src={project.image} />
                    <p>Your browser does not support HTML video</p>
                  </video>
                </div>
              ) : (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full group-hover:scale-105 transition-all duration-300"
                  style={{ height: "auto" }}
                />
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-md font-regular mb-1">{project.title}</h3>
              <p className="text-sm font-light text-zinc-400">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
