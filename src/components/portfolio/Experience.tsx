import { motion } from "framer-motion";
import { Sparkles, Briefcase, Award } from "lucide-react";

const timeline = [
  {
    title: "Python Development Intern",
    org: "Infosys Springboard Virtual Internship 7.0 Batch 2, 2026",
    desc: "Preparing to apply Python concepts to build practical solutions and strengthen foundations in application development.",
    type: "work",
  },
  {
    title: "Founder & Lead Builder",
    org: "HireSphere",
    desc: "End-to-end product ownership: ideation, UI/UX design, full-stack development, and go-to-market strategy.",
    type: "work",
  },
  {
    title: "AI Intern",
    org: "Vishwam.AI, Sweccha Telangana",
    desc: "Contributed to the development and improvement of Large Language Models (LLMs) by supporting data preparation, evaluation, and experimentation workflows.",
    type: "work",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    org: "AWS Training & Certification",
    desc: "Gained foundational knowledge of AWS cloud services, compute, storage, databases, and secure architecture design.",
    type: "cert",
  },
  {
    title: "NPTEL Elite Silver Certifications",
    org: "NPTEL — IITs",
    desc: "Earned Elite Silver grade certifications in IoT, Industry 4.0, and Technical English.",
    type: "cert",
  },
  {
    title: "Java Programming Mastery",
    org: "Udemy",
    desc: "Built a rock-solid foundation in Java programming, collections framework, and object-oriented design principles.",
    type: "cert",
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    org: "Udemy",
    desc: "Explored end-to-end modern web development, from responsive frontend interfaces to backend API integration.",
    type: "cert",
  },
  {
    title: "Microsoft AI Skills Fest Certification",
    org: "Microsoft",
    desc: "Microsoft-validated technology credentials in Artificial Intelligence fundamentals and modern tooling.",
    type: "cert",
  },
  {
    title: "TCS iON Certifications",
    org: "Tata Consultancy Services",
    desc: "Industry-recognized career-readiness and technical foundation certifications.",
    type: "cert",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      {/* Ambient warm golden radial lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(250, 204, 21, 0.12) 0%, rgba(245, 158, 11, 0.05) 50%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase text-yellow-300 bg-yellow-400/10 border border-yellow-400/35 shadow-[0_0_20px_rgba(250,204,21,0.25)] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>Journey & Growth</span>
          </div>

          <h2 className="font-[Orbitron] text-4xl md:text-5xl font-extrabold tracking-tight">
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 drop-shadow-[0_0_35px_rgba(250,204,21,0.55)]">
              Certifications
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-sm md:text-base">
            Internships, product initiatives, and continuous skill validation through leading tech programs.
          </p>
        </motion.div>

        <div className="relative">
          {/* Golden Timeline Spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-amber-400 to-yellow-500 shadow-[0_0_12px_rgba(250,204,21,0.6)]" />

          {timeline.map((t, i) => (
            <motion.div
              key={t.title + t.org}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative mb-10 md:w-1/2 ${
                i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12"
              } pl-12 md:pl-0`}
            >
              {/* Glowing Yellow Timeline Node */}
              <div
                className={`absolute top-6 ${
                  i % 2 ? "md:-left-2 left-2" : "md:-right-2 left-2"
                } w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.85)] border-2 border-stone-950`}
              />

              <div className="relative rounded-2xl p-6 border border-yellow-500/25 bg-gradient-to-b from-yellow-950/20 via-stone-900/75 to-yellow-950/30 backdrop-blur-xl shadow-[0_0_25px_rgba(250,204,21,0.1)] hover:border-yellow-400/70 hover:shadow-[0_0_35px_rgba(250,204,21,0.25)] transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1.5 rounded-lg bg-yellow-400/15 text-yellow-300 border border-yellow-400/30">
                    {t.type === "work" ? (
                      <Briefcase className="w-3.5 h-3.5" />
                    ) : (
                      <Award className="w-3.5 h-3.5" />
                    )}
                  </span>
                  <p className="text-xs font-mono font-semibold tracking-wider text-yellow-300">
                    {t.org}
                  </p>
                </div>
                <h3 className="font-[Orbitron] text-lg font-bold mb-2 text-foreground group-hover:text-yellow-300 transition-colors">
                  {t.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
