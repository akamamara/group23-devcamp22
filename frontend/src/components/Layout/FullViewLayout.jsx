import { Container, ThemeProvider } from "@mui/material";
import React from "react";
import themesDefault from "../../features/themes";

export default function FullViewLayout({ children }) {
	return (
		<div className="py-2">
			<div className="bg-[url('../public/background/background_full_up.svg')] bg-no-repeat bg-top bg-cover absolute h-full w-screen z-[-1] top-0 left-0" />
			<div className="bg-[url('../public/background/background_full_down.svg')] bg-no-repeat bg-left-bottom h-screen w-full fixed z-[-1] bottom-0" />
			<ThemeProvider theme={themesDefault}>
				<Container maxWidth="sm" sx={{ minHeight: `calc( 100vh - 8px )` }}>
					{children}
				</Container>
			</ThemeProvider>
		</div>
	);
}
