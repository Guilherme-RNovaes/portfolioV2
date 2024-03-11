"use client";

import React from "react";
import { motion } from "framer-motion";
import userProps from "@/config/user";
import { Button } from "@/app/_components/ui/button";
import navigationProps from "@/config/navigation";
import Link from "next/link";

type Props = {}

export default function About({ }: Props) {
  const navigationHref = (
    <Link href={navigationProps[1].href}>
      Saiba mais
    </Link>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col text-center md:text-left mx-4 md:max-w-4xl border border-zinc-400/20 rounded-lg p-8 justify-evenly md:mx-6 xl:mx-auto items-start"
    >
      <div className="flex items-center justify-between w-full pb-4">
        <h3 className="uppercase tracking-widest font-semibold text-xl">
          Sobre mim
        </h3>
        <Button variant='link' className="font-semibold text-sky-300">
          {navigationHref}
        </Button>
      </div>
      <div className="flex flex-col text-center md:text-left md:flex-row max-w-7xl items-start mx-auto">
        <p className="text-sm md:text-base text-slate-400">
          {userProps.about}
        </p>
      </div>
    </motion.div>
  )
}

