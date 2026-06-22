import { motion } from "framer-motion";

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rishitha-khandesh",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/rishitha-khandesh",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:rishitha.khandesh@example.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6L12 13 2 6"/></svg>
    ),
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
    ),
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.3em] text-neon-cyan uppercase mb-3">Get in touch</p>
          <h2 className="font-[Orbitron] text-4xl md:text-6xl font-bold mb-6">
            Let's build <span className="text-gradient">something great</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Open to Software Engineer, Cloud, and Backend roles. Reach out — I respond fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-neon-purple transition-colors animate-float"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
                <span className="text-primary-foreground">{s.icon}</span>
              </div>
              <span className="text-sm font-medium">{s.label}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-border text-xs text-muted-foreground"
        >
          © {new Date().getFullYear()} Rishitha Khandesh. Designed & built with passion.
        </motion.div>
      </div>
    </section>
  );
}