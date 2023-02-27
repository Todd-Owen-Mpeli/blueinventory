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
			tiny: ".875rem",
			base: "1rem",
			medium: "1.15rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
		},
		colors: {
			// Base colors Variables
			black: "#111",
			blue: "#2563eb",
			grey: "#686868",
			white: "#ffffff",
			pureBlack: "#000",
			darkGrey: "#8f8f8f",
			lightGrey: "#f7f7f7",

			// Main colors
			orange: "#FF8300",
			pureBlack: "#000",
			pinkRed: "#ff002f",
			blueTwo: "#3978ff",
			darkBlue: "#0d172a",
			limeGreen: "#a2e603",
			lightBlue: "#3d77f3",
			darkOrange: "#ff9900",
			flatPinkRed: "#f95674",
			current: "currentColor",
			flatLightBlue: "#77b5f8",
			flatLimeGreen: "#cfe798",
			transparent: "transparent",
			yellow: "rgb(255, 201, 21)",
		},
	},
	plugins: [],
};
