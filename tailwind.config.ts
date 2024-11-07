import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx}"
  ],
  mode: "jit",
  theme: {
    screens: {
      xs: "450px", // Added "xs" screen
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
<<<<<<< HEAD
    colors: {
      primary: "#050816",
      secondary: "#aaa6c3",
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
     
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
    },
    extend: {}, 
=======
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)'

      }
    },
>>>>>>> experiment/new-endpoint
  },
  plugins: [],
};

export default config;
