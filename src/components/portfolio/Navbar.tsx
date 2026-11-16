import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#mindset", label: "Mindset", id: "mindset" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#interests", label: "Interests & Vlogs", id: "interests" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = [
        "home",
        "about",
        "mindset",
        "skills",
        "projects",
        "experience",
        "interests",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#351E2B]/90 backdrop-blur-md border-b border-[#624451] py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#home"
          className="group flex flex-col items-start transition-opacity hover:opacity-90"
        >
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg md:text-xl font-semibold tracking-wide text-[#FAF5EF]">
              Rishitha Khandesh
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8D5C4] group-hover:scale-125 transition-transform" />
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#B77983] uppercase">
            Software Developer
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-4 xl:gap-5 px-4 py-1.5 rounded-full border border-[#624451]/60 bg-[#432A37]/50 backdrop-blur-sm">
            {links.map((l) => {
              const isActive = activeSection === l.id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative text-xs tracking-wider font-medium transition-colors py-1 ${isActive
                    ? "text-[#E8D5C4]"
                    : "text-[#D5C0C3] hover:text-[#FAF5EF]"
                    }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-[#E8D5C4]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Resume Button */}
          <a
            href="/Rishitha_Khandesh_SDE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium tracking-wide bg-[#E8D5C4] text-[#351E2B] hover:bg-[#FAF5EF] transition-all duration-200 shadow-sm hover:shadow-[0_4px_16px_rgba(232,213,196,0.2)] hover:-translate-y-0.5"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#351E2B]" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="lg:hidden p-2 text-[#E8D5C4] hover:text-[#FAF5EF] transition-colors focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-[#624451] bg-[#351E2B]/98 backdrop-blur-xl px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {links.map((l) => {
                const isActive = activeSection === l.id;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-2 text-sm tracking-wide border-b border-[#624451]/40 ${isActive
                      ? "text-[#E8D5C4] font-medium"
                      : "text-[#D5C0C3] hover:text-[#FAF5EF]"
                      }`}
                  >
                    <span>{l.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8D5C4]" />
                    )}
                  </a>
                );
              })}

              <a
                href="/Rishitha_Khandesh_SDE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#E8D5C4] text-[#351E2B]"
              >
                <span>Download Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
