import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "footer-bg": "#1e676a",
      },
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(calc(-100% - 3rem))" },
      },
      "scroll-right": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(calc(100% - 3rem))" },
      },
    },
    animation: {
      scroll: "scroll 50s linear infinite",
      "scroll-right": "scroll-right 50s linear infinite",
    },
  },

  
  darkMode: "class",
  plugins: [nextui()],
};
