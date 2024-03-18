"use client"

import React from "react";
import { projectProps } from "@/config/projects";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {}

export default function Projects({ }: Props) {
  const myProjects = projectProps.map((props) => props.direction === 'right' ? (
    <div className="px-8 flex flex-col items-center justify-center">
      <h1 className="pb-4 font-semibold text-xl">{props.name}</h1>
      <div className="flex flex-row-reverse items-center justify-center">
        <Image src={props.img} width={280} height={280} alt="project image" className="object-cover"></Image>
        <div className="flex flex-col items-center justify-between">
          <p className="text-sm text-zinc-400">{props.description}</p>
          <Button asChild variant='outline'>
            <Link href={props.link}>Visit Page</Link>
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <div className="px-8 flex flex-col items-center justify-center">
      <h1 className="pb-4 font-semibold text-xl">{props.name}</h1>
      <div className="flex flex-row items-center justify-center">
        <Image src={props.img} width={280} height={280} alt="project image" className="object-cover"></Image>
        <div className="flex flex-col items-center justify-between">
          <p className="text-sm text-zinc-400">{props.description}</p>
          <Button asChild variant='outline'>
            <Link href={props.link}>Visit Page</Link>
          </Button>
        </div>
      </div>
    </div>
  ))
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
