"use client";

import { motion } from "framer-motion";
import Brief from "../Brief";
import WorkDetail from "../WorkDetail";

const ACCENT = "#e8c878";

// Two pitch films, one voice. Files live in public/ai/.
const VIDEO_EN = "/ai/op-dashboard-demo-web.mp4";
const VIDEO_ZH = "/ai/AIP-434 (Chinese).mp4";

export default function OtherPageGrantSection({ index }: { index: number }) {
  return (
    <section
      id="other-page-grant"
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
            <span>case study · pitch film + voice</span>
          </div>

          <h2 className="font-display font-medium tracking-tight text-4xl md:text-6xl lg:text-7xl mb-4">
            Other Page.
          </h2>

          <p className="font-display text-lg md:text-2xl text-nana-text/90 max-w-3xl leading-snug font-light">
            One ElevenLabs voice. Two languages.{" "}
            <span className="holo-text font-medium">
              A $1.5M grant won. The project that became OpenPage.
            </span>
          </p>
        </motion.div>

        <Brief text="A pitch film for what became OpenPage. The grant was decided by a panel where the Chinese community held heavy influence. The proposal shipped in two languages — English and Mandarin — both narrated by the same ElevenLabs voice, created for the brand register and then directed to speak across cultures. One voice talent, two languages, no fracture in the brand. The grant was awarded." />

        {/* --- The voice: ElevenLabs centerpiece --- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
            <span>the voice · elevenlabs</span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            One voice, built in ElevenLabs.{" "}
            <span className="holo-text font-medium">
              Then directed to speak two languages.
            </span>
          </h3>
          <p className="text-nana-muted text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            Created a custom voice in ElevenLabs that fit the brand
            register. Used that same voice for the English narration,
            then directed it to speak Mandarin natively for the Chinese
            audience. The decision panel heard the brand twice in two
            languages and never heard a different voice.
          </p>
        </motion.div>

        {/* --- Two pitch films, side by side --- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        >
          <div className="relative aspect-video bg-black border border-nana-border rounded-sm overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={VIDEO_EN}
              controls
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>english · pitch film</span>
              <span style={{ color: ACCENT }}>elevenlabs voice</span>
            </div>
          </div>
          <div
            className="relative aspect-video bg-black border rounded-sm overflow-hidden"
            style={{ borderColor: `${ACCENT}40` }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={VIDEO_ZH}
              controls
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>mandarin · 中文版本</span>
              <span style={{ color: ACCENT }}>same voice</span>
            </div>
          </div>
        </motion.div>

        {/* --- Outcome highlights --- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12"
        >
          <div className="border border-nana-border/60 rounded-sm p-5 bg-nana-dark/40">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-2">
              the outcome
            </div>
            <div className="font-display text-3xl md:text-4xl font-medium leading-none mb-1 holo-text">
              $1.5M
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-nana-muted/80">
              grant awarded
            </div>
          </div>
          <div className="border border-nana-border/60 rounded-sm p-5 bg-nana-dark/40">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-2">
              the voice
            </div>
            <div className="font-display text-3xl md:text-4xl font-medium leading-none mb-1">
              <span className="holo-text">2</span>{" "}
              <span className="text-nana-text/80 text-lg align-middle">languages</span>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-nana-muted/80">
              english + mandarin · single talent
            </div>
          </div>
          <div className="border border-nana-border/60 rounded-sm p-5 bg-nana-dark/40">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-2">
              what it became
            </div>
            <div className="font-display text-3xl md:text-4xl font-medium leading-none mb-1 holo-text">
              OpenPage
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-nana-muted/80">
              the product, shipped
            </div>
          </div>
        </motion.div>

        <WorkDetail
          problem="A pitch film for a grant where the Chinese community held heavy influence on the decision. Localizing to Mandarin via a second voice talent would have read as an afterthought and fractured the brand voice. Hiring a bilingual VO talent and running parallel sessions would have eaten the runway."
          solution="Created a custom ElevenLabs voice that fit the brand register, then directed the same voice to speak both English and Mandarin. Same persona across cultures, no fracture. AI tools also compressed the script, motion concept, and storyboard passes so the team could spend the runway on the narrative and the cut. The grant was awarded. The project shipped as OpenPage."
          tools={[
            "ElevenLabs",
            "ChatGPT",
            "Midjourney",
            "After Effects",
            "Final Cut Pro",
          ]}
        />
      </div>
    </section>
  );
}
