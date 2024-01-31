/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        offWhite: "#F3EFEF",
        "green-shade-01": "#75C3B4",
        "black-01": "#1C1C1C",
        "banner-red": "#FE5857",
        "middle-gray": "#9B9B9B",
        "green-shade-02": "#75C3B466",
        "green-blue-01": "#97FEF8",
      },
    },
  },
  plugins: [],
};
