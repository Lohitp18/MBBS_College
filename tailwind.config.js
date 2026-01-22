/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "amc-navy": "var(--amc-navy)",
          "amc-cyan": "var(--amc-cyan)",
          "amc-grayStrip": "var(--amc-grayStrip)",
        },
      },
    },
    plugins: [],
  };
  