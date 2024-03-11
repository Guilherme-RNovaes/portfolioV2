import React from "react";
import { Home, BookUser, FolderKanban, Laptop, } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

const navigationProps = [
  {
    name: 'Início',
    icon: <Home className="w-4 h-4 mr-2" />,
    href: '/'
  },
  {
    name: 'Sobre',
    icon: <BookUser className="w-4 h-4 mr-2" />,
    href: '/about'
  },
  {
    name: 'Projetos',
    icon: <FolderKanban className="w-4 h-4 mr-2" />,
    href: '/projects'
  },
  {
    name: 'Tecnologias',
    icon: <Laptop className="w-4 h-4 mr-2" />,
    href: '/technologies'
  },
]
export default navigationProps;


const firstNavigationItem = navigationProps[0];
const otherNavigationItems = navigationProps.slice(1);

export const navigationHome = (
  < Button variant='ghost' className="w-60 h-30 flex flex-row justify-between" >
    <Link href={firstNavigationItem.href} className="flex flex-row items-center">
      {firstNavigationItem.icon}
      {firstNavigationItem.name}
    </Link>
  </Button >
);

export const navigationItens = otherNavigationItems.map((props) => {
  return (
    <Button variant='ghost' className="w-60 h-30 flex flex-row justify-between">
      <Link href={props.href} className="flex flex-row items-center">
        {props.icon}
        {props.name}
      </Link>
    </Button>
  )
})
