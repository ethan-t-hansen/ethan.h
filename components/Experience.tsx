"use client";

import { club_experience, Experience, work_experience } from "@/app/constants";

const ExperienceComponent = ({ experience }: { experience: Experience }) => {
  return (
    <div key={experience.id} className="w-full py-4 space-y-1">
      <h3 className="text-md font-medium text-foreground">
        {experience.title}
      </h3>
      <p className="text-xs opacity-60">
        {experience.company} • {experience.type}
      </p>
      <p className="text-xs opacity-60">{experience.date}</p>
    </div>
  );
};

export default function ExperienceSection() {
  return (
    <div>
      <div className="flex flex-row items-center mb-4 gap-4">
        <p className="text-nowrap text-xs opacity-50">/ EXPERIENCE /</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col">
          {work_experience.map((experience) => (
            <ExperienceComponent experience={experience} key={experience.id}/>
          ))}
        </div>

        <div className="flex flex-col">
          {club_experience.map((experience) => (
            <ExperienceComponent experience={experience} key={experience.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
