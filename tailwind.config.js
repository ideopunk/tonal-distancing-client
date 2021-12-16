module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Murecho"],
			serif: ["Noto Serif"],
		},
		extend: {
			colors: {
				"drac-black": "#282a36",
				"drac-grey": "#44475a",
				"drac-white": "#f8f8f2",
				"drac-comment": "#6272a4",
				"drac-cyan": "#8be9fd",
				"drac-green": "#50fa7b",
				"drac-orange": "#ffb86c",
				"drac-pink": "#ff79c6",
				"drac-purple": "#bd93f9",
				"drac-red": "#ff5555",
				"drac-yellow": "#f1fa8c",

				"at-blue": "#00A7C5",
				"at-yellow": "#FFC620",
				"at-red": "#f24423",
				"at-pink": "#F5CBF3",
				"at-purple": "#d68ffc",
				"at-ice": "#A6DEF9",
			},
		},
	},
	plugins: [],
};
