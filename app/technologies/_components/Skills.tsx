import React from "react";
import { frontEnd, backEnd } from "@/config/skills";
import { Badge } from "@/app/_components/ui/badge";

type Props = {}

export default function Skills({ }: Props) {
  const front = frontEnd.map((props) => {
    return (
      <div className="m-4">
        <Badge variant='secondary' className="flex flex-row items-center justify-start gap-2 px-2 py-1 rounded-xl">
          <props.icon size={22} />
          <p className="text-sm font-semibold">{props.stack === 'frontend' ? props.skill : ''}</p>
        </Badge>
      </div>
    )
  })


  const back = backEnd.map((props) => {
    return (
      <div className="m-4">
        <Badge variant='secondary' className="flex flex-row items-center justify-start gap-2 px-2 py-1 rounded-xl">
          <props.icon size={22} />
          <p className="text-sm font-semibold">{props.skill}</p>
        </Badge>
      </div>
    )
  })
  return (
    <div className="flex flex-col">
      <div>
        <h1>Front End</h1>
        {front}
      </div>
      <div>
        <h1>Back End</h1>
        {back}
      </div>
    </div>
  )
}
