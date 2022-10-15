import { ArrowBack } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import useHandleRouting from "../../features/useHandleRouting";

export default function HeadingPage({ title }) {
	const routing = useHandleRouting();
	return (
		<Stack alignItems="flex-start" sx={{ mb: 4 }} spacing={2}>
			<IconButton onClick={routing.handleBack()}>
				<ArrowBack sx={{ fontSize: "32px" }} />
			</IconButton>
			<Typography variant="h1">{title}</Typography>
		</Stack>
	);
}
