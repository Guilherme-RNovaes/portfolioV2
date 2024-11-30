"use client";

import React from "react"
import Navbar from "./Navbar";
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import navigationProps from "@/config/navigation";
import UserAvatar from "./UserAvatar";
import SocialButtons from "./SocialButtons";

type Props = {};

export default function Header({ }: Props) {
  // Tipo para a propriedade 'variant' do botão
  type ButtonVariant = 'secondary' | 'ghost';

  const firstNavigationItem = navigationProps[0];
  const otherNavigationItems = navigationProps.slice(1);

  const router = usePathname();

  // Function to check if the route is active
  const isActiveRoute = (route: string) => {
    return router === route;
  };
  return (
    <header className="app-bg/50 backdrop-blur-xl h-16 md:max-w-64 xl:max-w-70 fixed w-full md:h-full top-0 md:px-4 flex justify-center mx-auto z-20 md:items-start border-b md:border-b-slate-950 md:border-r md:border-r-zinc-400/20 border-b-zinc-400/20">
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
          <SocialButtons
            variants="ghost"
            classes="w-60 h-30 md:h-25 flex flex-row justify-between group"
            iconLink={true}
          />
        </div>
      </motion.div>
      <div className={`flex md:hidden items-center w-full mr-3 ${isActiveRoute('/') ? 'justify-end' : 'justify-between'}`}>
        {isActiveRoute('/') ? ' ' : <UserAvatar />}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline"><Menu size={20} /></Button>
          </SheetTrigger>
          <SheetContent side='top' className="flex flex-col items-center border-none">
            <div className='mt-5 mb-5'>
              <Button
                variant={isActiveRoute(firstNavigationItem.href) ? 'secondary' : 'ghost' as ButtonVariant}
                asChild
                className="w-60 h-30 flex flex-row items-start justify-start"
              >
                <SheetClose asChild className="-my-4">
                  <Link href={firstNavigationItem.href} className='flex items-center justify-start'>
                    <firstNavigationItem.icon className='w-4 h-4 mr-2' />
                    {firstNavigationItem.name}
                  </Link>
                </SheetClose>
              </Button>
            </div>
            <div className="flex items-center justify-start w-60 h-30">
              <p className="pl-4 text-zinc-400 text-sm mb-4">Navegação</p>
            </div>
            {otherNavigationItems.map((props, index) => (
              <Button
                key={index}
                variant={isActiveRoute(props.href) ? 'secondary' : 'ghost' as ButtonVariant}
                asChild
                className="w-60 h-30 flex flex-row items-start justify-start"
              >
                <SheetClose asChild className="-mt-4">
                  <Link href={props.href} className='flex items-center justify-start'>
                    <props.icon className='w-4 h-4 mr-2' />
                    {props.name}
                  </Link>
                </SheetClose>
              </Button>
            ))}
            <div>
              <p className="pl-4 text-zinc-400 text-sm my-4">Redes sociais</p>
              <SocialButtons
                variants="ghost"
                classes="w-60 h-30 md:h-25 flex flex-row justify-between group"
                iconLink={true}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header >
  )
}
