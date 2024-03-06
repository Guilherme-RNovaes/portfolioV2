import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Fullstack Developer",
      "Linux Lover",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/D4D03AQGfDFjHvBPEmQ/profile-displayphoto-shrink_200_200/0/1668177160670?e=1715212800&v=beta&t=E_pRRnSOK-4gnwfeN4jTZwQ5ssgtmzAWM6zfuibVWLU"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className="text-4xl uppercase text-[#F7AB0A] lg:text-5xl font-semibold pb-2 tracking-widest">Guilherme Novaes</h1>
        <h2 className="text-3xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h2>
        <div className="pt-5">
          <Link href="#about"><button className="heroButton">About</button></Link>
          <Link href="#experience"><button className="heroButton">Experience</button></Link>
          <Link href="#skills"><button className="heroButton">Skills</button></Link>
          <Link href="#projects"><button className="heroButton">Projects</button></Link>
        </div>
      </div>
    </div>
  )
}
