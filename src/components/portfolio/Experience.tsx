import { motion } from "framer-motion";
import { useState } from "react";
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Trophy,
} from "lucide-react";

interface TimelineItem {
  id: string;
  category: "experience" | "education" | "certifications";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlight?: string;
  keyPoints?: string[];
}

const timelineData: TimelineItem[] = [
  // Experience
  {
    id: "infosys",
    category: "experience",
    title: "Software Development Intern",
    organization: "Infosys Springboard Virtual Internship 7.0 Batch 2",
    period: "Jul 2026 - Sept 2026",
    description:
      "Selected for the virtual internship program to apply core Python concepts, strengthen application engineering foundations, and build practical software modules.",
    highlight: "Internship Program",
    keyPoints: [
      "Application architecture and algorithmic development using Python",
      "Hands-on problem solving adhering to enterprise coding standards",
    ],
  },
  {
    id: "hiresphere",
    category: "experience",
    title: "Founder & Lead Builder",
    organization: "HireSphere",
    period: "May 2026 - Aug 2026",
    description:
      "Took full product ownership from inception to release: mapped user journeys, designed the UI/UX architecture, built the Spring Boot REST backend with MySQL, and authored the strategic product case study.",
    highlight: "Product Ownership",
    keyPoints: [
      "Engineered task-based recruitment evaluation workflows",
      "Designed and deployed the full-stack system with Spring Boot & React",
      "Published a comprehensive 26-page product discovery case study",
    ],
  },

  // Education
  {
    id: "mrcew",
    category: "education",
    title: "B.Tech in Electronics and Communication Engineering",
    organization: "Malla Reddy College of Engineering for Women (MRCEW)",
    period: "2023 - 2027",
    description:
      "Comprehensive engineering education focusing on core computing fundamentals, data communication, and software engineering. Maintaining consistent academic excellence throughout the curriculum.",
    highlight: "8.5 CGPA",
    keyPoints: [
      "Cumulative Grade Point Average: 8.5 / 10.0",
      "Coursework: Computer Networks, DBMS, Operating Systems, OOP with Java, Embedded Systems",
      "Active participant in technical symposiums, hackathons, and departmental initiatives",
    ],
  },

  // Certifications & Achievements
  {
    id: "aicte-1m1b",
    category: "certifications",
    title: "AICTE 1M1B Green Internship — Top 30 National Finalist",
    organization: "AICTE & 1M1B Foundation",
    period: "Jan 2026 - Jul 2026",
    description:
      "Developed TerraVolt (predictive industrial energy forecasting). Ranked among the Top 30 finalists nationwide and chosen for the in-person Workplace Experience program in Bangalore.",
    highlight: "Top 30 Nationally",
  },
  {
    id: "nptel-elite",
    category: "certifications",
    title: "NPTEL Elite Silver Certifications",
    organization: "NPTEL — IIT Kharagpur / IIT Madras",
    period: "2023 — 2024",
    description:
      "Awarded Elite Silver distinction across rigorous nationwide examinations in IoT Systems, Industry 4.0, and Technical English Communication.",
    highlight: "Elite Silver Distinction",
  },
  {
    id: "aws-cloud",
    category: "certifications",
    title: "AWS Cloud Practitioner Essentials",
    organization: "Amazon Web Services (AWS Training & Certification)",
    period: "2025",
    description:
      "Validated foundational cloud knowledge: AWS compute, S3 object storage, VPC networking, security posture, and cloud-native architecture.",
    highlight: "Cloud Architecture",
  },
  {
    id: "java-mastery",
    category: "certifications",
    title: "Java Programming Mastery & OOP Principles",
    organization: "Udemy Credential",
    period: "2026",
    description:
      "Deep dive into the Java Collections Framework, multi-threading, memory management, and clean Object-Oriented design patterns.",
    highlight: "Core Java",
  },
  {
    id: "web-bootcamp",
    category: "certifications",
    title: "Full-Stack Web Development Bootcamp",
    organization: "Udemy Credential",
    period: "2026",
    description:
      "End-to-end full stack principles: RESTful services, React components, relational databases, and API integration best practices.",
    highlight: "Full-Stack Systems",
  },
  {
    id: "microsoft-ai",
    category: "certifications",
    title: "Microsoft AI Skills Fest Credential",
    organization: "Microsoft",
    period: "2024",
    description:
      "Credentials validating fundamentals in Artificial Intelligence models, machine learning concepts, and responsible AI practices.",
    highlight: "AI Fundamentals",
  },
];

