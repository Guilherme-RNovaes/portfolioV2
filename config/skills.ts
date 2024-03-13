import { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

export interface skill {
  skill: string;
  icon: IconType;
  stack: string;
}

export const frontEnd: skill[] = [
  {
    skill: 'Html',
    icon: FaHtml5,
    stack: 'frontend',
  },
  {
    skill: 'Css',
    icon: FaCss3Alt,
    stack: 'frontend',
  },
  {
    skill: 'Javascript',
    icon: RiJavascriptFill,
    stack: 'backend',
  },
]

export const backEnd: skill[] = [
  {
    skill: 'Javascript',
    icon: RiJavascriptFill,
    stack: 'backend',
  },
]
