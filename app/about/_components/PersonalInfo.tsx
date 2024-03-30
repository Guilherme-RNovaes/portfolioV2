import React from "react";
import userProps from "@/config/user";

type Props = {}

export default function PersonalInfo({ }: Props) {
  const SkillsItems = userProps.stack.join(', ')
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <ul className="flex flex-col gap-2 list-disc text-gray-400 pl-6">
        <li>
          <div className="flex gap-2">
            <p className="font-semibold text-white">Nome:</p>
            <p>{userProps.name}</p>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
            <p className="font-semibold text-white">Idade:</p>
            <p>{userProps.age}</p>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
            <p className="font-semibold text-white">Profissão:</p>
            <p>{userProps.profession}</p>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
            <p className="font-semibold text-white">Staks:</p>
            <p>{SkillsItems}.</p>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
            <p className="font-semibold text-white">Idiomas:</p>
            <p>{userProps.languages}</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
