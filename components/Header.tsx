import React from "react"
import { motion } from "framer-motion"
import { socialButtons } from "@/config/social"
import { navigationItens } from "@/config/navigation"
import { navigationHome } from "@/config/navigation"

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className="sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
          scale: 1
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{ duration: 0.5, }}
        className="flex flex-col items-start"
      >
        <div className="mt-5 mb-5">
          {navigationHome}
        </div>
        <div className="mb-5">
          <p className="pl-4 text-zinc-400 text-sm mb-4">Navegação</p>
          {navigationItens}
        </div>
        <div>
          <p className="pl-4 text-zinc-400 text-sm mb-4">Redes sociais</p>
          {socialButtons}
        </div>
      </motion.div>
    </header >
  )
}
