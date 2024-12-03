import { Github, Linkedin, Mail, LucideIcon } from "lucide-react"
import { IconType } from "react-icons";
import { SiWhatsapp } from "react-icons/si";

export type social = {
  name: string;
  icon: LucideIcon | IconType;
  link: string;
}

export const socialProps: social[] = [
  {
    name: 'Github',
    icon: Github,
    link: 'https://github.com/Guilherme-RNovaes'
  },
  {
    name: 'Linkedin',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/guilherme-r-novaes/'
  },
  {
    name: 'Email',
    icon: Mail,
    link: 'mailto:guilherme00rogerio@gmail.com'
  },
  /*
    {
      name: 'Whatsapp',
      icon: SiWhatsapp,
      link: 'https://api.whatsapp.com/send?phone=5516988448896&text=Ol%C3%A1,%20Guilherme!'
    }
  */
]
