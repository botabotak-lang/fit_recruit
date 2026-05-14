import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1a2744",
        orange: "#e8752a",
        white: "#ffffff",
      },
      fontFamily: {
        body: ["var(--font-noto-sans-jp)", "sans-serif"],
        display: ["var(--font-oswald)", "sans-serif"],
      },
      fontSize: {
        "hero-fluid": "clamp(2rem, 4vw + 1rem, 4rem)",
        "section-fluid": "clamp(1.5rem, 2vw + 1rem, 2.5rem)",
      },
      boxShadow: {
        lift: "0 14px 28px rgba(26, 39, 68, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
