import { Home, BookUser, FolderKanban, Laptop, LucideIcon, } from "lucide-react";

export type navigation = {
  name: string;
  icon: LucideIcon;
  href: string;
  variant: string
}

const navigationProps: navigation[] = [
  {
    name: 'Início',
    icon: Home,
    href: '/',
    variant: 'secondary',
  },
  {
    name: 'Sobre',
    icon: BookUser,
    href: '/about',
    variant: 'ghost',
  },
  {
    name: 'Projetos',
    icon: FolderKanban,
    href: '/projects',
    variant: 'ghost',
  },
  {
    name: 'Tecnologias',
    icon: Laptop,
    href: '/technologies',
    variant: 'ghost',
  },
]
export default navigationProps;
