"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
};

export default function Brief({ text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="mb-20 max-w-3xl"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted">
          the brief
        </div>
        <div className="flex-1 h-px bg-nana-border/40" />
      </div>
      <p className="text-nana-text/90 text-base md:text-lg leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}
