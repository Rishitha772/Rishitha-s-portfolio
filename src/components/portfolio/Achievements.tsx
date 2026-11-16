import { motion } from "framer-motion";
import { Award, Flame, Medal, Star, Trophy } from "lucide-react";
import { Card3D } from "./Scene3D";

const achievements = [
  {
    number: "01",
    title: "AICTE 1M1B Green Internship — Top 30 National",
    desc: "Engineered TerraVolt for predictive industrial energy forecasting. Selected among the Top 30 interns nationwide and attended the exclusive Workplace Experience in Bangalore.",
    icon: Trophy,
    highlight: "National Honor",
  },
  {
    number: "02",
    title: "3x NPTEL Elite Silver Certifications",
    desc: "Earned Elite Silver grade certifications across multiple IIT-administered examinations covering IoT Systems, Industry 4.0 Architecture, and Technical English.",
    icon: Medal,
    highlight: "IIT Credentials",
  },
  {
    number: "03",
    title: "Smart India Internal Hackathon Finalist",
    desc: "Qualified for the Internal Smart India Hackathon finals by presenting practical software and data engineering approaches to solve sustainability bottlenecks.",
    icon: Flame,
    highlight: "Hackathon Finalist",
  },
  {
    number: "04",
    title: "Academic Excellence in ECE (8.5 CGPA)",
    desc: "Consistently maintained top-tier academic standing across 7 semesters in Electronics & Communication Engineering at Malla Reddy College of Engineering for Women.",
    icon: Star,
    highlight: "Top Standing",
  },
  {
    number: "05",
    title: "Engineering Innovation Recognition",
    desc: "Honored at MRCEW Hyderabad for end-to-end development of practical software solutions addressing real community and recruitment challenges.",
    icon: Award,
    highlight: "Campus Distinction",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#351E2B] border-t border-[#624451]/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#624451]/60"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-[#B77983] uppercase mb-2">
              05-B / HONORS & RECOGNITION
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF5EF]">
              Honors & <span className="italic font-light text-[#E8D5C4]">Distinctions</span>
            </h2>
          </div>
          <p className="text-sm text-[#D5C0C3] max-w-md mt-3 md:mt-0 font-normal">
            Competitive national recognitions, academic milestones, and verified industry credentials.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card3D key={item.title} maxTilt={6} className="h-full">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative p-7 rounded-xl bg-[#432A37]/80 border border-[#624451] hover:border-[#B77983] transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[#B77983] tracking-widest">
                        {item.number}
                      </span>
                      <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#351E2B] text-[#E8D5C4] border border-[#624451]">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-[#FAF5EF] group-hover:text-[#E8D5C4] transition-colors mb-3">
                      {item.title}
                    </h3>

                    <p className="text-xs md:text-sm text-[#D5C0C3] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#624451]/50 flex items-center justify-between text-xs font-mono text-[#D5C0C3]">
                    <span className="text-[#B77983] flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#E8D5C4]" />
                      <span>Verified Milestone</span>
                    </span>
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
