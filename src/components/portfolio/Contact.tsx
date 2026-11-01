import { motion } from "framer-motion";
import { Sparkles, Send, Mail, Linkedin, Github, FileText, ArrowRight } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    subtext: "Connect professionally",
    href: "https://www.linkedin.com/in/rishitha-khandesh-b766b330a/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    subtext: "Explore repositories",
    href: "https://github.com/Rishitha772",
    icon: Github,
  },
  {
    label: "Email",
    subtext: "rishithakhandesh@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rishithakhandesh@gmail.com",
    icon: Mail,
  },
  {
    label: "Resume",
    subtext: "Download PDF",
    href: "/Rishitha_Khandesh_Portfolio_Resume.pdf",
    icon: FileText,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Ambient warm golden radial lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(250, 204, 21, 0.14) 0%, rgba(245, 158, 11, 0.06) 50%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase text-yellow-300 bg-yellow-400/10 border border-yellow-400/35 shadow-[0_0_20px_rgba(250,204,21,0.25)] mb-4">
            <Send className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>Get in Touch</span>
          </div>

          <h2 className="font-[Orbitron] text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Let's build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 drop-shadow-[0_0_35px_rgba(250,204,21,0.55)]">
              something great
            </span>
          </h2>
          <p className="text-base md:text-lg text-foreground/85 max-w-2xl mx-auto mb-12 leading-relaxed">
            Open to exciting full-time opportunities and internships in Software Engineering, Backend Architecture, Cloud Computing, and AI Product Development. Feel free to connect or drop a message!
          </p>
        </motion.div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative rounded-2xl p-6 flex flex-col items-center gap-3 border border-yellow-500/25 bg-gradient-to-b from-yellow-950/20 via-stone-900/75 to-yellow-950/35 backdrop-blur-xl shadow-[0_0_25px_rgba(250,204,21,0.1)] hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,0.3)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-amber-500 to-yellow-300 text-stone-950 shadow-[0_0_20px_rgba(250,204,21,0.4)] group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-sm font-bold text-foreground group-hover:text-yellow-300 transition-colors block">
                    {s.label}
                  </span>
                  <span className="text-[11px] text-muted-foreground block mt-0.5 truncate max-w-[130px]">
                    {s.subtext}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Direct Email Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rishithakhandesh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-stone-950 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 hover:from-yellow-200 hover:to-amber-400 shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_45px_rgba(250,204,21,0.7)] transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>Send Email Directly</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-yellow-500/20 text-xs text-yellow-100/60 font-mono"
        >
          © {new Date().getFullYear()} Rishitha Khandesh • Crafted with precision, purpose & passion.
        </motion.div>
      </div>
    </section>
  );
}
