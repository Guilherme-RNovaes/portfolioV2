"use client";

import React from "react";
import userProps from "@/config/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";
import { Badge } from "@/app/_components/ui/badge";

type Props = {}

export default function Hero({ }: Props) {
  const stacks = userProps.stack.map((skill, index) =>
    <Badge className="mr-2" variant='secondary' key={index}>{skill}</Badge>
  )
  return (
    <div className="flex flex-row items-center justify-center mt-14">
      <Avatar
        className="relative h-24 w-24 mx-auto object-cover mr-5"
      >
        <AvatarImage src={userProps.url} />
        <AvatarFallback>GN</AvatarFallback>
      </Avatar>
      <div className="z-20 flex flex-col items-start justify-start">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{userProps.profession}</h2>
        <h1 className="text-4xl uppercase text-sky-200 lg:text-1xl font-semibold pb-2 tracking-widest">{userProps.name}</h1>
        <div className="flex flex-row items-center">
          {stacks}
        </div>
      </div>
    </div>
  )
}
