import { Button } from "@/app/_components/ui/button";
import { projectProps } from "@/config/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  direction: string;
  name: string;
  img: string;
  description: string;
  link: string;
}

const ProjectCard = ({ direction, name, img, description, link }: Props) => {
  const isRightDirection = direction === 'right'
  return (
    <div className="px-8 flex flex-col items-center justify-center">
      <h1 className="pb-4 font-semibold text-xl">{name}</h1>
      <div className={`flex flex-row${isRightDirection ? '-reverse' : ''} items-center justify-center`}>
        <Image src={img} width={280} height={280} alt="project image" className="object-cover"></Image>
        <div className="flex flex-col items-center justify-between">
          <p className="text-sm text-zinc-400">{description}</p>
          <Button asChild variant='outline'>
            <Link href={link}>Visit Page</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
