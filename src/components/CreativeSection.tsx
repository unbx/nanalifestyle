"use client";

import { motion } from "framer-motion";
import { creativeWork } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

export default function CreativeSection() {
  return (
    <section id="creative" className="relative py-32 scanlines">
      {/* Warm ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nana-black via-[#0d0a08] to-nana-black" />

      {/* VHS-style corner timestamp */}
      <div className="absolute top-8 right-8 font-mono text-[10px] tracking-wider text-nana-amber/30 z-10">
        REC <span className="inline-block w-1.5 h-1.5 bg-red-500/60 rounded-full ml-1 animate-pulse" />
      </div>

      <div className="relative z-[5] max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-20">
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-nana-amber/60 mb-3">
            01 / Creative
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="holo-text">MIKNNA</span>
          </h2>
          <p className="font-display text-lg md:text-xl text-nana-muted font-light">
            NANA LIFESTYLE
          </p>
        </motion.div>

        {/* Description + Role */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <p className="text-nana-text/80 leading-relaxed text-sm md:text-base">
            {creativeWork.description}
          </p>
          <p className="text-nana-muted leading-relaxed text-sm md:text-base border-l border-nana-amber/20 pl-6">
            {creativeWork.role}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {creativeWork.stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-nana-border/50 rounded-lg p-6 text-center bg-nana-card/30 backdrop-blur-sm"
            >
              <div className="font-display text-3xl md:text-4xl font-bold holo-text mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-nana-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Releases */}
        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.3 }}>
          <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-amber/60 mb-8">
            Discography
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {creativeWork.releases.map((release) => (
              <div
                key={release.title}
                className="group relative bg-nana-card/50 border border-nana-border/30 rounded-lg overflow-hidden hover:border-nana-amber/30 transition-all duration-500"
              >
                {/* Placeholder album art */}
                <div className="aspect-square bg-gradient-to-br from-nana-card to-nana-dark flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="font-display text-xl font-bold text-white/80 mb-1">
                      {release.title}
                    </div>
                    <div className="font-mono text-[10px] tracking-wider text-nana-muted">
                      {release.artist || "MIKNNA"} &middot; {release.year}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-wider uppercase text-nana-amber/60">
                      {release.type}
                    </span>
                    {release.note && (
                      <span className="font-mono text-[9px] text-nana-muted">
                        {release.note}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Collaborators */}
        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.4 }}>
          <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-amber/60 mb-6">
            Collaborators & Partners
          </h3>
          <div className="flex flex-wrap gap-3">
            {creativeWork.collaborators.map((name) => (
              <span
                key={name}
                className="px-4 py-2 border border-nana-border/40 rounded-full font-mono text-xs text-nana-text/70 hover:border-nana-amber/40 hover:text-nana-amber transition-all duration-300"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
