import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Youtube } from "lucide-react";
import { Card3D } from "./Scene3D";

export function CreativeInterests() {
  return (
    <section
      id="interests"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-[#F8F3EC] text-[#351E2B] border-t border-[#DDCFBF]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#DDCFBF]"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-[#713B50] uppercase mb-2 font-semibold">
              07 / INTERESTS & VLOGS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#351E2B]">
              Interests & <span className="italic font-light text-[#713B50]">Vlogs</span>
            </h2>
          </div>
          <p className="text-sm text-[#624451] max-w-md mt-3 md:mt-0 font-normal">
            Sharing perspectives on communication, mindset growth, and life through video and visual storytelling.
          </p>
        </motion.div>

        {/* Dual Platform Cards: YouTube & Instagram */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* YouTube Card */}
          <Card3D maxTilt={5} className="h-full">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-[#DDCFBF] shadow-sm hover:shadow-md hover:border-[#713B50] transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DDCFBF]/60 gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#351E2B] text-[#FAF5EF] flex items-center justify-center shadow-sm flex-shrink-0">
                      <Youtube className="w-5 h-5 text-[#E8D5C4]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#351E2B] leading-tight">
                        Communication & Mindset Coach
                      </h3>
                      <p className="font-mono text-[11px] text-[#713B50] tracking-wider uppercase font-medium mt-0.5">
                        YOUTUBE CHANNEL • VLOGS & COACHING
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.youtube.com/@rishithakhandesh11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#351E2B] text-[#FAF5EF] text-xs font-mono font-medium hover:bg-[#713B50] transition-all shadow-sm flex-shrink-0"
                  >
                    <span>Watch on YouTube</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E8D5C4]" />
                  </a>
                </div>

                <p className="text-sm text-[#624451] leading-relaxed mb-6 font-normal">
                  Creating engaging video vlogs, sharing actionable frameworks for communication confidence, personal growth, mindset transformation, and student developer life.
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDCFBF]/70 flex items-center justify-between text-xs font-mono text-[#624451]">
                <span className="font-medium text-[#713B50]">VLOGS & FRAMEWORKS</span>
                <a
                  href="https://www.youtube.com/@rishithakhandesh11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#351E2B] font-semibold hover:text-[#713B50] transition-colors"
                >
                  @rishithakhandesh
                </a>
              </div>
            </motion.article>
          </Card3D>

          {/* Instagram Card */}
          <Card3D maxTilt={5} className="h-full">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-[#DDCFBF] shadow-sm hover:shadow-md hover:border-[#713B50] transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DDCFBF]/60 gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#713B50] text-[#FAF5EF] flex items-center justify-center shadow-sm flex-shrink-0">
                      <Instagram className="w-5 h-5 text-[#FAF5EF]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#351E2B] leading-tight">
                        Communication & Mindset Coach
                      </h3>
                      <p className="font-mono text-[11px] text-[#713B50] tracking-wider uppercase font-medium mt-0.5">
                        INSTAGRAM • LIFE
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.instagram.com/rishuu_explores?obrf=MTNldW1lb2NxYWIwbg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#DDCFBF] bg-[#FAF5EF] text-[#351E2B] text-xs font-mono font-medium hover:border-[#713B50] hover:text-[#713B50] transition-all flex-shrink-0"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#713B50]" />
                  </a>
                </div>

                <p className="text-sm text-[#624451] leading-relaxed mb-6 font-normal">
                  Sharing daily reflections on building a resilient mindset, effective communication habits, intentional lifestyle perspectives, and behind-the-scenes life updates.
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDCFBF]/70 flex items-center justify-between text-xs font-mono text-[#624451]">
                <span className="font-medium text-[#713B50]">DAILY INSPIRATION</span>
                <a
                  href="https://www.instagram.com/rishuu_explores?obrf=MTNldW1lb2NxYWIwbg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#351E2B] font-semibold hover:text-[#713B50] transition-colors"
                >
                  @rishuu_explores
                </a>
              </div>
            </motion.article>
          </Card3D>
        </div>
      </div>
    </section>
  );
}
