import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {}

export default function WorkExperience({ }: Props) {
  return (
    <div
      className="flex flex-col h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="pt-6 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>

    </div>
  )
}
