"use client"

import { Button } from "@/app/_components/ui/button";
import { projectProps } from "@/config/projects";
import { Github, Link2 } from "lucide-react";
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
    <div className={`flex flex-col ${isRightDirection ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center mb-8`}>
      <Image src={img} width={280} height={280} alt="project image" className="object-cover px-4 pb-8"></Image>
      <div className={`flex flex-col items-center ${isRightDirection ? 'md:items-start' : 'md:items-end md:text-right'}`}>
        <h1 className="pb-4 font-semibold text-xl">{name}</h1>
        <p className="text-sm text-zinc-400 pb-8">{description}</p>
        <div className="flex flex-row gap-4">
          <Button asChild variant='outline'>
            <Link href={link} className="gap-2">
              <Link2 size={18} />
              Visit Page
            </Link>
          </Button>
          <Button asChild variant='outline'>
            <Link href={link} className="gap-2">
              <Github size={18} />
              Source code
            </Link>
          </Button>
        </div>
      </div>
    </div >
  )
}

export default ProjectCard;
