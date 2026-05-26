"use client";

import { motion } from "framer-motion";
import Brief from "../Brief";
import WorkDetail from "../WorkDetail";

const ACCENT = "#e8c878";

// Drop the grant video at public/ai/other-page-grant.mp4 to light up
// the player. Set to true once the file is in place. Set the whole
// section to false to hide it from the page until ready.
const HAS_GRANT_VIDEO = false;
const SHOW_SECTION = true;

export default function OtherPageGrantSection({ index }: { index: number }) {
  if (!SHOW_SECTION) return null;

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
            <span>case study · pitch film</span>
          </div>

          <h2 className="font-display font-medium tracking-tight text-4xl md:text-6xl lg:text-7xl mb-4">
            Other Page.
          </h2>

          <p className="font-display text-lg md:text-2xl text-nana-text/90 max-w-3xl leading-snug font-light">
            The pitch film that closed a{" "}
            <span className="holo-text font-medium">$1.5M grant.</span>
          </p>
        </motion.div>

        <Brief text="A pitch film for Other Page, made on a tight runway. AI tools compressed the production schedule without flattening the story. Concept boards, voiceover passes, and motion explorations all moved fast enough that the team could focus on the narrative and the cut. The film helped land a $1.5M grant." />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-6"
        >
          {HAS_GRANT_VIDEO ? (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/ai/other-page-grant.mp4"
              controls
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-nana-dark/60">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted/80">
                other page · grant pitch
              </div>
              <div className="font-display text-sm md:text-base text-nana-text/60 text-center max-w-md px-6">
                Video drops in at{" "}
                <code className="font-mono text-nana-amber/80">/ai/other-page-grant.mp4</code>
                <br />
                then flip{" "}
                <code className="font-mono text-nana-amber/80">HAS_GRANT_VIDEO</code>{" "}
                to true.
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/70">
            <span>other page · pitch film</span>
            <span style={{ color: ACCENT }}>$1.5m grant · awarded</span>
          </div>
        </motion.div>

        <WorkDetail
          problem="A pitch film against a deadline that wouldn't move. The narrative had to land with a granting body that hadn't seen the project before. Traditional production would have eaten the runway and left nothing for the cut."
          solution="AI tools moved the slow steps fast. Concept and storyboard exploration in image generators. Voiceover passes generated and iterated in ElevenLabs against the cut. Motion finished in After Effects and FCP. The team spent the saved time on the story."
          tools={[
            "ElevenLabs",
            "Midjourney",
            "After Effects",
            "Final Cut Pro",
            "ChatGPT",
          ]}
        />
      </div>
    </section>
  );
}
