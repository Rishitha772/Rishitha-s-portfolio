import { motion } from "framer-motion";

const timeline = [
  { title: "Python Development Intern", org: "Infosys Springboard Virtual Internship 7.0 Batch 2, 2026", desc: "Preparing to apply Python concepts to build practical solutions and strengthen foundations in application development." },
  { title: "Founder", org: "HireSphere", desc: "End-to-end product ownership: ideation, UI/UX design, Android development, and go-to-market strategy" },
  { title: "AI Intern", org: "Vishwam.AI, Sweccha Telangana", desc: "▸	Contributed to the development and improvement of Large Language Models (LLMs) by supporting data preparation, evaluation, and experimentation workflows." },
  { title: "Java Baiscs for Beginners", org: "Certification from Udemy", desc: "Built a strong foundation in Java programming and object-oriented concepts." },
  { title: "AWS Cloud Practitioner Essentials", org: "AWS Training", desc: "Gained foundational knowledge of AWS cloud services and architecture." },
  { title: "Full-Stack web development Bootcamp", org: "Certification from Udemy", desc: "Explored end-to-end web development, from UI design to backend integration." },
  { title: "Microsoft AI skills fest Certification", org: "Certification", desc: "Microsoft-validated technology credentials." },
  { title: "NPTEL Elite Silver", org: "Certification", desc: "Multiple Elite Silver grades." },
  { title: "TCS iON Certifications", org: "Certifications", desc: "Industry-recognized career-readiness certifications." },
 ];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-neon-cyan uppercase mb-3">Journey</p>
          <h2 className="font-[Orbitron] text-4xl md:text-5xl font-bold">
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-blue to-neon-cyan opacity-50" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative mb-10 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12"} pl-12 md:pl-0`}
            >
              <div className={`absolute top-6 ${i % 2 ? "md:-left-2 left-2" : "md:-right-2 left-2"} w-4 h-4 rounded-full bg-neon-cyan animate-glow-pulse`} style={{ boxShadow: "0 0 20px oklch(0.82 0.16 200)" }} />
              <div className="glass rounded-2xl p-6">
                <p className="text-xs tracking-wider text-neon-cyan uppercase mb-1">{t.org}</p>
                <h3 className="font-[Orbitron] text-lg font-bold mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}