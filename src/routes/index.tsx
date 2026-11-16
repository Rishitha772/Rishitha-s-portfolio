import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Mindset } from "@/components/portfolio/Mindset";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { CreativeInterests } from "@/components/portfolio/CreativeInterests";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rishitha Khandesh | Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Rishitha Khandesh — Software Developer building reliable, scalable, and meaningful software solutions using Java, backend architectures, and modern web development.",
      },
      {
        property: "og:title",
        content: "Rishitha Khandesh | Software Developer Portfolio",
      },
      {
        property: "og:description",
        content:
          "Software Developer passionate about building reliable, scalable, and meaningful software solutions with Java, Spring Boot, and modern web engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#351E2B] text-[#FAF5EF] overflow-x-hidden selection:bg-[#713B50] selection:text-[#FAF5EF]">
      <Loader />
      <ParticleBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Mindset />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <CreativeInterests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
