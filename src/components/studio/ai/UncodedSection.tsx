"use client";

import { motion } from "framer-motion";
import LightboxImage from "../LightboxImage";
import Brief from "../Brief";
import WorkDetail from "../WorkDetail";

const ACCENT = "#e8c878";

// Drop the ElevenLabs Chinese voiceover at one of these paths to light up
// the player. Audio (mp3/wav) preferred; video (mp4) supported too.
const HAS_ELEVENLABS_VO = false;
const VO_KIND: "audio" | "video" = "audio";
const VO_SRC = "/ai/uncoded-elevenlabs-zh.mp3"; // or "/ai/uncoded-elevenlabs-zh.mp4"

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
            <span>case study · creative direction + voice</span>
          </div>

          <h2 className="font-display font-medium tracking-tight text-4xl md:text-6xl lg:text-7xl mb-4">
            UNCODED Avatars.
          </h2>

          <p className="font-display text-lg md:text-2xl text-nana-text/90 max-w-3xl leading-snug font-light">
            Concept art to character reveal.{" "}
            <span className="holo-text font-medium">
              Voice in Mandarin, from ElevenLabs.
            </span>
          </p>
        </motion.div>

        <Brief text="UNCODED is a character system that needed concept art, a reveal moment, and a voice. Image direction was driven through Midjourney and Nano Banana with ChatGPT shaping the prompts and the lore. The reveal called for a Mandarin voiceover that read native, not localized. ElevenLabs delivered the voice. The piece holds because the visual direction and the voice were built against the same brief, at the same time." />

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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
            <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
            <span>voice · elevenlabs</span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            Mandarin voiceover.{" "}
            <span className="holo-text font-medium">
              Generated, directed, cut in.
            </span>
          </h3>
          <p className="text-nana-muted text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            ElevenLabs handled the voice. The brief was a read that felt
            native to Mandarin speakers, not a translation read by a
            Western voice. Tuned for pacing and warmth, then placed
            against the picture in FCP.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="relative w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-12"
          style={{ borderColor: `${ACCENT}40` }}
        >
          {HAS_ELEVENLABS_VO ? (
            VO_KIND === "audio" ? (
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-4">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span>elevenlabs · mandarin voiceover</span>
                </div>
                <audio
                  controls
                  preload="metadata"
                  src={VO_SRC}
                  className="w-full"
                />
              </div>
            ) : (
              <div className="relative aspect-video w-full">
                <video
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                  src={VO_SRC}
                  controls
                  playsInline
                  preload="metadata"
                />
                <div className="pointer-events-none absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/70">
                  <span>elevenlabs · mandarin voiceover</span>
                  <span style={{ color: ACCENT }}>uncoded · reveal</span>
                </div>
              </div>
            )
          ) : (
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-6">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                <span>elevenlabs · mandarin voiceover</span>
              </div>
              <div className="font-display text-base md:text-lg text-nana-text/70 max-w-xl leading-relaxed">
                Voiceover slot ready. Drop the file at{" "}
                <code className="font-mono text-nana-amber/90">
                  /ai/uncoded-elevenlabs-zh.mp3
                </code>{" "}
                (audio) or{" "}
                <code className="font-mono text-nana-amber/90">
                  /ai/uncoded-elevenlabs-zh.mp4
                </code>{" "}
                (video), then flip{" "}
                <code className="font-mono text-nana-amber/90">HAS_ELEVENLABS_VO</code>{" "}
                to true and set{" "}
                <code className="font-mono text-nana-amber/90">VO_KIND</code>{" "}
                accordingly.
              </div>
            </div>
          )}
        </motion.div>

        <WorkDetail
          problem="A character reveal that had to feel real in two registers at once: a strong visual identity that read as authored, and a voiceover in Mandarin that read native. Hiring a VO talent and running a session was the long path. Localization through generic TTS would have read flat and broken the moment."
          solution="ChatGPT used as a prompt and lore partner. Midjourney and Nano Banana for the visual concepting. ElevenLabs for the Mandarin voiceover, directed against the same brief as the picture, tuned for pacing and warmth. Cut against picture in FCP. The voice landed."
          tools={[
            "Midjourney",
            "Nano Banana",
            "ChatGPT",
            "ElevenLabs",
            "Final Cut Pro",
          ]}
        />
      </div>
    </section>
  );
}
