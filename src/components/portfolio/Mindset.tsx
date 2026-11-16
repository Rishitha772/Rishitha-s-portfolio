import { motion } from "framer-motion";
import {
  Compass,
  GitBranch,
  Layers,
  Lightbulb,
  MessageSquare,
  Repeat,
  Shield,
  Zap,
} from "lucide-react";
import { Card3D } from "./Scene3D";

interface MindsetPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof Compass;
}

const mindsetPillars: MindsetPillar[] = [
  {
    number: "01",
    title: "Clarity Over Complexity",
    tagline: "Simplifying before building",
    description:
      "I break ambiguous challenges down into simple, well-defined components. Avoiding unnecessary abstractions ensures software remains readable, testable, and maintainable.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Rapid Adaptability",
    tagline: "Fast learning curve across stacks",
    description:
      "Technologies evolve quickly. I readily adapt to new languages, libraries, and workflows by mastering foundational principles and learning directly from source documentation.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Systematic Problem Solving",
    tagline: "Methodical root-cause analysis",
    description:
      "When debugging or designing architecture, I test assumptions, trace data flows methodically, and isolate root causes rather than applying temporary patches.",
    icon: Compass,
  },
  {
    number: "04",
    title: "Clear Communication",
    tagline: "Reducing friction through alignment",
    description:
      "Great outcomes require transparent communication. I articulate technical decisions clearly, ask the right questions early, and align with teammates and stakeholders.",
    icon: MessageSquare,
  },
  {
    number: "05",
    title: "Continuous Growth",
    tagline: "Iterative personal & technical improvement",
    description:
      "I treat every challenge as an opportunity to expand my capabilities. Actively seeking code reviews and constructive feedback helps me continuously sharpen my skills.",
    icon: Repeat,
  },
  {
    number: "06",
    title: "Calm Execution Under Ambiguity",
    tagline: "Focusing on what moves the needle",
    description:
      "When facing shifting requirements or tight deadlines, I remain composed by prioritizing high-impact tasks, maintaining clean code standards, and executing steadily.",
    icon: Shield,
  },
];

export function Mindset() {
  return (
    <section
      id="mindset"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-[#351E2B] text-[#FAF5EF] border-t border-[#624451]/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#624451]/60"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-[#B77983] uppercase mb-2 font-medium">
              03 / APPROACH & WORKING STYLE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF5EF]">
              A Clear & <span className="italic font-light text-[#E8D5C4]">Adaptable Mindset</span>
            </h2>
          </div>
          <p className="text-sm text-[#D5C0C3] max-w-md mt-3 md:mt-0 font-normal">
            How I approach problems, adapt to new technologies, and maintain clarity and discipline in execution.
          </p>
        </motion.div>

        {/* Mindset Pillars Grid without quotes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mindsetPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card3D key={pillar.title} maxTilt={6} className="h-full">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="group p-8 rounded-xl bg-[#432A37]/80 border border-[#624451] hover:border-[#B77983] transition-all duration-300 flex flex-col justify-between shadow-lg h-full"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[#B77983] tracking-widest">
                        {pillar.number}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#351E2B] border border-[#624451] flex items-center justify-center text-[#E8D5C4] group-hover:border-[#B77983] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-[#FAF5EF] group-hover:text-[#E8D5C4] transition-colors mb-1.5">
                      {pillar.title}
                    </h3>

                    <p className="font-mono text-xs text-[#B77983] mb-4">
                      {pillar.tagline}
                    </p>

                    <p className="text-xs md:text-sm text-[#D5C0C3] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#624451]/50 flex items-center justify-between text-xs font-mono text-[#D5C0C3]">
                    <span className="text-[#B77983]">DISCIPLINE & EXECUTION</span>
                    <span className="text-[#FAF5EF]">Active Practice</span>
                  </div>
                </motion.article>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
