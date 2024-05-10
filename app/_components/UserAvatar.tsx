"use client"

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import userProps from "@/config/user";
import { motion } from "framer-motion";

type Props = {}

export default function UserAvatar({ }: Props) {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="flex flex-row items-center justify-center"
    >
      <Avatar
        className="w-10 mx-3 object-cover"
      >
        <AvatarImage src={userProps.imageUrl} alt="User avatar image" />
        <AvatarFallback>GN</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-xs text-gray-400 tracking-[3px]">{userProps.profession}</p>
        <h1 className="text-sm font-semibold tracking-widest">{userProps.name}</h1>
      </div>
    </motion.div>
  )
}
