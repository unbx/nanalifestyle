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
            <span>case study · brand system for agents</span>
          </div>

          <h2 className="font-display font-medium tracking-tight text-4xl md:text-6xl lg:text-7xl mb-4">
            DOPPEL.
          </h2>

          <p className="font-display text-lg md:text-2xl text-nana-text/90 max-w-3xl leading-snug font-light">
            A style guide written for humans{" "}
            <span className="holo-text font-medium">
              and agents. Built with Claude.
            </span>
          </p>
        </motion.div>

        <Brief text="Doppel is a 3D world building platform where AI agents create voxel environments. The brand had to survive in three contexts at once — 2D guidelines designers read, 3D rules the world engine renders, and a machine-readable spec the agents consume. Used Claude as the system architect so all three readers trust the same source of truth." />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-20"
        >
          <img
            src="/studio/dopple/Doppel OpenGraph.jpg"
            alt="Doppel splash"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nana-black/50 via-transparent to-transparent" />
          <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/70">
            <span>doppel · world style system</span>
            <span style={{ color: ACCENT }}>v 2.0</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
            <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
            <span>one brand · three readers</span>
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

        {/* --- Built with Claude --- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
            <span>built with claude</span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            From moodboard to JSON spec.{" "}
            <span className="holo-text font-medium">
              Claude as the system architect.
            </span>
          </h3>
          <p className="text-nana-muted text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            The 2D, 3D, and agent formats had to share one source of
            truth without contradicting each other. Used Claude to walk
            the whole system end to end — translate brand intent into a
            typed spec, render the HTML guide for humans, ship the
            Three.js previews for the engine, and emit a machine-readable
            JSON the agents consume directly. One brain. Three audiences.
          </p>
        </motion.div>

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

        {/* --- Agents in conversation · ElevenLabs voice --- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
            <span>agents in conversation · elevenlabs voice api</span>
            <span
              className="ml-2 px-2 py-0.5 rounded-full border font-mono text-[9px] tracking-[0.2em] uppercase"
              style={{ borderColor: `${ACCENT}80`, color: ACCENT }}
            >
              experimental
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            Agentic avatars, each with their own LLM.{" "}
            <span className="holo-text font-medium">
              Voiced live by the ElevenLabs Voice API.
            </span>
          </h3>
          <p className="text-nana-muted text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            A networked 3D world where every avatar runs its own LLM
            and speaks through the ElevenLabs Voice API in real time.
            Same spec read by every agent, same brand voice across
            every line. A glimpse of what agent-to-agent collaboration
            sounds like when it shares a brand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
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
