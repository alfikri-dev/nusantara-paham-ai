import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",   // Deep black
        surface: "#111111",      // Card base
        "surface-2": "#181818",  // Elevated surface
        primary: "#9F5CFF",      // Neon purple (Nusantara spiritual)
        secondary: "#00B8D9",    // Neon teal (modern tech)
        gold: "#F5A623",         // Nusantara gold
        accent: "#FF4D4F",       // Alert red
        "primary-dim": "#6C3BB5", // Muted purple
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #9F5CFF 0%, #00B8D9 100%)",
        "gradient-gold": "linear-gradient(135deg, #F5A623 0%, #FF9B00 100%)",
        "gradient-card": "linear-gradient(145deg, #151515 0%, #111111 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E\")",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        heading: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem,7vw,5.5rem)", { lineHeight: "1.05" }],
        "display-xl": ["clamp(2.2rem,5vw,4rem)", { lineHeight: "1.1" }],
        "display-lg": ["clamp(1.8rem,4vw,3rem)", { lineHeight: "1.15" }],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "marquee": "marquee 25s linear infinite",
        "shimmer": "shimmer 2s infinite",
      },
      boxShadow: {
        "glow-primary": "0 0 40px -10px rgba(159,92,255,0.5)",
        "glow-secondary": "0 0 40px -10px rgba(0,184,217,0.5)",
        "glow-gold": "0 0 40px -10px rgba(245,166,35,0.5)",
        "card-hover": "0 20px 60px -20px rgba(159,92,255,0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
