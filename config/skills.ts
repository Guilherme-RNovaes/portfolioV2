import { IconType } from "react-icons";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiLua, SiMariadb, SiMongodb, SiNextdotjs, SiOracle, SiPrisma, SiReactrouter, SiStyledcomponents, SiTailwindcss, SiVite } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

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
    skill: 'Sass',
    icon: FaSass,
    stack: 'frontend',
  },
  {
    skill: 'Tailwind',
    icon: SiTailwindcss,
    stack: 'frontend',
  },
  {
    skill: 'Framer Motion',
    icon: TbBrandFramerMotion,
    stack: 'frontend',
  },
  {
    skill: 'Javascript',
    icon: RiJavascriptFill,
    stack: 'frontend',
  },
  {
    skill: 'Typescript',
    icon: BiLogoTypescript,
    stack: 'frontend',
  },
  {
    skill: 'React',
    icon: FaReact,
    stack: 'frontend',
  },
  {
    skill: 'React Router',
    icon: SiReactrouter,
    stack: 'frontend',
  },
  {
    skill: 'Styled Components',
    icon: SiStyledcomponents,
    stack: 'frontend',
  },
  {
    skill: 'Nextjs',
    icon: SiNextdotjs,
    stack: 'frontend',
  },
  {
    skill: 'Vite',
    icon: SiVite,
    stack: 'frontend',
  },
]

export const backEnd: skill[] = [
  {
    skill: 'Javascript',
    icon: RiJavascriptFill,
    stack: 'backend',
  },
  {
    skill: 'Typescript',
    icon: BiLogoTypescript,
    stack: 'backend',
  },
  {
    skill: 'Lua',
    icon: SiLua,
    stack: 'backend',
  },
  {
    skill: 'NodeJs',
    icon: FaNodeJs,
    stack: 'backend',
  },
  {
    skill: 'Express',
    icon: SiExpress,
    stack: 'backend',
  },
  {
    skill: 'Prisma',
    icon: SiPrisma,
    stack: 'backend',
  },
]

export const dataBase: skill[] = [
  {
    skill: 'MariaDB',
    icon: SiMariadb,
    stack: 'database',
  },
  {
    skill: 'MongoDB',
    icon: SiMongodb,
    stack: 'database',
  },
  {
    skill: 'MySQL',
    icon: GrMysql,
    stack: 'database',
  },
  {
    skill: 'PostgreSQL',
    icon: BiLogoPostgresql,
    stack: 'database',
  },
  {
    skill: 'OracleSQL',
    icon: SiOracle,
    stack: 'database',
  },
]