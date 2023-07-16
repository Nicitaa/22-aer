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
      sm: "1.25rem",
      md: "clamp(1rem, 0.6429rem + 1.7857vw, 1.5rem)", //320-768px
      lg: "clamp(2.5rem, 1.4286rem + 5.3571vw, 4rem)" //320-768px
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
        "cta-success": "rgba(58, 184, 63, 1)",
        "stats-bar": "rgba(79, 70, 186, 1)",
        "stats-fill": "rgba(51, 23, 165, 1)"
      }
    }
  },
  plugins: []
} satisfies Config
