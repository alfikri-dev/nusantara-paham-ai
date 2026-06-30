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
        background: "#0A0A0A", // Dark mode base
        surface: "#151515",    // Card background
        primary: "#9F5CFF",    // Neon Purple
        secondary: "#00B8D9",  // Neon Teal
        accent: "#FF4D4F",     // Alert/Badge Red
        gold: "#F5A623",       // Nusantara Gold
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #9F5CFF, #00B8D9)",
        "gradient-card": "linear-gradient(45deg, #151515, #1F1F1F)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-roboto-slab)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
