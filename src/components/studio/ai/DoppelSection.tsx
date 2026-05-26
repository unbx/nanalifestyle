"use client";

import { motion } from "framer-motion";
import Brief from "../Brief";
import WorkDetail from "../WorkDetail";
import { dopple } from "@/data/dopple";

const ACCENT = "#B8FF5C"; // Doppel Pulse

// Networked 3D world demo. Each avatar runs its own LLM,
// voiced in real time by the ElevenLabs Voice API.
const DEMO_1 = "/ai/doppel demo1.mp4";
const DEMO_2 = "/ai/DoppelDemo2.mp4";

export default function DoppelSection({ index }: { index: number }) {
  return (
    <section
      id="doppel"
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
            <span>case study · agentic system + voice</span>
          </div>

          <h2 className="font-display font-medium tracking-tight text-4xl md:text-6xl lg:text-7xl mb-4">
            DOPPEL.
          </h2>

          <p className="font-display text-lg md:text-2xl text-nana-text/90 max-w-3xl leading-snug font-light">
            Agentic avatars, each with their own LLM.{" "}
            <span className="holo-text font-medium">
              Voiced live by the ElevenLabs Voice API.
            </span>
          </p>
        </motion.div>

        <Brief text="Doppel is a 3D world building platform where every avatar runs its own LLM and speaks live through the ElevenLabs Voice API. The experimental setup sits on top of a real brand system — a single typed spec, architected with Claude, that designers, the 3D engine, and the agents themselves all read from. Same source of truth, three readers, one voice across all of them." />

        {/* --- LEAD EXHIBIT: Agentic ElevenLabs demos --- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3 flex-wrap">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
            <span>the experiment · elevenlabs voice api</span>
            <span
              className="ml-2 px-2 py-0.5 rounded-full border font-mono text-[9px] tracking-[0.2em] uppercase"
              style={{ borderColor: `${ACCENT}80`, color: ACCENT }}
            >
              experimental
            </span>
          </div>
          <p className="text-nana-muted text-sm md:text-base max-w-2xl leading-relaxed">
            A networked 3D world. Every avatar runs its own LLM. Same
            spec read by every agent. Same brand voice across every
            line. A glimpse of what agent-to-agent collaboration sounds
            like when it shares a brand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24"
        >
          <div
            className="relative aspect-video bg-black border rounded-sm overflow-hidden"
            style={{ borderColor: `${ACCENT}40` }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={DEMO_1}
              controls
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>demo · networked agents</span>
              <span style={{ color: ACCENT }}>elevenlabs voice api</span>
            </div>
          </div>
          <div
            className="relative aspect-video bg-black border rounded-sm overflow-hidden"
            style={{ borderColor: `${ACCENT}40` }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={DEMO_2}
              controls
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>demo · agent dialogue</span>
              <span style={{ color: ACCENT }}>elevenlabs voice api</span>
            </div>
          </div>
        </motion.div>

        {/* --- Supporting context: the underlying brand system --- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
            <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
            <span>the system underneath · one brand · three readers</span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            A style guide, built with Claude.{" "}
            <span className="holo-text font-medium">
              For 2D, 3D, and agents.
            </span>
          </h3>
          <p className="text-nana-muted text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            The agentic voice work runs on top of a real brand system.
            One typed spec, architected with Claude. Three live
            artifacts — an HTML guide for designers, a Three.js voxel
            preview for the engine, and a machine-readable JSON the
            agents consume directly.
          </p>
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
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
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

        <WorkDetail
          problem="A brand identity that has to read across three audiences at once. Humans on 2D guidelines. The 3D engine rendering environments. AI agents building worlds with no human in the room. The brand has to give agents enough rules to create inside the design system — and survive when those agents talk to each other in voice."
          solution="Used Claude end-to-end to architect a single typed spec, then emit it three ways: an HTML style guide for designers, a Three.js voxel preview for the engine, and a machine-readable JSON the agents consume. The spec is the source of truth. In the experimental demo, every avatar in the networked 3D world runs its own LLM and speaks live through the ElevenLabs Voice API — same brand voice surviving the handoff from text, to speech, to agent-to-agent dialogue."
          tools={[
            "Claude Code",
            "Figma",
            "Notion",
            "Three.js",
            "JSON",
            "ElevenLabs Voice API",
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 mt-12"
        >
          {[
            "brand system",
            "3d world",
            "agent spec",
            "ai native",
            "claude-built",
            "elevenlabs voice",
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
