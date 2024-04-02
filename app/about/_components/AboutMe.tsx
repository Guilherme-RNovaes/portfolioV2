"use client"

import React from "react"
import { motion } from "framer-motion"
import userProps from "@/config/user"
import Image from "next/image"
import archImage from "@/public/img/dev_enviroment.png"
import archImage2 from "@/public/img/arch_rofi.png"
import aboutMe from "@/public/img/about_me.jpeg"
import PersonalInfo from "./PersonalInfo"
import SocialButtons from "@/app/_components/SocialButtons"

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
  return (
    <div
      className="flex flex-col mt-16 md:px-6 mx-4 max-w-4xl items-center justify-center md:w-full"
    >
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="m-8 md:w-full"
      >
        <h1 className="text-3xl font-semibold mb-2 tracking-widest">Sobre mim</h1>
        <p className="text-zinc-400 mb-6 text-justify md:text-left">Olá! Aqui você pode descobrir mais sobre mim, meus interesses, ferramentas que utilizo para desenvolver projetos e como pode entrar em contato comigo para uma conversa descontraída ou até mesmo discutir possíveis oportunidades de colaboração ou entrevista. Estou ansioso para compartilhar um pouco mais sobre quem sou e como posso contribuir para projetos futuros. Vamos nos conectar e explorar novas possibilidades juntos!</p>
        <h2 className="text-blue-400 font-semibold text-xl mb-4">Informações Básicas</h2>
        <PersonalInfo />
      </motion.div>
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="delay"
        viewport={{ once: true }}
        className="m-8 md:w-full"
      >
        <h2 className="text-blue-400 font-semibold text-xl mb-4">Olá, é um prazer te conhecer!</h2>
        <Image src={aboutMe} alt="Imagem da minha área de trabalho" className="rounded-xl mb-8 w-auto h-auto" />
        <p className="text-zinc-400 text-justify md:text-left mb-4">{userProps.moreAbout}</p>
        <p className="text-zinc-400 text-justify md:text-left">{userProps.aboutWork}</p>
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
            <Image src={archImage} alt="Imagem da minha área de trabalho" className="rounded-xl md:max-w-[425px] h-auto" />
            <p className="text-zinc-600 text-xs italic">Um pouco sobre meu ambiente de desenvolvimento</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={archImage2} alt="Imagem da minha área de trabalho" className="rounded-xl md:max-w-[425px] h-auto" />
            <p className="text-zinc-600 text-xs italic">Minha área de trabalho</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="delay"
        viewport={{ once: true }}
        className="m-8 md:w-full"
      >
        <h2 className="text-blue-400 font-semibold text-xl mb-4 flex flex-col">Vamos trabalhar juntos?</h2>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <div className="flex flex-row align-center justify-between w-full">
            <SocialButtons
              variants="outline"
              classes="w-40 h-30 md:h-25 flex flex-row justify-between group"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
