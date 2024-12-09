/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Added missing colors
        emerald: {
          DEFAULT: "#4caf50", // Success theme
          500: "#4caf50", // Match success
        },
        gray: {
          400: "#5a5a5a", // Secondary Text
        },
        black: "#1c1c1c", // Matches Primary
        white: "#fafafa", // Accent
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1c1c1c",
          secondary: "#5a5a5a",
          accent: "#fafafa",
          neutral: "#f2f2f2",
          "base-100": "#ffffff",
          "base-200": "#fafafa",
          info: "#5a9bd4",
          success: "#4caf50",
          warning: "#ffa726",
          error: "#f44336",
        },
      },
    ],
  },
};
