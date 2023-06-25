import { type Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "font-primary": ["Inter", "sans-serif"],
      "font-secondary": ["Proxima Nova", "sans-serif"],
    },
    fontSize: {
      xs: "1rem", // Extra small
      small: "1.25rem", // Small
      medium: "1.5rem", // Base
      big: "4rem", // Large
    },
    screens: {
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      backgroundImage: {
        img: "url('/background.webp')",
      },
      colors: {
        primary: "rgba(255, 255, 255, 0.9)",
        "primary-darker": "rgba(255,255,255,0.4)",
        secondary: "rgba(7, 7, 10, 0.4)",
        cta: "rgba(44, 200, 207, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
