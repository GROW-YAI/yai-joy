/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDA4AF", // Warm Coral for main accents
        secondary: "#333333", // Deep Charcoal for text
        accent: "#FFD700", // Vibrant Gold for highlights
        background: "#FAFAFA", // Light Grayish White for backgrounds
        darkBg: "#1a1a2e", // Dark Blue background
        darkBgAccent: "#16213e", // Darker Blue accent
        darkestBg: "#0f3460", // Very Dark Blue accent
        roseAccent: "#FDA4AF", // Warm Coral for rose elements
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF6F61",
          secondary: "#333333",
          accent: "#FFD700",
          neutral: "#FAFAFA",
          "base-100": "#FFFFFF", // Default background
          "base-200": "#F5F5F5", // Slightly darker background
          info: "#62B1F6",
          success: "#28A745",
          warning: "#FFC107",
          error: "#DC3545",
        },
      },
    ],
  },
};
