/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Breakpoints
      screens: {
        'xs': '490px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1290px',
        'xl': '1440px',
      },

      // Colors
      colors: {
        black: '#000000',
        grey: '#424242',
        white: '#ffffff',
        gold: '#c5a880',
        copper: '#e1d4bb',
        tin: '#e6e6e6',
        aluminum: '#f7f7f7',
        dove: '#6f6f6f',
        mineShaft: '#2b2b2b',
        silverChalice: '#afafaf',
      },

      // Fonts
      fontFamily: {
        primary: ['Work Sans', 'sans-serif'],
        secondary: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

