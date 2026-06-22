import { motion } from "framer-motion";

const items = [
  { title: "AICTE 1M1B Green Internship — Top 30", desc: "Developed TerraVolt - Selected as a Top 30 intern and chosen for the Workplace Experience at Bangalore." },
  { title: "3 NPTEL Elite Certifications", desc: "Earned Elite certifications in IoT, Industry 4.0 - IoT, and Technical English through NPTEL." },
  { title: "Internal Smart India Hackathon", desc: "Participated in Internal Smart India Hackathon, tackling real-world problem statements - TeraaVolt" },
  { title: "Academic Excellence", desc: "Maintaining a strong academic record with consistent performance in Electronics and Communication Engineering." },
  { title: "Project Innovation Recognition @ MRCEW - HYD", desc: "Recognized for developing innovative projects that address real-world problems and create meaningful solutions." },
 ];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-neon-cyan uppercase mb-3">Recognition</p>
          <h2 className="font-[Orbitron] text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-3xl p-8 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "var(--gradient-radial)" }} />
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center animate-glow-pulse"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </motion.div>
                <h3 className="font-[Orbitron] text-lg font-bold mb-3">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}