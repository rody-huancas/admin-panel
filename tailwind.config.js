/** @type {import('tailwindcss').Config} */
export default {
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
          100: "#1E1F25",
          900: "#131517",
        },
      },
    },
  },
  plugins: [],
};
