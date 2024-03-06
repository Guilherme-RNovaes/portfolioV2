import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import About from "@/components/About"
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-black text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
      <Head>
        <title>Guilherme's Portfolio</title>
      </Head>
      {/* Header */}
      <Header />

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

      {/* Contact Me */}
    </div>
  );
}
