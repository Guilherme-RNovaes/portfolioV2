"use client";

import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import userProps from "@/config/user";
import HomeCard from "@/app/_components/HomeCard";
import Experiences from "./Experiences";

export default function Experience() {

  return (
    <HomeCard
      title="Experiencia"
      content={(
        <>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:px-28 md:pb-4 md:gap-x-20 mx-10 md:mx-4 md:max-w-4xl justify-center md:justify-start items-start md:items-center">
            {Experiences}
          </div>
          <div className="flex items-center justify-center">
            <Button asChild className="w-64">
              <Link href={userProps.curriculum} target="_blank" rel="noreferrer noopener">Download CV</Link>
            </Button>
          </div>
        </>
      )}
    />
  )
}

