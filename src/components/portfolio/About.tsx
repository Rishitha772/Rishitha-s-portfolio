import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, GraduationCap, Layers } from "lucide-react";
import { Card3D } from "./Scene3D";

export function About() {
  return (
    <section
      id="about"
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
              02 / BACKGROUND & FOUNDATION
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#351E2B]">
              A Little <span className="italic font-light text-[#713B50]">About Me</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#624451] mt-3 md:mt-0 tracking-wider font-medium">
            SOFTWARE DEVELOPER • BACKEND FOCUS
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-[#624451] text-base md:text-lg leading-relaxed font-normal"
          >
            <p className="text-[#351E2B] text-lg md:text-xl font-light leading-relaxed">
              I’m Rishitha, a curious learner who enjoys exploring ideas, solving problems, and turning them into meaningful creations.
              <p>
                I love working with Java, DSA, Spring Boot, and databases while continuously exploring new technologies. I believe in learning by building, improving through experience, and writing clean, maintainable code. Beyond coding, I enjoy taking ideas from the drawing board to real-world applications and challenging myself to grow with every project.
              </p>

            </p>
            {/* Core Values Strip on Cream */}
            <div className="pt-6 grid sm:grid-cols-3 gap-4 border-t border-[#DDCFBF]">
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#DDCFBF] shadow-sm hover:border-[#713B50] transition-colors">
                <p className="font-serif text-sm font-semibold text-[#351E2B] mb-1">
                  Resilient Backend
                </p>
                <p className="text-xs text-[#624451] leading-relaxed">
                  Designing secure REST APIs, clean database relations, and decoupled services.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#DDCFBF] shadow-sm hover:border-[#713B50] transition-colors">
                <p className="font-serif text-sm font-semibold text-[#351E2B] mb-1">
                  Algorithmic Rigor
                </p>
                <p className="text-xs text-[#624451] leading-relaxed">
                  Solid grasp of Data Structures, time/space trade-offs, and OOP principles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#DDCFBF] shadow-sm hover:border-[#713B50] transition-colors">
                <p className="font-serif text-sm font-semibold text-[#351E2B] mb-1">
                  Product Mindset
                </p>
                <p className="text-xs text-[#624451] leading-relaxed">
                  Building with empathy, clear user feedback loops, and practical utility.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Structured Spec Sheet Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <Card3D maxTilt={6}>
              <div className="p-6 md:p-8 rounded-2xl bg-[#FFFFFF] border border-[#DDCFBF] shadow-lg relative overflow-hidden">
                {/* Subtle top burgundy accent line */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#351E2B] via-[#713B50] to-[#B77983]" />

                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DDCFBF]">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#713B50] font-semibold">
                    PROFILE SPECIFICATION
                  </span>
                  <span className="font-mono text-[11px] text-[#351E2B] px-2.5 py-0.5 rounded-full bg-[#FAF5EF] border border-[#DDCFBF] font-semibold">
                    ACTIVE
                  </span>
                </div>

                {/* Specification items */}
                <dl className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between py-2 border-b border-[#DDCFBF]/60">
                    <dt className="text-[#624451]">PRIMARY FOCUS</dt>
                    <dd className="text-[#351E2B] font-semibold text-right">Full Stack & Java Backend</dd>
                  </div>

                  <div className="flex justify-between py-2 border-b border-[#DDCFBF]/60">
                    <dt className="text-[#624451]">DEGREE</dt>
                    <dd className="text-[#351E2B] font-semibold text-right">B.Tech in ECE</dd>
                  </div>

                  <div className="flex justify-between py-2 border-b border-[#DDCFBF]/60">
                    <dt className="text-[#624451]">ALMA MATER</dt>
                    <dd className="text-[#351E2B] font-semibold text-right">MRCEW Hyderabad</dd>
                  </div>

                  <div className="flex justify-between py-2 border-b border-[#DDCFBF]/60">
                    <dt className="text-[#624451]">ACADEMIC SCORE</dt>
                    <dd className="text-[#713B50] font-bold text-right text-sm">8.5 CGPA</dd>
                  </div>

                  <div className="flex justify-between py-2 border-b border-[#DDCFBF]/60">
                    <dt className="text-[#624451]">CORE STACK</dt>
                    <dd className="text-[#351E2B] font-semibold text-right">Java • Spring Boot • MySQL • React</dd>
                  </div>

                  <div className="flex justify-between py-2 border-b border-[#DDCFBF]/60">
                    <dt className="text-[#624451]">NATIONAL RECOGNITION</dt>
                    <dd className="text-[#713B50] font-semibold text-right">AICTE 1M1B Top 30 Finalist</dd>
                  </div>

                  <div className="flex justify-between py-2">
                    <dt className="text-[#624451]">LOCATION</dt>
                    <dd className="text-[#351E2B] font-semibold text-right">Hyderabad, Telangana, India</dd>
                  </div>
                </dl>

                {/* Resume download prompt */}
                <div className="mt-6 pt-5 border-t border-[#DDCFBF] flex items-center justify-between">
                  <span className="text-xs text-[#624451] font-medium">Curriculum Vitae</span>
                  <a
                    href="/Rishitha_Khandesh_SDE_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#351E2B] text-[#FAF5EF] text-xs font-mono font-medium hover:bg-[#713B50] transition-colors shadow-sm"
                  >
                    <span>View PDF</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E8D5C4]" />
                  </a>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
