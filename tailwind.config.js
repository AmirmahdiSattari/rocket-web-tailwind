/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // screen:{
      //   'widescreen':{'raw' : '(min-aspect-ratio:3/2)'},
      //   'tallscreen':{'raw': '(min-aspect-ratio:1/2)'},
      // },
      keyframes :{
        'open-menu':{
          '0%':{transform : 'scale(0)'},
          '80%':{transform : 'scale(1.2)'},
          '100%':{transform : 'scale(1)'},
        },
      },
      animation:{
        'open-menu':'open-menu .5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

