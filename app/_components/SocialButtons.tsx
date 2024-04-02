import { socialProps } from "@/config/social"
import React from "react"
import { Button } from "./ui/button"
import Link from "next/link"
import { LinkIcon } from "lucide-react"

type Props = {
  variants: string;
  classes: string;
}
export default function SocialButtons({ variants, classes }: Props) {
  return (
    socialProps.map((social) =>
      <Button variant={variants as 'default'} className={classes}>
        <Link href={social.link} target="_blank" rel="noreferrer noopener" className="flex flex-row items-center w-full h-full">
          <social.icon className="w-4 h-4 mr-2 group-hover:text-blue-400" />
          <p>{social.name}</p>
        </Link>
        <LinkIcon className="w-4 h-4 text-blue-400" />
      </Button>
    )
  )
}
