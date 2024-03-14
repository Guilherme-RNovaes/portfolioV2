"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiencesList } from "@/config/experience";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Image } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

type Props = {}

export default function Experience({ }: Props) {
  const experiences = experiencesList.map((props) => {
    return (
      <div className="flex flex-row gap-4 mb-4 md:mb-0 py-3 md:p-3">
        <Avatar className="bg-white text-black flex justify-center">
          <AvatarImage src={props.image} />
          <AvatarFallback className="mt-2"><Image /></AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-sm md:text-2sm font-semibold">{props.company}</h1>
          <h2 className="text-xs md:text-sm font-normal text-zinc-400">{props.office}</h2>
          <div className="text-zinc-400 text-xs md:text-sm flex flex-row gap-2">
            <p>{props.startDate.slice(0, 4)}</p>
            <p>-</p>
            <p className="">{props.endDate ? props.endDate.slice(0, 4) : 'Atualmente'}</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-wrap mx-4 md:max-w-4xl border border-zinc-400/20 rounded-lg p-8 md:justify-start md:mx-6 xl:mx-auto items-center"
    >
      <div className="pb-4">
        <h3 className="uppercase tracking-widest font-semibold text-xl pb-4">
          Experiencia
        </h3>
        <div className="flex flex-col gap-4 mx-6 md:mx-0 md:flex-row md:flex-wrap md:max-w-4xl justify-center md:justify-start items-start md:items-center">
          {experiences}
        </div>
      </div>
      <Button variant='outline' className="w-64">
        <Link href='#' className="w-full">Ver currículo</Link>
      </Button>
    </motion.div>
  )
}

