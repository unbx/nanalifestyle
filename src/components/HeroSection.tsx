"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Three.js background */}
      <HeroScene />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-nana-black/40 via-transparent to-nana-black z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center px-6 max-w-4xl mx-auto">
        {/* NANA logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src="/assets/nana-logo.svg"
            alt="NANA"
            className="w-48 md:w-64 lg:w-80 mx-auto invert animate-glow"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-nana-muted mb-6"
        >
          Sean Nana
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-display text-2xl md:text-4xl lg:text-5xl font-light tracking-tight mb-8"
        >
          Creative Producer.{" "}
          <span className="holo-text font-medium">Experience Builder.</span>
          <br />
          Culture{" "}
          <span className="text-nana-muted font-light">&times;</span>{" "}
          Technology.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-nana-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          17+ years across music, tech, retail, and web3. Building at the
          intersection of culture, creativity, and emerging technology.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-nana-muted/50">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-nana-muted/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
