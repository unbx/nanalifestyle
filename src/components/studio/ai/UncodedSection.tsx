"use client";

import { motion } from "framer-motion";
import LightboxImage from "../LightboxImage";
import Brief from "../Brief";
import WorkDetail from "../WorkDetail";

const ACCENT = "#e8c878";

export default function UncodedSection({ index }: { index: number }) {
  return (
    <section
      id="uncoded"
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
            <span>case study · creative direction</span>
          </div>

          <h2 className="font-display font-medium tracking-tight text-4xl md:text-6xl lg:text-7xl mb-4">
            UNCODED Avatars.
          </h2>

          <p className="font-display text-lg md:text-2xl text-nana-text/90 max-w-3xl leading-snug font-light">
            Concept art to character reveal.{" "}
            <span className="holo-text font-medium">
              An identity built across image models.
            </span>
          </p>
        </motion.div>

        <Brief text="UNCODED is a character system that needed concept art, a reveal moment, and a coherent visual identity. Image direction was driven through Midjourney and Nano Banana, with ChatGPT shaping the prompts and the lore. Different models for different beats — Midjourney for painterly, atmospheric concept frames; Nano Banana for tighter, on-brand reveal art. The piece holds because the direction stayed consistent even as the models changed underneath." />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-12"
        >
          <LightboxImage
            src="/OP Uncoded Reveal Thumbnail.jpg"
            alt="UNCODED reveal artwork"
            triggerClass="block w-full"
            imgClass="block w-full h-auto"
          />
          <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
            <span>uncoded · reveal</span>
            <span style={{ color: ACCENT }}>concept · art direction</span>
          </div>
        </motion.div>

        <WorkDetail
          problem="A character reveal that had to feel authored, not generated. Different visual beats (atmospheric concept, tight reveal art, supporting frames) each play to different model strengths. The risk: stitching outputs from multiple models into something that still reads as one piece."
          solution="ChatGPT held the prompts and the lore so the brief stayed consistent. Midjourney for the painterly, atmospheric concept frames. Nano Banana for the tighter, on-brand reveal compositions. Different models for different beats, one art direction across all of them. Cut against picture in FCP."
          tools={[
            "Midjourney",
            "Nano Banana",
            "ChatGPT",
            "Final Cut Pro",
          ]}
        />
      </div>
    </section>
  );
}
