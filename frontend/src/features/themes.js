// Add themes variable for MUI Component
// https://material.io/resources/color/#!/?view.left=1&view.right=1&primary.color=008bd1&secondary.color=AA7DCE&secondary.text.color=fafafa&primary.text.color=000000

import { createTheme } from "@mui/material";

const textColor = {
	primary: "#323232FF",
	secondary: "#32323299",
	disabled: "#32323260",
};

export const dummyColor = {
	primary: {
		main: "#787878",
		light: "#a7a7a7",
		dark: "#4c4c4c",
	},
	secondary: {
		main: "#d9d9d9",
		light: "#ffffff",
		dark: "#a8a8a8",
	},
};

export const paletteColor = {
	primary: {
		main: "#008bd1",
		light: "#5dbbff",
		dark: "#005e9f",
	},
	secondary: {
		main: "#aa7dce",
		light: "#ddadff",
		dark: "#79509d",
	},
};

const themesDefault = createTheme({
	palette: {
		...paletteColor,
		text: { ...textColor },
	},
	spacing: 8,
	shape: {
		borderRadius: 12,
	},
	typography: {
		opacity: 0.7,
		h1: {
			fontWeight: 400,
			fontSize: "1.6rem",
			lineHeight: 1.15,
		},
		h2: {
			fontWeight: 500,
			fontSize: "1.2rem",
			lineHeight: 1.15,
		},
	},
});

export default themesDefault;
