"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { dopple } from "@/data/dopple";
import Brief from "./Brief";
import WorkDetail from "./WorkDetail";

export default function DoppleCaseStudy({ index }: { index: number }) {
  return (
    <section
      id="dopple"
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
            DOPPEL
          </h2>

          <p className="font-display text-lg md:text-2xl text-nana-text/90 max-w-3xl leading-snug font-light">
            Brand system across 2D, 3D, and AI agents.
          </p>
        </motion.div>

        <Brief
          text="Doppel is a 3D world building platform where AI agents create voxel environments. The brand identity needed to survive in three contexts at once: 2D guidelines for humans, 3D rules for the world engine, and a machine readable spec for the agents themselves. Success meant one system that all three readers could trust."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-20"
        >
          <Image
            src="/studio/dopple/Doppel OpenGraph.jpg"
            alt="Doppel splash"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nana-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/60">
            <span>doppel / world style system</span>
            <span className="text-nana-amber/80">v 2.0</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
            a design system for humans and agents
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            A style guide.{" "}
            <span className="holo-text font-medium">
              Built for 2D, 3D, and agents.
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {dopple.formats.map((f, i) => (
            <motion.a
              key={f.key}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group block bg-nana-card/40 border border-nana-border rounded-sm overflow-hidden hover:border-nana-text/40 transition-all duration-300 hover:-translate-y-0.5"
              style={{ "--accent": f.accent } as React.CSSProperties}
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.3em] uppercase px-2 py-1 rounded-sm bg-black/70 backdrop-blur-sm"
                  style={{ color: f.accent }}
                >
                  {f.surface}
                </div>
              </div>
              <div className="p-6">
                <div
                  className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: f.accent }}
                >
                  {f.label}
                </div>
                <div className="flex items-baseline justify-between mb-2 gap-3">
                  <h4 className="font-display text-xl font-medium">
                    {f.title}
                  </h4>
                  <span
                    className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity"
                    style={{ color: f.accent }}
                    aria-hidden
                  >
                    open ↗
                  </span>
                </div>
                <p className="text-nana-muted text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mb-24 -mt-12">
          <WorkDetail
            problem="A brand identity that has to read across three audiences at once. Humans on 2D guidelines. The 3D engine rendering environments. AI agents building worlds with no human in the room. The brand has to give agents enough rules to create worlds inside the design system."
            solution="2D visual guidelines for humans. Design styles and themes rendered in 3D environments. A machine readable spec that instructs agents to design inside the system. The brand keeps its sense of style whether a person, an engine, or an agent is reading."
            tools={["Figma", "Notion", "Three.js", "JSON", "Cursor", "Claude Code"]}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24"
        >
          <div className="md:col-span-5 bg-nana-card/40 border border-nana-border rounded-sm p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-4">
                signature color
              </div>
              <div className="flex items-baseline gap-3 mb-3">
                <h4
                  className="font-display text-3xl md:text-4xl font-medium"
                  style={{ color: dopple.pulse.hex }}
                >
                  Pulse
                </h4>
                <span className="font-mono text-xs text-nana-muted">
                  {dopple.pulse.hex}
                </span>
              </div>
              <p className="text-nana-text/80 text-sm leading-relaxed max-w-sm">
                The heartbeat. Works across any foundation. On dark it glows
                electric, on light it pops fresh. Carries through every world
                the agents build.
              </p>
            </div>
            <div
              className="h-12 rounded-sm mt-6"
              style={{
                background: `linear-gradient(90deg, ${dopple.pulse.hex} 0%, ${dopple.pulse.hex}66 50%, transparent 100%)`,
                boxShadow: `0 0 60px ${dopple.pulse.hex}33`,
              }}
            />
          </div>

          <div className="md:col-span-7 bg-black border border-nana-border rounded-sm overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-nana-border bg-nana-dark">
              <span className="w-2 h-2 rounded-full bg-nana-muted/30" />
              <span className="w-2 h-2 rounded-full bg-nana-muted/30" />
              <span className="w-2 h-2 rounded-full bg-nana-muted/30" />
              <span className="ml-3 font-mono text-[10px] tracking-[0.2em] uppercase text-nana-muted">
                doppel-world-style-guide.json
              </span>
            </div>
            <pre className="flex-1 p-5 font-mono text-[11px] md:text-xs leading-relaxed text-nana-text/85 overflow-x-auto">
              <code>{dopple.specSnippet}</code>
            </pre>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2"
        >
          {[
            "brand system",
            "3d world",
            "agent spec",
            "documentation",
            "ai native",
            "color theory",
          ].map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-nana-border/60 rounded-full text-nana-muted"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
