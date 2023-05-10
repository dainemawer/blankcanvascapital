module.exports = {
	mode: 'jit',
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: () => ({
				architecture: "url('/bg-image-sm.jpg')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		'@tailwindcss/forms',
		'@tailwindcss/typography',
		'@tailwindcss/aspect-ratio',
		'@tailwindcss/line-clamp',
		'@tailwindcss/container-queries'
	],
}
