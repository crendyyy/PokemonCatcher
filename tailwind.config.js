/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "0px 0px 0px 3px #F0F9FF",
        button: "0px 3px 0px #DCDCDC, 0px -2px 0px #ffffff",
      },
    },
  },
  plugins: [],
};
