"use client";

import { projectProps } from "@/config/projects";
import React from "react";
import ProjectCard from "../_components/ProjectCard";
import { motion } from "framer-motion";

type Props = {}

export default function About() {
  const myProjects = projectProps.map((props) => (
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
      </div>
      {myProjects}
    </motion.div>
  )
}
