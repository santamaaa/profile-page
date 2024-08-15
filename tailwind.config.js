/** @type {import('tailwindcss').Config} */
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
      },
      boxShadow: {
        "myinsetshadow": "inset 0px 0px 8px 2px #A4A4A4",
        "myinsetshadow2": "inset 0px 0px 4px 0px #A4A4A4"
      },
      keyframes: {
        toleft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        toright: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        }
      },
      animation: {
        toleft: 'toleft 1s linear infinite',
        toright: 'toright 1s linear infinite'
      }
    },
  },
  plugins: []
}