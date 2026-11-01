import { motion } from "framer-motion";
import { Sparkles, Trophy, Award, Medal, Star, Flame } from "lucide-react";

const items = [
  {
    title: "AICTE 1M1B Green Internship — Top 30",
    desc: "Developed TerraVolt — Selected as a Top 30 intern nationally and chosen for the prestigious Workplace Experience at Bangalore.",
    icon: Trophy,
    highlight: "Top 30 National",
  },
  {
    title: "3 NPTEL Elite Certifications",
    desc: "Earned Elite certifications in IoT, Industry 4.0 - IoT, and Technical English through NPTEL with distinction.",
    icon: Medal,
    highlight: "Elite Distinction",
  },
  {
    title: "Internal Smart India Hackathon",
    desc: "Participated in the Internal Smart India Hackathon, tackling real-world sustainability problem statements with TerraVolt.",
    icon: Flame,
    highlight: "Hackathon Finalist",
  },
  {
    title: "Academic Excellence in ECE",
    desc: "Consistently maintaining an exceptional academic record in Electronics and Communication Engineering at MRCEW.",
    icon: Star,
    highlight: "Top Academic Standing",
  },
  {
    title: "Project Innovation Recognition",
    desc: "Recognized at MRCEW Hyderabad for developing innovative engineering projects that address real-world community challenges.",
    icon: Award,
    highlight: "Innovation Award",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-6 overflow-hidden">
      {/* Ambient warm golden radial lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(250, 204, 21, 0.12) 0%, rgba(245, 158, 11, 0.05) 50%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full pointer-events-none -z-10"
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
            <Trophy className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>Honors & Recognition</span>
          </div>

          <h2 className="font-[Orbitron] text-4xl md:text-5xl font-extrabold tracking-tight">
            Key{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 drop-shadow-[0_0_35px_rgba(250,204,21,0.55)]">
              Achievements
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-sm md:text-base">
            Milestones, national recognitions, and competitive project distinctions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative rounded-3xl p-8 text-center overflow-hidden group border border-yellow-500/25 bg-gradient-to-b from-yellow-950/20 via-stone-900/75 to-yellow-950/35 backdrop-blur-xl shadow-[0_0_30px_rgba(250,204,21,0.12)] hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.3)] transition-all duration-300"
              >
                {/* Glowing ambient hover background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(250, 204, 21, 0.15), transparent 70%)",
                  }}
                />

                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center shadow-[0_0_35px_rgba(250,204,21,0.5)] border-2 border-yellow-300/60 bg-gradient-to-tr from-yellow-400 via-amber-500 to-yellow-300"
                  >
                    <Icon className="w-10 h-10 text-stone-950" />
                  </motion.div>

                  <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-yellow-400/15 text-yellow-300 border border-yellow-400/35 mb-3 shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                    {it.highlight}
                  </span>

                  <h3 className="font-[Orbitron] text-lg font-bold mb-3 text-foreground group-hover:text-yellow-300 transition-colors">
                    {it.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
