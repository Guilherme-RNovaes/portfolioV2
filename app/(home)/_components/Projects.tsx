"use client"

import React from "react";
import { projectProps } from "@/config/projects";
import ProjectCard from "@/app/_components/ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import navigationProps from "@/config/navigation";
import { Button } from "@/app/_components/ui/button";
import HomeCard from "@/app/_components/HomeCard";

type Props = {}

export default function Projects({ }: Props) {
  const firstProjects = projectProps.slice(0, 4)
  const myProjects = firstProjects.map((props) => (
    <ProjectCard
      key={props.name}
      direction={props.direction}
      name={props.name}
      img={props.img}
      description={props.description}
      stacks={props.stacks}
      link={props.link}
      source={props.source}
    />
  ))

  const navigationHref = (
    <Link href={navigationProps[2].href} className="font-semibold text-blue-400 flex flex-row items-center">
      <LinkIcon className="w-4 h-4 mr-1" />
      Saiba mais
    </Link>
  )

  return (
    <HomeCard
      title="Projetos"
      seeMore={navigationHref}
      content={(
        <div className="text-center md:text-start">
          {myProjects}
        </div>
      )}
    />
  )
}
