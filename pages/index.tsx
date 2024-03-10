import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import About from "@/components/About"
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <div className="bg-zinc-900 text-white z-0 scroll-smooth">
      <Head>
        <title>Guilherme Novaes | Portfolio</title>
      </Head>
      {/* Header */}
      <header className="fixed h-screen min-w-1xl border-r border-r-white ">
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
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start ">
        <Skills />
      </section>
      {/* projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
}
