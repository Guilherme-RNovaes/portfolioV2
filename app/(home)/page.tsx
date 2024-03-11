import Hero from "@/app/(home)/_components/Hero";
import About from "@/app/(home)/_components/About"

export default function Home() {
  return (
    <div className="md:ml-64 xl:ml-68 flex flex-col items-center justify-center z-0 scroll-smooth">
      <Hero />
      <About />
    </div>
  );
}

