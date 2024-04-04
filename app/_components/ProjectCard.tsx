"use client"

import { Button } from "@/app/_components/ui/button";
import { Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { IconType } from "react-icons";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

type Props = {
  direction: string;
  name: string;
  img: string;
  description: string;
  link: string;
  source: string;
  stacks: string[];
}

const item = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delayChildren: 1,
      staggerChildren: 0.8
    }
  }
};

const ProjectCard = ({ direction, name, img, description, stacks, link, source }: Props) => {
  const isRightDirection = direction === 'right'
  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="visible"
      className={`flex flex-col ${isRightDirection ? 'md:flex-row-reverse' : 'md:flex-row'} w-full items-center justify-between mb-12 gap-x-6`}
    >
      <Dialog>
        <DialogTrigger className="min-w-[280px] max-w-[280px] md:min-w-[320px] md:max-w-[320px] h-auto hover:scale-105 mb-8 md:mb-0 rounded-xl cursor-zoom-in transition-transform">
          <Image src={img} width={320} height={320} alt="project image" className="rounded-xl" />
        </DialogTrigger>
        <DialogContent className="md:min-w-[1080px]">
          <Image src={img} width={1920} height={1080} alt="project image" className="rounded-lg" />
        </DialogContent>
      </Dialog>
      <div className={`flex flex-col items-center ${isRightDirection ? 'md:items-start' : 'md:items-end md:text-right'}`}>
        <h1 className="pb-4 font-semibold text-xl">{name}</h1>
        <p className="text-sm text-zinc-400 pb-4 max-w-xl">{description}</p>
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {stacks.map((stack, index) => (
            <Badge variant="outline" key={index}>
              <p className="text-zinc-400 font-semibold">{stack}</p>
            </Badge>
          ))}
        </div>
        <div className="flex flex-row gap-4">
          <Button asChild variant='primary'>
            <Link href={link} target="_blank" rel="noreferrer noopener" className="gap-2">
              <Link2 size={18} />
              Visit Page
            </Link>
          </Button>
          <Button asChild variant='outline'>
            <Link href={source} target="_blank" rel="noreferrer noopener" className="gap-2">
              <Github size={18} />
              Source code
            </Link>
          </Button>
        </div>
      </div>
    </motion.div >
  )
}

export default ProjectCard;
