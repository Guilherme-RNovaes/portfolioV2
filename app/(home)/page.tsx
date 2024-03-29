import Hero from "@/app/(home)/_components/Hero";
import About from "@/app/(home)/_components/About"
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div className="m-4 mb-8 md:ml-64 xl:ml-68 flex flex-col items-center justify-center z-0 scroll-smooth">
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

