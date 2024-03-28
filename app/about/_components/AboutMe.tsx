"use client"

import React from "react"
import { motion } from "framer-motion"
import userProps from "@/config/user"

type Props = {}

export default function AboutMe({ }: Props) {

  const SkillsItems = userProps.stack.join(', ')

  const personalInfo = (
    <div className="flex flex-col items-start justify-center w-full">
      <ul className="flex flex-col gap-2 list-disc text-gray-400 pl-6">
        <li>
          <div className="flex gap-2">
            <p className="font-semibold text-white">Nome:</p>
            <p>{userProps.name}</p>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
            <p className="font-semibold text-white">Idade:</p>
            <p>{userProps.age}</p>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
            <p className="font-semibold text-white">Profissão:</p>
            <p>{userProps.profession}</p>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
            <p className="font-semibold text-white">Staks:</p>
            <p>{SkillsItems}.</p>
          </div>
        </li>
      </ul>
    </div>
  )
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col mt-16 md:px-6 mx-4 max-w-4xl items-center justify-center md:w-full"
    >
      <div className="m-8 md:w-full">
        <h1 className="text-3xl font-semibold pb-4 tracking-widest">Sobre mim</h1>
        <h2 className="text-blue-400 font-semibold text-xl mb-4">Informações Básicas</h2>
        {personalInfo}
      </div>
      <div className="m-8 md:w-full">
        <h2 className="text-blue-400 font-semibold text-xl mb-4">Olá, é um prazer te conhecer!</h2>
        <p className="text-zinc-400">{userProps.moreAbout}</p>
      </div>
    </motion.div>

  )
}
