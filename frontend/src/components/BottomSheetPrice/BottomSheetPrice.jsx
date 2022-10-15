import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function BottomSheetPrice() {
	const [leftPosition, setLeftPosition] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			const newPosition =
				window.innerWidth > 600 ? (window.innerWidth - 600) / 2 : 0;
			setLeftPosition(newPosition);
			console.log("updating position");
		};

		window.addEventListener("resize", updatePosition);

		return () => window.removeEventListener("resize", updatePosition);
	}, []);

	return (
		<Box
			sx={{
				position: "absolute",
				overflowX: "clip",
				bottom: 0,
				left: 0,
				width: "100%",
			}}
		>
			<Paper
				square={true}
				elevation={6}
				sx={{ py: 2.5, height: "fit-content" }}
			>
				<Stack spacing={2} sx={{ maxWidth: "600px", mx: "auto" }}>
					<Stack direction="row" sx={{ px: 2 }} justifyContent="space-between">
						<Typography sx={{ fontWeight: 600 }}>Total Biaya Bahan</Typography>
						<Typography sx={{ opacity: 0.7 }}>Rp6.000.000,00</Typography>
					</Stack>
					<Divider flexItem variant="fullWidth" />
					<Stack
						direction="row"
						justifyContent="flex-end"
						spacing={1}
						sx={{ px: 2 }}
					>
						<Button variant="contained" sx={{ minWidth: `calc( 50% - 4px )` }}>
							Simpan
						</Button>
					</Stack>
				</Stack>
			</Paper>
		</Box>
	);
}
