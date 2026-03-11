import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import About from "@/app/components/About";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100">
      <Nav />
      <main>
        <Hero />
        <div className="border-t border-slate-800" />
        <Projects />
        <div className="border-t border-slate-800" />
        <Skills />
        <div className="border-t border-slate-800" />
        <About />
      </main>
      <Footer />
    </div>
  );
}
