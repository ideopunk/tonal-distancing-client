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

				"dune-white": "#faf8f4",
				"dune-blue": "#8cb8c0",
				"dune-black": "#383838",
				"dune-green": "#455445",
				"dune-yellow": "#f0e66d",
				"dune-red": "#7a4646",
				"dune-grey": "#6f717a",
			},
		},
	},
	plugins: [],
};
