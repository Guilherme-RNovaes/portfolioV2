"use client"

import React from "react"
import { motion } from "framer-motion"
import userProps from "@/config/user"

type Props = {}

export default function AboutMe({ }: Props) {
  const personalInfo = (
    <div className="flex flex-col items-start justify-center">
      <ul>
        <li>
          <p>Nome: {userProps.name}</p>
        </li>
        <li>
          <div className="flex gap-2">
            <p>Staks: </p>
            {userProps.stack.map((skill, index) =>
              <p key={index}>{skill},</p>
            )}
          </div>
        </li>
        <li>
          <p>Profissão: {userProps.profession}</p>
        </li>
      </ul>
    </div>
  )
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col mt-16 mx-4 xl:min-w-4xl max-w-4xl items-center justify-center"
    >
      <div className="m-8">
        <h1 className="text-3xl font-semibold pb-4 tracking-widest">Sobre mim</h1>
        <h2 className="text-blue-400 font-semibold text-xl">Informações Básicas</h2>
        {personalInfo}
      </div>
    </motion.div>

  )
}
