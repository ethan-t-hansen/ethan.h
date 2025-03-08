"use client";

import { club_experience, work_experience } from "@/app/constants";

export default function ExperienceSection() {
  return (
    <div>
      <div className="flex flex-row items-center mb-4 gap-4 my-24">
        <p className="text-nowrap text-xs opacity-50">/ EXPERIENCE /</p>
      </div>

      <div className="w-full columns-2">
        <div className="flex flex-col">
          {work_experience.map((experience) => (
            <div key={experience.id} className="w-full py-4 space-y-1">
              <h3 className="text-md font-medium text-foreground">
                {experience.title}
              </h3>
              <p className="text-xs opacity-60">
                {experience.company} • {experience.type}
              </p>
              <p className="text-xs opacity-60">{experience.date}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          {club_experience.map((experience) => (
            <div key={experience.id} className="w-full py-4 space-y-1">
              <h3 className="text-md font-medium text-foreground">
                {experience.title}
              </h3>
              <p className="text-xs opacity-60">
                {experience.company} • {experience.type}
              </p>
              <p className="text-xs opacity-60">{experience.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
