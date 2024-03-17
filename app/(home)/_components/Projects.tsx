"use client"

import React from "react";
import { projectProps } from "@/config/projects";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {}

export default function Projects({ }: Props) {
  const myProjects = projectProps.map((props) =>
    <div className="px-8 ">
      <h1>{props.name}</h1>
      <Image src={props.img} width={320} height={320} alt="project image"></Image>
      <p>{props.description}</p>
      <Button asChild variant='outline'>
        <Link href={props.link}>Visit Page</Link>
      </Button>
    </div>
  )
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-wrap mx-4 mb-8 md:max-w-4xl border border-zinc-400/20 rounded-lg p-8 md:justify-start md:mx-6 xl:mx-auto items-center"
    >
      <h3 className="uppercase tracking-widest font-semibold text-xl pb-4">
        Projetos
      </h3>
      {myProjects}
    </motion.div>
  )
}
