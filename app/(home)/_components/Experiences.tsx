"use client"

import { motion } from "framer-motion";
import { experiencesList } from "@/config/experience";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Image } from "lucide-react";

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.5
    }
  }
};

const Experiences = experiencesList.map((props) => {
  return (
    <motion.div key={props.company} variants={item} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }} className="xl:min-w-[250px] flex flex-row items-center gap-4 mb-4 md:mb-0 py-3 md:p-3">
      <Avatar className="bg-white text-black flex justify-center">
        <AvatarImage src={props.image} alt="Imagem da empresa" />
        <AvatarFallback className="mt-2"><Image /></AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-sm md:text-2sm font-semibold">{props.company}</h1>
        <h2 className="text-xs md:text-sm font-normal text-zinc-400">{props.office}</h2>
        <div className="text-zinc-400 text-xs md:text-sm flex flex-row gap-2">
          <p>{props.startDate.slice(0, 4)}</p>
          <span>-</span>
          <p className="">{props.endDate ? props.endDate.slice(0, 4) : 'Atualmente'}</p>
        </div>
      </div>
    </motion.div>
  )
})

export default Experiences;
