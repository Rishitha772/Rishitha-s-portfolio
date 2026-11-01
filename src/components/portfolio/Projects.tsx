import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { Sparkles, ExternalLink, Github, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Lumora AI",
    desc: "An AI-powered PDF chatbot that extracts text from uploaded documents and answers user questions using Google Gemini and RAG.",
    tags: [
      "Java",
      "Spring Boot",
      "React.js",
      "Google Gemini API",
      "Apache PDFBox",
      "Maven",
    ],
    gradient: "linear-gradient(135deg, #f59e0b, #d97706, #78350f)",
    github: "https://github.com/Rishitha772/Lumora_AI",
  },
  {
    title: "HireSphere",
    desc: "Task-driven hiring platform for freshers that replaces resumes with real proof-of-skill challenges and dynamic evaluation.",
    tags: ["React", "Spring Boot", "MySQL", "JWT Auth", "REST APIs"],
    gradient: "linear-gradient(135deg, #eab308, #ca8a04, #854d0e)",
    github: "https://github.com/Rishitha772/hiresphere",
    demo: "https://hire-sphere-0d645.netlify.app",
  },
  {
    title: "HireSphere Product Case Study",
    desc: "End-to-end design and strategy case study of HireSphere: identifying friction, MVP scoping, user journey mapping, and metric tracking.",
    tags: [
      "Product Management",
      "Case Study",
      "User Research",
      "Product Strategy",
    ],
    gradient: "linear-gradient(135deg, #fbbf24, #d97706, #92400e)",
    demo: "/HireSphere_Case_Study.pdf",
  },
  {
    title: "Java LRU Cache",
    desc: "Production-grade LRU cache with O(1) operations, TTL eviction policies, thread-safe concurrency, and background cleanup threads.",
    tags: ["Java", "Concurrency", "DSA", "System Design"],
    gradient: "linear-gradient(135deg, #facc15, #f59e0b, #b45309)",
    github: "https://github.com/Rishitha772/LRU-Java-Cache-Project",
  },
  {
    title: "Distributed Rate Limiter",
    desc: "Scalable rate limiter to govern and throttle API request traffic, ensuring high availability, system stability, and DOS prevention.",
    tags: ["Java", "Spring Boot", "REST APIs", "Redis Concept"],
    gradient: "linear-gradient(135deg, #f59e0b, #b45309, #78350f)",
    github: "https://github.com/Rishitha772/LRU-Java-Cache-Project",
  },
  {
    title: "TerraVolt",
    desc: "AI-powered sustainability and energy prediction platform that forecasts industrial energy consumption and emissions. Selected as Top 30 by AICTE 1M1B.",
    tags: ["Python", "AI/ML", "REST API", "Sustainability"],
    gradient: "linear-gradient(135deg, #eab308, #d97706, #78350f)",
    github: "https://github.com/Rishitha772/TerraVolt",
    demo: "https://terra-volt-seven.vercel.app",
  },
];

function TiltCard({
  p,
  i,
}: {
  p: (typeof projects)[number];
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rx = useTransform(y, [-50, 50], [10, -10]);
  const ry = useTransform(x, [-50, 50], [-10, 10]);

  const onMove = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
      }}
      className="relative rounded-3xl p-8 border border-yellow-500/25 bg-gradient-to-b from-yellow-950/25 via-stone-900/75 to-yellow-950/35 backdrop-blur-2xl shadow-[0_0_35px_rgba(250,204,21,0.12)] hover:border-yellow-400/80 hover:shadow-[0_0_45px_rgba(250,204,21,0.25)] transition-all duration-300 group cursor-default overflow-hidden"
    >
      <div
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
        style={{ background: p.gradient }}
      />

      <div className="relative" style={{ transform: "translateZ(40px)" }}>
        {/* Project Visual Banner */}
        <div
          className="h-44 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-yellow-400/30 shadow-[0_0_20px_rgba(250,204,21,0.15)]"
          style={{ background: p.gradient }}
        >
          <div className="absolute inset-0 flex items-center justify-center font-[Orbitron] text-4xl font-extrabold text-stone-950/30 select-none">
            {p.title
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </div>

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(250, 204, 21, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 204, 21, 0.4) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-950/60 backdrop-blur-md border border-yellow-400/40 text-yellow-300 text-xs font-mono font-bold">
            <FolderGit2 className="w-3.5 h-3.5 text-yellow-400" />
            <span>FEATURED</span>
          </div>
        </div>

        <h3 className="font-[Orbitron] text-2xl font-bold mb-3 text-foreground group-hover:text-yellow-300 transition-colors">
          {p.title}
        </h3>

        <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
          {p.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-200 border border-yellow-400/25 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap items-center">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-yellow-400/35 bg-yellow-400/10 text-yellow-200 hover:bg-yellow-400/20 hover:border-yellow-400 hover:text-yellow-300 transition-all shadow-[0_0_12px_rgba(250,204,21,0.12)]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full text-stone-950 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 hover:from-yellow-200 hover:to-amber-400 shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_25px_rgba(250,204,21,0.6)] transition-all hover:scale-105"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Ambient warm golden radial lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(250, 204, 21, 0.12) 0%, rgba(245, 158, 11, 0.05) 50%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(234, 179, 8, 0.10) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase text-yellow-300 bg-yellow-400/10 border border-yellow-400/35 shadow-[0_0_20px_rgba(250,204,21,0.25)] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>Selected Work</span>
          </div>

          <h2 className="font-[Orbitron] text-4xl md:text-5xl font-extrabold tracking-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 drop-shadow-[0_0_35px_rgba(250,204,21,0.55)]">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-sm md:text-base">
            Scalable backend architectures, AI chatbots, systems programming, and product case studies.
          </p>
        </motion.div>

        <div
          className="grid md:grid-cols-2 gap-8"
          style={{ perspective: 1000 }}
        >
          {projects.map((p, i) => (
            <TiltCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
