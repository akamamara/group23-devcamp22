import { Container, ThemeProvider } from "@mui/material";
import React from "react";
import themesDefault from "../../features/themes";

export default function ListViewLayout({ children }) {
	return (
		<div className="bg-[url('../public/background/background_list.svg')] bg-no-repeat	bg-right-bottom pt-2">
			<ThemeProvider theme={themesDefault}>
				<Container maxWidth="sm" sx={{ minHeight: `calc( 100vh - 8px )` }}>
					{children}
				</Container>
			</ThemeProvider>
		</div>
	);
}
