"use client";

import { motion } from "framer-motion";
import type { CaseStudy as CaseStudyType } from "@/data/studio";

type Props = {
  study: CaseStudyType;
  index: number;
};

export default function CaseStudy({ study, index }: Props) {
  return (
    <section
      id={study.slug}
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-nana-border/40"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted/80 mb-6">
            <span className="holo-text font-medium tabular-nums">
              {String(index).padStart(2, "0")}
            </span>
            <span className="w-8 h-px bg-nana-muted/40" />
            <span>case study</span>
          </div>

          <h2 className="font-display font-medium tracking-tight text-4xl md:text-6xl lg:text-7xl mb-4">
            {study.title}
          </h2>

          <p className="font-display text-lg md:text-2xl text-nana-text/90 max-w-3xl leading-snug font-light">
            {study.kicker}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16"
        >
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
              the problem
            </div>
            <p className="text-nana-text/80 text-sm md:text-base leading-relaxed">
              {study.problem}
            </p>
          </div>
          <div className="md:col-span-1 hidden md:flex justify-center">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-nana-border to-transparent" />
          </div>
          <div className="md:col-span-8">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
              the move
            </div>
            <p className="text-nana-text text-base md:text-lg leading-relaxed">
              {study.move}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-[16/9] w-full bg-nana-card/40 border border-nana-border rounded-sm flex items-center justify-center mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 holo-bg opacity-[0.04]" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted/60 relative">
            assets pending
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {study.surfaces.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-nana-border/60 rounded-full text-nana-muted"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
