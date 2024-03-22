"use client"

import React from "react";
import { projectProps } from "@/config/projects";
import ProjectCard from "@/app/_components/ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import navigationProps from "@/config/navigation";
import { Button } from "@/app/_components/ui/button";

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-wrap mx-4 mb-8 md:max-w-4xl border border-zinc-400/20 rounded-lg px-8 pt-8 md:justify-start md:mx-6 xl:mx-auto items-start"
    >
      <div className="flex items-center justify-between w-full pb-4">
        <h3 className="uppercase tracking-widest font-semibold text-xl pb-4">
          Projetos
        </h3>
        <Button variant='link' className="font-semibold">
          {navigationHref}
        </Button>
      </div>
      {myProjects}
    </motion.div>
  )
}
