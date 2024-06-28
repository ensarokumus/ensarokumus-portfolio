import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "move-bg": "move-bg 30s ease-in-out infinite",
      },
      keyframes: {
        "move-bg": {
          "0%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "0 10rem" },
          "100%": { backgroundPosition: "0 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
