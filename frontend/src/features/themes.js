// Add themes variable for MUI Component
// https://material.io/resources/color/#!/?view.left=1&view.right=1&primary.color=008bd1&secondary.color=AA7DCE&secondary.text.color=fafafa&primary.text.color=000000

import { createTheme } from "@mui/material";

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
		...dummyColor,
	},
	spacing: 8,
	shape: {
		borderRadius: 12,
	},
});

export default themesDefault;
