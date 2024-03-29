"use client";

import React from "react"
import Navbar from "./Navbar";
import { motion } from "framer-motion"
import { socialProps } from "@/config/social";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { LinkIcon, Menu } from "lucide-react";
import Link from "next/link";

type Props = {}

export default function Header({ }: Props) {

  const socialButtons = socialProps.map((social) =>
    <Button variant='ghost' className="w-60 h-30 md:h-25 flex flex-row justify-between">
      <Link href={social.link} target="_blank" rel="noreferrer noopener" className="flex flex-row items-center w-full h-full">
        <social.icon className="w-4 h-4 mr-2" />
        <p>{social.name}</p>
      </Link>
      <LinkIcon className="w-4 h-4 text-blue-400" />
    </Button>
  )
  const router = usePathname();

  // Function to check if the route is active
  const isActiveRoute = (route: string) => {
    return router === route;
  };
  return (
    <header className="bg-slate-950 h-16 md:max-w-64 xl:max-w-70 fixed w-full md:h-full top-0 md:px-4 flex justify-center mx-auto z-20 md:items-start border-b md:border-r md:border-r-zinc-400/20 border-b-zinc-400/20">
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
        className="hidden md:flex flex-col items-center md:w-full"
      >
        <div className="mb-5">
          <Navbar isActiveRoute={isActiveRoute} />
        </div>
        <div>
          <p className="pl-4 text-zinc-400 text-sm mb-4">Redes sociais</p>
          {socialButtons}
        </div>
      </motion.div>
      <div className="flex md:hidden items-center justify-end w-full mr-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline"><Menu size={20} /></Button>
          </SheetTrigger>
          <SheetContent side='top' className="flex flex-col items-center border-none">
            <div className="mb-5">
              <Navbar isActiveRoute={isActiveRoute} />
            </div>
            <div>
              <p className="pl-4 text-zinc-400 text-sm mb-4">Redes sociais</p>
              {socialButtons}
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header >
  )
}
