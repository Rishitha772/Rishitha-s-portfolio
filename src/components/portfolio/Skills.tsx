import { motion } from "framer-motion";

const groups = [
   {
  title: "Programming",
  items: [
    "Java",
    "Python",
    "JavaScript",
    "SQL",
    "HTML5",
    "CSS3",
    "OOP",
    "Data Structures & Algorithms"
  ],
  color: "oklch(0.7 0.25 300)",
},
{
  title: "Development",
  items: [
    "Spring Boot",
    "React.js",
    "REST APIs",
    "MySQL",
    "Git",
    "GitHub",
    "Maven",
    "Postman",
    "JWT Authentication",
    "Hibernate/JPA"
  ],
  color: "oklch(0.65 0.22 250)",
},
{
  title: "CS Fundamentals",
  items: [
    "Data Structures",
    "Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
    "DBMS",
    "System Design",
    "Time & Space Complexity"
  ],
  color: "oklch(0.78 0.15 120)",
},
  {
  title: "Product Management",
  items: [
    "Product Strategy",
    "Roadmapping",
    "User Research",
    "Market Research",
    "Wireframing",
    "Agile & Scrum",
    "Product Analytics",
    "A/B Testing"
  ],
  color: "oklch(0.72 0.20 30)",
},
{
  title: "Cloud Computing",
  items: [
    "AWS",
    "Amazon EC2",
    "Amazon S3",
    "AWS Lambda",
    "Amazon RDS",
    "IAM",
    "VPC",
    "Cloud Fundamentals"
  ],
  color: "oklch(0.75 0.18 220)",
},
{
  title: "Artificial Intelligence",
  items: [
    "Generative AI",
    "Prompt Engineering",
    "Retrieval-Augmented Generation (RAG)",
    "Large Language Models (LLMs)",
    "NLP Basics",
    "AI Chatbots",
    "OpenAI APIs",
    "Hugging Face"
  ],
  color: "oklch(0.78 0.18 150)",
},
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-neon-cyan uppercase mb-3">Tech Stack</p>
          <h2 className="font-[Orbitron] text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-8 relative overflow-hidden group"
            >
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: g.color }}
              />
              <h3 className="font-[Orbitron] text-xl font-bold mb-6">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.15 + i * 0.05 }}
                    whileHover={{ scale: 1.08, boxShadow: `0 0 20px ${g.color}` }}
                    className="px-3 py-1.5 rounded-full text-sm glass border cursor-default"
                    style={{ borderColor: `${g.color}40` }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}