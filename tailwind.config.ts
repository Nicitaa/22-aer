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
      lg: "clamp(2rem, 1.6rem + 2vw, 4rem)" //320-1920px
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
      boxShadow: {
  cta: '0px 0px 8px 1px rgb(44 200 207 / 1)',
},
      colors: {
        primary: "rgba(var(--primary), 0.9)",
        "primary-foreground": "rgba(var(--primary-foreground) ,1)",
        secondary: "rgba(var(--secondary), 0.75)",
        "secondary-foreground": "rgba(var(--secondary-foreground), 1)",
        cta: "rgba(var(--cta), 1)",
        "danger": "rgba(var(--danger), 1)",
        "success": "rgba(var(--success), 1)",
        "stats-bar": "rgba(var(--stats-bar), 1)",
        "stats-fill": "rgba(var(--stats-fill), 1)"
      }
    }
  },
  plugins: []
} satisfies Config
