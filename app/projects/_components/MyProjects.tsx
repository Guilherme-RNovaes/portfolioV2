"use client";

import { projectProps } from "@/config/projects";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/app/_components/ProjectCard";

type Props = {}

export default function MyProjects() {
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
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col mt-16 mx-4 max-w-4xl items-center justify-center"
    >
      <div className="m-8">
        <h1 className="text-3xl font-semibold pb-2 tracking-widest">Projetos</h1>
        <p className="text-zinc-400 text-justify md:text-start">
          Descubra os projetos que fazem parte do meu portfólio e explore o universo das minhas criações! Nesta seção, apresento uma seleção dos meus trabalhos mais recentes e relevantes, demonstrando minha experiência e habilidades em áreas como desenvolvimento de software, design de interfaces, análise de dados e muito mais. Cada projeto reflete meu compromisso com a excelência, a criatividade e a entrega de soluções impactantes e eficazes para os desafios do mundo digital. Venha conhecer o que posso oferecer e como posso agregar valor aos seus projetos e iniciativas!
        </p>
      </div>
      <div className="mx-8 text-center md:text-start">
        {myProjects}
      </div>
    </motion.div>
  )
}