export function Experience() {
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "education" | "certifications">("all");

  const filteredItems =
    activeTab === "all"
      ? timelineData
      : timelineData.filter((item) => item.category === activeTab);

  return (
    <section
      id="experience"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#F8F3EC] text-[#351E2B] border-t border-[#DDCFBF]"
    >
      <div className="max-w-7xl mx-auto">
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
              05 / TIMELINE & MILESTONES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#351E2B]">
              Experience & <span className="italic font-light text-[#713B50]">Education</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {(
              [
                { key: "all", label: "All Milestones" },
                { key: "experience", label: "Experience" },
                { key: "education", label: "Education" },
                { key: "certifications", label: "Honors & Certs" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${activeTab === tab.key
                  ? "bg-[#351E2B] text-[#FAF5EF] font-semibold shadow-sm"
                  : "border border-[#DDCFBF] bg-[#FFFFFF] text-[#624451] hover:text-[#351E2B] hover:border-[#713B50]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Education Hero Feature */}
        {(activeTab === "all" || activeTab === "education") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-8 md:p-10 rounded-2xl bg-[#FFFFFF] border border-[#DDCFBF] shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none hidden md:block">
              <GraduationCap className="w-48 h-48 text-[#351E2B]" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#713B50] font-semibold">
                  ACADEMIC FOUNDATION
                </span>
                <span className="text-[#DDCFBF]">•</span>
                <span className="font-mono text-xs text-[#351E2B] font-semibold">
                  2023 - 2027
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#351E2B] mb-2">
                B.Tech in Electronics and Communication Engineering
              </h3>

              <p className="text-sm font-semibold text-[#713B50] mb-3">
                Malla Reddy College of Engineering for Women (MRCEW)
              </p>

              <p className="text-sm text-[#624451] leading-relaxed mb-6 font-normal">
                Pursuing comprehensive technical studies with an emphasis on computer systems,
                algorithms, and communication architectures. Actively combining formal engineering
                principles with modern backend software engineering.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                <div className="px-3.5 py-1.5 rounded-lg bg-[#FAF5EF] border border-[#DDCFBF] text-[#351E2B]">
                  CGPA: <strong className="text-[#713B50] font-bold">8.5 / 10.0</strong>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-[#FAF5EF] border border-[#DDCFBF] text-[#624451]">
                  Location: Hyderabad, India
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-[#FAF5EF] border border-[#DDCFBF] text-[#624451]">
                  Status: Final Year
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems
            .filter((item) => activeTab !== "all" || item.category !== "education")
            .map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-7 rounded-xl bg-[#FFFFFF] border border-[#DDCFBF] hover:border-[#713B50] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-[#DDCFBF]/60">
                    <span className="font-mono text-xs text-[#713B50] font-semibold">
                      {item.period}
                    </span>
                    {item.highlight && (
                      <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#FAF5EF] text-[#351E2B] border border-[#DDCFBF] font-semibold">
                        {item.highlight}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-xl font-medium text-[#351E2B] mb-1.5">
                    {item.title}
                  </h4>

                  <p className="text-xs font-mono text-[#624451] mb-4">
                    {item.organization}
                  </p>

                  <p className="text-xs md:text-sm text-[#624451] leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>

                  {item.keyPoints && item.keyPoints.length > 0 && (
                    <ul className="space-y-1.5 pt-3 border-t border-[#DDCFBF]/60 mb-4">
                      {item.keyPoints.map((pt, i) => (
                        <li
                          key={i}
                          className="text-xs text-[#351E2B] flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#713B50] mt-1.5 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-3 border-t border-[#DDCFBF]/60 flex items-center justify-between text-[11px] font-mono text-[#624451]">
                  <span className="capitalize text-[#713B50] font-medium">{item.category}</span>
                  <span className="text-[#351E2B] font-medium">Verified Credential</span>
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
}
