"use client";

import { motion } from "framer-motion";

export default function AiBrief() {
  return (
    <section className="px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted">
              the work
            </div>
            <div className="flex-1 h-px bg-nana-border/40" />
          </div>

          <blockquote className="border-l border-nana-amber/60 pl-6 md:pl-8 py-1 mb-8">
            <p className="font-display text-lg md:text-2xl text-nana-text/90 leading-snug font-light italic">
              The tools matter less than what survives the orchestration.
            </p>
          </blockquote>

          <p className="text-nana-text/80 text-base md:text-lg leading-relaxed">
            Three case studies in AI-native creative direction. Each
            one with the pipeline exposed, the models named, and the
            choices on display.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
