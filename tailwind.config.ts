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
        background: {
          DEFAULT: "#F3F3F3",
          subtle: "#F3F3F3",
        },
        ink: {
          DEFAULT: "#070E0A",
          muted: "#7A8D7F",
          faint: "#E8EBE7",
        },
        accent: {
          DEFAULT: "#0F2318",
          hover: "#0A1810",
          light: "#E8F0EB",
          dark: "#070E0A",
        },
        border: {
          DEFAULT: "#E8EBE7",
          strong: "#D4DCD5",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 7vw, 5.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.5rem, 2.5vw, 2rem)",
          { lineHeight: "1.2", letterSpacing: "-0.015em" },
        ],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "128": "32rem",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
        "card-lg": "0 4px 6px rgba(0,0,0,0.05), 0 10px 40px rgba(0,0,0,0.08)",
        accent: "0 0 0 3px rgba(79,70,229,0.2)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
