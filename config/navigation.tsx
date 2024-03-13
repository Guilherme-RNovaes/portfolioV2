import { Home, BookUser, FolderKanban, Laptop, } from "lucide-react";

const navigationProps = [
  {
    name: 'Início',
    icon: <Home className="w-4 h-4 mr-2" />,
    href: '/',
    variant: 'secondary',
  },
  {
    name: 'Sobre',
    icon: <BookUser className="w-4 h-4 mr-2" />,
    href: '/about',
    variant: 'ghost',
  },
  {
    name: 'Projetos',
    icon: <FolderKanban className="w-4 h-4 mr-2" />,
    href: '/projects',
    variant: 'ghost',
  },
  {
    name: 'Tecnologias',
    icon: <Laptop className="w-4 h-4 mr-2" />,
    href: '/technologies',
    variant: 'ghost',
  },
]
export default navigationProps;
