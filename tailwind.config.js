/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61", // Warm Coral for main accents
        secondary: "#333333", // Deep Charcoal for text
        accent: "#FFD700", // Vibrant Gold for highlights
        background: "#FAFAFA", // Light Grayish White for backgrounds
      },
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'], // Modern and elegant font for headings
        body: ['"Roboto"', 'sans-serif'], // Clean and readable font for body
      },
      fontSize: {
        sm: "0.875rem", // Small text size
        base: "1rem", // Standard base size
        lg: "1.125rem", // Slightly larger text
        xl: "1.25rem", // Large text
        '2xl': "1.5rem", // Very large text
      },
      spacing: {
        18: "4.5rem", // For extra flexibility in spacing
      },
      borderRadius: {
        xl: "1.25rem", // Smooth rounded edges for cards and buttons
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
