"use client"

import React from "react";
import { frontEnd, backEnd, dataBase } from "@/config/skills";
import { Badge } from "@/app/_components/ui/badge";
import { motion } from "framer-motion";

type Props = {}

export default function Skills({ }: Props) {
  const front = frontEnd.map((props) => {
    return (
      <div className="m-2">
        <Badge variant='secondary' className="flex flex-row items-center justify-start w-36 md:w-44 h-14 gap-2 px-4 py-2 rounded-xl">
          <props.icon size={22} />
          <p className="text-sm font-semibold">{props.skill}</p>
        </Badge>
      </div>
    )
  })

  const back = backEnd.map((props) => {
    return (
      <div className="m-2">
        <Badge variant='secondary' className="flex flex-row items-center justify-start w-36 md:w-44 h-14 gap-2 px-4 py-2 rounded-xl">
          <props.icon size={22} />
          <p className="text-sm font-semibold">{props.skill}</p>
        </Badge>
      </div>
    )
  })

  const data = dataBase.map((props) => {
    return (
      <div className="m-2">
        <Badge variant='secondary' className="flex flex-row items-center justify-start w-36 md:w-44 h-14 gap-2 px-4 py-2 rounded-xl">
          <props.icon size={22} />
          <p className="text-sm font-semibold">{props.skill}</p>
        </Badge>
      </div>
    )
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col mt-24 mx-4 max-w-4xl items-center md:items-start justify-center"
    >
      <h1 className="text-2xl font-semibold pb-4 px-4">Front-end</h1>
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-row flex-wrap mb-8 items-center justify-center"
      >
        {front}
      </motion.div>
      <h1 className="text-2xl font-semibold pb-4 px-4">Back-end</h1>
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-row flex-wrap mb-8 items-center justify-center"
      >
        {back}
      </motion.div>
      <h1 className="text-2xl font-semibold pb-4 px-4">Data-base</h1>
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-row flex-wrap mb-8 items-center justify-center"
      >
        {data}
      </motion.div>
    </motion.div>
  )
}
