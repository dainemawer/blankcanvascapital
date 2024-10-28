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

			gridTemplateColumns: {
				section: '43px 1fr',
				'section-reverse': '1fr 43px',
				contactMedium: 'minmax(50px, 150px) minmax(min-content, 1240px)',
				contactLarge: 'minmax(min-content, 150px) minmax(min-content, 1240px)',
				team: 'repeat(3, minmax(0, 230px))',
				'team-overflow': 'repeat(3, 210px)',
			},

			fontSize: {
				eyebrow: 'var(--font-size-base)',
				heading: 'var(--font-size-xxl)',
				subheading: 'var(--font-size-md)',
				address: 'var(--font-size-sm)',
				sectionHeading: 'var(--font-size-lg)',
			},

			width: {
				'grid-after': 'calc(100% + 3rem)',
			},

			maxWidth: {
				'grid-after': 'calc(1206px + 3rem)'
			},

			backgroundImage: {
				'portfolio-section': "url('/portfolio-bg.jpg')",
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
				silver: '#777777',
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

