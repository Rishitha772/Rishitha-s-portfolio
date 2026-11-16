import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/rishitha.jpg";
import { Hero3DGraphic, Card3D } from "./Scene3D";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-10 lg:px-12 bg-[#351E2B] overflow-hidden"
    >
      {/* Ambient background burgundy glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none -z-10 opacity-30"
        style={{
          background: "radial-gradient(circle, #713B50 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
      />

      {/* Main Container: Editorial Cream Canvas in the middle (Aureon inspiration) */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl w-full mx-auto rounded-3xl bg-[#F8F3EC] border border-[#624451]/40 shadow-[0_25px_70px_rgba(20,10,15,0.6)] overflow-hidden text-[#351E2B] relative"
      >
        {/* Top Minimal Editorial Header Ribbon */}
        <div className="px-6 md:px-12 py-3.5 bg-[#351E2B] text-[#FAF5EF] flex items-center justify-between border-b border-[#624451]/60 text-[11px] font-mono tracking-widest uppercase">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8D5C4] animate-pulse" />
            <span className="text-[#E8D5C4]">Rishitha Khandesh</span>
            <span className="text-[#624451] hidden sm:inline">•</span>
            <span className="text-[#D5C0C3] hidden sm:inline">Software Developer Portfolio</span>
          </span>
          <span className="text-[#E8D5C4]">EDITION 2026</span>
        </div>

        {/* Inner Cream Canvas Grid */}
        <div className="p-6 sm:p-10 md:p-14 lg:p-16 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
          {/* Subtle architectural background monogram watermark in cream */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.035] font-serif text-[380px] leading-none text-[#351E2B] hidden xl:block">
            RK
          </div>

          {/* Left Column: Editorial Headline, Tag & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 z-10">
            {/* Status / Availability Pill on Cream */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#DDCFBF] bg-[#FFFFFF] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B77983] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#713B50]" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#351E2B] font-medium">
                Available for new opportunities
              </span>
            </div>

            {/* Small Introduction */}
            <div className="space-y-2">
              <p className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#713B50] uppercase font-semibold">
                HELLO, I'M RISHITHA KHANDESH
              </p>

              {/* Main Headline in Deep Burgundy on Cream Canvas */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal tracking-tight text-[#351E2B] leading-[1.06]">
                Building Digital <br className="hidden sm:inline" />
                <span className="italic font-light text-[#713B50]">
                  Experiences
                </span>{" "}
                Through Code.
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#624451] max-w-xl font-normal leading-relaxed">
              I'm a Software Developer passionate about building reliable,
              scalable, and meaningful software solutions. I enjoy transforming
              ideas into practical applications using Java, backend technologies,
              and modern web development.
            </p>

            {/* Action Buttons: Deep Burgundy button on Cream (Just like Aureon's 'DISCOVER COLLECTION ->') */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#351E2B] text-[#FAF5EF] hover:bg-[#713B50] transition-all duration-300 shadow-md hover:shadow-[0_6px_20px_rgba(53,30,43,0.3)] hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-[#E8D5C4]" />
              </a>

              <a
                href="/Rishitha_Khandesh_SDE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#624451]/60 bg-[#FFFFFF] text-[#351E2B] hover:border-[#351E2B] hover:bg-[#FAF5EF] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#713B50]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links on Cream Canvas */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-[#DDCFBF] w-full">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Rishitha772"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full border border-[#DDCFBF] bg-[#FFFFFF] flex items-center justify-center text-[#351E2B] hover:text-[#FAF5EF] hover:border-[#351E2B] hover:bg-[#351E2B] transition-all duration-200 shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/rishitha-khandesh-b766b330a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full border border-[#DDCFBF] bg-[#FFFFFF] flex items-center justify-center text-[#351E2B] hover:text-[#FAF5EF] hover:border-[#351E2B] hover:bg-[#351E2B] transition-all duration-200 shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="mailto:rishithakhandesh@gmail.com"
                  aria-label="Email Contact"
                  className="w-10 h-10 rounded-full border border-[#DDCFBF] bg-[#FFFFFF] flex items-center justify-center text-[#351E2B] hover:text-[#FAF5EF] hover:border-[#351E2B] hover:bg-[#351E2B] transition-all duration-200 shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-[1px] bg-[#DDCFBF] hidden sm:block" />

              <div className="font-mono text-xs text-[#713B50] flex items-center gap-2">
                <span className="font-medium">HYDERABAD, INDIA</span>
                <span>•</span>
                <span className="text-[#351E2B] font-semibold">JAVA & BACKEND ARCHITECTURE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait in Refined Architectural Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Interactive 3D Floating Geometry */}
              <div className="absolute -top-14 -right-10 w-32 h-32 sm:w-40 sm:h-40 z-20 pointer-events-none drop-shadow-2xl hidden sm:block">
                <Hero3DGraphic className="w-full h-full" />
              </div>

              {/* Outer Frame with 3D Perspective Tilt */}
              <Card3D maxTilt={7}>
                <div className="relative p-3.5 rounded-2xl border border-[#DDCFBF] bg-[#FFFFFF] shadow-xl">
                  {/* Corner Accents in Deep Burgundy */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#351E2B]" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#351E2B]" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#351E2B]" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#351E2B]" />

                  {/* Portrait */}
                  <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-[#351E2B]">
                    <img
                      src={profileImg}
                      alt="Rishitha Khandesh"
                      className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[0.98] transition-transform duration-700 hover:scale-105"
                    />

                    {/* Subtle lower gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#351E2B] via-transparent to-transparent opacity-85" />

                    {/* Overlay Metadata Tag */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-[#351E2B]/90 backdrop-blur-md border border-[#624451] text-[#FAF5EF]">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-medium text-[#FAF5EF]">
                            Rishitha Khandesh
                          </p>
                          <p className="font-mono text-[10px] tracking-wider text-[#E8D5C4] uppercase">
                            B.Tech ECE • MRCEW (8.6 CGPA)
                          </p>
                        </div>
                        <span className="font-mono text-xs text-[#FAF5EF] px-2 py-0.5 rounded border border-[#624451] bg-[#432A37]">
                          Java / Cloud
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Lower Frame Note */}
                  <div className="mt-3 pt-2.5 border-t border-[#DDCFBF] flex items-center justify-between text-[11px] font-mono text-[#624451] px-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#713B50]" />
                      <span>3+ Flagship Systems</span>
                    </span>
                    <span className="text-[#351E2B] font-semibold">ENGINEERING EXCELLENCE</span>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>

        {/* Lower Canvas Bar: Pagination & Metadata */}
        <div className="px-6 md:px-12 py-3 bg-[#FAF5EF] border-t border-[#DDCFBF] flex items-center justify-between text-xs font-mono text-[#624451]">
          <span className="font-semibold text-[#351E2B]">01 —— INTRODUCTION</span>
          <span className="hidden sm:inline text-[#713B50]">TIMELESS BY DESIGN • MINIMAL & TECHNICAL</span>
          <span className="font-semibold text-[#351E2B]">06 —— ARCHIVE</span>
        </div>
      </motion.div>
    </section>
  );
}
