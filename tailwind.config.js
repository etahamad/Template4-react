/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fadeColor: "#ccc",
        shades: "#777",
        hoverColor: "#eee",
        blueColor: "#0075ff",
        bluehover: "#005dc7",
        orangeColor: "#f59e0b",
        greenColor: "#22c55e",
        redColor: "#f44336",
      },
      gridTemplateRows: {
        page: "80px calc(100% - 80px)",
      },
      gridTemplateColumns: {
        page: "200px calc(100% - 200px)",
        dash: " repeat(auto-fill, minmax(460px, 1fr))",
        course: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      boxShadow: {
        aside: "1px 0 10px 0 #ccc",
      },
      width: {
        h2: "calc(100% + 20px)",
      },
      backgroundImage: {
        glopH1: "linear-gradient(to right, black 30%, white 30%)",
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting")(require("postcss-nesting")),
    require("autoprefixer"),
    require("tailwindcss"),
  ],
};
