import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Dock from "./components/Dock";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Dock />
      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 min-h-screen flex flex-col items-center">
        <section id="top" className="w-full mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <Intro />
        </section>
        <section id="projects" className="w-full mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <Projects />
        </section>
      </main>
    </div>
  );
} 