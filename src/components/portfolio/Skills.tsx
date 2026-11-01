import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Layers,
  Cpu,
  Compass,
  Cloud,
  Zap,
} from "lucide-react";

const groups = [
  {
    title: "Programming",
    icon: Code2,
    color: "#facc15",
    items: [
      "Java",
      "Python",
      "JavaScript",
      "SQL",
      "HTML5",
      "CSS3",
      "OOP",
      "Data Structures & Algorithms",
    ],
  },
  {
    title: "Development & Frameworks",
    icon: Layers,
    color: "#f59e0b",
    items: [
      "Spring Boot",
      "React.js",
      "REST APIs",
      "MySQL",
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "JWT Authentication",
      "Hibernate/JPA",
    ],
  },
  {
    title: "CS Fundamentals",
    icon: Cpu,
    color: "#fbbf24",
    items: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "System Design",
      "Time & Space Complexity",
    ],
  },
  {
    title: "Product Management",
    icon: Compass,
    color: "#eab308",
    items: [
      "Product Strategy",
      "Roadmapping",
      "User Research",
      "Market Research",
      "Wireframing",
      "Agile & Scrum",
      "Product Analytics",
      "A/B Testing",
    ],
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    color: "#fde047",
    items: [
      "AWS",
      "Amazon EC2",
      "Amazon S3",
      "AWS Lambda",
      "Amazon RDS",
      "IAM",
      "VPC",
      "Cloud Fundamentals",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: Sparkles,
    color: "#facc15",
    items: [
      "Generative AI",
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "Large Language Models (LLMs)",
      "NLP Basics",
      "AI Chatbots",
      "Google Gemini API",
      "OpenAI APIs",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Ambient warm golden radial lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(250, 204, 21, 0.12) 0%, rgba(245, 158, 11, 0.05) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-10 right-10 w-96 h-96 rounded-full pointer-events-none -z-10"
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
            <Zap className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-[Orbitron] text-4xl md:text-5xl font-extrabold tracking-tight">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 drop-shadow-[0_0_35px_rgba(250,204,21,0.55)]">
              Technologies
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-sm md:text-base">
            A comprehensive overview of my programming languages, frameworks, cloud tooling, and product skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, gi) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative rounded-3xl p-7 border border-yellow-500/25 bg-gradient-to-b from-yellow-950/20 via-stone-900/70 to-yellow-950/30 backdrop-blur-xl shadow-[0_0_30px_rgba(250,204,21,0.1)] hover:border-yellow-400/70 hover:shadow-[0_0_40px_rgba(250,204,21,0.25)] transition-all duration-300 group overflow-hidden"
              >
                {/* Glowing ambient corner orb */}
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ background: g.color }}
                />

                <div className="flex items-center gap-3 mb-6 relative">
                  <div
                    className="p-3 rounded-2xl border transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(250,204,21,0.2)]"
                    style={{
                      backgroundColor: `${g.color}15`,
                      borderColor: `${g.color}50`,
                      color: g.color,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-[Orbitron] text-lg font-bold text-foreground">
                    {g.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 relative">
                  {g.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.05 + i * 0.02 }}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1.5 rounded-full text-xs font-medium cursor-default transition-all duration-200 border bg-yellow-400/5 text-yellow-100/90 border-yellow-500/25 hover:bg-yellow-400 hover:text-stone-950 hover:border-yellow-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
