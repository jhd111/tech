/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1e2a78",
          dark: "#141c52",
          light: "#3450c4",
        },
      },
      keyframes: {
        waveMoveSlow: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        waveMoveFast: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeSlide: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "wave-slow": "waveMoveSlow 13s linear infinite",
        "wave-fast": "waveMoveFast 6.5s linear infinite",
        "fade-slide": "fadeSlide 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
