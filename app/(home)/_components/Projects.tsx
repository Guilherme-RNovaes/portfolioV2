"use client"

import React from "react";
import { projectProps } from "@/config/projects";
import ProjectCard from "@/app/_components/ProjectCard";
import { motion } from "framer-motion";

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
      link={props.link}
      source={props.source}
    />
  ))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-wrap mx-4 mb-8 md:max-w-4xl border border-zinc-400/20 rounded-lg p-8 md:justify-start md:mx-6 xl:mx-auto items-start"
    >
      <h3 className="uppercase tracking-widest font-semibold text-xl pb-4">
        Projetos
      </h3>
      {myProjects}
    </motion.div>
  )
}
