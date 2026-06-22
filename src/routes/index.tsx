import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rishitha Khandesh — Software Engineer & Cloud Developer" },
      { name: "description", content: "Portfolio of Rishitha Khandesh — Final-year ECE student building scalable software, cloud-native backends, and AI-driven products." },
      { property: "og:title", content: "Rishitha Khandesh — Software Engineer Portfolio" },
      { property: "og:description", content: "Aspiring Software Engineer, Cloud Engineer, Backend Developer & Full Stack Enthusiast." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Loader />
      <ParticleBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
