"use client";

import { motion } from "framer-motion";
import CinemagraphVideo from "../CinemagraphVideo";
import LightboxImage from "../LightboxImage";
import Brief from "../Brief";
import WorkDetail from "../WorkDetail";

const ACCENT = "#e8c878";

// Drop the Fuser workflow screenshot at public/ai/fuser-workflow.png
// to light up the workflow image. Set to true once the file is in place.
const HAS_FUSER_SCREENSHOT = true;

const pipeline = [
  { n: "01", label: "References in", tool: "Hapa 3D · Otherside biomes · Ape refs" },
  { n: "02", label: "Caption + brief", tool: "Florence-2 · LLM text nodes" },
  { n: "03", label: "Composition", tool: "Nano Banana (Gemini Image)" },
  { n: "04", label: "Element extraction", tool: "Wan 2.6 Image" },
  { n: "05", label: "Photoreal pass", tool: "FLUX.1 [Dev]" },
  { n: "06", label: "Cinematic lighting", tool: "Nano Banana relight" },
  { n: "07", label: "Motion", tool: "Kling 3.0 Video" },
  { n: "08", label: "Edit + sound", tool: "Final Cut Pro" },
];

const briefToBrandPipeline = [
  { n: "01", label: "Brief + persona", tool: "LLM text nodes" },
  { n: "02", label: "Direction prompts", tool: "Per-direction prompt scaffolds" },
  { n: "03", label: "Visual exploration", tool: "Nano Banana · FLUX · Recraft" },
  { n: "04", label: "Refinement", tool: "Nano Banana relight" },
  { n: "05", label: "Hero compositions", tool: "Nano Banana final pass" },
  { n: "06", label: "Interactive style guide", tool: "Claude Code node in Fuser" },
];

