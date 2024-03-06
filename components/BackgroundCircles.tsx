import React from "react";
import { motion } from "framer-motion";

type Props = {}

export default function BackgroundCircles({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center">
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333]/50 rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#F7AB0A]/50 opacity-20 rounded-full h-[500px] w-[500px] mt-52 animate-pulse" />
    </motion.div>
  )
}
