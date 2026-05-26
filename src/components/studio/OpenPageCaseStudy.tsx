"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import CinemagraphVideo from "./CinemagraphVideo";
import LightboxImage from "./LightboxImage";
import Brief from "./Brief";
import WorkDetail from "./WorkDetail";

const OP_ACCENT = "#e8c878";
const VIDEO_ID = "t-3so2JtgjU";

export default function OpenPageCaseStudy({ index }: { index: number }) {
  const dragonRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = dragonRef.current;
    if (!v) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="openpage"
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
            OpenPage
          </h2>

          <p className="font-display text-lg md:text-2xl text-nana-text/90 max-w-3xl leading-snug font-light">
            A brand built from zero. Voice, design, content, production, and
            creative team owned end to end.
          </p>
        </motion.div>

        <Brief
          text="OpenPage launched as a platform for digital identity, community, and partner integrations, built to support creators, collectors, and community. The work was a brand and content system that could hold across product, motion, social, co-brand, and IRL events. As ApeChain came online, OpenPage expanded with onchain badges and an avatar and wearables system for Otherside, minted on ApeChain. The brand had to be coherent on day one and hold up under campaign pressure."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
            <span className="w-1 h-1 rounded-full" style={{ background: OP_ACCENT }} />
            <span>partner co-brand · otherside × openpage</span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            Project Dragon. <span className="holo-text font-medium">A world record set, on chain.</span>
          </h3>
          <p className="text-nana-muted text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            Designed the badge, directed the content, shipped the moment.
            Minted via OpenPage on ApeChain. A co-brand surface that reads as
            native to both Otherside and OP.
          </p>

          <WorkDetail
            problem="An ecosystem moment that had to land for Otherside and OpenPage at the same time. Mint had to scale. Art had to feel native to both brands without becoming a hybrid. The ask: an official badge issued by Otherside to commemorate the Guinness World Record moment, powered by OpenPage."
            solution="Designed the badge. Directed the motion. Built the lockup so neither brand stepped on the other. Shipped the Project Dragon World Record badge on ApeChain."
            tools={["Figma", "After Effects", "Photoshop", "Illustrator", "Final Cut Pro"]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-6"
        >
          <video
            ref={dragonRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/studio/openpage/Project Dragon World Record Badge.mov"
            controls
            muted
            playsInline
            preload="metadata"
          />
          <div className="pointer-events-none absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/70">
            <span>otherside × openpage</span>
            <span style={{ color: OP_ACCENT }}>project dragon · world record</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center mb-24"
        >
          <div className="order-1 md:order-1 md:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
              <span className="w-1 h-1 rounded-full" style={{ background: OP_ACCENT }} />
              <span>motion poster</span>
            </div>
            <h3 className="font-display text-xl md:text-3xl font-light tracking-tight mb-4">
              Motion posters.{" "}
              <span className="holo-text font-medium">Cinemagraph craft on Otherside IP.</span>
            </h3>
            <p className="text-nana-muted text-sm md:text-base leading-relaxed">
              OSFM feed loop promoting an X Spaces conversation about
              Otherside. Built to stop a thumb mid-scroll and pull listeners
              into the room.
            </p>
          </div>
          <div className="order-2 md:order-2 md:col-span-5 relative bg-black border border-nana-border rounded-sm overflow-hidden">
            <CinemagraphVideo
              src="/osfm-abducted-062625.mp4"
              className="block w-full h-auto"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] tracking-[0.3em] uppercase text-white/80">
              <span>osfm · cinemagraph</span>
              <span className="text-nana-amber/80">x spaces · otherside</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-6"
        >
          <CinemagraphVideo
            src="/studio/openpage/OSFM Thumbnail Deed loop.mov"
            className="block w-full h-auto"
          />
          <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
            <span>otherside × openpage</span>
            <span style={{ color: OP_ACCENT }}>motion study</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        >
          <div className="aspect-[4/5] bg-black border border-nana-border rounded-sm overflow-hidden relative">
            <CinemagraphVideo
              src="/Hapa fused.mp4"
              poster="/Hapa Fused biolum still 2.JPG"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-end justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>hapa fused</span>
              <span style={{ color: OP_ACCENT }}>motion poster</span>
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
              <span style={{ color: OP_ACCENT }}>motion poster</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="border-t border-b border-nana-border/60 py-6 md:py-8 mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
            <div className="md:col-span-3">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted">
                programming thumbnails
              </div>
            </div>
            <div className="md:col-span-6">
              <p className="text-nana-text/85 text-sm md:text-base leading-relaxed">
                Channel branding and episode artwork extended into a
                thumbnail system on the OtherSpace FM YouTube channel. A
                living example of the same visual practice applied to
                long form programming.
              </p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <a
                href="https://www.youtube.com/@otherspacefm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-text hover:text-white transition-colors"
              >
                <span>youtube.com/@otherspacefm</span>
                <span style={{ color: OP_ACCENT }}>↗</span>
              </a>
            </div>
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
            <span className="w-1 h-1 rounded-full bg-nana-amber/70" />
            <span>apechain · announcements</span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            Contributing to ApeChain.{" "}
            <span className="holo-text font-medium">
              Art direction the community aligns with. A widely loved app.
            </span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full bg-black border border-nana-border rounded-sm overflow-hidden mb-4"
        >
          <LightboxImage
            src="/studio/openpage/ApeChain header.jpg"
            alt="ApeChain partner header"
            triggerClass="block w-full"
            imgClass="block w-full h-auto"
          />
          <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
            <span>apechain · partner header</span>
            <span className="text-nana-amber/80">co-brand</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24"
        >
          <div className="relative aspect-square bg-black border border-nana-border rounded-sm overflow-hidden">
            <LightboxImage
              src="/studio/openpage/100k OP Badges minted on ApeChain.png"
              alt="100k OP Badges minted on ApeChain"
              triggerClass="absolute inset-0 w-full h-full block"
              imgClass="w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>op badge program</span>
              <span className="text-nana-amber/80">milestone · 100,000</span>
            </div>
          </div>
          <div className="relative aspect-square bg-black border border-nana-border rounded-sm overflow-hidden">
            <CinemagraphVideo
              src="/studio/openpage/chain nft3 H.265.mp4"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              <span>icy apechain</span>
              <span className="text-nana-amber/80">apechain</span>
            </div>
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
            <span className="w-1 h-1 rounded-full" style={{ background: OP_ACCENT }} />
            <span>creative enablement</span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            Translating complexity into language people understand.{" "}
            <span style={{ color: OP_ACCENT }}>
              Visual, verbal, in motion.
            </span>
          </h3>
        </motion.div>

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
            title="OpenPage product film"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 font-mono text-[10px] tracking-[0.2em] uppercase text-nana-muted"
        >
          <div className="flex items-center gap-3 px-4 py-3 border border-nana-border/60 rounded-sm">
            <span className="w-1 h-1 rounded-full" style={{ background: OP_ACCENT }} />
            <span>art direction</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 border border-nana-border/60 rounded-sm">
            <span className="w-1 h-1 rounded-full" style={{ background: OP_ACCENT }} />
            <span>motion graphics</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 border border-nana-border/60 rounded-sm">
            <span className="w-1 h-1 rounded-full" style={{ background: OP_ACCENT }} />
            <span>voice and edit</span>
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
            <span className="w-1 h-1 rounded-full" style={{ background: OP_ACCENT }} />
            <span>partner lockups & worldbuilding</span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            Co-brand lockups. <span className="holo-text font-medium">Worlds rendered into product.</span>
          </h3>
          <p className="text-nana-muted text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            Partner lockups built so each brand reads native to itself.
            Product hardware rendered from inside the same world the brand
            already lives in.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24 items-start"
        >
          <div className="flex flex-col gap-4">
            <div className="relative aspect-video bg-black border border-nana-border rounded-sm overflow-hidden">
              <CinemagraphVideo
                src="/studio/openpage/open_pass_render3_3.mp4"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] tracking-[0.3em] uppercase text-white/80">
                <span>open pass</span>
                <span style={{ color: OP_ACCENT }}>device rendered from world</span>
              </div>
            </div>
            <WorkDetail
              problem="Open Pass is the utility device that grants access to the OpenPage platform. The brief was to make it feel like an artifact from the world we'd built, not a product render. The pass had to belong to the lore."
              solution="Conceptualized the device from inside the OpenPage world. Designed and rendered the artwork so the pass reads as native to the lore. Utility and story collapsed into one object."
              tools={["Midjourney", "Blender", "Photoshop", "Figma"]}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative aspect-video bg-black border border-nana-border rounded-sm overflow-hidden">
              <LightboxImage
                src="/studio/openpage/Other Page_Product_Shot_2.jpeg"
                alt="10KTF × Other Page partner lockup"
                triggerClass="absolute inset-0 w-full h-full block"
                imgClass="w-full h-full object-cover"
              />
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] tracking-[0.3em] uppercase text-white/80">
                <span>10ktf × other page</span>
                <span style={{ color: OP_ACCENT }}>partner lockup</span>
              </div>
            </div>
            <WorkDetail
              problem="Two brands with their own visual language sharing one frame to tease an upcoming partnership. The lockup had to land the announcement without flattening either identity."
              solution="Led with the story. Worked closely with 10KTF on voice, tone, and visual edges. The lockup followed the narrative, not the other way around. Each brand announced together while reading native to itself."
              tools={["Figma", "Illustrator", "Photoshop", "Unreal"]}
            />
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
            <span className="w-1 h-1 rounded-full" style={{ background: OP_ACCENT }} />
            <span>art coded</span>
          </div>
          <h3 className="font-display text-2xl md:text-4xl font-light tracking-tight max-w-3xl">
            Custom designed tools.{" "}
            <span className="holo-text font-medium">
              Built to enable creators to direct their art.
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-start">
          <div className="flex flex-col gap-4">
          <motion.a
            href="/studio/openpage/op-glb-analyzer.html"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group flex flex-col bg-black border border-nana-border rounded-sm overflow-hidden hover:border-nana-text/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3 px-5 py-3 border-b border-nana-border bg-nana-dark">
              <img
                src="/studio/openpage/op-logo.svg"
                alt="OP"
                className="h-3 w-auto opacity-90"
              />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-nana-muted truncate">
                op creator studio · glb analyzer
              </span>
              <span
                className="ml-auto font-mono text-[10px] tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity shrink-0"
                style={{ color: OP_ACCENT }}
              >
                open ↗
              </span>
            </div>

            <div className="aspect-[16/9] relative bg-nana-dark border-b border-nana-border overflow-hidden">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  background: `radial-gradient(circle at 70% 30%, ${OP_ACCENT}40, transparent 60%)`,
                }}
              />
              <img
                src="/studio/openpage/op-logo.svg"
                alt="OpenPage"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 max-w-[160px] opacity-95"
              />
              <div className="absolute bottom-3 right-3 font-mono text-[9px] tracking-[0.3em] uppercase text-nana-muted/70">
                v 1.0
              </div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div
                className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ color: OP_ACCENT }}
              >
                product / ux
              </div>
              <h4 className="font-display text-xl md:text-2xl font-medium mb-3">
                A QC tool for 3D avatars and wearables.
              </h4>
              <p className="text-nana-text/80 text-sm leading-relaxed mb-5 flex-1">
                Loads a GLB, renders it in Three.js, runs structural checks
                against avatar and wearable specs, and surfaces pass / fail /
                warn at a glance. Designed and built end to end to catch
                export bugs before they reach the creator pipeline.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "three.js",
                  "gltf loader",
                  "wearable spec",
                  "creator qa",
                ].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-nana-border/60 rounded-full text-nana-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
          <WorkDetail
            problem="Wearable submissions slipped through with structural bugs that broke at runtime. The pipeline was eating creator time on QC and slowing down the approval window for every submission."
            solution="A single page tool that loads any GLB, runs the structural checks against the avatar and wearable specs, and surfaces pass / fail / warn. Catches the bugs before they hit the pipeline and shortens the time it takes for collectors to see new wearables equipped on Otherside."
            tools={["Three.js", "GLTF Loader", "JavaScript", "Cursor"]}
          />
          </div>

          <div className="flex flex-col gap-4">
          <motion.a
            href="https://vibekoda.nanalifestyle.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group flex flex-col bg-black border border-nana-border rounded-sm overflow-hidden hover:border-nana-text/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3 px-5 py-3 border-b border-nana-border bg-nana-dark">
              <span className="w-2 h-2 rounded-full" style={{ background: OP_ACCENT }} />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-nana-muted truncate">
                vibekoda studio · otherside mml builder
              </span>
              <span
                className="ml-auto font-mono text-[10px] tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity shrink-0"
                style={{ color: OP_ACCENT }}
              >
                open ↗
              </span>
            </div>

            <div className="aspect-[16/9] relative bg-black border-b border-nana-border overflow-hidden">
              <img
                src="/studio/openpage/vibekoda-og.png"
                alt="VibeKoda Studio"
                className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-3 right-3 font-mono text-[9px] tracking-[0.3em] uppercase text-white/70">
                v 1.0
              </div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div
                className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ color: OP_ACCENT }}
              >
                product / ux · ai
              </div>
              <h4 className="font-display text-xl md:text-2xl font-medium mb-3">
                AI-powered MML builder for the Otherside Vibe Maker.
              </h4>
              <p className="text-nana-text/80 text-sm leading-relaxed mb-5 flex-1">
                Designed and shipped end to end as a solo build. Concept,
                product strategy, UI, UX, and front end architecture all
                under one set of hands. Helps creators generate Otherside
                MML scenes through an AI-assisted workflow.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "ai",
                  "mml",
                  "otherside",
                  "ui / ux",
                  "solo build",
                ].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-nana-border/60 rounded-full text-nana-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
          <WorkDetail
            problem="Otherside's Vibe Maker workflow was too technical for most creators to adopt. Building MML scenes required code level fluency. Creators wanted in. The tooling didn't meet them where they were."
            solution="An AI assisted MML builder. Idea to scene in a few prompts, with Hapa the Koda as the in-character creative guide. Concept, UI, UX, and front end architecture all under one set of hands."
            tools={["Next.js", "React", "AI", "Figma", "Cursor", "S3", "Otherside"]}
          />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 mt-12"
        >
          {[
            "partner co-brand",
            "brand voice",
            "video & motion",
            "creative direction",
            "product & ux",
            "internal tools",
            "creator tools",
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
