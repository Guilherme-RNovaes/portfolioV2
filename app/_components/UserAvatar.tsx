import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import userProps from "@/config/user";

type Props = {}

export default function UserAvatar({ }: Props) {
  return (
    <div className="flex flex-row items-center justify-center">
      <Avatar
        className="w-10 mx-3 object-cover"
      >
        <AvatarImage src={userProps.url} />
        <AvatarFallback>GN</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-xs text-gray-400 tracking-[3px]">{userProps.profession}</p>
        <h1 className="text-sm font-semibold tracking-widest">{userProps.name}</h1>
      </div>
    </div>
  )
}
