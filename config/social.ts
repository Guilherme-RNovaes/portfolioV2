import { Github, Linkedin, Mail, LinkIcon, LucideIcon } from "lucide-react"

export type social = {
  name: string;
  icon: LucideIcon;
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
  }
]
