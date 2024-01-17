/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFFFFF",
          200: "#F1F5F9",
          300: "#7C8695",
        },
        secondary: {
          100: "#1E293B",
          200: "#0E172A",
        },
      },
    },
  },
  plugins: [],
};
