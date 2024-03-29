"use client"

import React from "react"
import { motion } from "framer-motion"
import userProps from "@/config/user"
import Image from "next/image"
import archImage from "@/public/img/my_arch_system.png"
import archImage2 from "@/public/img/arch_rofi.png"

type Props = {}

export default function AboutMe({ }: Props) {

  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      }
    },
    delay: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.3
      }
    },
  };

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
      className="flex flex-col mt-16 md:px-6 mx-4 max-w-4xl items-center justify-center md:w-full"
    >
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="m-8 md:w-full"
      >
        <h1 className="text-3xl font-semibold pb-4 tracking-widest">Sobre mim</h1>
        <h2 className="text-blue-400 font-semibold text-xl mb-4">Informações Básicas</h2>
        {personalInfo}
      </motion.div>
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="delay"
        viewport={{ once: true }}
        className="m-8 md:w-full"
      >
        <h2 className="text-blue-400 font-semibold text-xl mb-4">Olá, é um prazer te conhecer!</h2>
        <p className="text-zinc-400 text-justify md:text-left">{userProps.moreAbout}</p>
      </motion.div>
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="delay"
        viewport={{ once: true }}
        className="m-8 md:w-full"
      >
        <h2 className="text-blue-400 font-semibold text-xl mb-4 flex flex-col">
          A propósito, eu utilizo Arch linux
          <span className="text-zinc-400 text-xs">| "I use Arch, btw"</span>
        </h2>
        <p className="text-zinc-400 text-justify md:text-left">{userProps.aboutArch}</p>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <div className="flex flex-col items-center justify-center">
            <Image src={archImage} alt="Imagem da minha área de trabalho" className="rounded-xl md:max-w-[425px]" />
            <p className="text-zinc-600 text-xs">Minha área de trabalho no arch linux</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={archImage2} alt="Imagem da minha área de trabalho" className="rounded-xl md:max-w-[425px]" />
            <p className="text-zinc-600 text-xs">Minha área de trabalho no arch linux</p>
          </div>
        </div>
      </motion.div>
    </motion.div>

  )
}
