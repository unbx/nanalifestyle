export const dopple = {
  pulse: { hex: "#B8FF5C", name: "Pulse" },
  formats: [
    {
      key: "2d",
      label: "01 / for humans",
      title: "Style Guide",
      desc: "Full color palette, 21 world themes, world building guides. The visual reference designers and partners read first.",
      surface: "html",
      accent: "#0BFFF0",
      image: "/Doppel Style Guides.png",
      href: "/studio/dopple/style-guide.html",
    },
    {
      key: "3d",
      label: "02 / for environments",
      title: "Voxel Preview",
      desc: "Interactive 3D voxel worlds rendered in real time with Three.js. 14 themes, applied at scene scale. The system in motion.",
      surface: "three.js",
      accent: "#FF0ACD",
      image: "/Doppel World Style.png",
      href: "/studio/dopple/voxel-preview.html",
    },
    {
      key: "agent",
      label: "03 / for agents",
      title: "Agent Spec",
      desc: "Machine readable style guide. The file agents consume to build worlds that stay on brand without a human in the room.",
      surface: "json",
      accent: "#B8FF5C",
      image: "/Doppel world.png",
      href: "/studio/dopple/style-guide.json",
    },
  ],
  specSnippet: `{
  "meta": {
    "name": "Doppel World Style Guide",
    "version": "2.0",
    "aesthetic": "Intentional and expressive..."
  },
  "core_palette": {
    "pulse_brand": {
      "description": "Doppel's signature color.
      The heartbeat. Works across any
      foundation.",
      "base": { "hex": "#B8FF5C" },
      "usage": "Primary CTA, active states,
      reward glow, logo mark."
    }
  },
  "world_themes": {
    "dark_themes": [
      { "id": "tech_forest",
        "primary_colors": ["#FF0ACD", "#0BFFF0"]
      }
    ]
  }
}`,
};
