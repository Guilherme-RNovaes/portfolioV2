"use client"

import React from "react";
import { projectProps } from "@/config/projects";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

type Props = {}

export default function Projects({ }: Props) {
  const myProjects = projectProps.map((props) =>
    <div>
      <h1>{props.name}</h1>
      <Image src={props.img} width={320} height={320} alt="project image"></Image>
      <p>{props.description}</p>
      <Button asChild variant='outline'>
        <Link href={props.link}>Visit Page</Link>
      </Button>
    </div>
  )
  return (
    <div>{myProjects}</div>
  )
}
