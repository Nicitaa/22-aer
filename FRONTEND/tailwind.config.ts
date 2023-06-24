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
      tablet: "700px",
      // => @media (min-width: 700px) { ... }
    },
    extend: {
      backgroundImage: {
        "bg-primary": "url('/background.png')",
      },
      colors: {
        primary: "rgba(255, 255, 255, 0.9)",
        secondary: "rgba(255, 255, 255, 0.4)",
        cta: "rgba(131, 173, 175, 1)",
        "bg-secondary": "rgba(7, 7, 10, 0.4)",
      },
      backgroundImage: {
        "bg-primary": "url('/background.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
