import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#351E2B] border-t border-[#624451] py-14 px-6 md:px-12 text-[#D5C0C3]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-medium text-[#FAF5EF] tracking-wide">
              Rishitha Khandesh
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8D5C4]" />
          </div>
          <p className="font-mono text-xs text-[#B77983] uppercase tracking-[0.2em]">
            Software Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Rishitha772"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xs font-mono text-[#D5C0C3] hover:text-[#E8D5C4] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5 text-[#B77983]" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/rishitha-khandesh-b766b330a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xs font-mono text-[#D5C0C3] hover:text-[#E8D5C4] transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#B77983]" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:rishithakhandesh@gmail.com"
            aria-label="Email"
            className="text-xs font-mono text-[#D5C0C3] hover:text-[#E8D5C4] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#B77983]" />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="text-[#624451]">|</span>
          <span className="text-[11px] text-[#D5C0C3]">
            © {new Date().getFullYear()} Rishitha Khandesh. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full border border-[#624451] bg-[#432A37]/60 flex items-center justify-center text-[#E8D5C4] hover:text-[#FAF5EF] hover:border-[#B77983] transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
