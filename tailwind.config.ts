import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#2463EB",
				primaryHover: "#1D4ED8",
			},
		},
	},
	plugins: [],
};
export default config;
