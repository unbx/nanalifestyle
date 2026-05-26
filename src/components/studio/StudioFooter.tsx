"use client";

import { motion } from "framer-motion";

export default function StudioFooter() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 pt-32 pb-16 border-t border-nana-border/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-6">
            thanks for the time
          </div>
          <h3 className="font-display font-light text-3xl md:text-5xl tracking-tight mb-10 max-w-3xl">
            Available for creative direction, identity, and systems work.
          </h3>
          <a
            href="https://nana.works"
            className="studio-link font-display text-xl md:text-2xl font-medium"
          >
            More at nana.works →
          </a>
        </motion.div>

        <div className="section-divider my-20" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted/70">
          <span>together strong</span>
          <span>work / sean nana / 2026</span>
        </div>
      </div>
    </footer>
  );
}
