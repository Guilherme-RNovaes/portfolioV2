import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import About from "@/app/_components/About"

export default function Home() {
  return (
    <div className="bg-slate-950 text-white z-0 scroll-smooth">
      {/* Header */}
      <header className="fixed h-screen border-r border-r-zinc-500/15 ">
        <Header />
      </header>

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start ">
      </section>
      {/* projects */}
      <section id="projects" className="snap-center">
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-center">
      </section>
    </div>
  );
}

