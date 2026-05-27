"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function StudioHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    let cancelled = false;
    const attempt = async () => {
      try {
        await v.play();
        if (!cancelled) setVideoOk(true);
      } catch {
        if (!cancelled) setVideoOk(false);
      }
    };
    attempt();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 overflow-hidden">
      <img
        src="/studio/NANA-swiss-knife-alpha.png"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-[60%_50%] md:object-center z-0"
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover object-[60%_50%] md:object-center z-0 ${videoOk ? "block" : "hidden"}`}
        src="/studio/APE Swiss Knife BG.mov"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      <div className="absolute top-6 right-6 md:top-8 md:right-12 z-10 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted/70">
        <span className="w-1.5 h-1.5 rounded-full bg-nana-amber/70 animate-pulse" />
        <span>work / 2026</span>
      </div>

      <div className="relative z-[2] max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <img
            src="/studio/nana/nana-script.svg"
            alt="NANA"
            className="h-10 md:h-12 w-auto invert opacity-95"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-display font-light tracking-tight text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-8 max-w-4xl"
        >
          A <span className="holo-text font-medium">creative director</span>{" "}
          building brand and content systems for digital identity, protocols,
          and culture at scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-nana-text text-base md:text-lg max-w-2xl leading-relaxed"
        >
          Graphic design and identity as the foundation. Taste as the filter.
          A cutting edge toolkit on top.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 md:bottom-12 left-6 md:left-12 lg:left-20 z-[3]"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted/60"
        >
          <span className="w-6 h-px bg-nana-muted/40" />
          scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
