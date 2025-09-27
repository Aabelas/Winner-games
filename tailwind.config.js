/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00f0ff",
        neonGold: "#FFD700",
        neonPurple: "#a020f0",
      },
      dropShadow: {
        glow: "0 0 10px #FFD700"
      }
    }
  },
  plugins: [],
}
