import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

 const projects = [
  {
    title: "Lumora AI",
    desc: "An AI-powered PDF chatbot that extracts text from uploaded documents and answers user questions using Google Gemini.",
    tags: [
      "Java",
      "Spring Boot",
      "React.js",
      "Google Gemini API",
      "Apache PDFBox",
      "Maven",
    ],
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.22 250), oklch(0.7 0.25 300))",
    github: "https://github.com/Rishitha772/Lumora_AI",
    demo: "https://YOUR-LUMORA-AI-DEMO.netlify.app",
  },

  {
    title: "HireSphere",
    desc: "Task-driven hiring platform for freshers that replaces resumes with proof-of-skill challenges.",
    tags: ["React", "Spring Boot", "MySQL"],
    gradient:
      "linear-gradient(135deg, oklch(0.7 0.25 300), oklch(0.65 0.22 250))",
    github: "https://github.com/Rishitha772/hiresphere",
    demo: "https://hire-sphere-0d645.netlify.app",
  },

  {
    title: "HireSphere Product Case Study",
    desc: "A product case study showcasing the end-to-end design process of HireSphere, from identifying hiring challenges to defining the MVP, user journeys, feature prioritization, and product strategy.",
    tags: [
      "Product Management",
      "Case Study",
      "User Research",
      "Product Strategy",
    ],
    gradient:
      "linear-gradient(135deg, oklch(0.82 0.16 200), oklch(0.7 0.25 300))",
    demo: "\HireSphere_Case_Study.pdf",
  },

  {
    title: "Java LRU Cache",
    desc: "Production-grade LRU cache with O(1) operations, TTL eviction, persistence, and background cleanup threads.",
    tags: ["Java", "Concurrency", "DSA"],
    gradient:
      "linear-gradient(135deg, oklch(0.7 0.25 300), oklch(0.82 0.16 200))",
    github: "https://github.com/Rishitha772/LRU-Java-Cache-Project",
  },

  {
    title: "Distributed Rate Limiter",
    desc: "Developed a distributed rate limiter to control and manage API request traffic, ensuring system stability and preventing excessive requests.",
    tags: ["Java", "Spring Boot", "REST APIs"],
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.22 250), oklch(0.7 0.25 300))",
    github: "https://github.com/Rishitha772/LRU-Java-Cache-Project",
  },

  {
    title: "TerraVolt",
    desc: "AI-powered sustainability and energy prediction platform that forecasts energy consumption and emissions.",
    tags: ["Python", "AI/ML", "REST API", "Sustainability"],
    gradient:
      "linear-gradient(135deg, oklch(0.82 0.16 200), oklch(0.65 0.22 250))",
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
      className="glass rounded-3xl p-8 relative overflow-hidden group cursor-default"
    >
      <div
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
        style={{ background: p.gradient }}
      />

      <div
        className="relative"
        style={{ transform: "translateZ(40px)" }}
      >
        <div
          className="h-48 rounded-2xl mb-6 relative overflow-hidden"
          style={{ background: p.gradient }}
        >
          <div className="absolute inset-0 flex items-center justify-center font-[Orbitron] text-4xl font-black text-background/30">
            {p.title
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </div>

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <h3 className="font-[Orbitron] text-2xl font-bold mb-3">
          {p.title}
        </h3>

        <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
          {p.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-full glass hover:border-neon-purple transition-colors"
            >
              GitHub
            </a>
          )}

          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-full text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-neon-cyan uppercase mb-3">
            Selected Work
          </p>

          <h2 className="font-[Orbitron] text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
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