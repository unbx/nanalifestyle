"use client";

import { motion } from "framer-motion";
import { productWork } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

export default function ProductSection() {
  return (
    <section id="product" className="relative py-32">
      {/* Cool-toned ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nana-black via-[#080a0d] to-nana-black" />

      <div className="relative z-[5] max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-20">
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-nana-blue/60 mb-3">
            02 / Product
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="holo-text">Cr3 Labs</span>
          </h2>
          <p className="font-display text-lg md:text-xl text-nana-muted font-light">
            Web3 & AI Product Studio
          </p>
        </motion.div>

        {/* CR3 Labs main role */}
        {productWork.roles.map((role, i) => (
          <motion.div
            key={role.company}
            {...fadeUp}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="mb-16"
          >
            <div className="border border-nana-border/30 rounded-xl p-8 md:p-10 bg-nana-card/20 backdrop-blur-sm hover:border-nana-blue/20 transition-all duration-500">
              {/* Role header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-1">
                    {role.title}
                  </h3>
                  <p className="font-display text-base text-nana-blue/80">
                    {role.company}
                  </p>
                </div>
                <span className="font-mono text-[10px] tracking-[0.15em] text-nana-muted mt-2 md:mt-1">
                  {role.period}
                </span>
              </div>

              <p className="text-nana-text/70 text-sm leading-relaxed mb-6">
                {role.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {role.highlights.map((h, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-nana-blue/60 mt-2 flex-shrink-0" />
                    <span className="text-nana-text/60 text-sm leading-relaxed">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Products */}
              {"products" in role && role.products && (
                <div className="grid md:grid-cols-2 gap-4">
                  {role.products.map((product) => (
                    <a
                      key={product.name}
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border border-nana-border/20 rounded-lg p-5 bg-nana-black/40 hover:border-nana-blue/30 hover:bg-nana-card/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-display text-base font-semibold text-white group-hover:text-nana-blue transition-colors">
                          {product.name}
                        </h4>
                        <svg
                          className="w-3 h-3 text-nana-muted group-hover:text-nana-blue transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                      <p className="font-mono text-[10px] tracking-wider text-nana-blue/50 uppercase mb-2">
                        {product.tagline}
                      </p>
                      <p className="text-nana-muted text-xs leading-relaxed">
                        {product.description}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
