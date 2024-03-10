"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {}

export default function Abour({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="pt-6 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="flex flex-col text-center md:text-left md:flex-row max-w-7xl items-center mx-auto">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://media.licdn.com/dms/image/D4D03AQGfDFjHvBPEmQ/profile-displayphoto-shrink_200_200/0/1668177160670?e=1715212800&v=beta&t=E_pRRnSOK-4gnwfeN4jTZwQ5ssgtmzAWM6zfuibVWLU"
          className="mb-10 md:mb-0 md:mt-0 flex-shrink-0 w-45 h-45 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">Here is a{" "}<span className="underline decoration-[#F7AB0A]/50">little</span>{" "} background</h4>
          <p className="text-sm md:text-base">
            Hello! I'm Guilherme Rogério Novaes, a 23-year-old programming enthusiast, passionate about creating digital solutions and exploring the endless possibilities of the technology world. Over the past three years, I've delved deep into the programming universe, focusing my efforts on the Fullstack area, which allows me to master both front-end and back-end development of web applications. In addition to technical skills, I'm a professional committed to delivering high-quality results. I have a detail-oriented approach to development, always seeking to improve the usability and performance of the applications I build.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
