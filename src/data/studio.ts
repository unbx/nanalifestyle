export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  problem: string;
  move: string;
  surfaces: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dopple",
    title: "DOPPLE",
    kicker: "Brand system across 2D, 3D, and AI agents.",
    problem:
      "A brand identity has to survive in 2D, 3D, and AI generated contexts where no human is in the room.",
    move:
      "A system architected in three formats. Visual guidelines for humans, 3D world rules for environments, and a markdown spec agents can ingest to maintain integrity in generative work.",
    surfaces: ["brand system", "3d world", "agent spec", "documentation"],
  },
  {
    slug: "openpage",
    title: "OpenPage",
    kicker: "Identity refresh that holds across video, brand, and merch.",
    problem:
      "An identity refresh that has to stay coherent as the surface count grows. Video, rebrand, and merchandise each pulling in their own direction.",
    move:
      "A coherence first system with surface specific articulations. One spine, three voices. The brand reads the same whether you encounter it on a feed, a stage, or a hoodie.",
    surfaces: ["rebrand", "video", "merch", "creative direction"],
  },
  {
    slug: "nana-lifestyle",
    title: "NANA LIFESTYLE",
    kicker: "Independent creative direction across music, video, and merch.",
    problem:
      "An independent creative practice across music, video, and merch with no marketing team behind it.",
    move:
      "Personal brand as operating system. Culture and craft compounding across formats. The MIKNNA project sits inside it as a parallel artist identity, sharing the spine without diluting it.",
    surfaces: ["album art", "music video", "merch", "miknna"],
  },
];
