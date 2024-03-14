"use client"

import React from "react";
import { frontEnd, backEnd, dataBase } from "@/config/skills";
import { Badge } from "@/app/_components/ui/badge";
import { motion } from "framer-motion";

type Skill = {
  icon: React.ElementType;
  skill: string;
};

type Props = {}

export default function Skills({ }: Props) {
  const renderSkills = (skills: Skill[], title: string, delay: number) => (
    <motion.div
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      transition={{ duration: delay }}
      className="flex flex-col flex-wrap mb-8 items-center justify-center"
    >
      <h1 className="text-2xl font-semibold pb-4 px-4">{title}</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {skills.map((props, index) => (
          <div key={index} className="m-2">
            <Badge variant='secondary' className="flex flex-row items-center justify-start w-36 md:w-44 h-14 gap-2 px-4 py-2 rounded-xl">
              <props.icon size={22} />
              <p className="text-sm font-semibold">{props.skill}</p>
            </Badge>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col mt-24 mx-4 max-w-4xl items-center md:items-start justify-center"
    >
      {renderSkills(frontEnd, "Front-end", 0.2)}
      {renderSkills(backEnd, "Back-end", 0.4)}
      {renderSkills(dataBase, "Data-base", 0.6)}
    </motion.div>
  );
}
