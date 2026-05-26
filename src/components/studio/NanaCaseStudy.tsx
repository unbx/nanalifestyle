"use client";

import { motion } from "framer-motion";
import { nana } from "@/data/nana";
import LightboxImage from "./LightboxImage";
import Brief from "./Brief";
import WorkDetail from "./WorkDetail";

export default function NanaCaseStudy({ index }: { index: number }) {
  return (
    <section
      id="nana-lifestyle"
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
            NANA LIFESTYLE
          </h2>

          <p className="font-display text-lg md:text-2xl text-nana-text/90 max-w-3xl leading-snug font-light">
            Personal brand as creative practice. Music, motion, set design, merch.
          </p>
        </motion.div>

        <Brief
          text="NANA LIFESTYLE runs as a label, production studio, and creative practice. The work was to hold music, video, set design, merch, and live events under one identity. MIKNNA lives inside it as the artist project. No marketing team. Just the practice, compounding across years."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-6"
        >
          <img
            src="/NANA OG - RGB169.png"
            alt="NANA LIFESTYLE"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nana-black via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/70">
            <span>nana lifestyle / brand splash</span>
            <span>est. 2013</span>
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
            music
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            Sonic identity meets visual identity.{" "}
            <span className="holo-text font-medium">
              Across collaborators and continents.
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {nana.releases.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group bg-nana-card/40 border border-nana-border rounded-sm overflow-hidden hover:border-nana-text/30 transition-all duration-300"
            >
              <div className="aspect-square bg-black overflow-hidden relative">
                <img
                  src={r.image}
                  alt={r.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="font-display text-sm md:text-base font-medium truncate">
                    {r.title}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-nana-muted shrink-0">
                    {r.year}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 font-mono text-[9px] tracking-[0.2em] uppercase text-nana-muted">
                  <span className="truncate">{r.artist || r.kind}</span>
                  {r.note && <span className="text-nana-amber/70 shrink-0">{r.note}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-4">
            collaborators
          </div>
          <div className="flex flex-wrap gap-2">
            {nana.collaborators.map((c) => (
              <span
                key={c}
                className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-nana-border/60 rounded-full text-nana-text/80"
              >
                {c}
              </span>
            ))}
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
            motion
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            Directed, produced, edited.{" "}
            <span className="holo-text font-medium">
              Set design and styling alongside production teams.
            </span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-4"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/2w-yQ_Sp5WE?rel=0&modestbranding=1&playsinline=1"
            title="MIKNNA music video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        <p className="text-nana-muted text-sm leading-relaxed mb-12 max-w-2xl">
          Electric, MIKNNA, 2018. Independent direction across concept, shoot,
          and edit. Same visual practice that translates to brand film work.
        </p>


        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
            set design · irl
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            Set design.{" "}
            <span className="holo-text font-medium">
              Brand systems made physical.
            </span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-24"
        >
          <img
            src={nana.live.image}
            alt={nana.live.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
            <span>{nana.live.title}</span>
            <span className="text-white/60">two continental tours</span>
          </div>
        </motion.div>

        <div className="mb-24 -mt-12">
          <WorkDetail
            problem="Every venue starts bare. Different architecture, different scale, different sightlines. The work was building impact that fit the space and carried the artist's identity into it."
            solution="Set design directed venue by venue. Brand systems built into the physical space, tuned per night. The same identity that runs the records ran the room."
            tools={["Pinterest", "Photoshop", "SketchUp", "Arena"]}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
            merch & apparel
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            Apparel as creative signal.{" "}
            <span className="holo-text font-medium">Worn forward.</span>
          </h3>
        </motion.div>

        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
          4LA · apparel
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {nana.apparel.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="aspect-[4/5] bg-nana-card/40 border border-nana-border rounded-sm overflow-hidden relative group"
            >
              <img
                src={m.image}
                alt={m.title}
                className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute bottom-2 left-3 right-3 font-mono text-[9px] tracking-[0.2em] uppercase text-white/80">
                {m.title}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
          headwear
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {nana.hats.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="aspect-square bg-nana-card/40 border border-nana-border rounded-sm overflow-hidden relative group"
            >
              <img
                src={m.image}
                alt={m.title}
                className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute bottom-2 left-3 right-3 font-mono text-[9px] tracking-[0.2em] uppercase text-white/80">
                {m.title}
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2"
        >
          {[
            "personal brand",
            "music",
            "music video",
            "brand film",
            "merch",
            "miknna",
          ].map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-nana-border/60 rounded-full text-nana-muted"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
