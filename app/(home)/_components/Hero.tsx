"use client";

import React from "react";
import userProps from "@/config/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";
import { Badge } from "@/app/_components/ui/badge";
import { motion } from "framer-motion";

type Props = {}

export default function Hero({ }: Props) {
  const stacks = userProps.stack.map((skill, index) =>
    <Badge className="m-1 md:mr-1 text-xs cursor-pointer" variant='secondary' key={index}>{skill}</Badge>
  )
  return (
    <div className="md:max-w-4xl md:w-full flex flex-row items-center justify-start mt-24 mb-6">
      <motion.div
        initial={{
          x: -40,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.3, }}
      >
        <Avatar
          className="h-20 w-20 md:h-24 md:w-24 mx-3 md:mx-5 object-cover"
        >
          <AvatarImage src={userProps.url} />
          <AvatarFallback>GN</AvatarFallback>
        </Avatar>
      </motion.div>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1, }}
        transition={{ duration: 0.5, }}

        className="flex flex-col items-start justify-start "
      >
        <h2 className="text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[6px] md:tracking-[15px]">{userProps.profession}</h2>
        <h1 className="text-xl uppercase text-sky-200 md:text-4xl font-semibold pb-1 tracking-widest">{userProps.name}</h1>
        <div className="w-full flex flex-row flex-wrap items-center">
          {stacks}
        </div>
      </motion.div>
    </div>
  )
}
