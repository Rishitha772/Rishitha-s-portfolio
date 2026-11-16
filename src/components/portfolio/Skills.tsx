import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layout,
  Database,
  Cpu,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { Card3D } from "./Scene3D";

interface SkillCategory {
  number: string;
  title: string;
  description: string;
  icon: typeof Code2;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    number: "01",
    title: "Programming Languages",
    description: "Core languages for algorithmic problem solving and backend application engineering.",
    icon: Code2,
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Architecting modular, secure, and production-ready server-side systems.",
    icon: Server,
    skills: ["Spring Boot", "RESTful APIs", "Authentication & Authorization"],
  },
  {
    number: "03",
    title: "Core Computer Science",
    description: "Foundational software engineering principles for robust, scalable systems.",
    icon: Cpu,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "System Design Fundamentals",
    ],
  },
  {
    number: "04",
    title: "Databases",
    description: "Relational data modeling, schema integrity, indexing, and query optimization.",
    icon: Database,
    skills: ["MySQL", "SQLite"],
  },
  {
    number: "05",
    title: "Frontend Development",
    description: "Crafting responsive, accessible, and reactive user interfaces.",
    icon: Layout,
    skills: ["React.js", "HTML5", "CSS3"],
  },
  {
    number: "06",
    title: "Developer Tools",
    description: "Version control, API testing, debugging, and development environments.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#F8F3EC] text-[#351E2B] border-t border-[#DDCFBF]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDCFBF]"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-[#713B50] uppercase mb-2 font-semibold">
              03 / TECHNICAL CAPABILITIES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#351E2B]">
              Skills & <span className="italic font-light text-[#713B50]">Expertise</span>
            </h2>
          </div>
          <p className="text-sm text-[#624451] max-w-md mt-3 md:mt-0 font-normal">
            A cohesive stack focused on backend reliability, object-oriented design, and practical system development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Card3D key={cat.title} maxTilt={6} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative p-7 rounded-xl bg-[#FFFFFF] border border-[#DDCFBF] hover:border-[#713B50] hover:shadow-md transition-all duration-300 flex flex-col justify-between shadow-sm h-full"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[#713B50] tracking-widest font-semibold">
                        {cat.number}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#FAF5EF] border border-[#DDCFBF] flex items-center justify-center text-[#713B50] group-hover:bg-[#351E2B] group-hover:text-[#FAF5EF] group-hover:border-[#351E2B] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#351E2B] group-hover:text-[#713B50] transition-colors mb-2">
                      {cat.title}
                    </h3>

                    <p className="text-xs text-[#624451] leading-relaxed mb-6 font-normal">
                      {cat.description}
                    </p>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#DDCFBF]/70">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#FAF5EF] text-[#351E2B] border border-[#DDCFBF] group-hover:border-[#B77983]/60 transition-colors flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#713B50]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Card3D>
            );
          })}
        </div>

        {/* Editorial Architecture Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 rounded-xl border border-[#DDCFBF] bg-[#FFFFFF] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#624451]"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#713B50]" />
            <span className="text-[#351E2B] font-medium">PRIMARY STACK IN PRODUCTION: Java 17+ • Spring Boot • MySQL • React</span>
          </div>
          <span className="text-[#713B50] uppercase tracking-wider font-semibold">
            Zero Fake Metrics • Verified Implementations
          </span>
        </motion.div>
      </div>
    </section>
  );
}
