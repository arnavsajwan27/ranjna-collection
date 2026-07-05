/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: '#F5EFE2',        // canvas — pale palace stone
        parchment: '#FBF7EC',    // raised surfaces
        sand: '#D9BE93',         // honey sandstone
        garnet: '#571C26',       // anchor — the maroon sari
        'garnet-deep': '#3B1119',
        'garnet-night': '#2E0F15',
        gold: '#B08D4F',         // antique gold — linework, borders
        'gold-bright': '#E3C08A',// foil highlight
        rani: '#A62654',         // festive accent — used sparingly
        cocoa: '#3A2A1B',        // satin brown — footer, deep text blocks
        ink: '#241A12',
        muted: '#7A6A55',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
        body: ['"Jost"', 'system-ui', 'sans-serif'],
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.22em',
      },
      borderRadius: {
        arch: '999px 999px 0 0',
      },
    },
  },
  plugins: [],
}
