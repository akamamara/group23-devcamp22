import { Card, Divider, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import BottomSheetPrice from "../components/BottomSheetPrice/BottomSheetPrice";
import ListMaterial from "../components/ListMaterial/ListMaterial";
import CardTukang from "../components/ListPekerja/CardPekerja";
import themesDefault from "../features/themes";

export default function TestingPage() {
	const dummyList = Array(3)
		.fill()
		.map((_) => <ListMaterial />);
	return (
		<ThemeProvider theme={themesDefault}>
			<Stack spacing={3}>
				<CardTukang />
				<Card sx={{ p: 2 }}>
					<Stack
						divider={<Divider orientation="horizontal" flexItem />}
						spacing={2}
					>
						{dummyList}
					</Stack>
				</Card>
			</Stack>
			<BottomSheetPrice />
		</ThemeProvider>
	);
}
