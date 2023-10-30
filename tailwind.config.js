/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      width: {
        "full[1.3px]": "calc(100% + 1.3px)",
      },
    },
  },
  plugins: [],
};
