"use client"

import React from "react";
import { frontEnd, backEnd, dataBase, devEnviroment } from "@/config/skills";
import { Badge } from "@/app/_components/ui/badge";
import { motion } from "framer-motion";

type Skill = {
  icon: React.ElementType;
  skill: string;
};

type Props = {}

const container = {
  hidden: { opacity: 1, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Skills({ }: Props) {
  const renderSkills = (skills: Skill[], title: string, delay: number) => (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: delay }}
      className="flex flex-col flex-wrap mb-8 items-center justify-center"
    >
      <h1 className="text-2xl font-semibold pb-4 px-4">{title}</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {skills.map((props, index) => (
          <motion.div variants={item} key={index} className="m-2">
            <Badge variant='secondary' className="flex flex-row items-center justify-start w-36 md:w-40 h-14 gap-2 px-4 py-2 rounded-xl">
              <props.icon size={22} />
              <p className="text-sm font-semibold">{props.skill}</p>
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col mt-16 mx-4 max-w-4xl items-center md:items-start justify-center"
    >
      <div className="m-8">
        <h1 className="text-3xl font-semibold pb-2 tracking-widest">Tecnologias</h1>
        <p className="text-zinc-400">Explore as tecnologias que utilizo em meu dia a dia para o desenvolvimento!</p>
      </div>
      {renderSkills(frontEnd, "Front-end", 0.1)}
      {renderSkills(backEnd, "Back-end", 0.2)}
      {renderSkills(dataBase, "Data-base", 0.3)}
      {renderSkills(devEnviroment, "Ambiente Dev", 0.4)}
    </motion.div>
  );
}
