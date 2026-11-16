import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rishithakhandesh@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Please enter your message.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Form submission feedback and mailto trigger
    const mailtoUrl = `mailto:rishithakhandesh@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open user's email client cleanly
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
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
              06 / GET IN TOUCH
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF5EF]">
              Let's Build <span className="italic font-light text-[#E8D5C4]">Something Meaningful.</span>
            </h2>
          </div>
          <p className="text-sm text-[#D5C0C3] max-w-md mt-3 md:mt-0 font-normal">
            I'm always interested in connecting with people, exploring opportunities, and discussing interesting technology ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl font-normal text-[#FAF5EF] mb-3">
                Direct Channels
              </h3>
              <p className="text-sm text-[#D5C0C3] leading-relaxed">
                Whether you have an engineering role, a technical inquiry, or would like to discuss software systems, my inbox is open.
              </p>
            </div>

            {/* Email Card with Copy Button */}
            <div className="p-6 rounded-xl bg-[#432A37] border border-[#624451] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#B77983] uppercase tracking-wider">
                  PRIMARY EMAIL
                </span>
                <span className="font-mono text-[10px] text-[#E8D5C4] px-2 py-0.5 rounded bg-[#351E2B] border border-[#624451]">
                  FAST RESPONSE
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 bg-[#351E2B] p-3 rounded-lg border border-[#624451]">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#E8D5C4] flex-shrink-0" />
                  <span className="font-mono text-xs md:text-sm text-[#FAF5EF] truncate">
                    rishithakhandesh@gmail.com
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded text-xs font-mono bg-[#432A37] text-[#D5C0C3] hover:text-[#FAF5EF] hover:border-[#B77983] border border-[#624451] transition-all flex items-center gap-1.5 flex-shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#E8D5C4]" />
                      <span className="text-[#E8D5C4]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#D5C0C3] font-mono">
                Location: Hyderabad, India (Open to Relocation & Remote Roles)
              </p>
            </div>

            {/* Social Links List */}
            <div className="space-y-3">
              <p className="font-mono text-xs text-[#B77983] uppercase tracking-wider">
                PROFESSIONAL PROFILES
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/rishitha-khandesh-b766b330a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#432A37]/70 border border-[#624451] hover:border-[#B77983] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-[#E8D5C4]" />
                    <span className="text-xs font-medium text-[#FAF5EF]">LinkedIn</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B77983] group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="https://github.com/Rishitha772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#432A37]/70 border border-[#624451] hover:border-[#B77983] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-[#E8D5C4]" />
                    <span className="text-xs font-medium text-[#FAF5EF]">GitHub</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B77983] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-10 rounded-2xl bg-[#432A37] border border-[#624451] shadow-2xl relative">
              <div className="mb-6 pb-4 border-b border-[#624451]">
                <h3 className="font-serif text-2xl font-normal text-[#FAF5EF] mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#D5C0C3] font-mono">
                  Fill in your details below to start a conversation.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#351E2B] border border-[#624451] flex items-center justify-center mx-auto text-[#E8D5C4]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#FAF5EF]">
                    Message Dispatched
                  </h4>
                  <p className="text-sm text-[#D5C0C3] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#E8D5C4] font-medium">{formData.name}</span>. Your mail client has been opened with your inquiry. You can also write directly to <strong className="text-[#FAF5EF]">rishithakhandesh@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider bg-[#E8D5C4] text-[#351E2B] font-medium mt-4 hover:bg-[#FAF5EF] transition-colors"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase tracking-wider text-[#D5C0C3]"
                      >
                        Your Name <span className="text-[#B77983]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Eleanor Vance"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-lg bg-[#351E2B] border text-sm text-[#FAF5EF] placeholder:text-[#624451] focus:outline-none transition-colors ${
                          errors.name
                            ? "border-[#9f3a4b] focus:border-[#9f3a4b]"
                            : "border-[#624451] focus:border-[#B77983]"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-[#E8D5C4] font-mono mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs uppercase tracking-wider text-[#D5C0C3]"
                      >
                        Email Address <span className="text-[#B77983]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. eleanor@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-lg bg-[#351E2B] border text-sm text-[#FAF5EF] placeholder:text-[#624451] focus:outline-none transition-colors ${
                          errors.email
                            ? "border-[#9f3a4b] focus:border-[#9f3a4b]"
                            : "border-[#624451] focus:border-[#B77983]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-[#E8D5C4] font-mono mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block font-mono text-xs uppercase tracking-wider text-[#D5C0C3]"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Software Developer Opportunity / Project Inquiry"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-[#351E2B] border border-[#624451] text-sm text-[#FAF5EF] placeholder:text-[#624451] focus:outline-none focus:border-[#B77983] transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs uppercase tracking-wider text-[#D5C0C3]"
                    >
                      Message <span className="text-[#B77983]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Share a brief overview of your project, opportunity, or thoughts..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-lg bg-[#351E2B] border text-sm text-[#FAF5EF] placeholder:text-[#624451] focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? "border-[#9f3a4b] focus:border-[#9f3a4b]"
                          : "border-[#624451] focus:border-[#B77983]"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-[#E8D5C4] font-mono mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#E8D5C4] text-[#351E2B] hover:bg-[#FAF5EF] transition-all duration-300 shadow-md hover:shadow-[0_4px_16px_rgba(232,213,196,0.25)]"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5 text-[#351E2B]" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
