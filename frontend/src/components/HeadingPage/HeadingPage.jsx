import { ArrowBack } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";

export default function HeadingPage({ title }) {
	return (
		<Stack alignItems="flex-start" sx={{ mb: 4 }} spacing={2}>
			<IconButton>
				<ArrowBack sx={{ fontSize: "32px" }} />
			</IconButton>
			<Typography variant="h1">{title}</Typography>
		</Stack>
	);
}
