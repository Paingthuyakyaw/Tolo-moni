import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./page/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        chatPrimary: "#24786D",
        chatGray: "#797C7B",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "128px",
          "2xl": "6rem",
        },
      },
      boxShadow: {
        chatShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      fontFamily: {
        monserrat: "'Montserrat' , serif ",
        tilli: "'Titillium Web' , serif",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
