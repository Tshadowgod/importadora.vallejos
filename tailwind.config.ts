import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020817",
          900: "#0a0f1e",
          800: "#0d1530",
          700: "#101e42",
          600: "#152254",
        },
        electric: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at 70% 50%, rgba(14,165,233,0.15) 0%, rgba(2,8,23,0) 70%), linear-gradient(135deg, #020817 0%, #0a0f1e 50%, #0d1530 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(10,15,30,0.95) 100%)",
        "glow-blue":
          "radial-gradient(ellipse at center, rgba(14,165,233,0.3) 0%, transparent 70%)",
      },
      boxShadow: {
        "blue-glow": "0 0 30px rgba(14,165,233,0.4)",
        "blue-glow-sm": "0 0 15px rgba(14,165,233,0.3)",
        card: "0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
