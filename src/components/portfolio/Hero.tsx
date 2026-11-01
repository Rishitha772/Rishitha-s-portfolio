import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import profileImg from "@/assets/rishitha.jpg";

const Hero3DScene = lazy(() =>
  import("./Scene3D").then((m) => ({ default: m.Hero3DScene })),
);

const roles = [
  "Aspiring Software Engineer",
  "AI Explorer",
  "Product Management Enthusiast",
  "Motivated Backend Developer",
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
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 font-semibold">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-yellow-400 ml-1 align-middle animate-pulse shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Ambient warm golden radial lighting */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

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
            className="inline-flex items-center gap-2 border border-yellow-400/40 bg-yellow-400/10 backdrop-blur-md rounded-full px-4 py-1.5 text-xs shadow-[0_0_15px_rgba(250,204,21,0.25)]"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
            <span className="text-yellow-200 font-medium">Available for opportunities</span>
          </motion.div>
          <h1 className="font-[Orbitron] text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 drop-shadow-[0_0_35px_rgba(250,204,21,0.5)]">
              Rishitha
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 drop-shadow-[0_0_35px_rgba(250,204,21,0.5)]">
              Khandesh
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-foreground/80 min-h-[2em]">
            <TypeRoles />
          </div>
          <p className="text-base text-foreground/85 max-w-xl leading-relaxed">
            Final-year Electronics & Communication Engineering student. Curious, motivated, and always eager to learn, I enjoy exploring new ideas and turning them into meaningful experiences. I believe in continuous growth, embracing challenges, and using technology to create solutions that make a real difference.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="relative px-6 py-3 rounded-full font-bold text-stone-950 overflow-hidden shadow-[0_0_25px_rgba(250,204,21,0.5)] hover:shadow-[0_0_35px_rgba(250,204,21,0.7)] transition-all bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/Rishitha_Khandesh_Portfolio_Resume.pdf"
              className="px-6 py-3 rounded-full font-semibold border border-yellow-400/40 bg-yellow-400/10 backdrop-blur-md text-yellow-300 hover:bg-yellow-400/20 hover:border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.15)] transition-all"
            >
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold border border-yellow-400/30 bg-stone-900/60 backdrop-blur-md text-foreground hover:border-yellow-400 hover:text-yellow-300 transition-all"
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
          <div
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 shadow-[0_0_60px_rgba(250,204,21,0.5)] animate-glow-pulse-yellow"
            style={{ background: "linear-gradient(135deg, #fde047, #facc15, #f59e0b)" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden glass border-2 border-yellow-300/40">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-300/80 text-xs flex flex-col items-center gap-2 font-mono"
      >
        <span>SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-yellow-400 via-amber-400 to-transparent" />
      </motion.div>
    </section>
  );
}