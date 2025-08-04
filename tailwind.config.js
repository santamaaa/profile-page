/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        "myblue": "#2222EF",
        "myblack": "#444444",
        "myblack2": "#606060",
        "myblack3": "#242424",
        "mygray": "#BFBFBF",
        "mywhite": "#EFEFEF",
        "mywhite2": "#FAFAFA"
      }
    }
  },
  plugins: []
}