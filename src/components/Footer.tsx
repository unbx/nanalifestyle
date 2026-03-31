"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7 },
};

export default function Footer() {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-nana-black to-[#050505]" />

      <div className="relative z-[5] max-w-4xl mx-auto px-6 text-center">
        {/* CTA */}
        <motion.div {...fadeUp}>
          <img
            src="/assets/nana-logo.svg"
            alt="NANA"
            className="w-24 mx-auto mb-8 invert opacity-40"
          />
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="holo-text">Let&apos;s Build Something</span>
          </h2>
          <p className="text-nana-muted text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
            Open to creative collaborations, product roles, and conversations
            about culture, technology, and what&apos;s next.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block px-8 py-3 border border-nana-border/50 rounded-full font-mono text-xs tracking-[0.2em] uppercase text-nana-text hover:border-nana-pink/50 hover:text-nana-pink transition-all duration-300"
          >
            {siteConfig.email}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-8 mb-20"
        >
          {Object.entries(siteConfig.socials).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-nana-muted hover:text-white transition-colors duration-300"
            >
              {platform}
            </a>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-nana-border/20 pt-8">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-nana-muted/40">
            &copy; {new Date().getFullYear()} NANA LIFESTYLE. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
