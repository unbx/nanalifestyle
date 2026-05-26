"use client";

import { motion } from "framer-motion";
import Brief from "../Brief";
import WorkDetail from "../WorkDetail";

const ACCENT = "#e8c878";
const VIDEO_ID = "t-3so2JtgjU";

export default function OpenPageOverviewSection({ index }: { index: number }) {
  return (
    <section
      id="openpage-overview"
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
            <span>case study · product film</span>
          </div>

          <h2 className="font-display font-medium tracking-tight text-4xl md:text-6xl lg:text-7xl mb-4">
            OpenPage v3.
          </h2>

          <p className="font-display text-lg md:text-2xl text-nana-text/90 max-w-3xl leading-snug font-light">
            A product overview film.{" "}
            <span className="holo-text font-medium">
              AI in the writing, the visualization, and the voice.
            </span>
          </p>
        </motion.div>

        <Brief text="OpenPage shipped a major platform update and needed an overview film that translated a dense feature set into a narrative anyone could follow. AI sat inside every stage of the production: script iteration with an LLM, image and motion concepting, voice generation, and a final cut tightened against the brand system." />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-6"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&playsinline=1`}
            title="OpenPage v3 overview film"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 font-mono text-[10px] tracking-[0.2em] uppercase text-nana-muted"
        >
          <div className="flex items-center gap-3 px-4 py-3 border border-nana-border/60 rounded-sm">
            <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
            <span>script · llm assisted</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 border border-nana-border/60 rounded-sm">
            <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
            <span>motion · ai concepted</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 border border-nana-border/60 rounded-sm">
            <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
            <span>voice + edit · fcp</span>
          </div>
        </motion.div>

        <WorkDetail
          problem="A platform release with a long surface area. The film had to land the story for collectors who already knew OpenPage and for visitors who didn't. Production timeline was tight. The bar for craft was higher than the timeline normally allows."
          solution="Used an LLM to iterate the script against the product spec until it held. AI image and motion tools for fast visualization passes that the team could react to. Voice generated and tuned to the brand register. Final cut in FCP, paced against the brand system. AI absorbed the slow steps so the craft steps got the time."
          tools={[
            "ChatGPT",
            "Midjourney",
            "After Effects",
            "Final Cut Pro",
            "ElevenLabs",
          ]}
        />
      </div>
    </section>
  );
}
