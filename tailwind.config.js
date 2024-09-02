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
      screens: {
        xs: "480px",
        sm: "640px",
       'sd': { 'min': '520px', 'max': '868px' },
        md: "868px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        "footer-bg": "#1e676a",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'urbanist': ['Urbanist', "Arial", "sans-serif", "system-ui"],
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
