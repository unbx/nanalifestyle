"use client";

import { motion } from "framer-motion";

const stack = [
  "fuser studio",
  "nano banana",
  "kling",
  "midjourney",
  "chatgpt",
  "elevenlabs",
  "final cut pro",
  "after effects",
];

export default function AiStackIndex() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="section-divider mb-16" />

      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-8">
          the toolkit
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-5xl"
        >
          {stack.map((s, i) => (
            <div
              key={s}
              className="font-mono text-[11px] md:text-xs tracking-[0.2em] uppercase text-nana-text/80 flex items-center gap-3"
            >
              <span className="text-nana-muted/60 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="w-3 h-px bg-nana-muted/40" />
              <span>{s}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  );
}
