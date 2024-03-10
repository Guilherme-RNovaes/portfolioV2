import Header from "@/app/_components/Header";
import Hero from "@/app/(home)/_components/Hero";
import About from "@/app/_components/About"

export default function Home() {
  return (
    <div className="bg-slate-950 text-white z-0 scroll-smooth grid-flow-col grid-cols-2">
      {/* Header */}
      <header className="flex-1 fixed h-screen border-r border-r-zinc-500/15 ">
        <Header />
      </header>

      {/* Hero */}
      <section className="container w-full max-w-4xl flex flex-col items-center justify-center">
        <Hero />
        <About />
      </section>
    </div>
  );
}

