import React from "react";
import userProps from "@/config/user";

type Props = {}

export default function PersonalInfo({ }: Props) {
  const SkillsItems = userProps.stack.join(', ');

  let Tecnico = (<p>(Técnico)</p>)
  let Nativo = (<p>(Nativo)</p>)

  const Languages = userProps.languages.map((props, index) =>
    <div key={index} className="flex flex-row gap-1 items-baseline">
      <p>{props}</p>
      <p className="text-xs text-zinc-500">{props.slice(0) === 'Inglês' ? Tecnico : Nativo}</p>
      {index !== userProps.languages.length - 1 && <span>·</span>}
    </div>
  )


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
            <p className="font-semibold text-white">Idioma:</p>
            <p className="flex gap-1 flex-wrap text-balance">{Languages}</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
