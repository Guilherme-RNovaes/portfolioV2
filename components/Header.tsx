import React from "react"
import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className="sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
          scale: 0.8
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{ duration: 0.5, }}
        className="flex flex-col items-center"
      >
        <SocialIcon url="https://github.com/Guilherme-RNovaes" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/guilherme-r-novaes/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://api.whatsapp.com/send?phone=5516988448896&text=Ol%C3%A1,%20Guilherme!" fgColor="gray" bgColor="transparent" />
      </motion.div>
    </header>
  )
}
