import React from "react"
import { Github, Linkedin, Mail, LinkIcon } from "lucide-react"
import { Button } from "@/app/_components/ui/button"
import Link from "next/link"

const social = [
  {
    name: 'Github',
    icon: <Github className="w-4 h-4 mr-2" />,
    link: 'https://github.com/Guilherme-RNovaes'
  },
  {
    name: 'Linkedin',
    icon: <Linkedin className="w-4 h-4 mr-2" />,
    link: 'https://www.linkedin.com/in/guilherme-r-novaes/'
  },
  {
    name: 'Email',
    icon: <Mail className="w-4 h-4 mr-2" />,
    link: 'mailto:guilherme00rogerio@gmail.com'
  }
]

export const socialButtons = social.map((social) =>
  <Button variant='ghost' className="w-60 h-30 md:h-25 flex flex-row justify-between">
    <Link href={social.link} target="_blank" rel="noreferrer noopener" className="flex flex-row items-center w-full">
      {social.icon}
      <p>{social.name}</p>
    </Link>
    <LinkIcon className="w-4 h-4 text-blue-400" />
  </Button>
)
