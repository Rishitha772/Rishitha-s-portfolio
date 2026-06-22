import { motion } from "framer-motion";

const stats = [
  { label: "Final Year", value: "ECE" },
  { label: "Projects", value: "6" },
  { label: "Certifications", value: "5+" },
  { label: "Focus Areas", value: "4" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-neon-cyan uppercase mb-3">About</p>
          <h2 className="font-[Orbitron] text-4xl md:text-5xl font-bold">
            Engineer. <span className="text-gradient">Builder.</span> Learner.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-full animate-glow-pulse" style={{ background: "var(--gradient-hero)", filter: "blur(60px)", opacity: 0.5 }} />
            <div className="relative glass rounded-3xl h-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(oklch(0.7 0.25 300 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.25 300 / 0.3) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-[10rem] font-[Orbitron] font-black text-gradient"
                style={{ transformStyle: "preserve-3d" }}
              >
                RK
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year <span className="text-foreground font-medium">Electronics & Communication Engineering</span> student with a deep passion for <span className="text-foreground font-medium">Software Engineering, Cloud Computing, Backend Development, and AI</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
             I believe growth comes from continuous learning and practical experience. Through projects, internships, and new challenges, I'm constantly improving myself while working toward a career in software engineering.</p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="font-[Orbitron] text-2xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}