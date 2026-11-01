import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Code2,
  Award,
  Layers,
  Cpu,
  Zap,
  Terminal,
  ArrowRight,
  Compass,
  FileText,
} from "lucide-react";

const stats = [
  {
    label: "Final Year",
    value: "ECE",
    subtext: "MRCEW Hyderabad",
    icon: GraduationCap,
  },
  {
    label: "Projects Built",
    value: "6+",
    subtext: "Full-Stack & AI Systems",
    icon: Code2,
  },
  {
    label: "Certifications",
    value: "5+",
    subtext: "NPTEL Elite & 1M1B Top 30",
    icon: Award,
  },
  {
    label: "Focus Areas",
    value: "4",
    subtext: "Backend, Cloud, AI & PM",
    icon: Layers,
  },
];

const corePillars = [
  {
    title: "Backend & System Design",
    desc: "Architecting resilient REST APIs, caching mechanisms, and data schemas with Java, Spring Boot, MySQL, and JPA.",
    icon: Cpu,
    tag: "Java / Spring Boot",
  },
  {
    title: "Applied AI & Innovation",
    desc: "Building intelligent applications like Lumora AI using Google Gemini API, RAG workflows, and document parsers.",
    icon: Sparkles,
    tag: "GenAI & LLMs",
  },
  {
    title: "Product & Strategy Mindset",
    desc: "Bridging engineering precision with user research, MVP scoping, and product roadmap execution (HireSphere).",
    icon: Compass,
    tag: "Product Strategy",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Radiant ambient yellow/amber lighting - removes dark black void */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(250, 204, 21, 0.14) 0%, rgba(245, 158, 11, 0.07) 45%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute top-20 right-10 w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(234, 179, 8, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-16 left-10 w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(250, 204, 21, 0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase text-yellow-300 bg-yellow-400/10 border border-yellow-400/35 shadow-[0_0_20px_rgba(250,204,21,0.25)] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>About Me</span>
          </div>
          <h2 className="font-[Orbitron] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Engineer.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 drop-shadow-[0_0_35px_rgba(250,204,21,0.55)]">
              Builder.
            </span>{" "}
            Learner.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
            Passionate about architecting robust software, mastering new technologies, and crafting intuitive, high-impact digital experiences.
          </p>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Golden Holographic Engineering HUD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient golden aura behind the card */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/30 via-yellow-400/25 to-yellow-600/20 blur-2xl opacity-75 animate-pulse" />

            {/* The main HUD showcase card */}
            <div className="relative rounded-3xl p-6 md:p-8 overflow-hidden border border-yellow-400/40 bg-gradient-to-b from-amber-950/40 via-stone-900/70 to-amber-950/50 backdrop-blur-2xl shadow-[0_0_50px_rgba(250,204,21,0.2)]">
              {/* Golden Cyber Grid Background */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(250, 204, 21, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 204, 21, 0.25) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* Glowing Corner Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-yellow-400" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-yellow-400" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-yellow-400" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-yellow-400" />

              {/* HUD Header */}
              <div className="relative flex items-center justify-between pb-6 border-b border-yellow-500/25">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-200" />
                  <span className="ml-2 font-mono text-xs text-yellow-300 font-bold tracking-wider">
                    RK // CORE_NODE
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-yellow-300 bg-yellow-400/15 border border-yellow-400/40 shadow-[0_0_12px_rgba(250,204,21,0.3)]">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Center Holographic Display */}
              <div className="relative py-8 flex flex-col items-center justify-center">
                {/* Concentric Rotating Golden Rings */}
                <div className="relative w-60 h-60 flex items-center justify-center">
                  {/* Outer Dashed Spinning Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-yellow-400/40 animate-spin-slow" />
                  {/* Counter-Rotating Ring */}
                  <div className="absolute inset-5 rounded-full border border-amber-400/35 animate-spin-reverse-slow" />
                  {/* Radiant Golden Glow Core */}
                  <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-yellow-500/30 via-amber-400/30 to-yellow-300/20 blur-xl" />

                  {/* Central Floating RK Emblem */}
                  <motion.div
                    animate={{
                      y: [-6, 6, -6],
                      rotateZ: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 w-32 h-32 rounded-2xl bg-gradient-to-br from-yellow-400/25 via-amber-500/20 to-yellow-600/15 backdrop-blur-md border-2 border-yellow-400/70 shadow-[0_0_40px_rgba(250,204,21,0.5)] flex flex-col items-center justify-center"
                  >
                    <span className="font-[Orbitron] text-4xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-300 to-amber-500 drop-shadow-[0_2px_15px_rgba(250,204,21,0.6)]">
                      RK
                    </span>
                    <span className="text-[9px] font-mono tracking-[0.25em] text-yellow-300/90 mt-1 uppercase font-bold">
                      Builder
                    </span>
                  </motion.div>

                  {/* Floating Tech Chips */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="absolute -top-3 left-0 px-2.5 py-1 rounded-full text-[11px] font-medium text-yellow-200 bg-stone-900/95 border border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.25)] flex items-center gap-1.5"
                  >
                    <Zap className="w-3 h-3 text-yellow-400" />
                    <span>Java / Spring</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [4, -4, 4] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-2 -left-2 px-2.5 py-1 rounded-full text-[11px] font-medium text-amber-200 bg-stone-900/95 border border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1.5"
                  >
                    <Cpu className="w-3 h-3 text-amber-400" />
                    <span>AWS & Cloud</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full text-[11px] font-medium text-yellow-200 bg-stone-900/95 border border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.25)] flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                    <span>GenAI & LLMs</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [4, -4, 4] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-3 right-0 px-2.5 py-1 rounded-full text-[11px] font-medium text-amber-200 bg-stone-900/95 border border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1.5"
                  >
                    <Compass className="w-3 h-3 text-amber-400" />
                    <span>Product Strategy</span>
                  </motion.div>
                </div>

                {/* Philosophy Quote Pill */}
                <div className="mt-8 text-center px-4 py-2.5 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 w-full">
                  <p className="text-xs text-yellow-200/95 italic font-medium">
                    "Transforming curiosity into reliable code, and complex problems into scalable systems."
                  </p>
                </div>

                {/* Identity Quick Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                  <span className="text-[11px] font-mono text-yellow-300 px-2.5 py-0.5 rounded-full bg-yellow-500/15 border border-yellow-500/30">
                    📍 Hyderabad, IN
                  </span>
                  <span className="text-[11px] font-mono text-yellow-300 px-2.5 py-0.5 rounded-full bg-yellow-500/15 border border-yellow-500/30">
                    🎓 ECE '25
                  </span>
                  <span className="text-[11px] font-mono text-yellow-300 px-2.5 py-0.5 rounded-full bg-yellow-500/15 border border-yellow-500/30">
                    ⚡ Fast Learner
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Pillars, Upgraded Yellow Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Sub-header / Role callout */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-yellow-300 bg-yellow-400/10 border border-yellow-400/30 shadow-[0_0_15px_rgba(250,204,21,0.15)]">
                <Terminal className="w-3.5 h-3.5 text-yellow-400" />
                <span>Software Engineer & Technical Product Builder</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-[Orbitron] text-foreground">
                Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">Hardware Precision</span> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">Software Scale</span>
              </h3>
            </div>

            {/* Description with high-visibility yellow highlights */}
            <div className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed">
              <p>
                I'm a final-year{" "}
                <span className="text-yellow-300 font-semibold bg-yellow-400/15 px-2 py-0.5 rounded-md border border-yellow-400/35">
                  Electronics & Communication Engineering
                </span>{" "}
                student at Malla Reddy College of Engineering for Women, passionate about building resilient backend architectures, cloud systems, and AI-powered products.
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                With hands-on experience spanning{" "}
                <span className="text-yellow-300 font-medium">Java, Spring Boot, MySQL</span>, and{" "}
                <span className="text-amber-300 font-medium">AWS Cloud</span>, alongside innovations in{" "}
                <span className="text-yellow-300 font-medium">Generative AI</span> and{" "}
                <span className="text-amber-300 font-medium">Product Strategy</span>, I continuously turn real-world challenges into reliable, production-ready software.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-3 pt-1">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-yellow-400 font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Core Focus Pillars</span>
              </p>
              <div className="grid gap-3">
                {corePillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative rounded-2xl p-4 border border-yellow-500/25 bg-gradient-to-r from-yellow-500/10 via-amber-500/5 to-transparent backdrop-blur-md hover:border-yellow-400/60 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-all duration-300 flex items-start gap-4"
                    >
                      <div className="p-2.5 rounded-xl bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 shrink-0 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-stone-950 transition-all duration-300 shadow-[0_0_12px_rgba(250,204,21,0.25)]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-semibold text-foreground text-sm md:text-base">
                            {pillar.title}
                          </h4>
                          <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-yellow-400/15 text-yellow-300 border border-yellow-400/30">
                            {pillar.tag}
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground leading-normal">
                          {pillar.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Radiant Yellow/Amber Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="relative rounded-2xl p-4 border border-yellow-400/30 bg-gradient-to-br from-yellow-500/15 via-amber-500/10 to-transparent backdrop-blur-xl shadow-[0_0_20px_rgba(250,204,21,0.15)] hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.35)] transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 rounded-lg bg-yellow-400/20 text-yellow-300 border border-yellow-400/35 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                        <Icon className="w-4 h-4" />
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_6px_rgba(250,204,21,0.8)]" />
                    </div>
                    <div className="font-[Orbitron] text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500">
                      {s.value}
                    </div>
                    <div className="text-xs font-semibold text-foreground mt-1">{s.label}</div>
                    <div className="text-[10px] text-yellow-200/80 mt-0.5 truncate">{s.subtext}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-stone-950 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 hover:from-yellow-200 hover:to-amber-400 shadow-[0_0_25px_rgba(250,204,21,0.45)] hover:shadow-[0_0_35px_rgba(250,204,21,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/Rishitha_Khandesh_Portfolio_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-yellow-300 bg-yellow-400/10 border border-yellow-400/40 hover:bg-yellow-400/20 hover:border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FileText className="w-4 h-4 text-yellow-400" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
