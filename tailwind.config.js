/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cor-gry": "#eeee",
        "cor-blk": "#000000",
        "cor-ylw": "#e6c235",
        "cor-blu": "#325cd9",
        "cor-wht": "#ffffff",
        "cor-prp": "#944dd7",
        "cor-brw": "#502121",
        "cor-pnk": "#e438bc",
        "cor-rss": "#651515",
        "cor-trq": "#1c8ddd",
        "cor-grn": "#2d4722",
        "cor-gar": "#760e0c",
        "cor-uru": "#910805",
      },
    },
  },
  plugins: [],
};
