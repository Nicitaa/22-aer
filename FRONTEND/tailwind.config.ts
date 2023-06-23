import { type Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      secondary: ["Proxima Nova", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem", // Extra small
      sm: ".875rem", // Small
      base: "1rem", // Base
      lg: "1.125rem", // Large
      xl: "1.25rem", // Extra large
      "2xl": "1.5rem", // 2 Extra large
      "3xl": "3rem",
      "4xl": "4rem",
    },
    screens: {
      tablet: "700px",
      // => @media (min-width: 700px) { ... }
    },
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.9)",
        secondary: "rgba(255, 255, 255, 0.4)",
        cta: "rgba(44, 200, 207, 1)",
        "bg-secondary": "rgba(7, 7, 10, 0.4)",
      },
      backgroundImage: {
        "bg-primary": "url('/background.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
