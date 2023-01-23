module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'varela-round': ['"Varela Round"', 'sans-serif'],
        'IBM': ['IBM Plex Sans', 'sans-serif'],
      },
      keyframes: {
        fade: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        }
      },
      animation: {
        fade: 'fade 0.2s normal linear'
      },
    },
  },
  plugins: [require("daisyui")],
}