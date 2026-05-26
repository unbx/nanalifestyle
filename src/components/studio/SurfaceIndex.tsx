"use client";

import { motion } from "framer-motion";

const surfaces = [
  "brand systems",
  "campaigns",
  "product & ux",
  "social & always on",
  "merch & irl",
  "partner co brand",
];

export default function SurfaceIndex() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="section-divider mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl"
      >
        {surfaces.map((s, i) => (
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

      <div className="section-divider mt-16" />
    </section>
  );
}
