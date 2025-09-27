/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00f0ff",
        neonGold: "#FFD700",
        neonPurple: "#a020f0",
      },
      animation: {
        bounceSlow: 'bounce 2s infinite',
        glow: 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #FFD700' },
          '100%': { boxShadow: '0 0 20px #FFD700' },
        }
      }
    },
  },
  plugins: [],
}
