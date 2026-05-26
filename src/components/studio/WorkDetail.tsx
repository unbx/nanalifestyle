"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  problem: string;
  solution: string;
  tools: string[];
  label?: string;
};

export default function WorkDetail({
  problem,
  solution,
  tools,
  label = "how it was made",
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted hover:text-nana-text transition-colors group"
      >
        <span className="relative w-4 h-4 border border-current rounded-sm flex items-center justify-center group-hover:border-nana-text transition-colors">
          <span className="absolute w-2 h-px bg-current" />
          <span
            className={`absolute h-2 w-px bg-current transition-transform duration-300 ${
              expanded ? "scale-y-0" : "scale-y-100"
            }`}
          />
        </span>
        <span>{expanded ? "collapse" : label}</span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 max-w-3xl">
              <div className="md:col-span-4">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-2">
                  the problem
                </div>
                <p className="text-nana-text/80 text-sm leading-relaxed">
                  {problem}
                </p>
              </div>
              <div className="md:col-span-8">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-2">
                  the solution
                </div>
                <p className="text-nana-text text-sm leading-relaxed">
                  {solution}
                </p>
              </div>
            </div>

            <div className="pt-6">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-nana-muted mb-3">
                tools
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-nana-border/60 rounded-full text-nana-text/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
