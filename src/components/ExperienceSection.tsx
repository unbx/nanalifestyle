"use client";

import { motion } from "framer-motion";
import { experienceWork } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32">
      {/* Neutral ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nana-black via-[#0a0a0c] to-nana-black" />

      <div className="relative z-[5] max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-20">
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-nana-purple/60 mb-3">
            03 / Experience
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="holo-text">Enterprise</span>
          </h2>
          <p className="font-display text-lg md:text-xl text-nana-muted font-light">
            L&D, Enablement & Experience Design
          </p>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-nana-text/70 text-sm md:text-base leading-relaxed max-w-3xl mb-20"
        >
          {experienceWork.description}
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-nana-purple/30 via-nana-purple/10 to-transparent" />

          {experienceWork.roles.map((role, i) => (
            <motion.div
              key={role.company}
              {...fadeUp}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative pl-8 md:pl-20 mb-16 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-2 w-2 h-2 -translate-x-[3.5px] rounded-full bg-nana-purple/60 ring-4 ring-nana-black" />

              {/* Company & role */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-1">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                    {role.company}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-nana-muted">
                    {role.period}
                  </span>
                </div>
                <p className="font-display text-base text-nana-purple/70 mb-2">
                  {role.title}
                </p>
                {role.context && (
                  <p className="font-mono text-[10px] tracking-wider text-nana-muted/60 uppercase">
                    {role.context}
                  </p>
                )}
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                {role.highlights.map((h, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-nana-purple/40 mt-2 flex-shrink-0" />
                    <span className="text-nana-text/60 text-sm leading-relaxed">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-nana-border/20"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-purple/40 mb-4">
            Education
          </p>
          <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
            <h4 className="font-display text-lg font-medium text-white/80">
              {experienceWork.education.school}
            </h4>
            <span className="text-nana-muted text-sm">
              {experienceWork.education.degree} ({experienceWork.education.year})
            </span>
          </div>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
