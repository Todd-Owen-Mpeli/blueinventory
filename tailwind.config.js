/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		fontSize: {
			xs: ".75rem",
			sm: ".8rem",
			tiny: ".9rem",
			base: "1rem",
			medium: "1.15rem",
			lg: "1.25rem",
			xl: "1.5rem",
			"2xl": "1.75rem",
			"3xl": "1.85rem",
			"4xl": "2rem",
			"5xl": "2.25rem",
			"6xl": "2.5rem",
			"7xl": "3rem",
			"8xl": "4rem",
		},
		colors: {
			// Base colors Variables
			black: "#111",
			grey: "#686868",
			white: "#ffffff",
			pureBlack: "#000",
			darkGrey: "#8f8f8f",
			lightGrey: "#f7f7f7",

			// Main colors
			red: "#e70101",
			blue: "#2563eb",
			blueTwo: "#3978ff",
			darkBlue: "#09275e",
			lightBlue: "#3d77f3",
			babyBlue: "#5ac3ff",
			darkerBlue: "#0d172a",
			darkerBlueTwo: "#061229",
			goldPrime: "#e8b042",
			goldPrimeDark: "#d1a855",
			goldPrimeDarker: "#b68b36",

			// Dashboard Colours
			blueDash: "#0072f5",
			greyDash: "#9ba1a6",
			yellowDash: "#f6ad37",
			blueTwoDash: "#0072f5",
			pinkRedDash: "#f31260",
			blackBlueDash: "#16181a",
			brightPinkDash: "#f4256d",
			brightGreenDash: "#17c964",
			blackBlueDashTwo: "#131618",
		},
	},
	plugins: [],
};
