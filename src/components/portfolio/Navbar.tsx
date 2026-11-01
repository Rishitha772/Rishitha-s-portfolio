import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? "border-b border-yellow-500/25 bg-stone-950/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(250,204,21,0.1)] py-3" : "py-5 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="font-[Orbitron] text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 tracking-wider">
          RK.
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-yellow-300 transition-colors relative group font-medium"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
            </a>
          ))}
          <a
            href="/Rishitha_Khandesh_Portfolio_Resume.pdf"
            className="text-xs font-semibold px-4 py-1.5 rounded-full text-stone-950 bg-gradient-to-r from-yellow-300 to-amber-400 hover:from-yellow-200 hover:to-amber-300 shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all duration-300 hover:scale-105"
          >
            Resume
          </a>
        </div>
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border border-yellow-500/30 bg-stone-950/95 backdrop-blur-2xl mt-3 mx-6 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_10px_40px_rgba(250,204,21,0.2)]"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground hover:text-yellow-300 font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="/Rishitha_Khandesh_Portfolio_Resume.pdf"
            onClick={() => setOpen(false)}
            className="text-center text-xs font-semibold py-2 rounded-full text-stone-950 bg-gradient-to-r from-yellow-300 to-amber-400 shadow-[0_0_15px_rgba(250,204,21,0.4)]"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}