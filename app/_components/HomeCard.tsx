"use client"

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ReactNode } from "react";

interface HomeCardProps {
  title: string;
  seeMore?: ReactNode;
  content: ReactNode;
}

const HomeCard = ({ title, seeMore, content }: HomeCardProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col app-bg z-10 text-center md:text-left mx-4 mb-8 md:max-w-4xl border border-zinc-400/20 rounded-lg p-8 justify-evenly md:mx-6 xl:mx-auto items-start"
      >
        <header className={`flex flex-row items-center ${seeMore ? "justify-between" : "justify-start"} w-full mb-8`}>
          <h3 className="uppercase tracking-widest font-semibold text-xl">
            {title}
          </h3>
          <Button variant='link' className="font-semibold">
            {seeMore}
          </Button>
        </header>
        <div className="text-center md:text-start">
          {content}
        </div>
      </motion.div>

    </>
  )
}

export default HomeCard;
