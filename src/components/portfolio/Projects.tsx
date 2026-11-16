import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  FileText,
  Github,
  Layers,
  MessageSquare,
  Briefcase,
  Database,
  Bot,
  Zap,
} from "lucide-react";
import { Card3D } from "./Scene3D";

interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  highlights: string[];
  metrics?: string;
  icon: typeof MessageSquare;
}

const flagshipProjects: Project[] = [
  {
    id: "whatchat",
    name: "WhatChat",
    category: "Real-Time Chat Application",
    tagline: "Personal & Group Communication with Curated Memory Spaces",
    description:
      "A chat application designed for personal and group conversations, with a dedicated personal space to save meaningful messages, media, and memories. Features persistent message delivery, secure relational data mapping, and intuitive conversation management.",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    githubUrl: "https://github.com/Rishitha772",
    highlights: [
      "Dedicated personal storage space for curated messages & notes",
      "Real-time one-to-one and group conversation flows",
      "Normalized relational schema for users, messages, and threads",
      "Modular Spring Boot REST endpoints with input validation",
    ],
    metrics: "Full-Stack Architecture",
    icon: MessageSquare,
  },
  {
    id: "hiresphere",
    name: "HireSphere",
    category: "Task-Based Hiring Platform",
    tagline: "Replacing Resumes with Practical Skill Challenges",
    description:
      "A task-based recruitment platform designed to connect recruiters and candidates through practical skill evaluation rather than relying exclusively on resumes. Streamlines hiring by evaluating measurable project submissions and automated task benchmarks.",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    githubUrl: "https://github.com/Rishitha772/hiresphere",
    liveUrl: "https://hire-sphere-0d645.netlify.app",
    caseStudyUrl: "/HireSphere_Case_Study.pdf",
    highlights: [
      "Task submission and peer/recruiter grading pipeline",
      "Dual portal views tailored for candidates and hiring managers",
      "Secure JWT-based authentication and role-based access control",
      "Comprehensive product discovery and strategy case study completed",
    ],
    metrics: "Live on Netlify • Case Study Available",
    icon: Briefcase,
  },
  {
    id: "in-memory-cache",
    name: "In-Memory Cache System",
    category: "Backend Engineering",
    tagline: "High-Throughput LRU Eviction & TTL Expiration Engine",
    description:
      "An in-memory caching system implementing LRU (Least Recently Used) eviction and TTL-based expiration to demonstrate core backend engineering concepts. Designed with thread-safe concurrency controls, doubly-linked hash map architecture, and background memory cleanup routines.",
    technologies: ["Java", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com/Rishitha772/LRU-Java-Cache-Project",
    highlights: [
      "O(1) time complexity for both read (GET) and write (PUT) operations",
      "Doubly linked list coupled with Hash Map for optimal eviction order",
      "TTL (Time-To-Live) background reaper daemon for passive cleanup",
      "Thread safety guarantees under concurrent multi-threaded workloads",
    ],
    metrics: "O(1) Time Complexity • Concurrency Safe",
    icon: Database,
  },
];

const secondaryProjects: Project[] = [
  {
    id: "lumora-ai",
    name: "Lumora AI",
    category: "AI Document Intelligence",
    tagline: "Conversational PDF Retrieval via Google Gemini & RAG",
    description:
      "An AI-powered PDF assistant extracting structured text from uploaded documents and answering natural language questions with contextual citations using Google Gemini API and Apache PDFBox.",
    technologies: ["Java", "Spring Boot", "React", "Gemini API", "Apache PDFBox"],
    githubUrl: "https://github.com/Rishitha772/Lumora_AI",
    highlights: [
      "Document ingestion and chunking pipeline with Apache PDFBox",
      "Generative Q&A responses powered by Google Gemini",
      "Full-stack React client with markdown rendering",
    ],
    metrics: "Google Gemini API Powered",
    icon: Bot,
  },
  {
    id: "terravolt",
    name: "TerraVolt",
    category: "Sustainability Intelligence",
    tagline: "Predictive Industrial Energy & Emissions Forecasting",
    description:
      "AI-driven platform that models and predicts industrial energy load patterns to optimize green consumption. Recognized as a Top 30 National project in the AICTE 1M1B Green Internship initiative.",
    technologies: ["Python", "Machine Learning", "REST API", "Sustainability"],
    githubUrl: "https://github.com/Rishitha772/TerraVolt",
    liveUrl: "https://terra-volt-seven.vercel.app",
    highlights: [
      "Machine learning models forecasting power spikes and carbon output",
      "National Top 30 recognition by AICTE and 1M1B Foundation",
      "Interactive analytics dashboard deployed on Vercel",
    ],
    metrics: "AICTE Top 30 National Finalist",
    icon: Zap,
  },
];

export function Projects() {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <section
      id="projects"
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
              04 / SELECTED WORKS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF5EF]">
              Featured <span className="italic font-light text-[#E8D5C4]">Projects</span>
            </h2>
          </div>
          <p className="text-sm text-[#D5C0C3] max-w-md mt-3 md:mt-0 font-normal">
            Real systems built with careful attention to architecture, clean abstractions, and backend reliability.
          </p>
        </motion.div>

        {/* Flagship Projects Showcase */}
        <div className="space-y-12">
          {flagshipProjects.map((p, index) => {
            const Icon = p.icon;
            const isReversed = index % 2 === 1;

            return (
              <Card3D key={p.id} maxTilt={4} className="rounded-2xl">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group rounded-2xl bg-[#432A37] border border-[#624451] hover:border-[#B77983] transition-all duration-300 overflow-hidden shadow-xl"
                >
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left / Info Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 p-8 md:p-10 flex flex-col justify-between ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      {/* Category & Status Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-[#B77983] tracking-wider uppercase">
                            0{index + 1} // {p.category}
                          </span>
                        </div>
                        {p.metrics && (
                          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#351E2B] text-[#E8D5C4] border border-[#624451]">
                            {p.metrics}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#FAF5EF] mb-2 group-hover:text-[#E8D5C4] transition-colors">
                        {p.name}
                      </h3>

                      <p className="font-mono text-xs text-[#D5C0C3] mb-4 font-normal tracking-wide">
                        {p.tagline}
                      </p>

                      <p className="text-sm md:text-base text-[#D5C0C3] leading-relaxed mb-6 font-normal">
                        {p.description}
                      </p>

                      {/* Technical Highlights list */}
                      <div className="space-y-2 mb-8 pt-4 border-t border-[#624451]/60">
                        <p className="font-mono text-[11px] tracking-wider text-[#B77983] uppercase">
                          ARCHITECTURAL HIGHLIGHTS
                        </p>
                        <ul className="space-y-1.5">
                          {p.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="text-xs text-[#FAF5EF]/90 flex items-start gap-2"
                            >
                              <span className="inline-block w-1 h-1 rounded-full bg-[#E8D5C4] mt-1.5 flex-shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Badges & Actions */}
                    <div>
                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#351E2B] text-[#E8D5C4] border border-[#624451]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#624451]/60">
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium tracking-wide border border-[#624451] bg-[#351E2B] text-[#FAF5EF] hover:border-[#B77983] hover:text-[#E8D5C4] transition-all"
                          >
                            <Github className="w-3.5 h-3.5 text-[#B77983]" />
                            <span>Source Code</span>
                          </a>
                        )}

                        {p.liveUrl && (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide bg-[#E8D5C4] text-[#351E2B] hover:bg-[#FAF5EF] transition-all"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#351E2B]" />
                          </a>
                        )}

                        {p.caseStudyUrl && (
                          <a
                            href={p.caseStudyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium tracking-wide border border-[#624451] bg-[#713B50]/30 text-[#FAF5EF] hover:border-[#B77983] hover:text-[#E8D5C4] transition-all"
                          >
                            <FileText className="w-3.5 h-3.5 text-[#B77983]" />
                            <span>Case Study (PDF)</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right / Visual Blueprint Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 bg-[#351E2B] p-8 md:p-10 flex flex-col justify-center border-t lg:border-t-0 ${
                      isReversed
                        ? "lg:border-r lg:border-[#624451] lg:order-1"
                        : "lg:border-l lg:border-[#624451] lg:order-2"
                    }`}
                  >
                    {/* Architectural Blueprint Card */}
                    <div className="relative rounded-xl border border-[#624451] bg-[#432A37]/60 p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#624451]/60">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#D5C0C3]">
                          <Icon className="w-4 h-4 text-[#E8D5C4]" />
                          <span>SYSTEM ARCHITECTURE</span>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-[#B77983]" />
                      </div>

                      {/* Schematic Code or Structural Representation */}
                      <div className="font-mono text-[11px] text-[#D5C0C3] space-y-2 leading-relaxed bg-[#351E2B] p-4 rounded-lg border border-[#624451]">
                        {p.id === "whatchat" && (
                          <>
                            <div className="text-[#B77983]">// REST + Real-Time Engine</div>
                            <div>Client: React.js (Stateful Chat UI)</div>
                            <div>Server: Spring Boot 3.x REST Controller</div>
                            <div>Database: MySQL 8.0 (Normalized Relations)</div>
                            <div className="text-[#E8D5C4]">Feature: Personal Memory Space Vault</div>
                          </>
                        )}
                        {p.id === "hiresphere" && (
                          <>
                            <div className="text-[#B77983]">// Dual-Persona Workflows</div>
                            <div>Candidate: Skill Sandbox & Task Runner</div>
                            <div>Recruiter: Objective Assessment Metrics</div>
                            <div>Auth: JWT Token Bearer Interceptor</div>
                            <div className="text-[#E8D5C4]">Storage: MySQL Persistence Layer</div>
                          </>
                        )}
                        {p.id === "in-memory-cache" && (
                          <>
                            <div className="text-[#B77983]">// Core Data Structures</div>
                            <div>Store: HashMap&lt;K, Node&lt;K, V&gt;&gt;</div>
                            <div>Eviction: DoublyLinkedList (Head/Tail O(1))</div>
                            <div>Policy: Least Recently Used (LRU)</div>
                            <div className="text-[#E8D5C4]">Cleaner: Daemon Thread with TTL Expiry</div>
                          </>
                        )}
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#B77983]">
                        <span>RELIABLE • SCALABLE • CLEAN</span>
                        <span>{p.technologies.slice(0, 2).join(" • ")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Card3D>
          );
        })}
        </div>

        {/* Secondary Projects Section Toggle */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowSecondary(!showSecondary)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-[#624451] bg-[#432A37]/50 text-[#FAF5EF] hover:border-[#B77983] hover:text-[#E8D5C4] transition-all"
          >
            <span>
              {showSecondary
                ? "Hide Additional Projects"
                : "Explore More Systems (Lumora AI & TerraVolt)"}
            </span>
            <span className="text-[#B77983]">{showSecondary ? "↑" : "↓"}</span>
          </button>
        </div>

        {/* Secondary Projects Grid */}
        {showSecondary && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8 mt-10"
          >
            {secondaryProjects.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="p-8 rounded-xl bg-[#432A37] border border-[#624451] hover:border-[#B77983] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-[#B77983] uppercase tracking-wider">
                        {p.category}
                      </span>
                      {p.metrics && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#351E2B] text-[#E8D5C4] border border-[#624451]">
                          {p.metrics}
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif text-2xl font-normal text-[#FAF5EF] mb-2">
                      {p.name}
                    </h4>

                    <p className="text-xs text-[#D5C0C3] leading-relaxed mb-6">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.technologies.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#351E2B] text-[#E8D5C4] border border-[#624451]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#624451]">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FAF5EF] hover:text-[#E8D5C4]"
                      >
                        <Github className="w-3.5 h-3.5 text-[#B77983]" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E8D5C4] hover:text-[#FAF5EF]"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#E8D5C4]" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
