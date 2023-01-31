/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.jsx", "./app/*.jsx"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
