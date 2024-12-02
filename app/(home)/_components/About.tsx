"use client";

import userProps from "@/config/user";
import navigationProps from "@/config/navigation";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import HomeCard from "@/app/_components/HomeCard";

export default function About() {
  const navigationHref = (
    <Link href={navigationProps[1].href} className="font-semibold text-blue-400 flex flex-row items-center">
      <LinkIcon className="w-4 h-4 mr-1" />
      Saiba mais
    </Link>
  )

  return (
    <HomeCard
      title="Sobre mim"
      seeMore={navigationHref}
      content={(
        <div className="flex flex-col text-justify md:text-left md:flex-row max-w-7xl items-start mx-auto">
          <p className="text-sm md:text-base text-slate-400">
            {userProps.about}
          </p>
        </div>
      )}
    />
  )
}

