import { Home, BookUser, FolderKanban, Laptop, } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

const navigationProps = [
  {
    name: 'Início',
    icon: <Home className="w-4 h-4 mr-2" />,
    href: '/',
    variant: 'secondary' as Variant,
  },
  {
    name: 'Sobre',
    icon: <BookUser className="w-4 h-4 mr-2" />,
    href: '/about',
    variant: 'ghost' as Variant,
  },
  {
    name: 'Projetos',
    icon: <FolderKanban className="w-4 h-4 mr-2" />,
    href: '/projects',
    variant: 'ghost' as Variant,
  },
  {
    name: 'Tecnologias',
    icon: <Laptop className="w-4 h-4 mr-2" />,
    href: '/technologies',
    variant: 'ghost' as Variant,
  },
]
export default navigationProps;

const firstNavigationItem = navigationProps[0];
const otherNavigationItems = navigationProps.slice(1);

type Variant = 'secondary' | 'ghost';

const getCurrentPath = () => {
  return window.location.pathname;
};
const currentPath = getCurrentPath();

export const navigationHome = (
  < Button variant={currentPath === firstNavigationItem.href ? 'secondary' : 'ghost' as Variant} className="w-60 h-30 flex flex-row justify-between" >
    <Link href={firstNavigationItem.href} className="flex flex-row items-center">
      {firstNavigationItem.icon}
      {firstNavigationItem.name}
    </Link>
  </Button >
);

export const navigationItens = otherNavigationItems.map((props) => {
  return (
    <Button variant={currentPath === props.href ? 'secondary' : 'ghost' as Variant} className="w-60 h-30 flex flex-row justify-between">
      <Link href={props.href} className="flex flex-row items-center">
        {props.icon}
        {props.name}
      </Link>
    </Button>
  )
})
