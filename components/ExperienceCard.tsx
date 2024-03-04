import React from "react";
import { motion } from "framer-motion";

type Props = {}

export default function ExperienceCard({ }: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0024/8711/brand.gif?itok=YcbuoRcJ"
      />
    </article>
  )
}
