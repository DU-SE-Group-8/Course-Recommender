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
    },
  },
  plugins: [require("daisyui")],
}