export default function FusedSection({ index }: { index: number }) {
  return (
    <section
      id="fused"
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
            <span>case study · ai motion posters</span>
          </div>

          <h2 className="font-display font-medium tracking-tight text-4xl md:text-6xl lg:text-7xl mb-4">
            Fused.
          </h2>

          <p className="font-display text-lg md:text-2xl text-nana-text/90 max-w-3xl leading-snug font-light">
            Otherside IP reinterpreted through an AI pipeline.{" "}
            <span className="holo-text font-medium">
              Character sheet to finished motion poster.
            </span>
          </p>
        </motion.div>

        <Brief text="A series of motion posters built end to end with AI tools. Each piece starts as a character sheet, moves through a multi-model image pipeline orchestrated in Fuser Studio, gets dramatic lighting and refinement, animates in Kling, and finishes in Final Cut Pro with music and sound design. The goal was a craft outcome that reads as authored, not generated." />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          <div className="aspect-[4/5] bg-black border border-nana-border rounded-sm overflow-hidden relative">
            <CinemagraphVideo
              src="/Hapa fused.mp4"
              poster="/Hapa Fused biolum still 2.JPG"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-end justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>hapa fused</span>
              <span style={{ color: ACCENT }}>motion poster</span>
            </div>
          </div>
          <div className="aspect-[4/5] bg-black border border-nana-border rounded-sm overflow-hidden relative">
            <CinemagraphVideo
              src="/Milli Fused 1.MOV"
              poster="/Milli fused botanical still 1.JPG"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-end justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>milli fused</span>
              <span style={{ color: ACCENT }}>motion poster</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
            <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
            <span>the workflow</span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            A pipeline stitched in Fuser Studio.{" "}
            <span className="holo-text font-medium">Many models, one taste.</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
        >
          {pipeline.map((s) => (
            <div
              key={s.n}
              className="border border-nana-border/60 rounded-sm p-4 bg-nana-dark/40"
            >
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-2 tabular-nums">
                {s.n}
              </div>
              <div className="font-display text-sm md:text-base text-nana-text mb-1 leading-tight">
                {s.label}
              </div>
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-nana-muted/80">
                {s.tool}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-12"
        >
          {HAS_FUSER_SCREENSHOT ? (
            <LightboxImage
              src="/ai/fuser-workflow.png"
              alt="Fuser Studio workflow graph for Fused motion posters"
              triggerClass="block w-full"
              imgClass="block w-full h-auto"
            />
          ) : (
            <div className="aspect-[16/9] flex flex-col items-center justify-center gap-3 bg-nana-dark/60">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted/80">
                fuser studio · workflow graph
              </div>
              <div className="font-display text-sm md:text-base text-nana-text/60 text-center max-w-md px-6">
                Screenshot drops in at{" "}
                <code className="font-mono text-nana-amber/80">/ai/fuser-workflow.png</code>
                <br />
                then flip{" "}
                <code className="font-mono text-nana-amber/80">HAS_FUSER_SCREENSHOT</code>{" "}
                to true.
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/70">
            <span>fuser into the otherside · full canvas</span>
            <span style={{ color: ACCENT }}>workflow graph</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          <div className="relative bg-black border border-nana-border rounded-sm overflow-hidden">
            <LightboxImage
              src="/ai/fuser-workflow2.png"
              alt="Fuser canvas zoom: references feeding the composition chain"
              triggerClass="block w-full"
              imgClass="block w-full h-auto"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>refs → composition</span>
              <span style={{ color: ACCENT }}>florence-2 · nano banana</span>
            </div>
          </div>
          <div className="relative bg-black border border-nana-border rounded-sm overflow-hidden">
            <LightboxImage
              src="/ai/fuser-workflow3.png"
              alt="Fuser canvas zoom: photoreal pass, cinematic lighting, motion"
              triggerClass="block w-full"
              imgClass="block w-full h-auto"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>photoreal → lighting → motion</span>
              <span style={{ color: ACCENT }}>flux · nano banana · kling</span>
            </div>
          </div>
        </motion.div>

        <WorkDetail
          problem="Generative video tools produce clips quickly. Almost none produce a finished poster. The gap is craft: character coherence across shots, a real art direction, lighting that reads as authored, sound that earns the cut. Without a real pipeline, AI output looks like AI output."
          solution="Built a multi-model pipeline in Fuser Studio that holds the character through every stage. References feed Florence-2 captioning and LLM-shaped prompts. Nano Banana drives the composition pass. Wan 2.6 extracts elements. FLUX.1 handles the photoreal pass. Nano Banana relights for a cinematic three-point setup. Kling 3.0 turns the final still into a cinemagraph. Final Cut Pro brings the cut, music, and sound design. The output reads as a directed piece."
          tools={[
            "Fuser Studio",
            "Florence-2",
            "Nano Banana",
            "Wan 2.6",
            "FLUX.1 [Dev]",
            "Kling 3.0",
            "Final Cut Pro",
          ]}
        />

        {/* ------------------------------------------------------------------ */}
        {/* From Brief to Brand — second manifestation of the Fuser practice   */}
        {/* ------------------------------------------------------------------ */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-24 md:mt-32 pt-16 border-t border-nana-border/40"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
            <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
            <span>fuser practice · brand systems</span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            From Brief to Brand.{" "}
            <span className="holo-text font-medium">
              One canvas. Brief to deliverable.
            </span>
          </h3>
          <p className="text-nana-muted text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            A brand brief in. An interactive style guide out. Visual
            directions explored across multiple image models, the best
            moments narrowed into hero shots, lifestyle, and motion. The
            whole arc lives in one Fuser canvas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="relative w-full bg-black border border-nana-border rounded-sm overflow-hidden mt-8 mb-6"
        >
          <LightboxImage
            src="/ai/From Brief to Brand.png"
            alt="From Brief to Brand — full Fuser canvas overview"
            triggerClass="block w-full"
            imgClass="block w-full h-auto"
          />
          <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
            <span>fuser canvas · full pipeline</span>
            <span style={{ color: ACCENT }}>brand: aura</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 font-mono text-[10px] tracking-[0.2em] uppercase text-nana-muted"
        >
          <div className="flex items-center gap-3 px-4 py-3 border border-nana-border/60 rounded-sm">
            <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
            <span>brand direction</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 border border-nana-border/60 rounded-sm">
            <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
            <span>asset production</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 border border-nana-border/60 rounded-sm">
            <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
            <span>interactive showcase</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12"
        >
          {briefToBrandPipeline.map((s) => (
            <div
              key={s.n}
              className="border border-nana-border/60 rounded-sm p-4 bg-nana-dark/40"
            >
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-2 tabular-nums">
                {s.n}
              </div>
              <div className="font-display text-sm md:text-base text-nana-text mb-1 leading-tight">
                {s.label}
              </div>
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-nana-muted/80">
                {s.tool}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          <div className="relative bg-black border border-nana-border rounded-sm overflow-hidden">
            <LightboxImage
              src="/ai/From Brief to Brand - Workflow A.png"
              alt="From Brief to Brand — brief feeding multi-model exploration"
              triggerClass="block w-full"
              imgClass="block w-full h-auto"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>brief → exploration</span>
              <span style={{ color: ACCENT }}>multi-model</span>
            </div>
          </div>
          <div className="relative bg-black border border-nana-border rounded-sm overflow-hidden">
            <LightboxImage
              src="/ai/From Brief to Brand - Workflow B.png"
              alt="From Brief to Brand — exploration narrowing to interactive style guide"
              triggerClass="block w-full"
              imgClass="block w-full h-auto"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>exploration → deliverable</span>
              <span style={{ color: ACCENT }}>interactive style guide</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center mb-12"
        >
          <div className="md:col-span-7 order-2 md:order-1 relative bg-black border border-nana-border rounded-sm overflow-hidden">
            <LightboxImage
              src="/ai/From Brief to Brand - Product shot.jpg"
              alt="AURA product hero shot — delivered asset"
              triggerClass="block w-full"
              imgClass="block w-full h-auto"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>aura · hero composition</span>
              <span style={{ color: ACCENT }}>delivered asset</span>
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
              the output
            </div>
            <p className="text-nana-text/85 text-sm md:text-base leading-relaxed">
              A polished hero shot delivered from the same canvas. The
              brief came in, the brand came out. No tab switching, no
              asset handoff, no re-prompting in five tools. One
              surface, one practice.
            </p>
          </div>
        </motion.div>

        <WorkDetail
          problem="Brand work usually splits across a team and a week. Even with AI, the bottleneck is tool sprawl — model in one tab, prompts in another, output collection in a third, deliverable in a fourth. The brief gets diluted between hands and apps."
          solution="One Fuser canvas, three lanes. Brand Direction holds the brief and persona in LLM text nodes, then defines per-direction prompt scaffolds. Asset Production runs multi-model exploration in parallel — Nano Banana, FLUX, and Recraft each playing to their strengths across the directions — then narrows down through a Nano Banana relight pass and a final hero composition pass. Interactive Showcase ships a clickable style guide rendered by a Claude Code node, all live inside the same Fuser canvas. The brief stays present at every stage."
          tools={[
            "Fuser Studio",
            "LLM text nodes",
            "Nano Banana",
            "FLUX",
            "Recraft",
            "Claude Code node",
          ]}
        />
      </div>
    </section>
  );
}
