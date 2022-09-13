/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sml: "378px",
			sm: "600px",
			sms: "980px",
			md: "728px",
			lg: "984px",
			xl: "1240px",
			"2xl": "1496px",
		},
		extend: {
			backgroundImage: {
				headers: "url('/src/assets/Images/header.png')",
				headers1: "url('/src/assets/Images/header2.png')",
			},
			fontFamily: {
				mono: ["Roboto Mono", "monospace"],
				'plusm':['PlusJakartaSansM', 'sans-serif'],
				'plusr':['PlusJakartaSansR', 'sans-serif'],
				'plusb':['PlusJakartaSansB', 'sans-serif'],
				'pluseb':['PlusJakartaSansEB', 'sans-serif'],
				'plusessb':['PlusJakartaSansSemi', 'sans-serif']
			},
		},
	},
	plugins: [],
};
