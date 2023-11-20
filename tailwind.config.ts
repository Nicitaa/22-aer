import { type Config } from "tailwindcss"
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      secondary: ["Proxima Nova", "sans-serif"],
    },
    fontSize: {
      xs: "1rem",
      sm: "1.25rem",
      md: "clamp(1rem, 0.6429rem + 1.7857vw, 1.5rem)", //320-768px
      lg: "clamp(2rem, 1.6rem + 2vw, 4rem)", //320-1920px
    },

    screens: {
      mobile: "415px",
      // => @media (min-width: 415px) { ... }
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      backgroundImage: {
        img: "url('/background.webp')",
      },
      boxShadow: {
        cta: "0px 0px 8px 1px rgb(44 200 207 / 1)",
      },
      colors: {
        primary: "hsl(var(--primary) / 1)",
        "primary-foreground": "hsl(var(--primary-foreground) / 1)",
        secondary: "hsl(var(--secondary) / 0.75)",
        "secondary-foreground": "hsl(var(--secondary-foreground) / 1)",
        cta: "hsl(var(--cta) / 1)",
        danger: "hsl(var(--danger) / 1)",
        success: "hsl(var(--success) / 1)",
        "stats-bar": "hsl(var(--stats-bar) / 1)",
        "stats-fill": "hsl(var(--stats-fill) / 1)",
      },
    },
  },
  plugins: [],
} satisfies Config
