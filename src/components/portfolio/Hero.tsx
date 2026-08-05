import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import profileImg from "@/assets/rishitha.jpg";

const Hero3DScene = lazy(() =>
  import("./Scene3D").then((m) => ({ default: m.Hero3DScene })),
);

const roles = [
  "AI Explorer",
  "Aspiring Software Engineer",
  "Product Management Enthusiast",
  "Ambitious Cloud Engineer",
  "Motivated Backend Developer",
  "Full Stack Enthusiast",
];

function TypeRoles() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1500);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setIdx((idx + 1) % roles.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <span className="text-gradient font-medium">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-neon-cyan ml-1 align-middle animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs"
          >
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-muted-foreground">Available for opportunities</span>
          </motion.div>
          <h1 className="font-[Orbitron] text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient animate-gradient">Rishitha</span>
            <br />
            <span className="text-gradient animate-gradient">Khandesh</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground min-h-[2em]">
            <TypeRoles />
          </div>
          <p className="text-base text-muted-foreground max-w-xl">
            Final-year Electronics & Communication Engineering student. Curious, motivated, and always eager to learn, I enjoy exploring new ideas and turning them into meaningful experiences. I believe in continuous growth, embracing challenges, and using technology to create solutions that make a real difference.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="relative px-6 py-3 rounded-full font-medium text-primary-foreground overflow-hidden animate-glow-pulse"
              style={{ background: "var(--gradient-hero)" }}
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/Rishitha_Khandesh_Portfolio_Resume.pdf"
              className="px-6 py-3 rounded-full font-medium glass hover:border-neon-cyan transition-colors"
            >
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-6 py-3 rounded-full font-medium glass hover:border-neon-purple transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center"
        >
          <div className="absolute inset-0">
            <Suspense fallback={null}>
              <Hero3DScene />
            </Suspense>
          </div>
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-1 animate-glow-pulse"
            style={{ background: "var(--gradient-hero)" }}>
            <div className="w-full h-full rounded-full overflow-hidden glass">
              <img
                src={profileImg}
                alt="Rishitha Khandesh portrait"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs flex flex-col items-center gap-2"
      >
        <span>SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-neon-purple to-transparent" />
      </motion.div>
    </section>
  );
}