import { type Config } from "tailwindcss"
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      secondary: ["Proxima Nova", "sans-serif"]
    },
    fontSize: {
      xs: "1rem",
      small: "1.25rem",
      medium: "1.5rem",
      big: "clamp(2.5rem, 1.4286rem + 5.3571vw, 4rem);" //320-768px
    },
    screens: {
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      laptop: "1024px"
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      backgroundImage: {
        img: "url('/background.webp')"
      },
      colors: {
        primary: "rgba(255, 255, 255, 0.9)",
        "primary-darker": "rgba(255,255,255,0.4)",
        secondary: "rgba(7, 7, 10, 0.4)",
        cta: "rgba(44, 200, 207, 1)",
        "cta-danger": "rgba(197, 52, 52, 1)",
        "cta-success": "rgba(58, 184, 63, 1)"
      }
    }
  },
  plugins: []
} satisfies Config
