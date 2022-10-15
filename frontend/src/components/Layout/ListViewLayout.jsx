import { Container, ThemeProvider } from "@mui/material";
import React from "react";
import themesDefault from "../../features/themes";

export default function ListViewLayout({ children }) {
	return (
		<div className="py-2">
			<ThemeProvider theme={themesDefault}>
				<div className="bg-[url('../public/background/background_list.svg')] bg-no-repeat	bg-right-bottom h-screen w-full fixed z-[-1] bottom-0" />
				<Container maxWidth="sm" sx={{ minHeight: `calc( 100vh - 8px )` }}>
					{children}
				</Container>
			</ThemeProvider>
		</div>
	);
}
