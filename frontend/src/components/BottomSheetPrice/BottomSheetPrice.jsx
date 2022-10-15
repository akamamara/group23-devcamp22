import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function BottomSheetPrice({ title, keyPrice, valuePrice }) {
	const listText = (arr, type = "") => {
		if (type === "cash") {
			return arr.map((item) => (
				<Typography>
					{item[0] === "-" ? `-Rp${item.slice(1)},00` : `Rp${item},00`}
				</Typography>
			));
		}
		return arr.map((item) => <Typography>{item}</Typography>);
	};

	const listKey = listText(keyPrice);
	const listValue = listText(valuePrice, "cash");

	return (
		<Box
			sx={{
				position: "fixed",
				overflowX: "clip",
				bottom: 0,
				left: 0,
				zIndex: 99,
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
						<Typography sx={{ fontWeight: 600 }}>Total {title}</Typography>
						<Stack direction="row" spacing={1}>
							<Stack alignItems="flex-end">{listKey}</Stack>
							<Stack>{listValue}</Stack>
						</Stack>
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
